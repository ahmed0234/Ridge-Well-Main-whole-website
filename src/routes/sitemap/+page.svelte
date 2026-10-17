<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import metadata from './metadata.json';

  interface LinkItem {
    href: string;
    title: string;
    shortTitle?: string;
    displayTitle?: string;
    desc?: string;
    badge?: string;
    iconKey?: string;
  }

  interface CityGroup {
    city: string;
    links: LinkItem[];
  }

  interface BlogTopicGroup {
    name: string;
    links: LinkItem[];
  }

  const mainPages: LinkItem[] = [
  {
    "href": "/",
    "title": "Denver Hardscaping &amp; Landscape Design | Ridgewell Colorado",
    "shortTitle": "Home",
    "desc": "Main company homepage, design philosophy, and hardscape overview.",
    "badge": "Core",
    "iconKey": "home"
  },
  {
    "href": "/about/",
    "title": "About Us - Ridgewell Colorado",
    "shortTitle": "About Us",
    "desc": "Meet Francisco, our history in Colorado, and our craftsmanship standard.",
    "badge": "Company",
    "iconKey": "users"
  },
  {
    "href": "/projects/",
    "title": "Outdoor Living &amp; Hardscape Inspiration | Ridgewell Colorado",
    "shortTitle": "Case Studies & Projects",
    "desc": "Real completed outdoor living projects, paver patios, and photos.",
    "badge": "Portfolio",
    "iconKey": "gallery"
  },
  {
    "href": "/contact/",
    "title": "Contact Us - Ridgewell Colorado",
    "shortTitle": "Free Consultation",
    "desc": "Get in touch, schedule an in-person estimate, or call our team.",
    "badge": "Contact",
    "iconKey": "phone"
  },
  {
    "href": "/privacy-policy/",
    "title": "Privacy Policy | Ridgewell Colorado",
    "shortTitle": "Privacy Policy",
    "desc": "Our privacy commitments and website data protection policies.",
    "badge": "Legal",
    "iconKey": "shield"
  }
];
  const services: LinkItem[] = [
  {
    "href": "/services/",
    "title": "Our Services - Ridgewell Colorado",
    "shortTitle": "All Services Overview",
    "desc": "Complete index of hardscape, outdoor living, and landscape solutions.",
    "iconKey": "layers"
  },
  {
    "href": "/services/paver-patios/",
    "title": "Paver Patios &amp; Walkways Installation in Denver, CO",
    "shortTitle": "Paver Patios & Walkways",
    "desc": "Custom paver patios, walkways, steps, and durable outdoor living foundations.",
    "iconKey": "grid"
  },
  {
    "href": "/services/landscape-design/",
    "title": "Landscape Design &amp; Installation in Denver | Ridgewell",
    "shortTitle": "Landscape Design & Installation",
    "desc": "Full-property master planning, 3D designs, sod, planting, and mulching.",
    "iconKey": "leaf"
  },
  {
    "href": "/services/outdoor-kitchens/",
    "title": "Outdoor Kitchen Installers Denver | Ridgewell Colorado",
    "shortTitle": "Outdoor Kitchens & Bars",
    "desc": "Built-in grills, prep countertops, stone islands, and entertaining spaces.",
    "iconKey": "flame"
  },
  {
    "href": "/services/pergolas/",
    "title": "Custom Pergola Builder and Installation in Denver CO",
    "shortTitle": "Custom Pergolas & Shade",
    "desc": "Freestanding and attached timber pergolas, pavilions, and shade covers.",
    "iconKey": "sun"
  },
  {
    "href": "/services/fire-pits-fireplaces/",
    "title": "Gas Fireplace Installation Denver | Ridgewell Colorado",
    "shortTitle": "Fire Pits & Outdoor Fireplaces",
    "desc": "Gas and wood-burning stone fire pits, hearths, and seating walls.",
    "iconKey": "fire"
  },
  {
    "href": "/services/retaining-walls/",
    "title": "Professional Retaining Walls Contractors in Denver, CO",
    "shortTitle": "Retaining Walls",
    "desc": "Structural block, boulder, and stone retaining walls for slope management.",
    "iconKey": "wall"
  },
  {
    "href": "/services/xeriscape-landscaping/",
    "title": "Xeriscape Landscaping Service Denver | Ridgewell Colorado",
    "shortTitle": "Xeriscape Landscaping",
    "desc": "Drought-tolerant, low-water Colorado native plants, rock, and drip systems.",
    "iconKey": "droplet"
  }
];
  const serviceAreaHubs: Array<LinkItem & { cityName: string }> = [
  {
    "href": "/service-areas/",
    "title": "Denver Metro Service Areas | Ridgewell Colorado",
    "cityName": "Denver Metro Hub"
  },
  {
    "href": "/service-areas/denver/",
    "title": "Denver, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Denver"
  },
  {
    "href": "/service-areas/arvada/",
    "title": "Arvada, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Arvada"
  },
  {
    "href": "/service-areas/aurora/",
    "title": "Aurora, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Aurora"
  },
  {
    "href": "/service-areas/brighton/",
    "title": "Brighton, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Brighton"
  },
  {
    "href": "/service-areas/broomfield/",
    "title": "Broomfield, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Broomfield"
  },
  {
    "href": "/service-areas/centennial/",
    "title": "Centennial, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Centennial"
  },
  {
    "href": "/service-areas/lakewood/",
    "title": "Lakewood, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Lakewood"
  },
  {
    "href": "/service-areas/littleton/",
    "title": "Littleton, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Littleton"
  },
  {
    "href": "/service-areas/parker/",
    "title": "Parker, CO Landscaping &amp; Hardscaping | Ridgewell",
    "cityName": "Parker"
  }
];
  const localServicesByCity: CityGroup[] = [
  {
    "city": "Denver",
    "links": [
      {
        "href": "/service-areas/denver/paver-patios/",
        "title": "Paver Patios &amp; Walkways Installation in Denver, CO"
      },
      {
        "href": "/service-areas/denver/landscape-design/",
        "title": "Landscape Design &amp; Installation in Denver | Ridgewell"
      },
      {
        "href": "/service-areas/denver/outdoor-kitchens/",
        "title": "Outdoor Kitchen Installers Denver | Ridgewell Colorado"
      },
      {
        "href": "/service-areas/denver/pergolas/",
        "title": "Custom Pergola Builder and Installation in Denver CO"
      },
      {
        "href": "/service-areas/denver/fire-pits-fireplaces/",
        "title": "Gas Fireplace Installation Denver | Ridgewell Colorado"
      },
      {
        "href": "/service-areas/denver/retaining-walls/",
        "title": "Professional Retaining Walls Contractors in Denver, CO"
      },
      {
        "href": "/service-areas/denver/xeriscape-landscaping/",
        "title": "Xeriscape Landscaping Service Denver | Ridgewell Colorado"
      }
    ]
  },
  {
    "city": "Arvada",
    "links": [
      {
        "href": "/service-areas/arvada/paver-patios/",
        "title": "Arvada CO Patio Installation Company | Ridgewell Colorado"
      },
      {
        "href": "/service-areas/arvada/landscape-design/",
        "title": "Landscape Design &amp; Installation Services Arvada | Ridgewell"
      },
      {
        "href": "/service-areas/arvada/outdoor-kitchens/",
        "title": "Outdoor Kitchen Builder Arvada, CO | Ridgewell Colorado"
      },
      {
        "href": "/service-areas/arvada/xeriscape-landscaping/",
        "title": "Xeriscape Landscaping Services in Arvada, CO | Ridgewell"
      }
    ]
  },
  {
    "city": "Aurora",
    "links": [
      {
        "href": "/service-areas/aurora/paver-patios/",
        "title": "Patio Installation in Aurora, CO | Ridgewell Colorado"
      },
      {
        "href": "/service-areas/aurora/landscape-design/",
        "title": "Full-Service Landscaping Contractor Aurora, CO | Ridgewell"
      },
      {
        "href": "/service-areas/aurora/xeriscape-landscaping/",
        "title": "Drought-Tolerant Landscaping in Aurora, CO | Ridgewell"
      }
    ]
  },
  {
    "city": "Lakewood",
    "links": [
      {
        "href": "/service-areas/lakewood/paver-patios/",
        "title": "Patio Installation Contractors in Lakewood CO | Ridgewell"
      },
      {
        "href": "/service-areas/lakewood/landscape-design/",
        "title": "Full Landscape Design &amp; Installation Services Lakewood, CO"
      },
      {
        "href": "/service-areas/lakewood/outdoor-kitchens/",
        "title": "Outdoor Kitchen Contractors Lakewood, CO | Ridgewell"
      },
      {
        "href": "/service-areas/lakewood/xeriscape-landscaping/",
        "title": "Water-Wise Landscaping in Lakewood, CO"
      }
    ]
  },
  {
    "city": "Brighton",
    "links": [
      {
        "href": "/service-areas/brighton/paver-patios/",
        "title": "Patio Paver Design &amp; Installation Contractors Brighton, CO"
      },
      {
        "href": "/service-areas/brighton/landscape-design/",
        "title": "Landscaping Services Brighton, CO | Colorado Lawn &amp; Landscape | Ridgewell"
      }
    ]
  },
  {
    "city": "Broomfield, Centennial & Littleton",
    "links": [
      {
        "href": "/service-areas/broomfield/xeriscape-landscaping/",
        "title": "HOA-Friendly Xeriscaping Services in Broomfield,CO Ridgewell"
      },
      {
        "href": "/service-areas/centennial/xeriscape-landscaping/",
        "title": "Xeric Landscaping Services for Centennial, CO | Ridgewell"
      },
      {
        "href": "/service-areas/littleton/xeriscape-landscaping/",
        "title": "Xeriscape Contractors Serving Littleton, CO | Ridgewell"
      }
    ]
  }
];
  const categorizedBlogs: BlogTopicGroup[] = [
  {
    "name": "Paver Walkways & Paths",
    "links": [
      {
        "href": "/blog/how-to-redo-a-paver-walkway/",
        "title": "How to Fix and Redo an Old Paver Walkway",
        "displayTitle": "How to Fix and Redo an Old Paver Walkway"
      },
      {
        "href": "/blog/how-to-transition-a-techno-bloc-style-paver-walkway-to-a-driveway/",
        "title": "Paver Walkway to Driveway Transition Guide",
        "displayTitle": "Paver Walkway to Driveway Transition Guide"
      },
      {
        "href": "/blog/how-to-put-a-paver-walkway-over-a-concrete-walkway/",
        "title": "Installing Pavers Over an Existing Concrete Walkway",
        "displayTitle": "Installing Pavers Over an Existing Concrete Walkway"
      },
      {
        "href": "/blog/is-silica-sand-recommended-for-stone-paver-walkways/",
        "title": "Should You Use Silica Sand for a Stone Walkway?",
        "displayTitle": "Should You Use Silica Sand for a Stone Walkway?"
      },
      {
        "href": "/blog/how-to-keep-mulch-from-washing-onto-a-paver-walkway/",
        "title": "Stop Mulch From Spilling Onto Your Paver Walkway",
        "displayTitle": "Stop Mulch From Spilling Onto Your Paver Walkway"
      },
      {
        "href": "/blog/how-to-finish-off-the-sides-of-a-paver-walkway/",
        "title": "Finishing a Paver Walkway's Edges the Right Way",
        "displayTitle": "Finishing a Paver Walkway's Edges the Right Way"
      },
      {
        "href": "/blog/how-to-lay-down-an-18x18-paver-walkway/",
        "title": "Installing an 18x18 Paver Walkway Step by Step",
        "displayTitle": "Installing an 18x18 Paver Walkway Step by Step"
      },
      {
        "href": "/blog/how-to-build-a-raised-paver-walkway/",
        "title": "Building a Raised Walkway Over Wet or Low Ground",
        "displayTitle": "Building a Raised Walkway Over Wet or Low Ground"
      },
      {
        "href": "/blog/how-to-slope-a-paver-walkway/",
        "title": "Getting the Right Slope on a Paver Walkway",
        "displayTitle": "Getting the Right Slope on a Paver Walkway"
      },
      {
        "href": "/blog/install-a-brick-paver-walkway-on-soil/",
        "title": "Installing Brick Pavers Based on Your Soil Type",
        "displayTitle": "Installing Brick Pavers Based on Your Soil Type"
      },
      {
        "href": "/blog/build-a-paver-walkway-and-patio/",
        "title": "Combining a Paver Walkway and Patio: A Full Guide",
        "displayTitle": "Combining a Paver Walkway and Patio: A Full Guide"
      },
      {
        "href": "/blog/how-to-install-a-paver-front-walkway/",
        "title": "Designing and Building a Paver Front Walkway",
        "displayTitle": "Designing and Building a Paver Front Walkway"
      },
      {
        "href": "/blog/how-to-build-a-paver-walkway/",
        "title": "DIY Paver Walkway: What to Buy and Rent at Home Depot",
        "displayTitle": "DIY Paver Walkway: What to Buy and Rent at Home Depot"
      },
      {
        "href": "/blog/how-much-does-a-paver-walkway-cost-installed/",
        "title": "Installed Paver Walkway Cost: A Complete Breakdown",
        "displayTitle": "Installed Paver Walkway Cost: A Complete Breakdown"
      },
      {
        "href": "/blog/how-do-you-install-a-paver-walkway/",
        "title": "The Paver Walkway Installation Process Explained",
        "displayTitle": "The Paver Walkway Installation Process Explained"
      },
      {
        "href": "/blog/can-i-just-use-paver-sand-for-a-walkway/",
        "title": "Do You Need a Gravel Base or Just Sand for Pavers",
        "displayTitle": "Do You Need a Gravel Base or Just Sand for Pavers"
      },
      {
        "href": "/blog/how-to-build-a-concrete-paver-walkway/",
        "title": "Building a Concrete Paver Walkway the Right Way",
        "displayTitle": "Building a Concrete Paver Walkway the Right Way"
      },
      {
        "href": "/blog/how-to-build-a-brick-paver-walkway/",
        "title": "Brick Paver Walkway Guide: Steps and Material Tips",
        "displayTitle": "Brick Paver Walkway Guide: Steps and Material Tips"
      },
      {
        "href": "/blog/how-to-level-ground-for-a-paver-walkway/",
        "title": "Leveling Ground for Pavers: Tools and Techniques",
        "displayTitle": "Leveling Ground for Pavers: Tools and Techniques"
      },
      {
        "href": "/blog/how-thick-should-paver-base-be-for-a-walkway/",
        "title": "Paver Walkway Base Depth: A Complete Guide",
        "displayTitle": "Paver Walkway Base Depth: A Complete Guide"
      },
      {
        "href": "/blog/what-is-the-standard-width-of-a-paver-walkway/",
        "title": "How Wide Should a Paver Walkway Be",
        "displayTitle": "How Wide Should a Paver Walkway Be"
      },
      {
        "href": "/blog/how-to-make-a-curved-paver-walkway/",
        "title": "Building a Curved Paver Walkway the Right Way",
        "displayTitle": "Building a Curved Paver Walkway the Right Way"
      },
      {
        "href": "/blog/how-to-build-a-paver-walkway-on-a-slope/",
        "title": "Sloped Paver Walkway Guide: Steps or Gradual Grade",
        "displayTitle": "Sloped Paver Walkway Guide: Steps or Gradual Grade"
      },
      {
        "href": "/blog/how-much-does-a-paver-walkway-cost/",
        "title": "Paver Walkway Cost: What to Really Expect to Pay",
        "displayTitle": "Paver Walkway Cost: What to Really Expect to Pay"
      },
      {
        "href": "/blog/how-to-lay-a-paver-walkway/",
        "title": "How to Lay a Paver Walkway: Patterns and Techniques",
        "displayTitle": "How to Lay a Paver Walkway: Patterns and Techniques"
      },
      {
        "href": "/blog/how-to-build-a-paver-walkway-a-complete-diy-and-hiring-guide/",
        "title": "Paver Walkway Guide: Steps, Cost, and Common Mistakes",
        "displayTitle": "Paver Walkway Guide: Steps, Cost, and Common Mistakes"
      }
    ]
  },
  {
    "name": "Driveways & Conversions",
    "links": [
      {
        "href": "/blog/how-do-you-make-a-driveway-with-pavers/",
        "title": "Paver Driveway Installation: A Complete Guide",
        "displayTitle": "Paver Driveway Installation: A Complete Guide"
      },
      {
        "href": "/blog/paver-driveway-or-concrete/",
        "title": "Concrete vs Paver Driveway: Pros, Cons, and Cost",
        "displayTitle": "Concrete vs Paver Driveway: Pros, Cons, and Cost"
      },
      {
        "href": "/blog/the-best-paver-driveway-ideas-for-your-home/",
        "title": "Best Paver Driveway Ideas for Every Home Ridgewell Colorado",
        "displayTitle": "Best Paver Driveway Ideas for Every Home Ridgewell Colorado"
      },
      {
        "href": "/blog/how-much-does-a-paver-driveway-cost/",
        "title": "Paver Driveway Cost: Prices and What to Expect",
        "displayTitle": "Paver Driveway Cost: Prices and What to Expect"
      },
      {
        "href": "/blog/adding-a-turnaround-to-your-driveway/",
        "title": "Driveway Turnaround Ideas, Sizes, and Costs",
        "displayTitle": "Driveway Turnaround Ideas, Sizes, and Costs"
      },
      {
        "href": "/blog/how-to-turn-a-patio-into-a-driveway-with-pavers/",
        "title": "Converting a Paver Patio Into a Driveway Ridgewell Colorado",
        "displayTitle": "Converting a Paver Patio Into a Driveway Ridgewell Colorado"
      },
      {
        "href": "/blog/patio-and-driveway-from-molding/",
        "title": "How to Stop Your Patio or Driveway From Growing Mold",
        "displayTitle": "How to Stop Your Patio or Driveway From Growing Mold"
      },
      {
        "href": "/blog/install-patio-blocks-as-a-driveway/",
        "title": "Can You Install Patio Blocks as a Driveway",
        "displayTitle": "Can You Install Patio Blocks as a Driveway"
      },
      {
        "href": "/blog/how-to-have-a-patio-on-your-driveway/",
        "title": "Patio on Your Driveway: A Homeowner's Guide",
        "displayTitle": "Patio on Your Driveway: A Homeowner's Guide"
      },
      {
        "href": "/blog/how-to-clean-a-gravel-driveway-or-patio/",
        "title": "Gravel Driveway Cleaning: What Actually Works",
        "displayTitle": "Gravel Driveway Cleaning: What Actually Works"
      },
      {
        "href": "/blog/choose-the-right-plate-compactor-size-for-a-patio-or-driveway/",
        "title": "Plate Compactor Size Guide: Patio vs. Driveway Base",
        "displayTitle": "Plate Compactor Size Guide: Patio vs. Driveway Base"
      },
      {
        "href": "/blog/how-much-does-it-cost-to-resurface-a-driveway-or-patio-2/",
        "title": "Driveway &amp; Patio Resurfacing Cost: What to Expect",
        "displayTitle": "Driveway &amp; Patio Resurfacing Cost: What to Expect"
      },
      {
        "href": "/blog/do-professionals-seal-cracks-in-driveways-or-patios/",
        "title": "Should You Seal Driveway Cracks or Repair the Base?",
        "displayTitle": "Should You Seal Driveway Cracks or Repair the Base?"
      },
      {
        "href": "/blog/can-you-use-patio-stones-for-a-driveway/",
        "title": "Can You Use Patio Stones for a Driveway",
        "displayTitle": "Can You Use Patio Stones for a Driveway"
      },
      {
        "href": "/blog/how-much-does-it-cost-to-resurface-a-driveway-or-patio/",
        "title": "Driveway &amp; Patio Resurfacing Cost What to Expect | Ridgewell",
        "displayTitle": "Driveway &amp; Patio Resurfacing Cost What to Expect"
      },
      {
        "href": "/blog/patio-driveway-cleaning-near-me/",
        "title": "Local Patio &amp; Driveway Cleaning Guide | Ridgewell CO",
        "displayTitle": "Local Patio &amp; Driveway Cleaning Guide CO"
      },
      {
        "href": "/blog/can-you-put-patio-furniture-in-a-driveway/",
        "title": "Can You Put Patio Furniture in a Driveway? | Ridgewell Guide",
        "displayTitle": "Can You Put Patio Furniture in a Driveway? Guide"
      },
      {
        "href": "/blog/can-patio-pavers-be-used-for-a-driveway/",
        "title": "Can Patio Pavers Be Used for a Driveway? | Ridgewell Guide",
        "displayTitle": "Can Patio Pavers Be Used for a Driveway? Guide"
      },
      {
        "href": "/blog/can-stone-pavers-be-used-for-driveways-and-patios/",
        "title": "Stone Pavers for Driveways &amp; Patios: Colorado Guide",
        "displayTitle": "Stone Pavers for Driveways &amp; Patios: Colorado Guide"
      },
      {
        "href": "/blog/how-to-turn-driveway-into-a-patio/",
        "title": "How to Turn Driveway Into a Patio Complete Conversion Guide",
        "displayTitle": "How to Turn Driveway Into a Patio Complete Conversion Guide"
      }
    ]
  },
  {
    "name": "Patios & Hardscaping",
    "links": [
      {
        "href": "/blog/right-plate-compactor-size-for-a-patio/",
        "title": "Right Plate Compactor for Your Patio or Driveway Base",
        "displayTitle": "Right Plate Compactor for Your Patio or Driveway Base"
      },
      {
        "href": "/blog/paver-patio-with-fire-pit-cost-guide/",
        "title": "How Much Does A Paver Patio With A Fire Pit Cost?",
        "displayTitle": "How Much Does A Paver Patio With A Fire Pit Cost?"
      },
      {
        "href": "/blog/do-paver-patios-add-home-value/",
        "title": "Does A Paver Patio Increase Home Value? | Ridgewell Colorado",
        "displayTitle": "Does A Paver Patio Increase Home Value?"
      },
      {
        "href": "/blog/paver-base-depth-for-patios-proper-installation-tips/",
        "title": "How Deep Should Paver Base Be For Patio | Ridgewell Colorado",
        "displayTitle": "How Deep Should Paver Base Be For Patio"
      },
      {
        "href": "/blog/what-is-a-paver-patio/",
        "title": "What Is a Paver Patio? Outdoor Design Guide | Ridgewell",
        "displayTitle": "What Is a Paver Patio? Outdoor Design Guide"
      },
      {
        "href": "/blog/how-to-clean-a-paver-patio/",
        "title": "Best Way to Clean Paver Patio Simple DIY Guide | Ridgewell",
        "displayTitle": "Best Way to Clean Paver Patio Simple DIY Guide"
      },
      {
        "href": "/blog/how-to-install-paver-stone-patio/",
        "title": "How to Install a Paver Stone Patio | Step-by-Step Guide",
        "displayTitle": "How to Install a Paver Stone Patio | Step-by-Step Guide"
      },
      {
        "href": "/blog/how-much-does-a-20x20-paver-patio-cost/",
        "title": "How Much Does a 20x20 Paver Patio Cost? | 2026 Price Guide",
        "displayTitle": "How Much Does a 20x20 Paver Patio Cost? | 2026 Price Guide"
      },
      {
        "href": "/blog/how-to-build-a-paver-patio/",
        "title": "How to Build a Paver Patio 2026 Guide | Ridgewell Colorado",
        "displayTitle": "How to Build a Paver Patio 2026 Guide"
      },
      {
        "href": "/blog/does-hardscape-increase-home-value/",
        "title": "Does Hardscape Increase Home Value? | Ridgewell Colorado",
        "displayTitle": "Does Hardscape Increase Home Value?"
      },
      {
        "href": "/blog/what-is-hardscape-softscape-in-yard-design/",
        "title": "Hardscape vs Softscape | Ridgewell Colorado",
        "displayTitle": "Hardscape vs Softscape"
      },
      {
        "href": "/blog/how-to-hardscape-a-yard/",
        "title": "How to Hardscape a Yard | Step-by-Step Landscaping Guide",
        "displayTitle": "How to Hardscape a Yard | Step-by-Step Landscaping Guide"
      }
    ]
  },
  {
    "name": "Landscaping, Plants & Xeriscaping",
    "links": [
      {
        "href": "/blog/how-deep-should-rock-be-for-landscaping/",
        "title": "How Deep Should Rock Be for Landscaping? Complete Guide",
        "displayTitle": "How Deep Should Rock Be for Landscaping? Complete Guide"
      },
      {
        "href": "/blog/how-to-install-landscape-blocks/",
        "title": "How To Install Landscape Blocks for Durable Retaining Walls",
        "displayTitle": "How To Install Landscape Blocks for Durable Retaining Walls"
      },
      {
        "href": "/blog/how-to-remove-landscape-rock/",
        "title": "Landscape Rock Removal Guide for Clean Yard Renovations",
        "displayTitle": "Landscape Rock Removal Guide for Clean Yard Renovations"
      },
      {
        "href": "/blog/how-to-landscape-around-trees/",
        "title": "How To Landscape Around Trees Safely &amp; Effectively Guide",
        "displayTitle": "How To Landscape Around Trees Safely &amp; Effectively Guide"
      },
      {
        "href": "/blog/how-to-get-a-landscaping-license/",
        "title": "How To Get A Landscaping License Step by Step Guide",
        "displayTitle": "How To Get A Landscaping License Step by Step Guide"
      },
      {
        "href": "/blog/do-it-yourself-backyard-landscaping/",
        "title": "Backyard Landscaping DIY Ideas That Actually Work",
        "displayTitle": "Backyard Landscaping DIY Ideas That Actually Work"
      },
      {
        "href": "/blog/can-landscaping-improve-home-value/",
        "title": "How Landscaping Directly Impacts Property Value | Ridgewell",
        "displayTitle": "How Landscaping Directly Impacts Property Value"
      },
      {
        "href": "/blog/what-is-a-structural-landscaper/",
        "title": "What Is a Structural Landscaper? Complete Home Guide",
        "displayTitle": "What Is a Structural Landscaper? Complete Home Guide"
      },
      {
        "href": "/blog/do-it-yourself-landscaping-projects/",
        "title": "Top DIY Landscaping Projects to Transform Your Yard",
        "displayTitle": "Top DIY Landscaping Projects to Transform Your Yard"
      },
      {
        "href": "/blog/do-it-yourself-landscape-lighting/",
        "title": "DIY Landscape Lighting That Transforms Your Outdoor Space",
        "displayTitle": "DIY Landscape Lighting That Transforms Your Outdoor Space"
      },
      {
        "href": "/blog/do-it-yourself-concrete-landscape-curbing/",
        "title": "Concrete Landscape Curbing DIY Guide for Denver Homeowners",
        "displayTitle": "Concrete Landscape Curbing DIY Guide for Denver Homeowners"
      },
      {
        "href": "/blog/how-to-install-low-voltage-landscape-lighting/",
        "title": "Install Landscape Lighting Like a Pro: Step-by-Step Guide",
        "displayTitle": "Install Landscape Lighting Like a Pro: Step-by-Step Guide"
      },
      {
        "href": "/blog/what-is-the-difference-between-landscaping-and-hardscaping/",
        "title": "Landscaping vs Hardscaping Key Differences Explained",
        "displayTitle": "Landscaping vs Hardscaping Key Differences Explained"
      },
      {
        "href": "/blog/xeriscape-colorado-landscaping-ideas/",
        "title": "Front Yard Xeriscape Landscaping Ideas for Colorado Homes",
        "displayTitle": "Front Yard Xeriscape Landscaping Ideas for Colorado Homes"
      },
      {
        "href": "/blog/what-level-of-education-is-required-for-a-landscape-designer/",
        "title": "Education Requirements for a Landscape Designer | 2026 Guide",
        "displayTitle": "Education Requirements for a Landscape Designer | 2026 Guide"
      },
      {
        "href": "/blog/creative-do-it-yourself-landscaping-ideas/",
        "title": "Creative DIY Landscaping Ideas for Denver Homeowners",
        "displayTitle": "Creative DIY Landscaping Ideas for Denver Homeowners"
      },
      {
        "href": "/blog/how-to-landscape-your-front-yard/",
        "title": "How to Landscape Your Front Yard | Step-by-Step Guide 2026",
        "displayTitle": "How to Landscape Your Front Yard | Step-by-Step Guide 2026"
      },
      {
        "href": "/blog/spring-mulching-and-its-benefits/",
        "title": "Professional Spring Mulching &amp; It's Benefits | Ridgewell",
        "displayTitle": "Professional Spring Mulching &amp; It's Benefits"
      },
      {
        "href": "/blog/how-much-do-landscapers-charge-per-hour/",
        "title": "Average Landscaping Costs Per Hour in 2026 | Ridgewell",
        "displayTitle": "Average Landscaping Costs Per Hour in 2026"
      },
      {
        "href": "/blog/do-you-tip-landscapers/",
        "title": "Do You Tip Landscapers? What Homeowners Should Know",
        "displayTitle": "Do You Tip Landscapers? What Homeowners Should Know"
      },
      {
        "href": "/blog/what-do-landscape-architects-do/",
        "title": "Landscape Architecture Career Guide | Ridgewell Colorado",
        "displayTitle": "Landscape Architecture Career Guide"
      },
      {
        "href": "/blog/what-is-landscape-architecture/",
        "title": "What Is Landscape Architecture? | Ridgewell Colorado",
        "displayTitle": "What Is Landscape Architecture?"
      },
      {
        "href": "/blog/what-tools-do-landscape-designers-use/",
        "title": "What Tools Do Landscape Designers Use | Ridgewell Colorado",
        "displayTitle": "What Tools Do Landscape Designers Use"
      },
      {
        "href": "/blog/what-do-landscapers-do/",
        "title": "What Do Landscapers Do? | Ridgewell Colorado",
        "displayTitle": "What Do Landscapers Do?"
      },
      {
        "href": "/blog/how-much-do-landscaper-make/",
        "title": "How Much Do Landscapers Make | Ridgewell Colorado",
        "displayTitle": "How Much Do Landscapers Make"
      },
      {
        "href": "/blog/design-landscaping-in-backyard/",
        "title": "Creative Ideas for Backyard Landscaping and Outdoor Planning | Ridgewell",
        "displayTitle": "Creative Ideas for Backyard Landscaping and Outdoor Planning"
      },
      {
        "href": "/blog/how-much-does-landscaping-cost/",
        "title": "How Much Does Landscaping Cost - Ridgewell Colorado",
        "displayTitle": "How Much Does Landscaping Cost - Ridgewell Colorado"
      },
      {
        "href": "/blog/what-types-of-plants-are-used-in-landscaping/",
        "title": "What Types of Plants Are Used in Landscaping | Ridgewell",
        "displayTitle": "What Types of Plants Are Used in Landscaping"
      },
      {
        "href": "/blog/what-is-landscaping/",
        "title": "What Is Landscaping? A Complete Guide for Denver Homeowners",
        "displayTitle": "What Is Landscaping? A Complete Guide for Denver Homeowners"
      }
    ]
  },
  {
    "name": "Landscape Tips & Professional Advice",
    "links": [
      {
        "href": "/blog/how-much-does-hardscaping-cost/",
        "title": "How Much Does Hardscaping Cost? In 2026 | Ridgewell Colorado",
        "displayTitle": "How Much Does Hardscaping Cost? In 2026"
      },
      {
        "href": "/blog/what-does-hardscaping-mean/",
        "title": "What Does Hardscaping Mean? | Ridgewell Colorado",
        "displayTitle": "What Does Hardscaping Mean?"
      },
      {
        "href": "/blog/what-is-hardscaping/",
        "title": "What Is Hardscaping? | Complete Landscaping Guide 2026",
        "displayTitle": "What Is Hardscaping? | Complete Landscaping Guide 2026"
      }
    ]
  }
];
  const blogArchives = {
  "main": {
    "href": "/blog/",
    "title": "Good ideas start here. | Ridgewell Colorado"
  },
  "categories": [
    {
      "href": "/blog/category/blogs/",
      "title": "Blogs ideas &amp; guides | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/hardscape/",
      "title": "Hardscape ideas &amp; guides | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/landscape/",
      "title": "Landscape ideas &amp; guides | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/patio/",
      "title": "Patio ideas &amp; guides | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/pool/",
      "title": "Pool ideas &amp; guides | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/service/",
      "title": "Service ideas &amp; guides | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/uncategorized/",
      "title": "Uncategorized ideas &amp; guides | Ridgewell Colorado"
    }
  ],
  "blogPages": [
    {
      "href": "/blog/page/2/",
      "title": "Good ideas start here. – Page 2 | Ridgewell Colorado"
    },
    {
      "href": "/blog/page/3/",
      "title": "Good ideas start here. – Page 3 | Ridgewell Colorado"
    },
    {
      "href": "/blog/page/4/",
      "title": "Good ideas start here. – Page 4 | Ridgewell Colorado"
    },
    {
      "href": "/blog/page/5/",
      "title": "Good ideas start here. – Page 5 | Ridgewell Colorado"
    },
    {
      "href": "/blog/page/6/",
      "title": "Good ideas start here. – Page 6 | Ridgewell Colorado"
    },
    {
      "href": "/blog/page/7/",
      "title": "Good ideas start here. – Page 7 | Ridgewell Colorado"
    },
    {
      "href": "/blog/page/8/",
      "title": "Good ideas start here. – Page 8 | Ridgewell Colorado"
    }
  ],
  "categoryPages": [
    {
      "href": "/blog/category/blogs/page/2/",
      "title": "Blogs ideas &amp; guides – Page 2 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/page/3/",
      "title": "Blogs ideas &amp; guides – Page 3 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/page/4/",
      "title": "Blogs ideas &amp; guides – Page 4 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/page/5/",
      "title": "Blogs ideas &amp; guides – Page 5 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/page/6/",
      "title": "Blogs ideas &amp; guides – Page 6 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/page/7/",
      "title": "Blogs ideas &amp; guides – Page 7 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/page/8/",
      "title": "Blogs ideas &amp; guides – Page 8 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/landscape/page/2/",
      "title": "Landscape ideas &amp; guides – Page 2 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/landscape/page/3/",
      "title": "Landscape ideas &amp; guides – Page 3 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/patio/page/2/",
      "title": "Patio ideas &amp; guides – Page 2 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/patio/page/3/",
      "title": "Patio ideas &amp; guides – Page 3 | Ridgewell Colorado"
    },
    {
      "href": "/blog/category/blogs/patio/page/4/",
      "title": "Patio ideas &amp; guides – Page 4 | Ridgewell Colorado"
    }
  ]
};
  const allLinks: Array<{ href: string; title: string; displayTitle: string; category: string }> = [
  {
    "href": "/",
    "title": "Denver Hardscaping &amp; Landscape Design | Ridgewell Colorado",
    "displayTitle": "Home",
    "category": "Main Pages"
  },
  {
    "href": "/about/",
    "title": "About Us - Ridgewell Colorado",
    "displayTitle": "About Us",
    "category": "Main Pages"
  },
  {
    "href": "/projects/",
    "title": "Outdoor Living &amp; Hardscape Inspiration | Ridgewell Colorado",
    "displayTitle": "Case Studies & Projects",
    "category": "Main Pages"
  },
  {
    "href": "/contact/",
    "title": "Contact Us - Ridgewell Colorado",
    "displayTitle": "Free Consultation",
    "category": "Main Pages"
  },
  {
    "href": "/privacy-policy/",
    "title": "Privacy Policy | Ridgewell Colorado",
    "displayTitle": "Privacy Policy",
    "category": "Main Pages"
  },
  {
    "href": "/services/",
    "title": "Our Services - Ridgewell Colorado",
    "displayTitle": "All Services Overview",
    "category": "Services"
  },
  {
    "href": "/services/paver-patios/",
    "title": "Paver Patios &amp; Walkways Installation in Denver, CO",
    "displayTitle": "Paver Patios & Walkways",
    "category": "Services"
  },
  {
    "href": "/services/landscape-design/",
    "title": "Landscape Design &amp; Installation in Denver | Ridgewell",
    "displayTitle": "Landscape Design & Installation",
    "category": "Services"
  },
  {
    "href": "/services/outdoor-kitchens/",
    "title": "Outdoor Kitchen Installers Denver | Ridgewell Colorado",
    "displayTitle": "Outdoor Kitchens & Bars",
    "category": "Services"
  },
  {
    "href": "/services/pergolas/",
    "title": "Custom Pergola Builder and Installation in Denver CO",
    "displayTitle": "Custom Pergolas & Shade",
    "category": "Services"
  },
  {
    "href": "/services/fire-pits-fireplaces/",
    "title": "Gas Fireplace Installation Denver | Ridgewell Colorado",
    "displayTitle": "Fire Pits & Outdoor Fireplaces",
    "category": "Services"
  },
  {
    "href": "/services/retaining-walls/",
    "title": "Professional Retaining Walls Contractors in Denver, CO",
    "displayTitle": "Retaining Walls",
    "category": "Services"
  },
  {
    "href": "/services/xeriscape-landscaping/",
    "title": "Xeriscape Landscaping Service Denver | Ridgewell Colorado",
    "displayTitle": "Xeriscape Landscaping",
    "category": "Services"
  },
  {
    "href": "/service-areas/",
    "title": "Denver Metro Service Areas | Ridgewell Colorado",
    "displayTitle": "Denver Metro Hub",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/denver/",
    "title": "Denver, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Denver",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/arvada/",
    "title": "Arvada, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Arvada",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/aurora/",
    "title": "Aurora, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Aurora",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/brighton/",
    "title": "Brighton, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Brighton",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/broomfield/",
    "title": "Broomfield, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Broomfield",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/centennial/",
    "title": "Centennial, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Centennial",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/lakewood/",
    "title": "Lakewood, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Lakewood",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/littleton/",
    "title": "Littleton, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Littleton",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/parker/",
    "title": "Parker, CO Landscaping &amp; Hardscaping | Ridgewell",
    "displayTitle": "Parker",
    "category": "Service Areas"
  },
  {
    "href": "/service-areas/denver/paver-patios/",
    "title": "Paver Patios &amp; Walkways Installation in Denver, CO",
    "displayTitle": "Paver Patios &amp; Walkways Installation in Denver, CO",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/denver/landscape-design/",
    "title": "Landscape Design &amp; Installation in Denver | Ridgewell",
    "displayTitle": "Landscape Design &amp; Installation in Denver | Ridgewell",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/denver/outdoor-kitchens/",
    "title": "Outdoor Kitchen Installers Denver | Ridgewell Colorado",
    "displayTitle": "Outdoor Kitchen Installers Denver | Ridgewell Colorado",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/denver/pergolas/",
    "title": "Custom Pergola Builder and Installation in Denver CO",
    "displayTitle": "Custom Pergola Builder and Installation in Denver CO",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/denver/fire-pits-fireplaces/",
    "title": "Gas Fireplace Installation Denver | Ridgewell Colorado",
    "displayTitle": "Gas Fireplace Installation Denver | Ridgewell Colorado",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/denver/retaining-walls/",
    "title": "Professional Retaining Walls Contractors in Denver, CO",
    "displayTitle": "Professional Retaining Walls Contractors in Denver, CO",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/denver/xeriscape-landscaping/",
    "title": "Xeriscape Landscaping Service Denver | Ridgewell Colorado",
    "displayTitle": "Xeriscape Landscaping Service Denver | Ridgewell Colorado",
    "category": "Local: Denver"
  },
  {
    "href": "/service-areas/arvada/paver-patios/",
    "title": "Arvada CO Patio Installation Company | Ridgewell Colorado",
    "displayTitle": "Arvada CO Patio Installation Company | Ridgewell Colorado",
    "category": "Local: Arvada"
  },
  {
    "href": "/service-areas/arvada/landscape-design/",
    "title": "Landscape Design &amp; Installation Services Arvada | Ridgewell",
    "displayTitle": "Landscape Design &amp; Installation Services Arvada | Ridgewell",
    "category": "Local: Arvada"
  },
  {
    "href": "/service-areas/arvada/outdoor-kitchens/",
    "title": "Outdoor Kitchen Builder Arvada, CO | Ridgewell Colorado",
    "displayTitle": "Outdoor Kitchen Builder Arvada, CO | Ridgewell Colorado",
    "category": "Local: Arvada"
  },
  {
    "href": "/service-areas/arvada/xeriscape-landscaping/",
    "title": "Xeriscape Landscaping Services in Arvada, CO | Ridgewell",
    "displayTitle": "Xeriscape Landscaping Services in Arvada, CO | Ridgewell",
    "category": "Local: Arvada"
  },
  {
    "href": "/service-areas/aurora/paver-patios/",
    "title": "Patio Installation in Aurora, CO | Ridgewell Colorado",
    "displayTitle": "Patio Installation in Aurora, CO | Ridgewell Colorado",
    "category": "Local: Aurora"
  },
  {
    "href": "/service-areas/aurora/landscape-design/",
    "title": "Full-Service Landscaping Contractor Aurora, CO | Ridgewell",
    "displayTitle": "Full-Service Landscaping Contractor Aurora, CO | Ridgewell",
    "category": "Local: Aurora"
  },
  {
    "href": "/service-areas/aurora/xeriscape-landscaping/",
    "title": "Drought-Tolerant Landscaping in Aurora, CO | Ridgewell",
    "displayTitle": "Drought-Tolerant Landscaping in Aurora, CO | Ridgewell",
    "category": "Local: Aurora"
  },
  {
    "href": "/service-areas/lakewood/paver-patios/",
    "title": "Patio Installation Contractors in Lakewood CO | Ridgewell",
    "displayTitle": "Patio Installation Contractors in Lakewood CO | Ridgewell",
    "category": "Local: Lakewood"
  },
  {
    "href": "/service-areas/lakewood/landscape-design/",
    "title": "Full Landscape Design &amp; Installation Services Lakewood, CO",
    "displayTitle": "Full Landscape Design &amp; Installation Services Lakewood, CO",
    "category": "Local: Lakewood"
  },
  {
    "href": "/service-areas/lakewood/outdoor-kitchens/",
    "title": "Outdoor Kitchen Contractors Lakewood, CO | Ridgewell",
    "displayTitle": "Outdoor Kitchen Contractors Lakewood, CO | Ridgewell",
    "category": "Local: Lakewood"
  },
  {
    "href": "/service-areas/lakewood/xeriscape-landscaping/",
    "title": "Water-Wise Landscaping in Lakewood, CO",
    "displayTitle": "Water-Wise Landscaping in Lakewood, CO",
    "category": "Local: Lakewood"
  },
  {
    "href": "/service-areas/brighton/paver-patios/",
    "title": "Patio Paver Design &amp; Installation Contractors Brighton, CO",
    "displayTitle": "Patio Paver Design &amp; Installation Contractors Brighton, CO",
    "category": "Local: Brighton"
  },
  {
    "href": "/service-areas/brighton/landscape-design/",
    "title": "Landscaping Services Brighton, CO | Colorado Lawn &amp; Landscape | Ridgewell",
    "displayTitle": "Landscaping Services Brighton, CO | Colorado Lawn &amp; Landscape | Ridgewell",
    "category": "Local: Brighton"
  },
  {
    "href": "/service-areas/broomfield/xeriscape-landscaping/",
    "title": "HOA-Friendly Xeriscaping Services in Broomfield,CO Ridgewell",
    "displayTitle": "HOA-Friendly Xeriscaping Services in Broomfield,CO Ridgewell",
    "category": "Local: Broomfield, Centennial & Littleton"
  },
  {
    "href": "/service-areas/centennial/xeriscape-landscaping/",
    "title": "Xeric Landscaping Services for Centennial, CO | Ridgewell",
    "displayTitle": "Xeric Landscaping Services for Centennial, CO | Ridgewell",
    "category": "Local: Broomfield, Centennial & Littleton"
  },
  {
    "href": "/service-areas/littleton/xeriscape-landscaping/",
    "title": "Xeriscape Contractors Serving Littleton, CO | Ridgewell",
    "displayTitle": "Xeriscape Contractors Serving Littleton, CO | Ridgewell",
    "category": "Local: Broomfield, Centennial & Littleton"
  },
  {
    "href": "/blog/",
    "title": "Good ideas start here. | Ridgewell Colorado",
    "displayTitle": "Blog Main Page",
    "category": "Blog Archive"
  },
  {
    "href": "/blog/category/blogs/",
    "title": "Blogs ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/category/blogs/hardscape/",
    "title": "Hardscape ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Hardscape ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/category/landscape/",
    "title": "Landscape ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Landscape ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/category/blogs/patio/",
    "title": "Patio ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Patio ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/category/blogs/pool/",
    "title": "Pool ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Pool ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/category/service/",
    "title": "Service ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Service ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/category/uncategorized/",
    "title": "Uncategorized ideas &amp; guides | Ridgewell Colorado",
    "displayTitle": "Uncategorized ideas &amp; guides",
    "category": "Blog Categories"
  },
  {
    "href": "/blog/page/2/",
    "title": "Good ideas start here. – Page 2 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 2 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/page/3/",
    "title": "Good ideas start here. – Page 3 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 3 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/page/4/",
    "title": "Good ideas start here. – Page 4 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 4 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/page/5/",
    "title": "Good ideas start here. – Page 5 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 5 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/page/6/",
    "title": "Good ideas start here. – Page 6 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 6 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/page/7/",
    "title": "Good ideas start here. – Page 7 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 7 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/page/8/",
    "title": "Good ideas start here. – Page 8 | Ridgewell Colorado",
    "displayTitle": "Good ideas start here. – Page 8 | Ridgewell Colorado",
    "category": "Blog Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/2/",
    "title": "Blogs ideas &amp; guides – Page 2 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 2 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/3/",
    "title": "Blogs ideas &amp; guides – Page 3 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 3 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/4/",
    "title": "Blogs ideas &amp; guides – Page 4 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 4 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/5/",
    "title": "Blogs ideas &amp; guides – Page 5 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 5 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/6/",
    "title": "Blogs ideas &amp; guides – Page 6 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 6 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/7/",
    "title": "Blogs ideas &amp; guides – Page 7 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 7 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/page/8/",
    "title": "Blogs ideas &amp; guides – Page 8 | Ridgewell Colorado",
    "displayTitle": "Blogs ideas &amp; guides – Page 8 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/landscape/page/2/",
    "title": "Landscape ideas &amp; guides – Page 2 | Ridgewell Colorado",
    "displayTitle": "Landscape ideas &amp; guides – Page 2 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/landscape/page/3/",
    "title": "Landscape ideas &amp; guides – Page 3 | Ridgewell Colorado",
    "displayTitle": "Landscape ideas &amp; guides – Page 3 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/patio/page/2/",
    "title": "Patio ideas &amp; guides – Page 2 | Ridgewell Colorado",
    "displayTitle": "Patio ideas &amp; guides – Page 2 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/patio/page/3/",
    "title": "Patio ideas &amp; guides – Page 3 | Ridgewell Colorado",
    "displayTitle": "Patio ideas &amp; guides – Page 3 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/category/blogs/patio/page/4/",
    "title": "Patio ideas &amp; guides – Page 4 | Ridgewell Colorado",
    "displayTitle": "Patio ideas &amp; guides – Page 4 | Ridgewell Colorado",
    "category": "Category Archive Pages"
  },
  {
    "href": "/blog/how-to-redo-a-paver-walkway/",
    "title": "How to Fix and Redo an Old Paver Walkway",
    "displayTitle": "How to Fix and Redo an Old Paver Walkway",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-transition-a-techno-bloc-style-paver-walkway-to-a-driveway/",
    "title": "Paver Walkway to Driveway Transition Guide",
    "displayTitle": "Paver Walkway to Driveway Transition Guide",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-put-a-paver-walkway-over-a-concrete-walkway/",
    "title": "Installing Pavers Over an Existing Concrete Walkway",
    "displayTitle": "Installing Pavers Over an Existing Concrete Walkway",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/is-silica-sand-recommended-for-stone-paver-walkways/",
    "title": "Should You Use Silica Sand for a Stone Walkway?",
    "displayTitle": "Should You Use Silica Sand for a Stone Walkway?",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-keep-mulch-from-washing-onto-a-paver-walkway/",
    "title": "Stop Mulch From Spilling Onto Your Paver Walkway",
    "displayTitle": "Stop Mulch From Spilling Onto Your Paver Walkway",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-finish-off-the-sides-of-a-paver-walkway/",
    "title": "Finishing a Paver Walkway's Edges the Right Way",
    "displayTitle": "Finishing a Paver Walkway's Edges the Right Way",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-lay-down-an-18x18-paver-walkway/",
    "title": "Installing an 18x18 Paver Walkway Step by Step",
    "displayTitle": "Installing an 18x18 Paver Walkway Step by Step",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-build-a-raised-paver-walkway/",
    "title": "Building a Raised Walkway Over Wet or Low Ground",
    "displayTitle": "Building a Raised Walkway Over Wet or Low Ground",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-slope-a-paver-walkway/",
    "title": "Getting the Right Slope on a Paver Walkway",
    "displayTitle": "Getting the Right Slope on a Paver Walkway",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/install-a-brick-paver-walkway-on-soil/",
    "title": "Installing Brick Pavers Based on Your Soil Type",
    "displayTitle": "Installing Brick Pavers Based on Your Soil Type",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/build-a-paver-walkway-and-patio/",
    "title": "Combining a Paver Walkway and Patio: A Full Guide",
    "displayTitle": "Combining a Paver Walkway and Patio: A Full Guide",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-install-a-paver-front-walkway/",
    "title": "Designing and Building a Paver Front Walkway",
    "displayTitle": "Designing and Building a Paver Front Walkway",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-build-a-paver-walkway/",
    "title": "DIY Paver Walkway: What to Buy and Rent at Home Depot",
    "displayTitle": "DIY Paver Walkway: What to Buy and Rent at Home Depot",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-much-does-a-paver-walkway-cost-installed/",
    "title": "Installed Paver Walkway Cost: A Complete Breakdown",
    "displayTitle": "Installed Paver Walkway Cost: A Complete Breakdown",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-do-you-install-a-paver-walkway/",
    "title": "The Paver Walkway Installation Process Explained",
    "displayTitle": "The Paver Walkway Installation Process Explained",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/can-i-just-use-paver-sand-for-a-walkway/",
    "title": "Do You Need a Gravel Base or Just Sand for Pavers",
    "displayTitle": "Do You Need a Gravel Base or Just Sand for Pavers",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-build-a-concrete-paver-walkway/",
    "title": "Building a Concrete Paver Walkway the Right Way",
    "displayTitle": "Building a Concrete Paver Walkway the Right Way",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-build-a-brick-paver-walkway/",
    "title": "Brick Paver Walkway Guide: Steps and Material Tips",
    "displayTitle": "Brick Paver Walkway Guide: Steps and Material Tips",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-level-ground-for-a-paver-walkway/",
    "title": "Leveling Ground for Pavers: Tools and Techniques",
    "displayTitle": "Leveling Ground for Pavers: Tools and Techniques",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-thick-should-paver-base-be-for-a-walkway/",
    "title": "Paver Walkway Base Depth: A Complete Guide",
    "displayTitle": "Paver Walkway Base Depth: A Complete Guide",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/what-is-the-standard-width-of-a-paver-walkway/",
    "title": "How Wide Should a Paver Walkway Be",
    "displayTitle": "How Wide Should a Paver Walkway Be",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-make-a-curved-paver-walkway/",
    "title": "Building a Curved Paver Walkway the Right Way",
    "displayTitle": "Building a Curved Paver Walkway the Right Way",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-build-a-paver-walkway-on-a-slope/",
    "title": "Sloped Paver Walkway Guide: Steps or Gradual Grade",
    "displayTitle": "Sloped Paver Walkway Guide: Steps or Gradual Grade",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-much-does-a-paver-walkway-cost/",
    "title": "Paver Walkway Cost: What to Really Expect to Pay",
    "displayTitle": "Paver Walkway Cost: What to Really Expect to Pay",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-lay-a-paver-walkway/",
    "title": "How to Lay a Paver Walkway: Patterns and Techniques",
    "displayTitle": "How to Lay a Paver Walkway: Patterns and Techniques",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-to-build-a-paver-walkway-a-complete-diy-and-hiring-guide/",
    "title": "Paver Walkway Guide: Steps, Cost, and Common Mistakes",
    "displayTitle": "Paver Walkway Guide: Steps, Cost, and Common Mistakes",
    "category": "Paver Walkways & Paths"
  },
  {
    "href": "/blog/how-do-you-make-a-driveway-with-pavers/",
    "title": "Paver Driveway Installation: A Complete Guide",
    "displayTitle": "Paver Driveway Installation: A Complete Guide",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/paver-driveway-or-concrete/",
    "title": "Concrete vs Paver Driveway: Pros, Cons, and Cost",
    "displayTitle": "Concrete vs Paver Driveway: Pros, Cons, and Cost",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/the-best-paver-driveway-ideas-for-your-home/",
    "title": "Best Paver Driveway Ideas for Every Home Ridgewell Colorado",
    "displayTitle": "Best Paver Driveway Ideas for Every Home Ridgewell Colorado",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-much-does-a-paver-driveway-cost/",
    "title": "Paver Driveway Cost: Prices and What to Expect",
    "displayTitle": "Paver Driveway Cost: Prices and What to Expect",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/adding-a-turnaround-to-your-driveway/",
    "title": "Driveway Turnaround Ideas, Sizes, and Costs",
    "displayTitle": "Driveway Turnaround Ideas, Sizes, and Costs",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-to-turn-a-patio-into-a-driveway-with-pavers/",
    "title": "Converting a Paver Patio Into a Driveway Ridgewell Colorado",
    "displayTitle": "Converting a Paver Patio Into a Driveway Ridgewell Colorado",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/patio-and-driveway-from-molding/",
    "title": "How to Stop Your Patio or Driveway From Growing Mold",
    "displayTitle": "How to Stop Your Patio or Driveway From Growing Mold",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/install-patio-blocks-as-a-driveway/",
    "title": "Can You Install Patio Blocks as a Driveway",
    "displayTitle": "Can You Install Patio Blocks as a Driveway",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-to-have-a-patio-on-your-driveway/",
    "title": "Patio on Your Driveway: A Homeowner's Guide",
    "displayTitle": "Patio on Your Driveway: A Homeowner's Guide",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-to-clean-a-gravel-driveway-or-patio/",
    "title": "Gravel Driveway Cleaning: What Actually Works",
    "displayTitle": "Gravel Driveway Cleaning: What Actually Works",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/choose-the-right-plate-compactor-size-for-a-patio-or-driveway/",
    "title": "Plate Compactor Size Guide: Patio vs. Driveway Base",
    "displayTitle": "Plate Compactor Size Guide: Patio vs. Driveway Base",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-much-does-it-cost-to-resurface-a-driveway-or-patio-2/",
    "title": "Driveway &amp; Patio Resurfacing Cost: What to Expect",
    "displayTitle": "Driveway &amp; Patio Resurfacing Cost: What to Expect",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/do-professionals-seal-cracks-in-driveways-or-patios/",
    "title": "Should You Seal Driveway Cracks or Repair the Base?",
    "displayTitle": "Should You Seal Driveway Cracks or Repair the Base?",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/can-you-use-patio-stones-for-a-driveway/",
    "title": "Can You Use Patio Stones for a Driveway",
    "displayTitle": "Can You Use Patio Stones for a Driveway",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-much-does-it-cost-to-resurface-a-driveway-or-patio/",
    "title": "Driveway &amp; Patio Resurfacing Cost What to Expect | Ridgewell",
    "displayTitle": "Driveway &amp; Patio Resurfacing Cost What to Expect",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/patio-driveway-cleaning-near-me/",
    "title": "Local Patio &amp; Driveway Cleaning Guide | Ridgewell CO",
    "displayTitle": "Local Patio &amp; Driveway Cleaning Guide CO",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/can-you-put-patio-furniture-in-a-driveway/",
    "title": "Can You Put Patio Furniture in a Driveway? | Ridgewell Guide",
    "displayTitle": "Can You Put Patio Furniture in a Driveway? Guide",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/can-patio-pavers-be-used-for-a-driveway/",
    "title": "Can Patio Pavers Be Used for a Driveway? | Ridgewell Guide",
    "displayTitle": "Can Patio Pavers Be Used for a Driveway? Guide",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/can-stone-pavers-be-used-for-driveways-and-patios/",
    "title": "Stone Pavers for Driveways &amp; Patios: Colorado Guide",
    "displayTitle": "Stone Pavers for Driveways &amp; Patios: Colorado Guide",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/how-to-turn-driveway-into-a-patio/",
    "title": "How to Turn Driveway Into a Patio Complete Conversion Guide",
    "displayTitle": "How to Turn Driveway Into a Patio Complete Conversion Guide",
    "category": "Driveways & Conversions"
  },
  {
    "href": "/blog/right-plate-compactor-size-for-a-patio/",
    "title": "Right Plate Compactor for Your Patio or Driveway Base",
    "displayTitle": "Right Plate Compactor for Your Patio or Driveway Base",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/paver-patio-with-fire-pit-cost-guide/",
    "title": "How Much Does A Paver Patio With A Fire Pit Cost?",
    "displayTitle": "How Much Does A Paver Patio With A Fire Pit Cost?",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/do-paver-patios-add-home-value/",
    "title": "Does A Paver Patio Increase Home Value? | Ridgewell Colorado",
    "displayTitle": "Does A Paver Patio Increase Home Value?",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/paver-base-depth-for-patios-proper-installation-tips/",
    "title": "How Deep Should Paver Base Be For Patio | Ridgewell Colorado",
    "displayTitle": "How Deep Should Paver Base Be For Patio",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/what-is-a-paver-patio/",
    "title": "What Is a Paver Patio? Outdoor Design Guide | Ridgewell",
    "displayTitle": "What Is a Paver Patio? Outdoor Design Guide",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/how-to-clean-a-paver-patio/",
    "title": "Best Way to Clean Paver Patio Simple DIY Guide | Ridgewell",
    "displayTitle": "Best Way to Clean Paver Patio Simple DIY Guide",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/how-to-install-paver-stone-patio/",
    "title": "How to Install a Paver Stone Patio | Step-by-Step Guide",
    "displayTitle": "How to Install a Paver Stone Patio | Step-by-Step Guide",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/how-much-does-a-20x20-paver-patio-cost/",
    "title": "How Much Does a 20x20 Paver Patio Cost? | 2026 Price Guide",
    "displayTitle": "How Much Does a 20x20 Paver Patio Cost? | 2026 Price Guide",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/how-to-build-a-paver-patio/",
    "title": "How to Build a Paver Patio 2026 Guide | Ridgewell Colorado",
    "displayTitle": "How to Build a Paver Patio 2026 Guide",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/does-hardscape-increase-home-value/",
    "title": "Does Hardscape Increase Home Value? | Ridgewell Colorado",
    "displayTitle": "Does Hardscape Increase Home Value?",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/what-is-hardscape-softscape-in-yard-design/",
    "title": "Hardscape vs Softscape | Ridgewell Colorado",
    "displayTitle": "Hardscape vs Softscape",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/how-to-hardscape-a-yard/",
    "title": "How to Hardscape a Yard | Step-by-Step Landscaping Guide",
    "displayTitle": "How to Hardscape a Yard | Step-by-Step Landscaping Guide",
    "category": "Patios & Hardscaping"
  },
  {
    "href": "/blog/how-deep-should-rock-be-for-landscaping/",
    "title": "How Deep Should Rock Be for Landscaping? Complete Guide",
    "displayTitle": "How Deep Should Rock Be for Landscaping? Complete Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-to-install-landscape-blocks/",
    "title": "How To Install Landscape Blocks for Durable Retaining Walls",
    "displayTitle": "How To Install Landscape Blocks for Durable Retaining Walls",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-to-remove-landscape-rock/",
    "title": "Landscape Rock Removal Guide for Clean Yard Renovations",
    "displayTitle": "Landscape Rock Removal Guide for Clean Yard Renovations",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-to-landscape-around-trees/",
    "title": "How To Landscape Around Trees Safely &amp; Effectively Guide",
    "displayTitle": "How To Landscape Around Trees Safely &amp; Effectively Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-to-get-a-landscaping-license/",
    "title": "How To Get A Landscaping License Step by Step Guide",
    "displayTitle": "How To Get A Landscaping License Step by Step Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/do-it-yourself-backyard-landscaping/",
    "title": "Backyard Landscaping DIY Ideas That Actually Work",
    "displayTitle": "Backyard Landscaping DIY Ideas That Actually Work",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/can-landscaping-improve-home-value/",
    "title": "How Landscaping Directly Impacts Property Value | Ridgewell",
    "displayTitle": "How Landscaping Directly Impacts Property Value",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-is-a-structural-landscaper/",
    "title": "What Is a Structural Landscaper? Complete Home Guide",
    "displayTitle": "What Is a Structural Landscaper? Complete Home Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/do-it-yourself-landscaping-projects/",
    "title": "Top DIY Landscaping Projects to Transform Your Yard",
    "displayTitle": "Top DIY Landscaping Projects to Transform Your Yard",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/do-it-yourself-landscape-lighting/",
    "title": "DIY Landscape Lighting That Transforms Your Outdoor Space",
    "displayTitle": "DIY Landscape Lighting That Transforms Your Outdoor Space",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/do-it-yourself-concrete-landscape-curbing/",
    "title": "Concrete Landscape Curbing DIY Guide for Denver Homeowners",
    "displayTitle": "Concrete Landscape Curbing DIY Guide for Denver Homeowners",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-to-install-low-voltage-landscape-lighting/",
    "title": "Install Landscape Lighting Like a Pro: Step-by-Step Guide",
    "displayTitle": "Install Landscape Lighting Like a Pro: Step-by-Step Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-is-the-difference-between-landscaping-and-hardscaping/",
    "title": "Landscaping vs Hardscaping Key Differences Explained",
    "displayTitle": "Landscaping vs Hardscaping Key Differences Explained",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/xeriscape-colorado-landscaping-ideas/",
    "title": "Front Yard Xeriscape Landscaping Ideas for Colorado Homes",
    "displayTitle": "Front Yard Xeriscape Landscaping Ideas for Colorado Homes",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-level-of-education-is-required-for-a-landscape-designer/",
    "title": "Education Requirements for a Landscape Designer | 2026 Guide",
    "displayTitle": "Education Requirements for a Landscape Designer | 2026 Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/creative-do-it-yourself-landscaping-ideas/",
    "title": "Creative DIY Landscaping Ideas for Denver Homeowners",
    "displayTitle": "Creative DIY Landscaping Ideas for Denver Homeowners",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-to-landscape-your-front-yard/",
    "title": "How to Landscape Your Front Yard | Step-by-Step Guide 2026",
    "displayTitle": "How to Landscape Your Front Yard | Step-by-Step Guide 2026",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/spring-mulching-and-its-benefits/",
    "title": "Professional Spring Mulching &amp; It's Benefits | Ridgewell",
    "displayTitle": "Professional Spring Mulching &amp; It's Benefits",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-much-do-landscapers-charge-per-hour/",
    "title": "Average Landscaping Costs Per Hour in 2026 | Ridgewell",
    "displayTitle": "Average Landscaping Costs Per Hour in 2026",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/do-you-tip-landscapers/",
    "title": "Do You Tip Landscapers? What Homeowners Should Know",
    "displayTitle": "Do You Tip Landscapers? What Homeowners Should Know",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-do-landscape-architects-do/",
    "title": "Landscape Architecture Career Guide | Ridgewell Colorado",
    "displayTitle": "Landscape Architecture Career Guide",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-is-landscape-architecture/",
    "title": "What Is Landscape Architecture? | Ridgewell Colorado",
    "displayTitle": "What Is Landscape Architecture?",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-tools-do-landscape-designers-use/",
    "title": "What Tools Do Landscape Designers Use | Ridgewell Colorado",
    "displayTitle": "What Tools Do Landscape Designers Use",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-do-landscapers-do/",
    "title": "What Do Landscapers Do? | Ridgewell Colorado",
    "displayTitle": "What Do Landscapers Do?",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-much-do-landscaper-make/",
    "title": "How Much Do Landscapers Make | Ridgewell Colorado",
    "displayTitle": "How Much Do Landscapers Make",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/design-landscaping-in-backyard/",
    "title": "Creative Ideas for Backyard Landscaping and Outdoor Planning | Ridgewell",
    "displayTitle": "Creative Ideas for Backyard Landscaping and Outdoor Planning",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-much-does-landscaping-cost/",
    "title": "How Much Does Landscaping Cost - Ridgewell Colorado",
    "displayTitle": "How Much Does Landscaping Cost - Ridgewell Colorado",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-types-of-plants-are-used-in-landscaping/",
    "title": "What Types of Plants Are Used in Landscaping | Ridgewell",
    "displayTitle": "What Types of Plants Are Used in Landscaping",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/what-is-landscaping/",
    "title": "What Is Landscaping? A Complete Guide for Denver Homeowners",
    "displayTitle": "What Is Landscaping? A Complete Guide for Denver Homeowners",
    "category": "Landscaping, Plants & Xeriscaping"
  },
  {
    "href": "/blog/how-much-does-hardscaping-cost/",
    "title": "How Much Does Hardscaping Cost? In 2026 | Ridgewell Colorado",
    "displayTitle": "How Much Does Hardscaping Cost? In 2026",
    "category": "Landscape Tips & Professional Advice"
  },
  {
    "href": "/blog/what-does-hardscaping-mean/",
    "title": "What Does Hardscaping Mean? | Ridgewell Colorado",
    "displayTitle": "What Does Hardscaping Mean?",
    "category": "Landscape Tips & Professional Advice"
  },
  {
    "href": "/blog/what-is-hardscaping/",
    "title": "What Is Hardscaping? | Complete Landscaping Guide 2026",
    "displayTitle": "What Is Hardscaping? | Complete Landscaping Guide 2026",
    "category": "Landscape Tips & Professional Advice"
  }
];

  let searchQuery = $state('');
  let activeBlogTopic = $state('all');

  const filteredSearchResults = $derived(
    searchQuery.trim() === ''
      ? []
      : allLinks.filter(l =>
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.href.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (l.displayTitle && l.displayTitle.toLowerCase().includes(searchQuery.toLowerCase()))
        )
  );

  const displayedBlogGroups = $derived(
    activeBlogTopic === 'all'
      ? categorizedBlogs
      : categorizedBlogs.filter(group => group.name === activeBlogTopic)
  );

  const totalBlogCount = categorizedBlogs.reduce((acc, g) => acc + g.links.length, 0);
  const totalLocalCount = localServicesByCity.reduce((acc, c) => acc + c.links.length, 0);
