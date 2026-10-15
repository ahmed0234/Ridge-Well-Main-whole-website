<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  let menuOpen = $state(false);
  let headerElement: HTMLElement;
  function closeMenus() {
    menuOpen = false;
    headerElement?.querySelectorAll<HTMLDetailsElement>('.nav-drop').forEach(drop => drop.open = false);
  }
  afterNavigate(closeMenus);
  onMount(() => {
    document.documentElement.classList.add('js');
    const dropdowns = [...headerElement.querySelectorAll<HTMLDetailsElement>('.nav-drop')];
    const toggles = dropdowns.map(drop => {
      const handler = () => { if (drop.open) dropdowns.forEach(other => { if (other !== drop) other.open = false; }); };
      drop.addEventListener('toggle', handler);
      return () => drop.removeEventListener('toggle', handler);
    });
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!headerElement.contains(event.target) || event.target.closest('nav a')) closeMenus();
    };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (menuOpen || dropdowns.some(drop => drop.open))) {
        const opened = dropdowns.find(drop => drop.open);
        if (menuOpen) headerElement.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
        else opened?.querySelector('summary')?.focus();
        closeMenus();
      }
    };
    document.addEventListener('click', click);
    document.addEventListener('keydown', keydown);
    return () => {
      toggles.forEach(remove => remove());
      document.removeEventListener('click', click);
      document.removeEventListener('keydown', keydown);
      document.documentElement.classList.remove('js');
    };
  });
</script>

<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap"><span>★★★★★ HOMEOWNER TESTIMONIALS · COLORADO ROOTS SINCE 2011</span><a href="mailto:info@ridgewellcolorado.com">info@ridgewellcolorado.com</a><a href="tel:+17208825772">720-882-5772</a></div></div>
<header class="site-header" bind:this={headerElement}><div class="wrap nav"><a aria-label="Ridgewell home" class="brand" href="/"><img alt="Ridgewell Landscape and Design" height="66" src="/assets/optimized/logo.webp" width="228"/></a><button aria-controls="main-nav" aria-expanded={menuOpen} onclick={() => menuOpen = !menuOpen} class="menu-toggle">Menu <span aria-hidden="true">☰</span></button><nav aria-label="Main navigation" id="main-nav" class:is-open={menuOpen}><details class="nav-drop"><summary>Our services <span>⌄</span></summary><div class="mega services-mega"><div class="mega-title"><b>Find the right project for your yard.</b><a href="/services/">Explore all services →</a></div><div class="mega-services"><a href="/services/paver-patios/"><strong>Paver patios &amp; walkways</strong><small>Replace an awkward or uneven patio with a space made for gathering.</small></a><a href="/services/retaining-walls/"><strong>Retaining walls</strong><small>Give a sloped yard structure, with drainage planned from the start.</small></a><a href="/services/outdoor-kitchens/"><strong>Outdoor kitchens</strong><small>Keep the cooking, conversation and company in one place.</small></a><a href="/services/fire-pits-fireplaces/"><strong>Fire pits &amp; fireplaces</strong><small>Make the patio a place to gather when the evening cools down.</small></a><a href="/services/pergolas/"><strong>Pergolas &amp; shade</strong><small>Give an exposed patio a defined place to sit, eat and unwind.</small></a><a href="/services/landscape-design/"><strong>Landscape design &amp; installation</strong><small>Bring the planting, paths and outdoor living spaces into one plan.</small></a><a href="/services/xeriscape-landscaping/"><strong>Xeriscaping</strong><small>Trade more lawn upkeep for a thoughtful, lower-water landscape.</small></a></div><div class="mega-call"><span>Have an idea? We’ll help you figure out the next step.</span><a class="btn" href="/contact/">Get a free consultation<span aria-hidden="true">↗</span></a></div></div></details><details class="nav-drop"><summary>Service areas <span>⌄</span></summary><div class="mega areas-mega"><div class="mega-title"><b>Built for the Denver metro.</b><a href="/service-areas/">All service areas →</a></div><div class="mega-cities"><div><b>Denver</b><a href="/services/paver-patios/">Patios &amp; walkways</a><a href="/services/landscape-design/">Landscape design</a><a href="/services/outdoor-kitchens/">Outdoor kitchens</a><a href="/services/retaining-walls/">Retaining walls</a><a href="/services/fire-pits-fireplaces/">Fire pits &amp; fireplaces</a><a href="/services/pergolas/">Pergolas</a><a href="/services/xeriscape-landscaping/">Xeriscaping</a></div><div><a href="/service-areas/arvada/"><b>Arvada</b></a><a href="/service-areas/arvada/paver-patios/">Patios &amp; walkways</a><a href="/service-areas/arvada/landscape-design/">Landscape design</a><a href="/service-areas/arvada/outdoor-kitchens/">Outdoor kitchens</a><a href="/service-areas/arvada/xeriscape-landscaping/">Xeriscaping</a></div><div><a href="/service-areas/aurora/"><b>Aurora</b></a><a href="/service-areas/aurora/paver-patios/">Patios &amp; walkways</a><a href="/service-areas/aurora/landscape-design/">Landscape design</a><a href="/service-areas/aurora/xeriscape-landscaping/">Xeriscaping</a></div><div><a href="/service-areas/brighton/"><b>Brighton</b></a><a href="/service-areas/brighton/paver-patios/">Patios &amp; walkways</a><a href="/service-areas/brighton/landscape-design/">Landscape design</a></div><div><a href="/service-areas/lakewood/"><b>Lakewood</b></a><a href="/service-areas/lakewood/paver-patios/">Patios &amp; walkways</a><a href="/service-areas/lakewood/landscape-design/">Landscape design</a><a href="/service-areas/lakewood/outdoor-kitchens/">Outdoor kitchens</a><a href="/service-areas/lakewood/xeriscape-landscaping/">Xeriscaping</a></div><div><a href="/service-areas/centennial/"><b>Centennial</b></a><a href="/service-areas/centennial/xeriscape-landscaping/">Xeriscaping</a></div><div><a href="/service-areas/littleton/"><b>Littleton</b></a><a href="/service-areas/littleton/xeriscape-landscaping/">Xeriscaping</a></div><div><a href="/service-areas/broomfield/"><b>Broomfield</b></a><a href="/service-areas/broomfield/xeriscape-landscaping/">Xeriscaping</a></div></div><p>Also serving Centennial, Broomfield, Parker and surrounding communities. Call to confirm your address.</p></div></details><a href="/projects/">Our work</a><a href="/about/">About us</a><a href="/blog/">Ideas &amp; advice</a></nav><a class="header-phone" href="tel:+17208825772"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path></svg><span>720-882-5772</span></a><a class="btn header-cta" href="/contact/">Free consultation<span aria-hidden="true">↗</span></a></div></header>
