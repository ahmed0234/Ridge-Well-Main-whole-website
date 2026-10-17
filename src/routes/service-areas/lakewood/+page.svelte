<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import CityServiceArea from '#lib/components/CityServiceArea.svelte';
  import metadata from './metadata.json';
  import { cityData } from '#lib/data/cityData.ts';

  const city = cityData['lakewood'];
</script>

<Seo {metadata} />
<CityServiceArea {city} />