</script>

<Seo {metadata} />

<div class="sitemap-page">
  <section class="inner-hero">
    <div class="wrap">
      <div>
        <div class="breadcrumb"><a href="/">Home</a> / Sitemap</div>
        <span class="kicker">SITE DIRECTORY</span>
        <h1>Explore Ridgewell</h1>
        <p>A well-organized directory of our hardscaping and landscape services, Denver metro communities, project galleries, and comprehensive homeowner guides.</p>
        <div class="sitemap-search-bar">
          <div class="search-input-wrapper">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="search"
              bind:value={searchQuery}
              placeholder="Search all 160+ pages, services, cities & guides..."
              aria-label="Search sitemap"
            />
            {#if searchQuery.trim() !== ''}
              <button type="button" class="clear-search-btn" onclick={() => (searchQuery = '')} aria-label="Clear search">✕</button>
            {/if}
          </div>
          {#if searchQuery.trim() !== ''}
            <div class="search-status-badge">
              Found {filteredSearchResults.length} {filteredSearchResults.length === 1 ? 'match' : 'matches'}
            </div>
          {/if}
        </div>

        {#if searchQuery.trim() === ''}
          <nav class="sitemap-nav-pills" aria-label="Sitemap sections">
            <a href="#overview">Core Pages</a>
            <a href="#services">Services ({services.length})</a>
            <a href="#service-areas">City Hubs ({serviceAreaHubs.length})</a>
            <a href="#local-services" class="hidden">Local Services ({totalLocalCount})</a>
            <a href="#guides" class="hidden">Guides & Blog ({totalBlogCount})</a>
            <a href="#archives" class="hidden">Archives</a>
          </nav>
        {/if}
      </div>
    </div>
  </section>

  <div class="wrap sitemap-container">
    {#if searchQuery.trim() !== ''}
      <section class="sitemap-section search-results-section">
        <div class="section-title-wrap">
          <span class="section-badge">Live Search</span>
          <h2>Search Results for &ldquo;{searchQuery}&rdquo;</h2>
          <p>Showing {filteredSearchResults.length} matching pages across the entire website.</p>
        </div>

        {#if filteredSearchResults.length === 0}
          <div class="no-results-box">
            <p>No pages found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button type="button" class="btn outline" onclick={() => (searchQuery = '')}>Clear search and view all</button>
          </div>
        {:else}
          <div class="search-results-grid">
            {#each filteredSearchResults as result (result.href)}
              <a href={result.href} class="search-result-card">
                <div class="search-card-meta">
                  <span class="category-pill">{result.category}</span>
                  <span class="arrow-indicator">↗</span>
                </div>
                <h3>{result.displayTitle || result.title}</h3>
                <span class="link-url">{result.href}</span>
              </a>
            {/each}
          </div>
        {/if}
      </section>
    {:else}
      <!-- Section 1: Core & Company Pages -->
      <section id="overview" class="sitemap-section">
        <div class="section-title-wrap">
          <span class="section-badge">Essential</span>
          <h2>Company & Inspiration</h2>
          <p>Key information about Ridgewell, our completed project galleries, and consultation booking.</p>
        </div>

        <div class="cards-grid core-grid">
          {#each mainPages as page (page.href)}
            <a href={page.href} class="sitemap-card highlight-card">
              <div class="card-header">
                <span class="card-icon-wrapper">
                  {#if page.iconKey === 'home'}
                    <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  {:else if page.iconKey === 'users'}
                    <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  {:else if page.iconKey === 'gallery'}
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  {:else if page.iconKey === 'phone'}
                    <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path></svg>
                  {:else}
                    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  {/if}
                </span>
                <span class="card-badge">{page.badge}</span>
              </div>
              <div class="card-content">
                <h3>{page.displayTitle || page.title}</h3>
                {#if page.desc}<p>{page.desc}</p>{/if}
              </div>
              <div class="card-footer">
                <span class="url-hint">{page.href}</span>
                <span class="card-arrow">↗</span>
              </div>
            </a>
          {/each}
        </div>
      </section>

      <!-- Section 2: Services -->
      <section id="services" class="sitemap-section">
        <div class="section-title-wrap">
          <span class="section-badge">Specialties</span>
          <h2>Hardscape & Landscape Services</h2>
          <p>Our craftsmanship and installation capabilities across the Denver metro area.</p>
        </div>

        <div class="cards-grid services-grid">
          {#each services as service (service.href)}
            <a href={service.href} class="sitemap-card service-card">
              <div class="card-header">
                <span class="card-icon-wrapper">
                  {#if service.iconKey === 'layers'}
                    <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  {:else if service.iconKey === 'grid'}
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  {:else if service.iconKey === 'leaf'}
                    <svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  {:else if service.iconKey === 'flame'}
                    <svg viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                  {:else if service.iconKey === 'sun'}
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                  {:else if service.iconKey === 'fire'}
                    <svg viewBox="0 0 24 24"><path d="M12 2c1.5 3 3.5 5 4.5 7.5 1 2.5 1 4.5 0 6.5s-3 3-4.5 4c-1.5-1-3.5-2-4.5-4s-1-4 0-6.5C8.5 7 10.5 5 12 2z"></path></svg>
                  {:else if service.iconKey === 'wall'}
                    <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="9" x2="22" y2="9"></line><line x1="2" y1="15" x2="22" y2="15"></line><line x1="8" y1="4" x2="8" y2="9"></line><line x1="16" y1="4" x2="16" y2="9"></line><line x1="12" y1="9" x2="12" y2="15"></line><line x1="6" y1="15" x2="6" y2="20"></line><line x1="18" y1="15" x2="18" y2="20"></line></svg>
                  {:else}
                    <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                  {/if}
                </span>
                <span class="card-arrow">↗</span>
              </div>
              <div class="card-content">
                <h3>{service.displayTitle || service.title}</h3>
                {#if service.desc}<p>{service.desc}</p>{/if}
              </div>
            </a>
          {/each}
        </div>
      </section>

      <!-- Section 3: Denver Metro Service Areas -->
      <section id="service-areas" class="sitemap-section">
        <div class="section-title-wrap">
          <span class="section-badge">Coverage</span>
          <h2>Denver Metro Service Areas</h2>
          <p>Cities and residential communities where Ridgewell provides in-person consultations and installations.</p>
        </div>

        <div class="city-hubs-grid">
          {#each serviceAreaHubs as hub (hub.href)}
            <a href={hub.href} class="city-hub-chip">
              <span class="pin-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span class="city-name">{hub.cityName}</span>
              <span class="hub-arrow">↗</span>
            </a>
          {/each}
        </div>
      </section>

      <!-- Section 4: Local Neighborhood Services -->
      <div class="hidden">
      <section id="local-services" class="sitemap-section">
        <div class="section-title-wrap">
          <span class="section-badge">Localized</span>
          <h2>Local Community Service Pages</h2>
          <p>Dedicated service pages tailored to specific cities and neighborhood regulations.</p>
        </div>

        <div class="cards-grid city-services-grid">
          {#each localServicesByCity as cityGroup (cityGroup.city)}
            <div class="city-group-card">
              <div class="city-card-header">
                <div class="city-title-row">
                  <svg viewBox="0 0 24 24" class="city-icon"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path></svg>
                  <h3>{cityGroup.city}</h3>
                </div>
                <span class="link-count-badge">{cityGroup.links.length} {cityGroup.links.length === 1 ? 'service' : 'services'}</span>
              </div>
              <ul class="city-links-list">
                {#each cityGroup.links as link (link.href)}
                  <li>
                    <a href={link.href}>
                      <span class="bullet-dot">•</span>
                      <span class="item-text">{link.title}</span>
                      <span class="item-arrow">↗</span>
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </section>
      </div>

      <!-- Section 5: Blog Posts & Guides -->
      <div class="hidden">
      <section id="guides" class="sitemap-section">
        <div class="section-title-wrap">
          <span class="section-badge">Knowledge</span>
          <h2>Outdoor Living Guides &amp; Blog Posts</h2>
          <p>Browse our complete library of 90 expert guides covering pavers, installation tips, design ideas, and maintenance.</p>
        </div>

        <div class="guides-filter-bar">
          <span class="filter-label">Filter by topic:</span>
          <div class="filter-pills-row">
            <button
              type="button"
              class:active={activeBlogTopic === 'all'}
              onclick={() => (activeBlogTopic = 'all')}
            >
              All Topics ({totalBlogCount})
            </button>
            {#each categorizedBlogs as topic (topic.name)}
              <button
                type="button"
                class:active={activeBlogTopic === topic.name}
                onclick={() => (activeBlogTopic = topic.name)}
              >
                {topic.name} ({topic.links.length})
              </button>
            {/each}
          </div>
        </div>

        <div class="blog-topics-container">
          {#each displayedBlogGroups as topic (topic.name)}
            <div class="topic-block">
              <div class="topic-header">
                <h3>{topic.name}</h3>
                <span class="topic-count">{topic.links.length} guides</span>
              </div>
              <div class="guides-links-grid">
                {#each topic.links as article (article.href)}
                  <a href={article.href} class="guide-link-item">
                    <svg viewBox="0 0 24 24" class="doc-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <span class="guide-title">{article.displayTitle || article.title}</span>
                    <span class="guide-arrow">↗</span>
                  </a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>

      <!-- Section 6: Blog Archives & Categories -->
      <section id="archives" class="sitemap-section">
        <div class="section-title-wrap">
          <span class="section-badge">Index</span>
          <h2>Blog Archives &amp; Categories</h2>
          <p>Direct navigation to blog category landing pages and chronological paginated archives.</p>
        </div>

        <div class="archives-grid">
          <!-- Category Landing Pages -->
          <div class="archive-card">
            <div class="archive-card-header">
              <h3>Category Landing Hubs</h3>
              <span class="link-count-badge">8 Hubs</span>
            </div>
            <ul class="archive-list">
              <li>
                <a href={blogArchives.main.href}>
                  <strong>{blogArchives.main.title}</strong>
                  <span class="item-arrow">↗</span>
                </a>
              </li>
              {#each blogArchives.categories as cat (cat.href)}
                <li>
                  <a href={cat.href}>
                    <span>{cat.title}</span>
                    <span class="item-arrow">↗</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Main Blog Paginated Pages -->
          <div class="archive-card">
            <div class="archive-card-header">
              <h3>Main Blog Paginated Pages</h3>
              <span class="link-count-badge">7 Pages</span>
            </div>
            <p class="archive-desc">Sequential archive views for the complete blog feed:</p>
            <div class="chips-list">
              {#each blogArchives.blogPages as page (page.href)}
                <a href={page.href} class="pagination-chip">
                  <span>{page.title.replace('Good ideas start here.', 'Page')}</span>
                  <span class="chip-arrow">↗</span>
                </a>
              {/each}
            </div>
          </div>

          <!-- Category Paginated Archives -->
          <div class="archive-card">
            <div class="archive-card-header">
              <h3>Category Paginated Archives</h3>
              <span class="link-count-badge">12 Pages</span>
            </div>
            <p class="archive-desc">Deep paginated pages under individual blog categories:</p>
            <div class="chips-list">
              {#each blogArchives.categoryPages as page (page.href)}
                <a href={page.href} class="pagination-chip secondary">
                  <span>{page.title.replace('ideas & guides', '')}</span>
                  <span class="chip-arrow">↗</span>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </section>
      </div>
    {/if}
  </div>

  <section class="cta">
    <div class="wrap">
      <span class="kicker">LOOKING FOR A SPECIFIC PROJECT?</span>
      <h2>You don’t need a finished plan.<br/>That’s where we come in.</h2>
      <p>Show us the space. Tell us what you want to change.<br/>We’ll help you work out the next step at a free consultation.</p>
      <div class="actions">
        <a class="btn" href="/contact/">Get my free consultation<span aria-hidden="true">↗</span></a>
        <a class="cta-phone" href="tel:+17208825772">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path></svg>
          720-882-5772
        </a>
      </div>
      <small>Meet in person. Ask questions. Explore your options.</small>
    </div>
  </section>
</div>

<style>
  .hidden {
    display: none !important;
  }

  .sitemap-page {
    background-color: #faf8f5;
    color: var(--ink, #33282a);
    padding-bottom: 60px;
  }

  .sitemap-container {
    padding-top: 48px;
    padding-bottom: 60px;
  }

  /* Search Bar */
  .sitemap-search-bar {
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    max-width: 680px;
  }

  .search-input-wrapper {
    position: relative;
    flex: 1;
    min-width: 280px;
  }

  .search-input-wrapper input {
    width: 100%;
    padding: 14px 44px 14px 44px;
    border: 1.5px solid var(--line, #e3ddd5);
    border-radius: 6px;
    font-size: 15px;
    background: #fff;
    color: var(--ink, #33282a);
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    outline: none;
    transition: all 0.2s ease;
  }

  .search-input-wrapper input:focus {
    border-color: var(--rust, #ac4a34);
    box-shadow: 0 0 0 3px rgba(172, 74, 52, 0.15);
  }

  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    stroke: var(--muted, #706865);
    pointer-events: none;
  }

  .clear-search-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--muted, #706865);
    font-size: 14px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .clear-search-btn:hover {
    color: var(--ink, #33282a);
    background: #f0eae1;
  }

  .search-status-badge {
    background: var(--rust, #ac4a34);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 20px;
    letter-spacing: 0.02em;
  }

  /* Quick Nav Pills */
  .sitemap-nav-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
  }

  .sitemap-nav-pills a {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink, #33282a);
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    padding: 7px 14px;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .sitemap-nav-pills a:hover {
    background: var(--rust, #ac4a34);
    color: #fff;
    border-color: var(--rust, #ac4a34);
  }

  /* Sections */
  .sitemap-section {
    margin-bottom: 64px;
  }

  .section-title-wrap {
    margin-bottom: 28px;
  }

  .section-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--rust, #ac4a34);
    margin-bottom: 6px;
  }

  .section-title-wrap h2 {
    font-size: 28px;
    margin: 0 0 8px 0;
    color: var(--ink, #33282a);
  }

  .section-title-wrap p {
    color: var(--muted, #706865);
    font-size: 15px;
    margin: 0;
    max-width: 640px;
  }

  /* Cards Grid */
  .cards-grid {
    display: grid;
    gap: 20px;
  }

  .core-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  .city-services-grid {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }

  /* Card styling */
  .sitemap-card {
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 8px;
    padding: 24px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .sitemap-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    border-color: var(--rust, #ac4a34);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .card-icon-wrapper {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: var(--cream, #f5f1e9);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--rust, #ac4a34);
  }

  .card-icon-wrapper svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
  }

  .card-badge {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--muted, #706865);
    background: #f0ede6;
    padding: 3px 8px;
    border-radius: 12px;
    letter-spacing: 0.04em;
  }

  .card-arrow {
    font-size: 16px;
    font-weight: 600;
    color: var(--muted, #706865);
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .sitemap-card:hover .card-arrow {
    transform: translate(2px, -2px);
    color: var(--rust, #ac4a34);
  }

  .card-content h3 {
    font-size: 18px;
    margin: 0 0 8px 0;
    line-height: 1.3;
    color: var(--ink, #33282a);
  }

  .card-content p {
    font-size: 13.5px;
    color: var(--muted, #706865);
    line-height: 1.5;
    margin: 0;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid #f0ede6;
  }

  .url-hint {
    font-size: 12px;
    color: var(--muted, #706865);
    font-family: monospace;
  }

  /* City Hubs */
  .city-hubs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  .city-hub-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 6px;
    padding: 12px 16px;
    text-decoration: none;
    font-size: 14.5px;
    font-weight: 600;
    color: var(--ink, #33282a);
    transition: all 0.2s ease;
  }

  .city-hub-chip:hover {
    border-color: var(--rust, #ac4a34);
    background: #fdfaf6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  }

  .pin-icon svg {
    width: 17px;
    height: 17px;
    stroke: var(--rust, #ac4a34);
  }

  .city-name {
    flex: 1;
  }

  .hub-arrow {
    font-size: 14px;
    color: var(--muted, #706865);
  }

  /* City Group Cards */
  .city-group-card {
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 8px;
    padding: 22px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  }

  .city-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f0ede6;
  }

  .city-title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .city-icon {
    width: 18px;
    height: 18px;
    stroke: var(--rust, #ac4a34);
  }

  .city-card-header h3 {
    font-size: 17px;
    margin: 0;
    color: var(--ink, #33282a);
  }

  .link-count-badge {
    font-size: 11.5px;
    font-weight: 600;
    background: #f5f1e9;
    color: var(--muted, #706865);
    padding: 3px 8px;
    border-radius: 10px;
  }

  .city-links-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .city-links-list li {
    margin-bottom: 8px;
  }

  .city-links-list li:last-child {
    margin-bottom: 0;
  }

  .city-links-list a {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-size: 13.5px;
    line-height: 1.45;
    color: var(--ink, #33282a);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 4px;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .city-links-list a:hover {
    background: #faf4ed;
    color: var(--rust, #ac4a34);
  }

  .bullet-dot {
    color: var(--rust, #ac4a34);
    font-weight: bold;
    font-size: 16px;
    line-height: 1;
  }

  .item-text {
    flex: 1;
  }

  .item-arrow {
    color: var(--muted, #706865);
    font-size: 12px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  .city-links-list a:hover .item-arrow {
    opacity: 1;
    color: var(--rust, #ac4a34);
  }

  /* Guides Filter Bar */
  .guides-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding: 16px;
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 8px;
  }

  .filter-label {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--muted, #706865);
  }

  .filter-pills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .filter-pills-row button {
    font-size: 12.5px;
    font-weight: 600;
    background: #f7f4ee;
    border: 1px solid transparent;
    padding: 6px 12px;
    border-radius: 20px;
    color: var(--ink, #33282a);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .filter-pills-row button:hover {
    background: #ede6db;
  }

  .filter-pills-row button.active {
    background: var(--rust, #ac4a34);
    color: #fff;
    border-color: var(--rust, #ac4a34);
  }

  /* Blog Topics */
  .blog-topics-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .topic-block {
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 8px;
    padding: 24px;
  }

  .topic-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--cream, #f5f1e9);
  }

  .topic-header h3 {
    font-size: 19px;
    margin: 0;
    color: var(--ink, #33282a);
  }

  .topic-count {
    font-size: 12px;
    font-weight: 700;
    color: var(--rust, #ac4a34);
    background: #fbf2ef;
    padding: 4px 10px;
    border-radius: 12px;
  }

  .guides-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 10px;
  }

  .guide-link-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: #faf8f5;
    border-radius: 6px;
    text-decoration: none;
    font-size: 13.5px;
    color: var(--ink, #33282a);
    transition: all 0.15s ease;
  }

  .guide-link-item:hover {
    background: #fdf3ed;
    color: var(--rust, #ac4a34);
    transform: translateX(3px);
  }

  .doc-icon {
    width: 15px;
    height: 15px;
    stroke: var(--muted, #706865);
    flex-shrink: 0;
  }

  .guide-link-item:hover .doc-icon {
    stroke: var(--rust, #ac4a34);
  }

  .guide-title {
    flex: 1;
    line-height: 1.4;
  }

  .guide-arrow {
    font-size: 13px;
    color: var(--muted, #706865);
    flex-shrink: 0;
  }

  /* Archives Section */
  .archives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }

  .archive-card {
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 8px;
    padding: 22px;
  }

  .archive-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0ede6;
  }

  .archive-card-header h3 {
    font-size: 17px;
    margin: 0;
    color: var(--ink, #33282a);
  }

  .archive-desc {
    font-size: 13px;
    color: var(--muted, #706865);
    margin: 0 0 14px 0;
  }

  .archive-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .archive-list li {
    margin-bottom: 8px;
  }

  .archive-list a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13.5px;
    padding: 8px 10px;
    border-radius: 4px;
    text-decoration: none;
    color: var(--ink, #33282a);
    background: #faf8f5;
    transition: all 0.15s ease;
  }

  .archive-list a:hover {
    background: #fdf3ed;
    color: var(--rust, #ac4a34);
  }

  .chips-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pagination-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12.5px;
    padding: 6px 10px;
    background: #f7f4ee;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 4px;
    text-decoration: none;
    color: var(--ink, #33282a);
    transition: all 0.15s ease;
  }

  .pagination-chip:hover {
    border-color: var(--rust, #ac4a34);
    background: #fdf3ed;
    color: var(--rust, #ac4a34);
  }

  .pagination-chip.secondary {
    font-size: 11.5px;
    background: #faf8f5;
  }

  .chip-arrow {
    font-size: 11px;
    color: var(--muted, #706865);
  }

  /* Search results styling */
  .search-results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 14px;
  }

  .search-result-card {
    background: #fff;
    border: 1px solid var(--line, #e3ddd5);
    border-radius: 6px;
    padding: 16px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease;
  }

  .search-result-card:hover {
    border-color: var(--rust, #ac4a34);
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
    transform: translateY(-2px);
  }

  .search-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .category-pill {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    background: #f5f0e8;
    color: var(--rust, #ac4a34);
    padding: 2px 7px;
    border-radius: 10px;
  }

  .arrow-indicator {
    font-size: 14px;
    color: var(--muted, #706865);
  }

  .search-result-card h3 {
    font-size: 15px;
    margin: 0 0 8px 0;
    color: var(--ink, #33282a);
    line-height: 1.35;
  }

  .link-url {
    font-size: 12px;
    color: var(--muted, #706865);
    font-family: monospace;
    word-break: break-all;
  }

  .no-results-box {
    background: #fff;
    border: 1px dashed var(--line, #e3ddd5);
    border-radius: 8px;
    padding: 40px 20px;
    text-align: center;
  }

  .no-results-box p {
    color: var(--muted, #706865);
    margin-bottom: 16px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .section-title-wrap h2 {
      font-size: 24px;
    }

    .guides-links-grid,
    .city-services-grid,
    .core-grid,
    .services-grid,
    .archives-grid {
      grid-template-columns: 1fr;
    }

    .sitemap-search-bar {
      width: 100%;
    }
  }
</style>
