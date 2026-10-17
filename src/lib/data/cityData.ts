export interface ServiceDefinition {
  id: string;
  title: string;
  category: string;
  href: string;
  image: string;
  image640?: string;
  shortDesc: string;
  benefits: string[];
}

export const masterServices: Record<string, ServiceDefinition> = {
  'paver-patios': {
    id: 'paver-patios',
    title: 'Paver Patios & Walkways',
    category: 'Outdoor Living',
    href: '/services/paver-patios/',
    image: '/assets/optimized/paver_patios.webp',
    image640: '/assets/optimized/paver_patios-640.webp',
    shortDesc: 'Replace cracked concrete or uneven turf with an expansive paver patio engineered for Colorado freeze-thaw cycles.',
    benefits: ['5-Year Installation Warranty', 'Laser-Graded Base Compaction', 'Polymeric Sand Lock Joints']
  },
  'retaining-walls': {
    id: 'retaining-walls',
    title: 'Retaining Walls & Terracing',
    category: 'Structural Earthwork',
    href: '/services/retaining-walls/',
    image: '/assets/optimized/retaining_walls.webp',
    image640: '/assets/optimized/retaining_walls-640.webp',
    shortDesc: 'Turn steep or awkward yard slopes into functional, multi-tier outdoor spaces with integrated drainage and structural block.',
    benefits: ['Geogrid Soil Reinforcement', 'Integrated French Drain Systems', '5-Year Structural Warranty']
  },
  'outdoor-kitchens': {
    id: 'outdoor-kitchens',
    title: 'Custom Outdoor Kitchens',
    category: 'Outdoor Entertaining',
    href: '/services/outdoor-kitchens/',
    image: '/assets/optimized/outdoor_kitchens.webp',
    image640: '/assets/optimized/outdoor_kitchens-640.webp',
    shortDesc: 'Keep cooking and conversation in one place with custom stone barbecue islands, built-in grills, prep counters, and outdoor refrigerators.',
    benefits: ['Custom Stone Masonry', 'Licensed Gas & Electrical Integration', 'All-Weather Countertops']
  },
  'fire-pits-fireplaces': {
    id: 'fire-pits-fireplaces',
    title: 'Fire Pits & Outdoor Fireplaces',
    category: 'Evening Living',
    href: '/services/fire-pits-fireplaces/',
    image: '/assets/optimized/gas_fireplaces.webp',
    image640: '/assets/optimized/gas_fireplaces-640.webp',
    shortDesc: 'Extend your outdoor living season into crisp Colorado evenings with natural gas, propane, or wood-burning fire features.',
    benefits: ['Push-Button Gas Burners', 'Custom Stone Veneer Finishes', 'Integrated Seating Walls']
  },
  'pergolas': {
    id: 'pergolas',
    title: 'Pergolas & Shade Structures',
    category: 'Architectural Shade',
    href: '/services/pergolas/',
    image: '/assets/optimized/pergolas.webp',
    image640: '/assets/optimized/pergolas-640.webp',
    shortDesc: 'Provide vital high-altitude sun protection and architectural definition to your patio with custom cedar or modern steel pergolas.',
    benefits: ['Heavy-Duty Timber & Steel', 'Louvered & Slatted Options', 'Engineered Wind-Resistant Footings']
  },
  'landscape-design': {
    id: 'landscape-design',
    title: 'Landscape Design & Installation',
    category: 'Master Planning',
    href: '/services/landscape-design/',
    image: '/assets/optimized/landscape_design.webp',
    image640: '/assets/optimized/landscape_design-640.webp',
    shortDesc: 'Complete front and backyard transformations uniting functional hardscapes, Colorado-hardy plant beds, and boulder accents.',
    benefits: ['3D Conceptual Visualization', 'Native Colorado Plant Palettes', 'End-to-End In-House Execution']
  },
  'xeriscape-landscaping': {
    id: 'xeriscape-landscaping',
    title: 'Xeriscaping & Water-Wise Landscapes',
    category: 'Sustainable Living',
    href: '/services/xeriscape-landscaping/',
    image: '/assets/optimized/xeriscape.webp',
    image640: '/assets/optimized/xeriscape-640.webp',
    shortDesc: 'Reduce water bills and maintenance by up to 60% with drought-tolerant native perennials, decorative granite, and smart drip irrigation.',
    benefits: ['Municipal Rebate Qualified', 'Drip Zone Efficiency', 'Year-Round Color & Texture']
  }
};

