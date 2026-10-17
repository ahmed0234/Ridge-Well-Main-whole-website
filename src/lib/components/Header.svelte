<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  let menuOpen = $state(false);
  let headerElement: HTMLElement;

  function closeMenus() {
    menuOpen = false;
    if (headerElement) {
      const isDesktop = window.matchMedia('(min-width: 981px)').matches;
      headerElement.querySelectorAll<HTMLDetailsElement>('.nav-drop').forEach(drop => {
        drop.classList.remove('is-open');
        drop.querySelector('summary')?.setAttribute('aria-expanded', 'false');
        if (!isDesktop) {
          drop.open = false;
        }
      });
    }
  }

  afterNavigate(closeMenus);

  onMount(() => {
    document.documentElement.classList.add('js');
    const dropdowns = [...headerElement.querySelectorAll<HTMLDetailsElement>('.nav-drop')];
    const mql = window.matchMedia('(min-width: 981px)');
    let closeTimer: ReturnType<typeof setTimeout> | null = null;

    const openDropdown = (targetDrop: HTMLDetailsElement) => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      targetDrop.open = true;
      dropdowns.forEach(other => {
        if (other !== targetDrop) {
          other.classList.remove('is-open');
          other.querySelector('summary')?.setAttribute('aria-expanded', 'false');
        }
      });
      targetDrop.classList.add('is-open');
      targetDrop.querySelector('summary')?.setAttribute('aria-expanded', 'true');
    };

    const closeAllDropdowns = (immediate = false) => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      if (immediate) {
        dropdowns.forEach(drop => {
          drop.classList.remove('is-open');
          drop.querySelector('summary')?.setAttribute('aria-expanded', 'false');
          if (!mql.matches) drop.open = false;
        });
      } else {
        closeTimer = setTimeout(() => {
          dropdowns.forEach(drop => {
            drop.classList.remove('is-open');
            drop.querySelector('summary')?.setAttribute('aria-expanded', 'false');
            if (!mql.matches) drop.open = false;
          });
          closeTimer = null;
        }, 150);
      }
    };

    const syncState = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      if (mql.matches) {
        dropdowns.forEach(drop => {
          drop.open = true;
          drop.classList.remove('is-open');
          drop.querySelector('summary')?.setAttribute('aria-expanded', 'false');
        });
      } else {
        dropdowns.forEach(drop => {
          drop.open = false;
          drop.classList.remove('is-open');
          drop.querySelector('summary')?.setAttribute('aria-expanded', 'false');
        });
      }
    };

    syncState();
    mql.addEventListener('change', syncState);

    const cleanups: (() => void)[] = [];

    dropdowns.forEach(drop => {
      const summary = drop.querySelector('summary');

      const onPointerEnter = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        if (mql.matches) {
          openDropdown(drop);
        }
      };

      const onPointerLeave = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        if (mql.matches) {
          closeAllDropdowns(false);
        }
      };

      const onFocusIn = () => {
        if (mql.matches) {
          openDropdown(drop);
        }
      };

      const onFocusOut = (e: FocusEvent) => {
        if (!mql.matches) return;
        if (!drop.contains(e.relatedTarget as Node | null)) {
          drop.classList.remove('is-open');
          summary?.setAttribute('aria-expanded', 'false');
        }
      };

      const onSummaryClick = (e: MouseEvent) => {
        if (mql.matches) {
          e.preventDefault();
          if (e.detail === 0) {
            if (drop.classList.contains('is-open')) {
              closeAllDropdowns(true);
            } else {
              openDropdown(drop);
            }
          } else {
            openDropdown(drop);
          }
        }
      };

      const onToggle = () => {
        if (!mql.matches && drop.open) {
          dropdowns.forEach(other => {
            if (other !== drop) other.open = false;
          });
        }
      };

      drop.addEventListener('pointerenter', onPointerEnter);
      drop.addEventListener('pointerleave', onPointerLeave);
      drop.addEventListener('focusin', onFocusIn);
      drop.addEventListener('focusout', onFocusOut);
      summary?.addEventListener('click', onSummaryClick);
      drop.addEventListener('toggle', onToggle);

      cleanups.push(() => {
        drop.removeEventListener('pointerenter', onPointerEnter);
        drop.removeEventListener('pointerleave', onPointerLeave);
        drop.removeEventListener('focusin', onFocusIn);
        drop.removeEventListener('focusout', onFocusOut);
        summary?.removeEventListener('click', onSummaryClick);
        drop.removeEventListener('toggle', onToggle);
      });
    });

    const siblingLinks = headerElement.querySelectorAll<HTMLAnchorElement>('nav#main-nav > a');
    siblingLinks.forEach(link => {
      const onSiblingEnter = () => {
        if (mql.matches) {
          closeAllDropdowns(true);
        }
      };
      link.addEventListener('pointerenter', onSiblingEnter);
      cleanups.push(() => link.removeEventListener('pointerenter', onSiblingEnter));
    });

    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!headerElement.contains(event.target) || event.target.closest('nav a')) {
        closeMenus();
      }
    };

    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const isAnyOpen = menuOpen || dropdowns.some(d => d.classList.contains('is-open') || d.open);
        if (isAnyOpen) {
          const opened = dropdowns.find(d => d.classList.contains('is-open') || d.open);
          if (menuOpen) {
            headerElement.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
          } else {
            opened?.querySelector('summary')?.focus();
          }
          closeMenus();
        }
      }
    };

    document.addEventListener('click', click);
    document.addEventListener('keydown', keydown);

    return () => {
      if (closeTimer) clearTimeout(closeTimer);
      mql.removeEventListener('change', syncState);
      cleanups.forEach(remove => remove());
      document.removeEventListener('click', click);
      document.removeEventListener('keydown', keydown);
      document.documentElement.classList.remove('js');
    };
  });
