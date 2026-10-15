<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import Header from '#lib/components/Header.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import { track } from '#lib/site.ts';
  import '#lib/styles/site.css';
  let { children }: { children: Snippet } = $props();

  onMount(() => {
    const phoneClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest('a[href^="tel:"]');
      if (!link) return;
      track('phone_click', { placement: link.closest('.mobile-sticky') ? 'mobile_sticky' : link.closest('header') ? 'header' : 'page' });
    };
    document.addEventListener('click', phoneClick);
    return () => document.removeEventListener('click', phoneClick);
  });
</script>

<Header />
<main id="main" tabindex="-1">{@render children()}</main>
<Footer />