export interface CityFaq {
  question: string;
  answer: string;
}

export interface LocalHighlight {
  label: string;
  value: string;
}

export interface CityData {
  slug: string;
  name: string;
  county: string;
  tagline: string;
  kicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  neighborhoods: string[];
  climateHeading: string;
  climateIntro: string;
  climateBody: string[];
  localHighlights: LocalHighlight[];
  serviceIds: string[];
  customServiceNote?: string;
  faqs: CityFaq[];
}

export const allCitySlugs = [
  'denver',
  'arvada',
  'aurora',
  'brighton',
  'broomfield',
  'centennial',
  'lakewood',
  'littleton',
  'parker'
] as const;

export const cityData: Record<string, CityData> = {
  denver: {
    slug: 'denver',
    name: 'Denver',
    county: 'Denver County',
    tagline: 'Urban Patios, Terraces & Master Outdoor Living',
    kicker: 'DENVER, COLORADO • LANDSCAPE DESIGN & HARDSCAPES',
    heroTitle: 'Custom Hardscaping & Landscape Design in Denver, CO',
    heroSubtitle: 'From historic Washington Park and Platt Park bungalows to contemporary builds in the Highlands, RiNo, and Cherry Creek, we engineer outdoor living spaces tailored for Denver’s unique urban lots and front-range climate.',
    heroImage: '/assets/original/landscape-design-denver.webp',
    neighborhoods: ['Washington Park', 'The Highlands', 'Cherry Creek', 'Platt Park', 'Congress Park', 'Hilltop', 'Central Park', 'Sloan’s Lake', 'Baker'],
    climateHeading: 'Engineering for Denver’s Urban Lots & Freeze-Thaw Climate',
    climateIntro: 'Denver’s urban landscape presents unique challenges: compact property boundaries, mature tree root canopies, aging concrete patios, and strict municipal water conservation guidelines.',
    climateBody: [
      'With over 300 days of sunshine coupled with dramatic winter freeze-thaw cycles, solid concrete slabs in Denver frequently crack and heave within a few seasons. We build interlocking paver systems over laser-graded, heavily compacted aggregate road bases that flex naturally with ground movement, preserving an immaculate surface year after year.',
      'Denver homeowners also face rising water utility rates. Our design team specializes in transitioning thirsty Kentucky bluegrass into high-impact, drought-resilient xeriscapes featuring Colorado native perennials, ornamental grasses, flagstone pathways, and high-efficiency smart drip irrigation that qualify for Denver Water turf replacement rebates.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '5,280 ft (Mile High)' },
      { label: 'Soil Profile', value: 'Clay & Sandy Loam mix' },
      { label: 'Water Agency', value: 'Denver Water Guidelines' },
      { label: 'Key Specialty', value: 'Urban Lot Optimization & Full Master Plans' }
    ],
    serviceIds: [
      'paver-patios',
      'retaining-walls',
      'outdoor-kitchens',
      'fire-pits-fireplaces',
      'pergolas',
      'landscape-design',
      'xeriscape-landscaping'
    ],
    customServiceNote: 'Every Denver project is custom-engineered to your property lines, HOA or historic district guidelines, and outdoor lifestyle.',
    faqs: [
      {
        question: 'Do I need a city permit for a patio or retaining wall in Denver?',
        answer: 'Standard ground-level paver patios generally do not require a building permit in the City and County of Denver. However, retaining walls exceeding four feet in height, gas line extensions for outdoor fire pits or kitchens, and permanent covered patio structures do require municipal permits. Ridgewell coordinates all necessary engineering, plans, and city permit filings.'
      },
      {
        question: 'How do you navigate narrow access pathways in older Denver neighborhoods?',
        answer: 'Many historic Denver properties in neighborhoods like Wash Park or Baker have narrow side gates and tight alleys. Our crews utilize compact, specialized machinery designed to navigate tight side yards without disturbing neighboring fencing or property boundaries.'
      },
      {
        question: 'Will our xeriscape project qualify for Denver Water turf rebates?',
        answer: 'Yes! We design water-wise xeriscapes that satisfy Denver Water’s landscape transformation criteria, utilizing qualifying low-water plant selections, organic and mineral mulch top dressings, and smart drip irrigation systems.'
      },
      {
        question: 'What warranty do you provide on Denver paver patio installations?',
        answer: 'We provide an industry-leading 5-year craftsmanship warranty on all paver patios and retaining walls built on our standard aggregate base foundations.'
      }
    ]
  },

  arvada: {
    slug: 'arvada',
    name: 'Arvada',
    county: 'Jefferson & Adams Counties',
    tagline: 'Foothills Hardscaping, Outdoor Kitchens & Water-Wise Living',
    kicker: 'ARVADA, COLORADO • HARDSCAPES & OUTDOOR LIVING',
    heroTitle: 'Premier Landscaping & Paver Patio Contractors in Arvada, CO',
    heroSubtitle: 'Designing and building durable outdoor living spaces from Olde Town and Lake Arbor to Leyden Rock and Candelas. Built to withstand foothills winds, dense clay, and Colorado winter freezes.',
    heroImage: '/assets/original/patio-contractor-arvada.webp',
    neighborhoods: ['Olde Town Arvada', 'Leyden Rock', 'Candelas', 'Whispering Creek', 'Lake Arbor', 'Ralston Valley', 'Alta Vista', 'Meadowglen'],
    climateHeading: 'Built for Arvada’s Slopes, High Winds & Expansive Clay Soils',
    climateIntro: 'Perched along the foothills of the Front Range, Arvada backyards frequently contend with significant elevation changes, strong down-canyon wind gusts, and heavy bentonite clay soils.',
    climateBody: [
      'In western Arvada developments such as Candelas and Leyden Rock, expansive clay soils swell when wet and contract during dry spells. Installing standard concrete results in premature buckling. We excavate 6 to 9 inches of native soil, replace it with engineered structural aggregate, and mechanically compact it in graded lifts to ensure absolute stability.',
      'Our Arvada outdoor living projects frequently combine custom sheltered paver patios, natural stone barbecue islands, and wind-tolerant xeriscape gardens that highlight western foothills views while requiring minimal irrigation.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '5,344 ft' },
      { label: 'Soil Profile', value: 'Dense Bentonite Clay' },
      { label: 'Topography', value: 'Foothills Slopes & Ridges' },
      { label: 'Key Specialty', value: 'Wind-Resilient Patios & Slope Grading' }
    ],
    serviceIds: [
      'paver-patios',
      'landscape-design',
      'outdoor-kitchens',
      'xeriscape-landscaping'
    ],
    customServiceNote: 'Need retaining walls, fire pits, or pergolas for your Arvada home? We build full-scale custom outdoor spaces across the foothills.',
    faqs: [
      {
        question: 'How do you prevent pavers from shifting in Arvada’s clay soils?',
        answer: 'We remove expansive clay subsoil down to stable ground, install a commercial-grade woven geotextile separation fabric, and install an engineered crushed aggregate base compacted to 98% density. This isolates the pavers from shifting ground soils.'
      },
      {
        question: 'Can you build an outdoor kitchen sheltered from Arvada’s canyon winds?',
        answer: 'Yes. We strategically position outdoor barbecue islands and dining counters against home alcoves, privacy walls, or custom screening to create comfortable microclimates that shield grilling areas from afternoon foothills wind.'
      },
      {
        question: 'How do you handle HOA approvals in communities like Candelas or Leyden Rock?',
        answer: 'We prepare detailed landscape plans, material specs, and color swatches formatted specifically for Arvada HOA Architectural Review Committees (ARCs), ensuring a seamless approval workflow.'
      }
    ]
  },

  aurora: {
    slug: 'aurora',
    name: 'Aurora',
    county: 'Arapahoe & Adams Counties',
    tagline: 'Expansive Entertaining Patios & Heat-Tolerant Xeriscapes',
    kicker: 'AURORA, COLORADO • WATER-WISE LANDSCAPES & HARDSCAPES',
    heroTitle: 'Custom Landscaping, Patios & Xeriscaping in Aurora, CO',
    heroSubtitle: 'Transforming spacious Aurora backyards—from Southlands and Tallyn’s Reach to Saddle Rock and Heather Gardens—with heat-resilient xeriscapes, elegant paver terraces, and master outdoor designs.',
    heroImage: '/assets/original/patio-contractor-aurora.webp',
    neighborhoods: ['Southlands', 'Tallyn’s Reach', 'Saddle Rock', 'Heritage Eagle Bend', 'Sienna', 'Murphy Creek', 'Heather Gardens', 'Aurora Highlands'],
    climateHeading: 'Combating Prairie Heat, High Water Costs & Severe Clay in Aurora',
    climateIntro: 'Aurora properties enjoy generous backyard footprints, but face intense summer heat, high water rates, and some of the most expansive clay soils along the Front Range.',
    climateBody: [
      'Homeowners in southeast Aurora often struggle with astronomical summer irrigation bills trying to keep large sod lawns green. Our xeriscaping team replaces non-functional turf with stunning multi-textured landscapes: drought-hardy perennials, decorative Colorado granite, cedar mulches, and zoned drip irrigation that slashes water usage by over 50%.',
      'We pair low-water plantings with spacious, multi-functional paver patios that provide plenty of room for dining tables, seating sets, and evening relaxation. Every paver installation includes a robust 5-year warranty against settling.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '5,471 ft' },
      { label: 'Soil Profile', value: 'High-Shrink/Swell Expansive Clay' },
      { label: 'Water Focus', value: 'Aurora Water Conservation Rebates' },
      { label: 'Key Specialty', value: 'Low-Water Renovations & Large Entertaining Patios' }
    ],
    serviceIds: [
      'paver-patios',
      'landscape-design',
      'xeriscape-landscaping'
    ],
    customServiceNote: 'Looking to add a fire pit, outdoor kitchen, or pergola to your Aurora patio? We customize every project to your vision.',
    faqs: [
      {
        question: 'Are Ridgewell xeriscape designs eligible for Aurora Water turf rebates?',
        answer: 'Yes! Aurora Water offers generous rebates for removing qualifying bluegrass turf. We design your xeriscape to comply with Aurora’s 50% plant coverage rules, approved plant lists, and mulch depth criteria so you can claim your rebate.'
      },
      {
        question: 'Why are pavers better than concrete for Aurora homes?',
        answer: 'Aurora’s expansive clay soil causes rigid concrete patios to crack and separate over time. Interlocking pavers distribute weight flexibly across individual units, allowing the patio to absorb subtle soil shifts without cracking.'
      },
      {
        question: 'What is the best time of year to landscape in Aurora?',
        answer: 'Hardscape installations (patios, paths, walls) can be constructed year-round in Colorado whenever the ground is not deeply frozen. Plantings and sod are best installed from early spring through late autumn.'
      }
    ]
  },

  brighton: {
    slug: 'brighton',
    name: 'Brighton',
    county: 'Adams & Weld Counties',
    tagline: 'Durable Prairie Patios & Prairie-Hardy Landscapes',
    kicker: 'BRIGHTON, COLORADO • PRAIRIE LANDSCAPES & HARDSCAPES',
    heroTitle: 'Durable Paver Patios & Landscape Design in Brighton, CO',
    heroSubtitle: 'Crafting long-lasting outdoor living spaces across Brighton, Todd Creek, and Bromley Park, engineered for large acreage lots, prairie winds, and multi-season family enjoyment.',
    heroImage: '/assets/original/patio-contractor-brighton.webp',
    neighborhoods: ['Todd Creek', 'Bromley Park', 'Prairie Center', 'Brighton Crossing', 'Eagle Shadow', 'Heritage Todd Creek', 'Country Club Estates'],
    climateHeading: 'Built for Adams County Open Plains & Substantial Lot Footprints',
    climateIntro: 'Brighton properties often feature expansive suburban and acreage lots that require thoughtful scale, wind resistance, and dust-mitigating landscape design.',
    climateBody: [
      'Open prairie terrain brings direct sun exposure and persistent winds that can quickly dry out poorly planned yards. We design functional outdoor zones that anchor your backyard: expansive paver patios that provide sturdy surfaces for large family gatherings, paired with strategic evergreen windbreaks and rock borders.',
      'Our landscape team selects hardy native and adapted plant specimens that thrive in alkaline soil and withstand Adams County gusts, giving you year-round color without endless maintenance.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '4,984 ft' },
      { label: 'Lot Profiles', value: 'Expansive Suburban & Semi-Acreage' },
      { label: 'Climate Focus', value: 'Open Prairie Wind & Alkaline Soils' },
      { label: 'Key Specialty', value: 'Full-Scale Patio Installations & Prairie Plantings' }
    ],
    serviceIds: [
      'paver-patios',
      'landscape-design'
    ],
    customServiceNote: 'Need outdoor kitchens, retaining walls, or shade structures in Brighton? We build custom outdoor features across Adams County.',
    faqs: [
      {
        question: 'How do you design paver patios to look proportionate on large Brighton lots?',
        answer: 'On spacious lots, small patios feel disconnected. We design multi-room layouts—such as a dining terrace transitioning into a relaxed lounge area—framed by wide borders, seat walls, and garden beds to create a balanced sense of scale.'
      },
      {
        question: 'How do you select plants that survive Brighton’s windy winter conditions?',
        answer: 'We specify cold-hardy, drought-tolerant species with deep root systems—such as Austrian pines, juniper varieties, serviceberries, and native ornamental grasses—that withstand persistent prairie winds and temperature drops.'
      }
    ]
  },

  broomfield: {
    slug: 'broomfield',
    name: 'Broomfield',
    county: 'City & County of Broomfield',
    tagline: 'Modern Outdoor Living & Sustainable Xeriscaping',
    kicker: 'BROOMFIELD, COLORADO • WATER-WISE & HARDSCAPE SOLUTIONS',
    heroTitle: 'Xeriscaping & Outdoor Living Specialists in Broomfield, CO',
    heroSubtitle: 'Bringing dedicated craftsmanship and modern, water-efficient outdoor design to Anthem, The Broadlands, Interlocken, and Red Leaf neighborhoods.',
    heroImage: '/assets/original/Xeriscape-Landscaping-Broomfield.webp',
    neighborhoods: ['Anthem Ranch', 'The Broadlands', 'Red Leaf', 'Interlocken', 'Country Club Estates', 'Wildgrass', 'McKay Landing'],
    climateHeading: 'Modern Aesthetics, HOA Compliance & Water Stewardship in Broomfield',
    climateIntro: 'Broomfield homeowners pride themselves on beautiful, modern neighborhoods set against Flatiron backdrops, while adhering to strict community aesthetics and municipal water conservation.',
    climateBody: [
      'Our Broomfield landscape projects combine contemporary architectural styling with high-performance xeriscaping. By integrating clean geometric paver pathways, river cobble swales, drought-tolerant native perennials, and automated smart controllers, we create yards that look stunning in every season.',
      'Whether you are refreshing an established yard in The Broadlands or planning a complete outdoor transformation in Anthem, our in-house team handles every step from HOA design submissions to final site cleanup.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '5,420 ft' },
      { label: 'Style', value: 'Contemporary & Eco-Conscious' },
      { label: 'HOA Support', value: 'Full Architectural Submissions' },
      { label: 'Key Specialty', value: 'Xeriscape Transformations & Custom Paver Patios' }
    ],
    serviceIds: [
      'xeriscape-landscaping',
      'paver-patios',
      'landscape-design'
    ],
    customServiceNote: 'From custom outdoor kitchens to gas fire pits, our crew builds complete outdoor retreats in Broomfield.',
    faqs: [
      {
        question: 'How long does a typical xeriscape conversion take in Broomfield?',
        answer: 'Most residential xeriscape conversions take between 3 and 7 business days, depending on yard size, existing sod removal requirements, and the extent of new hardscape or drip irrigation work.'
      },
      {
        question: 'Will our xeriscape look like rocks and gravel, or will it be lush and colorful?',
        answer: 'Real Colorado xeriscaping is vibrant and lush! We incorporate tiered layers of flowering perennials, ornamental grasses, and flowering shrubs that bloom in staggered succession from May through October.'
      }
    ]
  },

  centennial: {
    slug: 'centennial',
    name: 'Centennial',
    county: 'Arapahoe County',
    tagline: 'Ridgewell’s Hometown Landscape & Hardscape Team',
    kicker: 'CENTENNIAL, COLORADO • RIDGEWELL’S HOME BASE',
    heroTitle: 'Custom Landscaping & Hardscaping in Centennial, CO',
    heroSubtitle: 'Headquartered right here in Centennial at 16575 E Hialeah Dr, Ridgewell delivers personal, neighborhood-focused craftsmanship from Southglenn and Willow Creek to Piney Creek and Smoky Hill.',
    heroImage: '/assets/original/Xeric-Landscaping-Services-for-Centennial-CO.webp',
    neighborhoods: ['Piney Creek', 'Willow Creek', 'Southglenn', 'Smoky Hill', 'Foxfield Border', 'Nob Hill', 'Heritage Place', 'Walnut Hills'],
    climateHeading: 'Revitalizing Centennial Yards with Proven Colorado Craftsmanship',
    climateIntro: 'Centennial is our home turf. Since 2011, founder Francisco Garcia and our in-house crews have helped homeowners across Centennial transform aging, sloped, or high-maintenance yards into outdoor spaces they love.',
    climateBody: [
      'Many established Centennial neighborhoods feature mature shade trees whose expansive surface roots crack rigid concrete slabs. We install flexible, interlocking paver patios and walkways over deep aggregate foundations that accommodate root pressure and subsoil movement without failure.',
      'We also specialize in outdoor kitchen islands, natural stone seating walls, and water-wise xeriscape borders that dramatically reduce mowing and watering while boosting property value in Centennial’s competitive real estate market.'
    ],
    localHighlights: [
      { label: 'Local Office', value: '16575 E Hialeah Dr, Centennial' },
      { label: 'Local Experience', value: 'Serving Centennial Since 2011' },
      { label: 'Root & Soil Care', value: 'Tree-Safe Paver Foundations' },
      { label: 'Key Specialty', value: 'Complete Backyard Renovations & Outdoor Kitchens' }
    ],
    serviceIds: [
      'xeriscape-landscaping',
      'paver-patios',
      'landscape-design',
      'outdoor-kitchens'
    ],
    customServiceNote: 'As your Centennial neighbors, we provide fast, complimentary on-site consultations right at your property.',
    faqs: [
      {
        question: 'Where is Ridgewell located in Centennial?',
        answer: 'Our headquarters is located at 16575 E Hialeah Dr, Centennial, CO 80015. We live and work right in your community!'
      },
      {
        question: 'How do you handle tree roots beneath old patios in Centennial neighborhoods?',
        answer: 'We carefully excavate around mature tree root zones, protect primary structural roots, install root barriers where necessary, and construct a flexible aggregate paver system that prevents the cracking common with poured concrete.'
      },
      {
        question: 'Can you match existing brick or stone on our Centennial home?',
        answer: 'Yes! We carry paver and stone samples directly to your on-site consultation to complement your home’s architectural brick, siding, or stucco exterior.'
      }
    ]
  },

  lakewood: {
    slug: 'lakewood',
    name: 'Lakewood',
    county: 'Jefferson County',
    tagline: 'Foothills Terracing, Outdoor Kitchens & Water-Smart Design',
    kicker: 'LAKEWOOD, COLORADO • FOOTHILLS HARDSCAPES & DESIGN',
    heroTitle: 'Hardscaping, Outdoor Kitchens & Landscaping in Lakewood, CO',
    heroSubtitle: 'Serving Green Mountain, Belmar, Applewood, and Bear Creek with custom paver patios, outdoor culinary kitchens, and drought-hardy landscape architecture.',
    heroImage: '/assets/original/patio-contractor-lakewood.webp',
    neighborhoods: ['Green Mountain', 'Belmar', 'Applewood', 'Bear Creek', 'Morse Park', 'Lakewood Foothills', 'Southern Gables', 'Kendrick Lake'],
    climateHeading: 'Conquering Slopes & Rocky Foothills Soils in Lakewood',
    climateIntro: 'Nestled right against Green Mountain and the foothills, Lakewood properties often showcase breathtaking views paired with steep backyard slopes and rocky subsoils.',
    climateBody: [
      'Unusable sloping yards are one of Lakewood’s most common landscape challenges. Our team specializes in terracing steep slopes with structural retaining walls and cut-and-fill grading, carving out flat, expansive paver living spaces where steep drop-offs once made outdoor enjoyment impossible.',
      'We complement our hardscapes with custom outdoor kitchens, fire pits, and water-wise native plantings that thrive in Lakewood’s rocky, fast-draining soils while holding slopes firmly against erosion.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '5,518 ft' },
      { label: 'Topography', value: 'Steep Foothills Slopes & Ridges' },
      { label: 'Soil Profile', value: 'Rocky Gravel & Heavy Red Clay' },
      { label: 'Key Specialty', value: 'Slope Terracing & Outdoor Kitchens' }
    ],
    serviceIds: [
      'paver-patios',
      'landscape-design',
      'outdoor-kitchens',
      'xeriscape-landscaping'
    ],
    customServiceNote: 'Have a challenging sloped yard in Green Mountain or Applewood? Let our engineers and crews walk the space.',
    faqs: [
      {
        question: 'How do you reclaim sloped yards in Lakewood?',
        answer: 'We engineer multi-tier retaining walls and terrace systems that turn unusable hillsides into functional, level living terraces for patios, fire pits, and garden beds.'
      },
      {
        question: 'Do you install outdoor kitchens that can withstand cold Lakewood winters?',
        answer: 'Yes. All our outdoor kitchens are built with concrete block masonry, natural stone or porcelain veneers, freeze-thaw resistant countertops, and marine-grade stainless steel components with integrated winterization drain valves.'
      }
    ]
  },

  littleton: {
    slug: 'littleton',
    name: 'Littleton',
    county: 'Arapahoe, Douglas & Jefferson Counties',
    tagline: 'Timeless Stone Patios & Native Water-Wise Gardens',
    kicker: 'LITTLETON, COLORADO • TIMELESS HARDSCAPES & XERISCAPES',
    heroTitle: 'Landscape Design, Patios & Xeriscaping in Littleton, CO',
    heroSubtitle: 'Enhancing outdoor spaces across Ken Caryl, Columbine, Downtown Littleton, and Roxborough with natural stone, paver patios, and water-wise native greenery.',
    heroImage: '/assets/original/Xeriscape-Contractors-Serving-Littleton-CO.webp',
    neighborhoods: ['Ken Caryl Valley', 'Columbine Valley', 'Downtown Littleton', 'Roxborough Park', 'TrailMark', 'Wolhurst', 'Governors Ranch'],
    climateHeading: 'Balancing Littleton’s Natural Beauty with Water Efficiency',
    climateIntro: 'From historic tree-canopied avenues near Downtown Littleton to foothills communities in Ken Caryl, Littleton yards embrace the natural beauty of Colorado.',
    climateBody: [
      'Littleton homeowners are proactive stewards of water conservation. Our xeriscape transformations blend dry creek bed rock channels, low-water native shrubs, and flowering perennials that attract pollinators while slashing routine irrigation needs.',
      'We anchor these living landscapes with custom paver patios and walkways that feel organic to the setting, using warm, earth-toned pavers and flagstone accents that age gracefully through every Colorado season.'
    ],
    localHighlights: [
      { label: 'Microclimates', value: 'South Platte Valley & Red Rocks Foothills' },
      { label: 'Wildlife Balance', value: 'Deer-Resistant Plant Palettes' },
      { label: 'Design Style', value: 'Natural Stone & Timeless Craft' },
      { label: 'Key Specialty', value: 'Water-Wise Gardens & Custom Patio Retreats' }
    ],
    serviceIds: [
      'xeriscape-landscaping',
      'paver-patios',
      'landscape-design'
    ],
    customServiceNote: 'Looking to add retaining walls, outdoor kitchens, or pergolas to your Littleton home? We design and build comprehensive master plans.',
    faqs: [
      {
        question: 'Can you specify deer-resistant plants for foothills neighborhoods like Ken Caryl?',
        answer: 'Yes! We select native and adapted species with natural resistance to local wildlife, such as Russian sage, lavender, yarrow, pine varieties, and ornamental grasses that deer and rabbits generally avoid.'
      },
      {
        question: 'How do you handle drainage near the South Platte River corridor?',
        answer: 'We design integrated drainage systems—including French drains, catch basins, and dry gravel swales—to divert roof downspout water safely away from home foundations and outdoor living areas.'
      }
    ]
  },

  parker: {
    slug: 'parker',
    name: 'Parker',
    county: 'Douglas County',
    tagline: 'Engineered Retaining Walls & Expansive Patio Living',
    kicker: 'PARKER, COLORADO • DOUGLAS COUNTY OUTDOOR LIVING',
    heroTitle: 'Custom Landscaping, Patios & Retaining Walls in Parker, CO',
    heroSubtitle: 'From The Pinery and Stonegate to Bradbury Ranch and Idyllwilde, we build heavy-duty paver patios, retaining walls, and outdoor living retreats designed for Parker’s expansive lots.',
    heroImage: '/assets/optimized/paver_patios.webp',
    neighborhoods: ['The Pinery', 'Stonegate', 'Bradbury Ranch', 'Idyllwilde', 'Canterberry Crossing', 'Auburn Hills', 'Pradera Border', 'Stroh Ranch'],
    climateHeading: 'Mastering Parker’s Severe Bentonite Clay & Rolling Topography',
    climateIntro: 'Sitting at an elevation near 5,900 feet, Parker features rolling hills, expansive views of the Rockies, and notoriously deep deposits of expansive bentonite clay.',
    climateBody: [
      'Parker’s rolling terrain means many homes feature walkout basements with dramatic slopes dropping off behind the foundation. We engineer structural retaining walls with geogrid tiebacks and crushed rock backfills that stabilize hillsides and create wide, level patio entertainment zones.',
      'To prevent shifting on Parker’s reactive soils, our paver foundations undergo rigorous multi-stage mechanical compaction. We pair these durable surfaces with outdoor kitchens, fire pits, and landscape lighting to create complete resort-style backyards.'
    ],
    localHighlights: [
      { label: 'Elevation', value: '5,869 ft (Highest Metro Elevation)' },
      { label: 'Soil Profile', value: 'Extremely Expansive Bentonite Clay' },
      { label: 'Lot Profiles', value: 'Walkout Basements & Sloped Acreage' },
      { label: 'Key Specialty', value: 'Structural Retaining Walls & Expansive Patios' }
    ],
    serviceIds: [
      'paver-patios',
      'retaining-walls',
      'landscape-design',
      'outdoor-kitchens',
      'fire-pits-fireplaces'
    ],
    customServiceNote: 'Have an expansive property in The Pinery or Stonegate? We design and construct full acreage master plans.',
    faqs: [
      {
        question: 'How do you manage Parker’s notoriously bad clay soil beneath patios?',
        answer: 'We excavate deeply past unstable topsoil, install high-tensile geotextile stabilization fabric, and pack in 6 to 8 inches of angular crushed aggregate base in multiple compacted lifts. This prevents the shifting that ruins standard concrete.'
      },
      {
        question: 'Do retaining walls behind walkout basements in Parker need engineering?',
        answer: 'In Douglas County, retaining walls exceeding four feet in total height typically require structural engineering stamps and county permits. Ridgewell coordinates the engineering calculations, soil considerations, and municipal inspections.'
      },
      {
        question: 'Can you build a patio with an integrated fire pit for cool Parker evenings?',
        answer: 'Yes! Fire pits and outdoor fireplaces are our most popular additions in Parker, providing a warm gathering hub that extends patio usability well into autumn and winter.'
      }
    ]
  }
};
