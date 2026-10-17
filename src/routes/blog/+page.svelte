<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import metadata from './metadata.json';

  interface BlogArticle {
    href: string;
    imgAlt: string;
    imgSrc: string;
    kicker: string;
    title: string;
    description: string;
  }

  const categories = [
    { key: 'all', label: 'All guides' },
    { key: 'blogs', label: 'Blogs' },
    { key: 'hardscape', label: 'Hardscape' },
    { key: 'landscape', label: 'Landscape' },
    { key: 'patio', label: 'Patio' },
    { key: 'service', label: 'Service' },
    { key: 'uncategorized', label: 'Uncategorized' }
  ];

  let selectedCategory = $state('all');

  const articlesByCategory: Record<string, BlogArticle[]> = {
    blogs: [
      {
        href: "/blog/how-do-you-make-a-driveway-with-pavers/",
        imgAlt: "How Do You Make a Driveway With Pavers?",
        imgSrc: "/wp-content/uploads/2026/10/How-Do-You-Make-a-Driveway-With-Pavers.webp",
        kicker: "2026-10-11 / IDEAS & ADVICE",
        title: "How Do You Make a Driveway With Pavers?",
        description: "A paver driveway is made by excavating the existing surface, building a deep compacted gravel base, spreading a thin bedding layer of sand, laying vehicle-rated"
      },
      {
        href: "/blog/paver-driveway-or-concrete/",
        imgAlt: "Paver Driveway or Concrete: Which Should You Choose?",
        imgSrc: "/wp-content/uploads/2026/10/Concrete-Drivewayjpg.webp",
        kicker: "2026-10-09 / IDEAS & ADVICE",
        title: "Paver Driveway or Concrete: Which Should You Choose?",
        description: "For most homeowners who can afford the higher upfront price, a paver driveway is the better long-term choice, since it resists cracking, can be repaired in smal"
      },
      {
        href: "/blog/the-best-paver-driveway-ideas-for-your-home/",
        imgAlt: "The Best Paver Driveway Ideas for Your Home",
        imgSrc: "/wp-content/uploads/2026/10/Paver-Driveway-Ideas-for-Your-Home.webp",
        kicker: "2026-10-08 / IDEAS & ADVICE",
        title: "The Best Paver Driveway Ideas for Your Home",
        description: "The best paver driveway ideas combine a strong, load-bearing pattern with design details that suit your home, such as a contrasting border, a blended color pale"
      },
      {
        href: "/blog/how-much-does-a-paver-driveway-cost/",
        imgAlt: "How Much Does a Paver Driveway Cost?",
        imgSrc: "/wp-content/uploads/2026/10/How-Much-Does-a-Paver-Driveway-Cost.webp",
        kicker: "2026-10-06 / IDEAS & ADVICE",
        title: "How Much Does a Paver Driveway Cost?",
        description: "A professionally installed paver driveway typically costs between 20 and 40 dollars per square foot, which puts most residential driveways somewhere between 5,0"
      },
      {
        href: "/blog/adding-a-turnaround-to-your-driveway/",
        imgAlt: "Adding a Turnaround to Your Driveway",
        imgSrc: "/wp-content/uploads/2026/10/Adding-a-Turnaround-to-Your-Driveway.webp",
        kicker: "2026-10-02 / IDEAS & ADVICE",
        title: "Adding a Turnaround to Your Driveway",
        description: "You add a driveway turnaround by widening part of the driveway so a vehicle can reverse and pull out forward. The most common ways are a T shaped (hammerhead) t"
      },
      {
        href: "/blog/how-to-turn-a-patio-into-a-driveway-with-pavers/",
        imgAlt: "How to Turn a Patio Into a Driveway With Pavers",
        imgSrc: "/wp-content/uploads/2026/05/Landscape-curbing.webp",
        kicker: "2026-09-07 / IDEAS & ADVICE",
        title: "How to Turn a Patio Into a Driveway With Pavers",
        description: ""
      },
      {
        href: "/blog/patio-and-driveway-from-molding/",
        imgAlt: "How to Keep Your Patio and Driveway From Molding",
        imgSrc: "/wp-content/uploads/2026/09/protect-your-driveway-from-molding.webp",
        kicker: "2026-09-05 / IDEAS & ADVICE",
        title: "How to Keep Your Patio and Driveway From Molding",
        description: ""
      },
      {
        href: "/blog/install-patio-blocks-as-a-driveway/",
        imgAlt: "How to Install Patio Blocks as a Driveway",
        imgSrc: "/wp-content/uploads/2026/03/Hardscaping.webp",
        kicker: "2026-09-03 / IDEAS & ADVICE",
        title: "How to Install Patio Blocks as a Driveway",
        description: ""
      },
      {
        href: "/blog/how-to-redo-a-paver-walkway/",
        imgAlt: "How to Redo a Paver Walkway",
        imgSrc: "/wp-content/uploads/2026/08/redo-paver-walkway.webp",
        kicker: "2026-08-31 / IDEAS & ADVICE",
        title: "How to Redo a Paver Walkway",
        description: ""
      },
      {
        href: "/blog/how-to-transition-a-techno-bloc-style-paver-walkway-to-a-driveway/",
        imgAlt: "How to Transition a Techno-Bloc Style Paver Walkway to a Driveway",
        imgSrc: "/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-03.49.15-1.jpeg",
        kicker: "2026-08-29 / IDEAS & ADVICE",
        title: "How to Transition a Techno-Bloc Style Paver Walkway to a Driveway",
        description: ""
      },
      {
        href: "/blog/how-to-put-a-paver-walkway-over-a-concrete-walkway/",
        imgAlt: "How to Put a Paver Walkway Over a Concrete Walkway",
        imgSrc: "/wp-content/uploads/2026/08/paver-walkway-over-a-concreate-walkway.webp",
        kicker: "2026-08-29 / IDEAS & ADVICE",
        title: "How to Put a Paver Walkway Over a Concrete Walkway",
        description: ""
      },
      {
        href: "/blog/is-silica-sand-recommended-for-stone-paver-walkways/",
        imgAlt: "Is Silica Sand Recommended for Stone Paver Walkways?",
        imgSrc: "/wp-content/uploads/2026/08/Silica-Sand-Recommended-for-stone-paver-walkway.webp",
        kicker: "2026-08-28 / IDEAS & ADVICE",
        title: "Is Silica Sand Recommended for Stone Paver Walkways?",
        description: ""
      }
    ],
    hardscape: [
      {
        href: "/blog/do-it-yourself-concrete-landscape-curbing/",
        imgAlt: "Do It Yourself Concrete Landscape Curbing",
        imgSrc: "/wp-content/uploads/2026/05/Landscape-curbing.webp",
        kicker: "2026-05-04 / IDEAS & ADVICE",
        title: "Do It Yourself Concrete Landscape Curbing",
        description: ""
      },
      {
        href: "/blog/how-much-does-hardscaping-cost/",
        imgAlt: "How Much Does Hardscaping Cost?",
        imgSrc: "/wp-content/uploads/2026/03/hardscaping-cost.webp",
        kicker: "2026-03-26 / IDEAS & ADVICE",
        title: "How Much Does Hardscaping Cost?",
        description: ""
      },
      {
        href: "/blog/what-does-hardscaping-mean/",
        imgAlt: "What Does Hardscaping Mean?",
        imgSrc: "/wp-content/uploads/2026/03/hardscape-means.webp",
        kicker: "2026-03-24 / IDEAS & ADVICE",
        title: "What Does Hardscaping Mean?",
        description: ""
      },
      {
        href: "/blog/what-is-the-difference-between-landscaping-and-hardscaping/",
        imgAlt: "What Is The Difference Between Landscaping And Hardscaping",
        imgSrc: "/wp-content/uploads/2026/03/hardscape-vs-landscape.webp",
        kicker: "2026-03-22 / IDEAS & ADVICE",
        title: "What Is The Difference Between Landscaping And Hardscaping",
        description: ""
      },
      {
        href: "/blog/does-hardscape-increase-home-value/",
        imgAlt: "Does Hardscape Increase Home Value?",
        imgSrc: "/wp-content/uploads/2026/03/Hardscaping.webp",
        kicker: "2026-03-20 / IDEAS & ADVICE",
        title: "Does Hardscape Increase Home Value?",
        description: ""
      },
      {
        href: "/blog/what-is-hardscape-softscape-in-yard-design/",
        imgAlt: "What Is Hardscape & Softscape in Yard Design",
        imgSrc: "/wp-content/uploads/2026/03/hardscape-vs-softscape.webp",
        kicker: "2026-03-18 / IDEAS & ADVICE",
        title: "What Is Hardscape & Softscape in Yard Design",
        description: ""
      },
      {
        href: "/blog/how-to-hardscape-a-yard/",
        imgAlt: "How to Hardscape a Yard?",
        imgSrc: "/wp-content/uploads/2026/01/Paver-Patio-1.webp",
        kicker: "2026-03-16 / IDEAS & ADVICE",
        title: "How to Hardscape a Yard?",
        description: ""
      },
      {
        href: "/blog/what-is-hardscaping/",
        imgAlt: "What Is Hardscaping?",
        imgSrc: "/wp-content/uploads/2026/01/hardscaping.webp",
        kicker: "2026-03-13 / IDEAS & ADVICE",
        title: "What Is Hardscaping?",
        description: ""
      }
    ],
    landscape: [
      {
        href: "/blog/how-deep-should-rock-be-for-landscaping/",
        imgAlt: "How Deep Should Rock Be For Landscaping",
        imgSrc: "/wp-content/uploads/2026/03/hardscape-means.webp",
        kicker: "2026-06-04 / IDEAS & ADVICE",
        title: "How Deep Should Rock Be For Landscaping",
        description: ""
      },
      {
        href: "/blog/how-to-install-landscape-blocks/",
        imgAlt: "How To Install Landscape Blocks",
        imgSrc: "/wp-content/uploads/2026/02/landscape-architecture.webp",
        kicker: "2026-06-01 / IDEAS & ADVICE",
        title: "How To Install Landscape Blocks",
        description: ""
      },
      {
        href: "/blog/how-to-remove-landscape-rock/",
        imgAlt: "How To Remove Landscape Rock",
        imgSrc: "/wp-content/uploads/2026/02/colorado-landscape.webp",
        kicker: "2026-05-22 / IDEAS & ADVICE",
        title: "How To Remove Landscape Rock",
        description: ""
      },
      {
        href: "/blog/how-to-landscape-around-trees/",
        imgAlt: "How To Landscape Around Trees",
        imgSrc: "/wp-content/uploads/2026/05/landscaping-installation-denver.webp",
        kicker: "2026-05-20 / IDEAS & ADVICE",
        title: "How To Landscape Around Trees",
        description: ""
      },
      {
        href: "/blog/how-to-get-a-landscaping-license/",
        imgAlt: "How To Get A Landscaping License",
        imgSrc: "/wp-content/uploads/2026/05/landscaping-installation-denver.webp",
        kicker: "2026-05-18 / IDEAS & ADVICE",
        title: "How To Get A Landscaping License",
        description: ""
      },
      {
        href: "/blog/do-it-yourself-backyard-landscaping/",
        imgAlt: "Do It Yourself Backyard Landscaping",
        imgSrc: "/wp-content/uploads/2026/05/structural-landscaping-services-denver.webp",
        kicker: "2026-05-15 / IDEAS & ADVICE",
        title: "Do It Yourself Backyard Landscaping",
        description: ""
      },
      {
        href: "/blog/can-landscaping-improve-home-value/",
        imgAlt: "Can Landscaping Improve Home Value?",
        imgSrc: "/wp-content/uploads/2026/05/landscaping-installation-denver.webp",
        kicker: "2026-05-13 / IDEAS & ADVICE",
        title: "Can Landscaping Improve Home Value?",
        description: ""
      },
      {
        href: "/blog/what-is-a-structural-landscaper/",
        imgAlt: "What Is A Structural Landscaper?",
        imgSrc: "/wp-content/uploads/2026/05/structural-landscaping-services-denver.webp",
        kicker: "2026-05-11 / IDEAS & ADVICE",
        title: "What Is A Structural Landscaper?",
        description: ""
      },
      {
        href: "/blog/do-it-yourself-landscaping-projects/",
        imgAlt: "Do It Yourself Landscaping Projects",
        imgSrc: "/wp-content/uploads/2026/02/colorado-landscape.webp",
        kicker: "2026-05-08 / IDEAS & ADVICE",
        title: "Do It Yourself Landscaping Projects",
        description: ""
      },
      {
        href: "/blog/do-it-yourself-landscape-lighting/",
        imgAlt: "Do It Yourself Landscape Lighting",
        imgSrc: "/wp-content/uploads/2026/05/Landscape-Lighting.webp",
        kicker: "2026-05-06 / IDEAS & ADVICE",
        title: "Do It Yourself Landscape Lighting",
        description: ""
      },
      {
        href: "/blog/how-to-install-low-voltage-landscape-lighting/",
        imgAlt: "How To Install Low Voltage Landscape Lighting",
        imgSrc: "/wp-content/uploads/2026/05/Landscape-Lighting.webp",
        kicker: "2026-05-01 / IDEAS & ADVICE",
        title: "How To Install Low Voltage Landscape Lighting",
        description: ""
      },
      {
        href: "/blog/what-is-the-difference-between-landscaping-and-hardscaping/",
        imgAlt: "What Is The Difference Between Landscaping And Hardscaping",
        imgSrc: "/wp-content/uploads/2026/03/hardscape-vs-landscape.webp",
        kicker: "2026-03-22 / IDEAS & ADVICE",
        title: "What Is The Difference Between Landscaping And Hardscaping",
        description: ""
      }
    ],
    patio: [
      {
        href: "/blog/how-to-redo-a-paver-walkway/",
        imgAlt: "How to Redo a Paver Walkway",
        imgSrc: "/wp-content/uploads/2026/08/redo-paver-walkway.webp",
        kicker: "2026-08-31 / IDEAS & ADVICE",
        title: "How to Redo a Paver Walkway",
        description: ""
      },
      {
        href: "/blog/how-to-transition-a-techno-bloc-style-paver-walkway-to-a-driveway/",
        imgAlt: "How to Transition a Techno-Bloc Style Paver Walkway to a Driveway",
        imgSrc: "/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-03.49.15-1.jpeg",
        kicker: "2026-08-29 / IDEAS & ADVICE",
        title: "How to Transition a Techno-Bloc Style Paver Walkway to a Driveway",
        description: ""
      },
      {
        href: "/blog/how-to-put-a-paver-walkway-over-a-concrete-walkway/",
        imgAlt: "How to Put a Paver Walkway Over a Concrete Walkway",
        imgSrc: "/wp-content/uploads/2026/08/paver-walkway-over-a-concreate-walkway.webp",
        kicker: "2026-08-29 / IDEAS & ADVICE",
        title: "How to Put a Paver Walkway Over a Concrete Walkway",
        description: ""
      },
      {
        href: "/blog/is-silica-sand-recommended-for-stone-paver-walkways/",
        imgAlt: "Is Silica Sand Recommended for Stone Paver Walkways?",
        imgSrc: "/wp-content/uploads/2026/08/Silica-Sand-Recommended-for-stone-paver-walkway.webp",
        kicker: "2026-08-28 / IDEAS & ADVICE",
        title: "Is Silica Sand Recommended for Stone Paver Walkways?",
        description: ""
      },
      {
        href: "/blog/how-to-keep-mulch-from-washing-onto-a-paver-walkway/",
        imgAlt: "How to Keep Mulch From Washing Onto a Paver Walkway",
        imgSrc: "/wp-content/uploads/2026/02/Spring-Mulching.webp",
        kicker: "2026-08-27 / IDEAS & ADVICE",
        title: "How to Keep Mulch From Washing Onto a Paver Walkway",
        description: ""
      },
      {
        href: "/blog/how-to-lay-down-an-18x18-paver-walkway/",
        imgAlt: "How to Lay Down an 18×18 Paver Walkway",
        imgSrc: "/wp-content/uploads/2026/01/walkway-patio.webp",
        kicker: "2026-08-15 / IDEAS & ADVICE",
        title: "How to Lay Down an 18×18 Paver Walkway",
        description: ""
      },
      {
        href: "/blog/how-to-build-a-raised-paver-walkway/",
        imgAlt: "How to Build a Raised Paver Walkway",
        imgSrc: "/wp-content/uploads/2026/08/Build-a-Raised-Paver-Walkway.webp",
        kicker: "2026-08-14 / IDEAS & ADVICE",
        title: "How to Build a Raised Paver Walkway",
        description: ""
      },
      {
        href: "/blog/how-to-slope-a-paver-walkway/",
        imgAlt: "How to Slope a Paver Walkway",
        imgSrc: "/wp-content/uploads/2026/08/How-to-Slope-a-Paver-Walkway.webp",
        kicker: "2026-08-13 / IDEAS & ADVICE",
        title: "How to Slope a Paver Walkway",
        description: ""
      },
      {
        href: "/blog/install-a-brick-paver-walkway-on-soil/",
        imgAlt: "How to Install a Brick Paver Walkway on Soil",
        imgSrc: "/wp-content/uploads/2026/08/Install-a-Brick-Paver-Walkway-on-Soil.webp",
        kicker: "2026-08-12 / IDEAS & ADVICE",
        title: "How to Install a Brick Paver Walkway on Soil",
        description: ""
      },
      {
        href: "/blog/build-a-paver-walkway-and-patio/",
        imgAlt: "How to Build a Paver Walkway and Patio Together",
        imgSrc: "/wp-content/uploads/2026/08/Build-a-Paver-Walkway-and-Patio-Together.webp",
        kicker: "2026-08-11 / IDEAS & ADVICE",
        title: "How to Build a Paver Walkway and Patio Together",
        description: ""
      },
      {
        href: "/blog/how-to-install-a-paver-front-walkway/",
        imgAlt: "How to Install a Paver Front Walkway",
        imgSrc: "/wp-content/uploads/2026/08/How-to-Install-a-Paver-Front-Walkway.webp",
        kicker: "2026-08-10 / IDEAS & ADVICE",
        title: "How to Install a Paver Front Walkway",
        description: ""
      },
      {
        href: "/blog/how-to-build-a-paver-walkway/",
        imgAlt: "How to Build a Paver Walkway With Materials From Home Depot",
        imgSrc: "/wp-content/uploads/2026/08/Build-a-Paver-Walkway-With-Materials-From-Home-Depot.webp",
        kicker: "2026-08-09 / IDEAS & ADVICE",
        title: "How to Build a Paver Walkway With Materials From Home Depot",
        description: ""
      }
    ],
    service: [
      {
        href: "/blog/install-a-brick-paver-walkway-on-soil/",
        imgAlt: "How to Install a Brick Paver Walkway on Soil",
        imgSrc: "/wp-content/uploads/2026/08/Install-a-Brick-Paver-Walkway-on-Soil.webp",
        kicker: "2026-08-12 / IDEAS & ADVICE",
        title: "How to Install a Brick Paver Walkway on Soil",
        description: ""
      },
      {
        href: "/blog/xeriscape-colorado-landscaping-ideas/",
        imgAlt: "Xeriscape Colorado Front Yard Landscaping Ideas",
        imgSrc: "/wp-content/uploads/2026/03/Xeriscape-Landscaping-Colorado.webp",
        kicker: "2026-03-11 / IDEAS & ADVICE",
        title: "Xeriscape Colorado Front Yard Landscaping Ideas",
        description: ""
      }
    ],
    uncategorized: [
      {
        href: "/service-areas/centennial/xeriscape-landscaping/",
        imgAlt: "Xeric Landscaping Services for Centennial, CO",
        imgSrc: "/wp-content/uploads/2026/10/Xeric-Landscaping-Services-for-Centennial-CO.webp",
        kicker: "2026-10-07 / IDEAS & ADVICE",
        title: "Xeric Landscaping Services for Centennial, CO",
        description: "Centennial has more homeowners associations per square mile than almost anywhere else in the Denver metro, and more than one water provider serving different pa"
      },
      {
        href: "/service-areas/littleton/xeriscape-landscaping/",
        imgAlt: "Xeriscape Contractors Serving Littleton, CO",
        imgSrc: "/wp-content/uploads/2026/10/Xeriscape-Contractors-Serving-Littleton-CO.webp",
        kicker: "2026-10-05 / IDEAS & ADVICE",
        title: "Xeriscape Contractors Serving Littleton, CO",
        description: "Littleton covers more ground, literally, than a lot of homeowners realize when they start comparing xeriscape contractors. A century-old lot near Historic Downt"
      },
      {
        href: "/service-areas/lakewood/xeriscape-landscaping/",
        imgAlt: "Water-Wise Landscaping Services in Lakewood, CO",
        imgSrc: "/wp-content/uploads/2026/10/Water-Wise-Landscaping-Services-in-Lakewood.webp",
        kicker: "2026-10-03 / IDEAS & ADVICE",
        title: "Water-Wise Landscaping Services in Lakewood, CO",
        description: "Lakewood is a city of contrasts when it comes to landscaping. Neighborhoods like Belmar sit in full, unbroken sun most of the day, while areas closer to Green M"
      },
      {
        href: "/service-areas/broomfield/xeriscape-landscaping/",
        imgAlt: "HOA-Friendly Xeriscaping Services in Broomfield, CO",
        imgSrc: "/wp-content/uploads/2026/09/Xeriscape-Landscaping-Broomfield.webp",
        kicker: "2026-09-20 / IDEAS & ADVICE",
        title: "HOA-Friendly Xeriscaping Services in Broomfield, CO",
        description: "Broomfield presents a specific challenge a lot of landscapers overlook. It’s not just about picking drought-tolerant plants, it’s about picking ones your HOA wi"
      },
      {
        href: "/service-areas/aurora/xeriscape-landscaping/",
        imgAlt: "Drought-Tolerant Landscaping in Aurora, CO",
        imgSrc: "/wp-content/uploads/2026/09/Xeriscape-Landscaping-Aurora.webp",
        kicker: "2026-09-19 / IDEAS & ADVICE",
        title: "Drought-Tolerant Landscaping in Aurora, CO",
        description: "Aurora asks more of a landscape than most Denver suburbs. It sits at the edge of an area sometimes called Hail Alley, where sudden summer hailstorms are common"
      },
      {
        href: "/service-areas/arvada/xeriscape-landscaping/",
        imgAlt: "Xeriscape Landscaping Services in Arvada, CO",
        imgSrc: "/wp-content/uploads/2026/09/Xeriscape-Landscaping-Arvada.webp",
        kicker: "2026-09-18 / IDEAS & ADVICE",
        title: "Xeriscape Landscaping Services in Arvada, CO",
        description: "Arvada’s soil works against a traditional lawn before the summer heat even gets involved. Much of the city sits on heavy clay, the kind that bakes hard and crac"
      }
    ]
  };

  const displayedArticles = $derived(
    selectedCategory === 'all'
      ? articlesByCategory.blogs
      : articlesByCategory[selectedCategory] || []
  );
