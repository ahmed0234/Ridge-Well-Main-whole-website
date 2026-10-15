<script lang="ts">
  import { site, siteUrl } from '#lib/site.ts';
  interface Metadata {
    path: string; title: string; description: string; ogType: string;
    image: string; schema: unknown; allowIndex: boolean;
  }
  let { metadata }: { metadata: Metadata } = $props();
  const canonical = $derived(siteUrl(metadata.path));
  const schema = $derived(JSON.stringify(metadata.schema)
    .replaceAll('https://ridgewellcolorado.com', site.siteOrigin.replace(/\/$/, ''))
    .replaceAll('<', '\\u003c'));
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="robots" content={site.indexable && metadata.allowIndex ? 'index,follow,max-image-preview:large' : 'noindex,follow'} />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:type" content={metadata.ogType} />
  <meta property="og:image" content={siteUrl(metadata.image)} />
  <meta name="twitter:card" content="summary_large_image" />
  {@html '<script type="application/ld+json">' + schema + '</' + 'script>'}
</svelte:head>
