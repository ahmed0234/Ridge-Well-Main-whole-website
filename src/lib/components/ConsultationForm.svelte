<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { site, track } from '#lib/site.ts';
  let { id = 'project', selectedService = 'Full backyard transformation' }: { id?: string; selectedService?: string } = $props();
  const services = ['Full backyard transformation', 'Paver patios & walkways', 'Retaining walls', 'Outdoor kitchens', 'Fire pits & fireplaces', 'Pergolas & shade', 'Landscape design & installation', 'Xeriscaping', 'Not sure yet'];
  const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'];
  let mounted = $state(false);
  onMount(() => { mounted = true; });
  // Prerendered HTML uses the configured origin; hydrated previews return to their own host.
  const returnUrl = $derived(new URL('/thank-you/', mounted ? page.url.origin : site.deploymentOrigin).href);
  const attribution = $derived(mounted ? attributionKeys.flatMap(key => {
    const value = page.url.searchParams.get(key);
    return value ? [{ key, value: value.slice(0, 500) }] : [];
  }) : []);
</script>

<div class="consult-card" id="consultation">
  <div class="form-heading" id="contact-form">
    <span class="kicker">YOUR FREE CONSULTATION</span>
    <h2>Let’s fix what isn’t working.</h2>
    <p>Tell us where to reach you and what you’d like to change.</p>
  </div>
  <form {id} class="lead-form" action={site.formAction} method="POST" onsubmit={() => track('consultation_submit_attempt')}>
    <input type="hidden" name="_subject" value="Ridgewell outdoor project consultation" />
    <input type="hidden" name="_next" value={returnUrl} />
    <input type="hidden" name="page_path" value={page.url.pathname} />
    <input type="text" name="_honey" class="honey" tabindex="-1" aria-hidden="true" aria-label="Leave this field empty" autocomplete="off" />
    {#each attribution as item (item.key)}<input type="hidden" name={item.key} value={item.value} />{/each}
    <div class="field-row">
      <div><label for={`${id}-name`}>Your name *</label><input id={`${id}-name`} name="name" autocomplete="name" required placeholder="Full name" maxlength="100" /></div>
      <div><label for={`${id}-phone`}>Phone number *</label><input id={`${id}-phone`} name="phone" type="tel" autocomplete="tel" required placeholder="(720) 555-0123" minlength="10" maxlength="25" /></div>
    </div>
    <label for={`${id}-email`}>Email address (optional)</label>
    <input id={`${id}-email`} name="email" type="email" autocomplete="email" placeholder="you@example.com" />
    <div class="field-row">
      <div><label for={`${id}-city`}>Project city *</label><input id={`${id}-city`} name="city" autocomplete="address-level2" required placeholder="e.g. Denver" /></div>
      <div><label for={`${id}-service`}>What do you have in mind?</label><select id={`${id}-service`} name="service">{#each services as service}<option selected={service === selectedService}>{service}</option>{/each}</select></div>
    </div>
    <label for={`${id}-message`}>What would you like to change? (optional)</label>
    <textarea id={`${id}-message`} name="message" rows="2" placeholder="Tell us what isn’t working or what you have in mind." maxlength="3000"></textarea>
    <button class="btn" type="submit">Get my free consultation <span aria-hidden="true">↗</span></button>
    <p class="form-privacy">By submitting, you ask Ridgewell to contact you about your project. <a href="/privacy-policy/">Privacy policy</a>.</p>
  </form>
  <div class="form-bottom">Prefer to talk? <a href={site.phoneHref}>{site.phone}</a></div>
</div>