</script>

<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap"><span>★★★★★ HOMEOWNER TESTIMONIALS · COLORADO ROOTS SINCE 2011</span><a href="mailto:info@ridgewellcolorado.com">info@ridgewellcolorado.com</a><a href="tel:+17208825772">720-882-5772</a></div></div>
<header class="site-header" bind:this={headerElement}><div class="wrap nav"><a aria-label="Ridgewell home" class="brand" href="/"><img alt="Ridgewell Landscape and Design" height="66" src="/assets/optimized/logo.webp" width="228"/></a><button aria-controls="main-nav" aria-expanded={menuOpen} onclick={() => menuOpen = !menuOpen} class="menu-toggle">Menu <span aria-hidden="true">☰</span></button><nav aria-label="Main navigation" id="main-nav" class:is-open={menuOpen}><details class="nav-drop"><summary>Our services <span>⌄</span></summary><div class="mega services-mega"><div class="mega-title"><b>Find the right project for your yard.</b><a href="/services/">Explore all services →</a></div><div class="mega-services"><a href="/services/paver-patios/"><strong>Paver patios &amp; walkways</strong><small>Replace an awkward or uneven patio with a space made for gathering.</small></a><a href="/services/retaining-walls/"><strong>Retaining walls</strong><small>Give a sloped yard structure, with drainage planned from the start.</small></a><a href="/services/outdoor-kitchens/"><strong>Outdoor kitchens</strong><small>Keep the cooking, conversation and company in one place.</small></a><a href="/services/fire-pits-fireplaces/"><strong>Fire pits &amp; fireplaces</strong><small>Make the patio a place to gather when the evening cools down.</small></a><a href="/services/pergolas/"><strong>Pergolas &amp; shade</strong><small>Give an exposed patio a defined place to sit, eat and unwind.</small></a><a href="/services/landscape-design/"><strong>Landscape design &amp; installation</strong><small>Bring the planting, paths and outdoor living spaces into one plan.</small></a><a href="/services/xeriscape-landscaping/"><strong>Xeriscaping</strong><small>Trade more lawn upkeep for a thoughtful, lower-water landscape.</small></a></div><div class="mega-call"><span>Have an idea? We’ll help you figure out the next step.</span><a class="btn" href="/contact/">Get a free consultation<span aria-hidden="true">↗</span></a></div></div></details><details class="nav-drop"><summary>Service areas <span>⌄</span></summary><div class="mega areas-mega"><div class="mega-title"><div><b>Built for the Denver metro.</b><span class="mega-subtitle">Serving homeowners across the Front Range</span></div><a href="/service-areas/">All service areas →</a></div><div class="city-grid"><a class="city-card" href="/service-areas/denver/"><span class="city-name">Denver</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/arvada/"><span class="city-name">Arvada</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/aurora/"><span class="city-name">Aurora</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/lakewood/"><span class="city-name">Lakewood</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/centennial/"><span class="city-name">Centennial</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/littleton/"><span class="city-name">Littleton</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/broomfield/"><span class="city-name">Broomfield</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/brighton/"><span class="city-name">Brighton</span><span class="city-arrow" aria-hidden="true">→</span></a><a class="city-card" href="/service-areas/parker/"><span class="city-name">Parker</span><span class="city-arrow" aria-hidden="true">→</span></a></div><div class="mega-call"><span>Also serving surrounding Front Range communities. Call to confirm your address.</span><a class="btn" href="/contact/">Confirm your address<span aria-hidden="true">↗</span></a></div></div></details><a href="/projects/">Our work</a><a href="/about/">About us</a><a href="/blog/">Ideas &amp; advice</a></nav><a class="header-phone" href="tel:+17208825772"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path></svg><span>720-882-5772</span></a><a class="btn header-cta" href="/contact/">Free consultation<span aria-hidden="true">↗</span></a></div></header>
