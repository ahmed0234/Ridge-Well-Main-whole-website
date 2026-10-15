import config from '../../site.config.json';
export const site = config;
export function siteUrl(path = '/') {
  return new URL(path, site.siteOrigin).href;
}
export function track(event: string, details: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  (window.dataLayer ??= []).push({ event, page_path: window.location.pathname, ...details });
}