</script>

<Seo {metadata} />
<div class="listing">
<section class="inner-hero"><div class="wrap"><div><div class="breadcrumb"><a href="/">Home</a> / Ideas &amp; advice</div>
<span class="kicker">Ideas &amp; advice</span><h1>Good ideas start here.</h1>
<p>Browse the full Ridgewell library of hardscaping, patio and landscape guides.</p>
<div class="actions"><a class="btn" href="/contact/">Get my free consultation<span aria-hidden="true">↗</span></a><a class="simple-phone" href="tel:+17208825772">720-882-5772</a></div>
</div>
</div>
</section>
<section class="section"><div class="wrap"><div class="blog-filters">
  {#each categories as cat (cat.key)}
    <button
      type="button"
      class:active={selectedCategory === cat.key}
      onclick={() => (selectedCategory = cat.key)}
    >
      {cat.label}
    </button>
  {/each}
</div>
<div class="blog-grid">
  {#each displayedArticles as article (article.href)}
    <article>
      <a href={article.href}>
        <img alt={article.imgAlt} height="400" loading="lazy" src={article.imgSrc} width="640"/>
      </a>
      <div>
        <span class="kicker">{article.kicker}</span>
        <h3><a href={article.href}>{article.title}</a></h3>
        {#if article.description}
          <p>{article.description}</p>
        {:else}
          <p></p>
        {/if}
        <a class="text-link" href={article.href}>Read the guide ↗</a>
      </div>
    </article>
  {/each}
</div>
{#if selectedCategory === 'all' || selectedCategory === 'blogs'}
  <nav aria-label="Blog pages" class="pagination"><a aria-current="page" href="/blog/">1</a><a href="/blog/page/2/">2</a><a href="/blog/page/3/">3</a><a href="/blog/page/4/">4</a><a href="/blog/page/5/">5</a><a href="/blog/page/6/">6</a><a href="/blog/page/7/">7</a><a href="/blog/page/8/">8</a></nav>
{/if}
</div>
</section>
<section class="cta"><div class="wrap"><span class="kicker">START WITH THE PART OF YOUR YARD THAT ISN’T WORKING</span><h2>You don’t need a finished plan.<br/>That’s where we come in.</h2>
<p>Show us the space. Tell us what you want to change.<br/>We’ll help you work out the next step at a free consultation.</p>
<div class="actions"><a class="btn" href="/contact/">Get my free consultation<span aria-hidden="true">↗</span></a><a class="cta-phone" href="tel:+17208825772"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path></svg> 720-882-5772</a></div>
<small>Meet in person. Ask questions. Explore your options.</small></div>
</section>

</div>
