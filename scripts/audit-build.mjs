import { readFile, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const config = JSON.parse(await readFile('site.config.json', 'utf8'));
const routes = JSON.parse(await readFile('route-manifest.json', 'utf8'));
const origin = new URL(config.siteOrigin).origin;
const root = resolve('build');
const errors = [];
const check = (value, message) => { if (!value) errors.push(message); };
const decode = text => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)].slice(1).map(match => [match[1].toLowerCase(), decode(match[2] ?? match[3] ?? match[4] ?? '')]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(match => attrs(match[0]));
const pages = new Map();
for (const route of routes) {
  try { pages.set(route.path, await readFile(join(root, route.path, 'index.html'), 'utf8')); }
  catch { errors.push(`Missing prerendered page: ${route.path}`); }
}
const cache = new Map();
async function exists(path) {
  if (!cache.has(path)) cache.set(path, stat(path).then(value => value.isFile()).catch(() => false));
  return cache.get(path);
}
let assetReferences = 0;
let localLinks = 0;
let formCount = 0;
for (const route of routes) {
  const html = pages.get(route.path);
  if (!html) continue;
  const prefix = route.path + ': ';
  check((html.match(/<h1\b/gi) ?? []).length === 1, prefix + 'expected one H1');
  check(/<title>[^<]+<\/title>/.test(html), prefix + 'missing title');
  const meta = tags(html, 'meta');
  check(meta.some(tag => tag.name === 'description' && tag.content?.length), prefix + 'missing description');
  const canonical = tags(html, 'link').filter(tag => tag.rel === 'canonical');
  check(canonical.length === 1 && canonical[0].href === origin + route.path, prefix + 'incorrect canonical');
  const robot = meta.find(tag => tag.name === 'robots')?.content ?? '';
  check(config.indexable && route.path !== '/thank-you/' ? robot.startsWith('index,') : robot.includes('noindex'), prefix + 'incorrect robots meta');
  const ids = tags(html, '[a-z][a-z0-9-]*').filter(tag => tag.id).map(tag => tag.id);
  check(ids.length === new Set(ids).size, prefix + 'duplicate IDs');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  check(schemas.length > 0, prefix + 'missing JSON-LD');
  for (const schema of schemas) {
    try { JSON.parse(schema[1]); } catch { errors.push(prefix + 'invalid JSON-LD'); }
  }
  for (const tag of [...tags(html, 'img'), ...tags(html, 'script'), ...tags(html, 'link')]) {
    const asset = tag.src ?? (tag.rel === 'stylesheet' || tag.rel === 'icon' || tag.rel === 'modulepreload' ? tag.href : undefined);
    if (!asset || /^(https?:|data:)/.test(asset)) continue;
    const url = new URL(asset, origin + route.path);
    assetReferences++;
    check(await exists(join(root, decodeURIComponent(url.pathname))), prefix + 'missing asset ' + asset);
    if (tag.srcset) for (const source of tag.srcset.split(',')) {
      const candidate = source.trim().split(/\s+/)[0];
      if (candidate?.startsWith('/')) check(await exists(join(root, candidate)), prefix + 'missing srcset image ' + candidate);
    }
  }
  for (const link of tags(html, 'a')) {
    if (!link.href || /^(mailto:|tel:|data:|javascript:)/.test(link.href)) continue;
    const url = new URL(link.href, origin + route.path);
    if (url.origin !== origin) continue;
    localLinks++;
    const path = url.pathname.endsWith('/') ? url.pathname : url.pathname + '/';
    const target = pages.get(path);
    if (!target) { check(await exists(join(root, url.pathname)), prefix + 'broken internal link ' + link.href); continue; }
    if (url.hash && url.hash !== '#') {
      const targetId = decodeURIComponent(url.hash.slice(1));
      check(tags(target, '[a-z][a-z0-9-]*').some(tag => tag.id === targetId), prefix + 'missing fragment ' + link.href);
    }
  }
  const forms = tags(html, 'form');
  formCount += forms.length;
  for (const form of forms) check(form.action === config.formAction && form.method?.toUpperCase() === 'POST', prefix + 'incorrect form configuration');
  if (route.type === 'service') {
    check(forms.length === 1, prefix + 'missing service form');
    check(/<option\b[^>]*\bselected(?:[\s=>])/.test(html), prefix + 'missing selected service');
    check(html.includes('class="mobile-sticky"') || html.includes('class=mobile-sticky'), prefix + 'missing mobile call bar');
  }
  if (forms.length) {
    const inputs = tags(html, 'input');
    check(inputs.some(tag => tag.name === '_next' && tag.value === new URL('/thank-you/', config.deploymentOrigin).href), prefix + 'incorrect form return URL');
    check(inputs.some(tag => tag.name === 'page_path' && tag.value === route.path), prefix + 'incorrect form page path');
  }
}
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
check(sitemapUrls.length === routes.length - 1, 'Sitemap entry count does not match expected routes');
for (const route of routes) check(sitemapUrls.includes(origin + route.path) === (route.path !== '/thank-you/'), 'Incorrect sitemap inclusion: ' + route.path);
const robots = await readFile(join(root, 'robots.txt'), 'utf8');
check(config.indexable ? robots.includes('Allow: /') && robots.includes(origin + '/sitemap.xml') : robots.includes('Disallow: /\n'), 'Incorrect robots.txt');
const redirects = (await readFile(join(root, '_redirects'), 'utf8')).trim().split('\n');
for (const line of redirects) {
  const [from, to, code] = line.split(/\s+/);
  check(code === '301' && pages.has(to), `Invalid redirect: ${from}`);
}
const mapped = (await readFile('URL-MAPPING.csv', 'utf8')).trim().split('\n').slice(1);
for (const row of mapped) {
  const [, next] = row.split(',');
  if (next?.startsWith('http')) check(pages.has(new URL(next).pathname), 'Missing mapped URL: ' + next);
}
check(await exists(join(root, '404.html')), 'Missing static 404 document');
const result = {
  passed: errors.length === 0,
  pages: pages.size,
  services: routes.filter(route => route.type === 'service').length,
  editorialPosts: routes.filter(route => route.type === 'post').length,
  originalRoutes: mapped.filter(row => row.includes('Preserve exact URL')).length,
  originalCategoryRoutes: mapped.filter(row => row.includes('Preserve category URL')).length,
  sitemapEntries: sitemapUrls.length,
  assetReferences,
  localLinks,
  forms: formCount,
  redirectAliases: redirects.length,
  indexable: config.indexable,
  errors
};
await writeFile('build-audit.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
