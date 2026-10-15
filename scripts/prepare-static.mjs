import { readFile, writeFile, mkdir } from 'node:fs/promises';

const config = JSON.parse(await readFile('site.config.json', 'utf8'));
const routes = JSON.parse(await readFile('route-manifest.json', 'utf8'));
const origin = new URL(config.siteOrigin).origin;
const deploymentOrigin = new URL(config.deploymentOrigin).origin;
if (config.indexable && origin !== deploymentOrigin) {
  throw new Error('An indexable build must use the production siteOrigin as deploymentOrigin.');
}
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const header = '<?xml version="1.0" encoding="UTF-8"?>\n';
const indexable = routes.filter(route => route.path !== '/thank-you/');
const sitemap = entries => header + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + entries.map(route => `  <url><loc>${escape(origin + route.path)}</loc></url>`).join('\n') + '\n</urlset>\n';
await mkdir('static', { recursive: true });
const maps = {
  'sitemap.xml': indexable,
  'page-sitemap.xml': indexable.filter(route => ['page', 'service'].includes(route.type)),
  'post-sitemap.xml': indexable.filter(route => route.type === 'post'),
  'category-sitemap.xml': indexable.filter(route => route.path.includes('/category/')),
  'local-sitemap.xml': indexable.filter(route => route.path === '/')
};
for (const [file, entries] of Object.entries(maps)) await writeFile(`static/${file}`, sitemap(entries));
await writeFile('static/sitemap_index.xml', header + '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ['page', 'post', 'category', 'local'].map(name => `  <sitemap><loc>${escape(origin)}/${name}-sitemap.xml</loc></sitemap>`).join('\n') + '\n</sitemapindex>\n');
await writeFile('static/robots.txt', 'User-agent: *\n' + (config.indexable ? `Allow: /\nDisallow: /thank-you/\nSitemap: ${origin}/sitemap.xml\n` : 'Disallow: /\n'));
// A real static 404 document; configure the host to return HTTP 404 for it.
await writeFile('static/404.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | Ridgewell Colorado</title><meta name="robots" content="noindex"><style>body{margin:0;background:#f5f1e9;color:#432530;font:18px/1.7 Arial,sans-serif}main{max-width:720px;margin:15vh auto;padding:24px}h1{font-size:clamp(36px,7vw,64px);line-height:1.1}a{color:inherit}a.button{display:inline-block;background:#ac4a34;color:white;padding:14px 24px;text-decoration:none;border-radius:3px}</style></head><body><main><p>RIDGEWELL COLORADO</p><h1>That page isn’t here.</h1><p>Find your way back to our services or get in touch with Ridgewell.</p><p><a class="button" href="/">Back to Ridgewell →</a></p><p><a href="${escape(config.phoneHref)}">${escape(config.phone)}</a></p></main></body></html>`);
console.log(`Prepared ${indexable.length} sitemap entries. Indexing: ${config.indexable ? 'enabled on production domain' : 'disabled for review'}.`);
