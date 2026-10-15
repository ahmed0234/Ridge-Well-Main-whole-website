<script lang="ts">
  import { page } from '$app/state';
</script>
<svelte:head><title>{page.status} | Ridgewell Colorado</title><meta name="robots" content="noindex" /></svelte:head>
<section class="section"><div class="wrap prose-wide">
  <span class="kicker">RIDGEWELL COLORADO</span>
  <h1>{page.status === 404 ? 'That page isn’t here.' : 'Something went wrong.'}</h1>
  <p>Find your way back to our services or get in touch with Ridgewell.</p>
  <div class="actions"><a class="btn" href="/">Back to Ridgewell →</a><a href="/contact/">Contact us</a></div>
</div></section>
