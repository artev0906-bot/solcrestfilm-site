import './style.css'
import { icon } from './icons.js'
import { mountChatWidget } from './chat-widget.js'
import { smsConsentFields, mountSmsConsent } from './sms-consent.js'
import { estimateSuccessMarkup, setupEstimateSuccess } from './estimate-success.js'

const business = {
  phoneDisplay: '+1 (213) 214-3212',
  phoneHref: 'tel:+12132143212',
  textHref: 'sms:+12132143212',
  email: 'info@solcrestfilm.com',
  estimateFormAction: 'https://formspree.io/f/xdargbee',
  n8nWebhook: 'https://artev0906.app.n8n.cloud/webhook/solcrest-website-lead',
}

const serviceMenuItems = [
  { label: 'Solar Control', href: '/residential-window-film-los-angeles.html' },
  { label: 'Safety & Security', href: '/safety-security-window-film-los-angeles.html' },
  { label: 'Anti-Graffiti', href: '/anti-graffiti-window-film-los-angeles.html' },
  { label: 'Decorative & Privacy', href: '/decorative-privacy-window-film-los-angeles.html' },
  { label: 'Smart Film', href: '/smart-film-installation-los-angeles.html' },
  { label: 'Storefront Window Protection', href: '/storefront-window-protection-los-angeles.html' },
  { label: 'Commercial Window Film', href: '/commercial-window-film-los-angeles.html' },
]

const serviceOptions = [
  'Solar Control',
  'Safety & Security',
  'Anti-Graffiti',
  'Decorative & Privacy',
  'Smart Film',
  'Not Sure',
]

const servicePages = [
  {
    file: 'residential-window-film-los-angeles.html',
    eyebrow: 'Premium Residential Window Film',
    title: 'Residential Window Film in Los Angeles',
    description:
      'Reduce heat, glare, UV exposure and privacy issues for homes, bedrooms, bathrooms and living spaces across Los Angeles.',
    heroImage: {
      src: '/residential-hero.jpg',
      w: 1000,
      h: 1250,
      alt: 'Solar control film on floor-to-ceiling living room windows of a Los Angeles home',
    },
    problemsTitle: 'Most residential film projects start with comfort and privacy problems.',
    problems: [
      'Rooms that overheat in the afternoon',
      'TV glare and harsh light on work surfaces',
      'Too much visibility from the outside',
      'UV exposure affecting floors, furniture and finishes',
    ],
    filmTypesTitle: 'Types of residential window film we install',
    filmTypes: [
      ['Heat Control Film', 'Nano-ceramic and solar-control films that cut heat and glare while keeping rooms bright and views clear.'],
      ['Clear UV Film', 'Nearly invisible film that reduces UV exposure to help protect floors, furniture and artwork from fading.'],
      ['Daytime Privacy Film', 'Reflective films that make it hard to see in from the street during the day without blocking your view out.'],
      ['Frosted & Decorative Film', 'Frosted, gradient and patterned finishes for bathrooms, entry glass, sidelites and interior doors.'],
      ['Safety Film for Doors & Ground-Floor Windows', 'Thicker film that helps hold shattered glass together on sliding doors and accessible windows.'],
      ['Exterior Film for Difficult Glass', 'Exterior-rated films for skylights and glass that cannot be treated from the inside, where the glass type allows it.'],
    ],
    chooserTitle: 'Which residential window film is right for your home?',
    chooser: [
      ['Reduce heat while keeping natural light', 'Light nano-ceramic film'],
      ['Cut glare as much as possible', 'Darker solar-control film'],
      ['Privacy during the day', 'Reflective privacy film'],
      ['Privacy day and night', 'Frosted or decorative film'],
      ['Protect interiors from UV fading', 'Clear or lightly tinted UV film'],
      ['Add protection for doors and accessible windows', 'Safety and security film'],
    ],
    benefitsTitle: 'Benefits of residential window film',
    benefits: [
      'More comfortable rooms',
      'Less glare on screens',
      'Reduced UV exposure',
      'Improved daytime privacy',
      'Cleaner appearance than curtains',
      'Additional glass protection',
    ],
    projectsTitle: 'Recent Residential Window Film Projects',
    projects: [
      {
        img: '/residential-project-1.jpg',
        w: 1000,
        h: 714,
        alt: 'Protective solar control film installed on the sliding glass doors of a Los Angeles home',
        title: 'Modern Hillside Home',
        area: 'Los Angeles',
        tag: 'Heat Control + Safety Film',
        body: 'Solar-control film installed across the home, with safety film added to accessible doors and windows.',
      },
      {
        img: '/residential-project-2.jpg',
        w: 1000,
        h: 750,
        alt: 'Two rooftop skylights with sun protection film installed on a Los Angeles hillside home',
        title: 'Residential Skylight Project',
        area: 'Los Angeles',
        tag: 'Exterior Solar-Control Film',
        body: 'Exterior-rated film installed on rooftop skylights to reduce overhead heat and glare.',
      },
    ],
    projectsNote:
      'Skylight and exterior work depends on roof access, glass type and condition. We confirm what is possible, along with any limitations and warranty coverage, before work starts.',
    processTitle: 'How a residential installation works',
    processSteps: [
      ['Send photos & goals', 'Share photos, rough measurements, your ZIP and what you want to fix — heat, privacy, fading or safety.'],
      ['Get a recommendation', 'We suggest specific films based on your glass type, sun exposure and the look you want.'],
      ['Clean installation', 'Most homes are completed in a few hours to one day, with furniture and floors protected.'],
      ['Curing & aftercare', 'Film fully cures over days to a few weeks; we explain what to expect and how to care for it.'],
    ],
    faqTitle: 'Residential window film questions',
    faq: [
      ['Will residential window film make my home dark?', 'Not necessarily. Light nano-ceramic films reduce heat and UV with very little visible darkening. Darker films are available when maximum glare control is the goal — we help you pick the light level that fits each room.'],
      ['Does privacy film work at night?', 'Daytime reflective privacy film depends on it being brighter outside than inside, so its effect reverses at night with interior lights on. For privacy day and night, frosted or decorative film is the more reliable choice.'],
      ['Can window film damage dual-pane glass?', 'The wrong film on dual-pane (insulated) glass can create thermal stress. We check your glass type first and only install films rated for it, which is one of the main reasons to use a professional installer.'],
      ['What film works best for heat reduction?', 'Nano-ceramic films offer the best balance of heat rejection and natural light. If glare is the bigger problem, a darker solar-control film cuts more visible light as well as heat.'],
      ['How long does installation take?', 'Most homes take from a few hours to one day depending on the number and size of windows and access. We confirm the timeline after seeing photos and measurements.'],
      ['Can film be installed on skylights?', 'Often yes, usually with exterior-rated film. It depends on access, the glass type and its condition — we confirm what is possible, along with any limitations and warranty coverage, before work starts.'],
      ['How long does residential window film last?', 'Quality architectural films typically last 10–15+ years on interior surfaces. Exterior films have shorter lifespans, which we explain up front for skylight and exterior projects.'],
      ['Can the film be removed later?', 'Yes. Professionally installed film can be removed without damaging the glass, and old or failing film can be replaced with a newer product.'],
    ],
    areasTitle: 'Residential Window Film Service Areas',
    areasNote:
      'We serve Los Angeles and surrounding communities, including Beverly Hills, Glendale, Burbank, Woodland Hills, West Hills and Porter Ranch.',
    formIntro:
      'Send photos, approximate measurements and your ZIP code. We’ll recommend suitable options based on heat, privacy, appearance and glass type.',
    serviceOptions: [
      'Heat Control',
      'UV Protection',
      'Privacy',
      'Decorative Film',
      'Safety Film',
      'Skylight Film',
      'Not Sure',
    ],
  },
  {
    file: 'commercial-window-film-los-angeles.html',
    eyebrow: 'Commercial Window Film',
    title: 'Commercial Window Film in Los Angeles',
    description:
      'Window film for offices, retail, restaurants, schools, clinics and industrial buildings — solar control, privacy, safety and surface protection across commercial glazing.',
    layout: ['problems', 'filmTypes', 'chooser', 'info', 'benefits', 'projects', 'process', 'faq', 'areas'],
    heroImage: {
      src: '/commercial-hero.jpg',
      w: 900,
      h: 675,
      alt: 'Solar control film installed on the glass frontage of a Los Angeles commercial building',
    },
    problemsTitle: 'Commercial projects usually start with one of these.',
    problems: [
      'Staff working next to hot, glaring glass all day',
      'Meeting rooms and work areas that need privacy',
      'Customer-facing glass that has to look maintained',
      'Exposed ground-floor glazing and entry doors',
      'Repeated surface damage on street-level glass',
      'Large glazed areas that are expensive to replace',
    ],
    filmTypesTitle: 'Commercial Property Types We Work With',
    filmTypes: [
      [
        'Offices',
        'Glare on screens, overheated desks near the glass, and meeting rooms that need privacy without losing daylight. Usually solar control on the perimeter, frosted or switchable film on interior partitions.',
        { href: '/decorative-privacy-window-film-los-angeles.html', label: 'Decorative & Privacy Film →' },
      ],
      [
        'Retail Stores',
        'Customer-facing glass that has to stay presentable while taking street-level wear. Solar control for comfort and merchandise, plus a sacrificial layer where the glass gets hit.',
        { href: '/storefront-window-protection-los-angeles.html', label: 'Storefront Protection →' },
      ],
      [
        'Restaurants',
        'Afternoon sun on dining areas, glare at window seats, and entry glass in constant use. Work is usually scheduled outside service hours.',
        { href: '/residential-window-film-los-angeles.html', label: 'Solar Control Film →' },
      ],
      [
        'Schools',
        'Ground-floor classroom glass, corridors and entry doors, where safety, heat control and privacy may all be important. Work can be scheduled after hours or around the school calendar.',
        { href: '/safety-security-window-film-los-angeles.html', label: 'Safety & Security Film →' },
      ],
      [
        'Clinics & Medical Offices',
        'Reception, consult rooms and interior glazing that need daytime privacy and a clean, non-clinical finish. Frosted and decorative finishes are the usual answer.',
        { href: '/decorative-privacy-window-film-los-angeles.html', label: 'Decorative & Privacy Film →' },
      ],
      [
        'Warehouses & Industrial',
        'Large glazed areas, roof glazing and attached office spaces where heat, glare and accessible glass may require different film solutions.',
        { href: '/safety-security-window-film-los-angeles.html', label: 'Safety & Security Film →' },
      ],
    ],
    chooserTitle: 'Which service fits the problem',
    chooserHeadLeft: 'Your problem',
    chooserHeadRight: 'Where to go next',
    chooser: [
      ['Heat and glare on staff and customers', 'Solar control film'],
      ['Privacy in offices, clinics and meeting rooms', 'Decorative & privacy film'],
      ['Privacy that switches on demand', 'Smart film', '/smart-film-installation-los-angeles.html'],
      ['Broken glass and forced-entry concerns', 'Safety & security film'],
      ['Scratching and tagging on street-level glass', 'Anti-graffiti film'],
      ['Customer-facing frontage as a whole', 'Storefront protection'],
    ],
    infoBlocks: [
      {
        eyebrow: 'Scheduling',
        title: 'Working around your hours',
        intro:
          'We can install outside your operating hours — evenings, early mornings or closed days. For retail, restaurants and schools that is the normal arrangement rather than the exception. Tell us your hours when you send photos and we will plan around them.',
      },
      {
        eyebrow: 'Paperwork',
        title: 'Paperwork for business accounts',
        intro:
          'Commercial jobs are invoiced properly, and we can supply the documents your accounts team needs to set us up as a vendor.',
        points: [
          'An official invoice is issued to the business.',
          'A W-9 is provided on request.',
          'Scope and line items are agreed in the estimate before work starts.',
          'Leased premises may need landlord approval — worth confirming early.',
        ],
      },
      {
        eyebrow: 'Larger sites',
        title: 'Phased rollout on larger sites',
        intro:
          'A large building does not have to be done in one visit. Glazing can be split by floor, wing or elevation so the site keeps operating. Send photos and a glazing count and we will propose an order of work.',
      },
    ],
    benefitsEyebrow: 'Key benefits',
    benefitsTitle: 'Benefits of Commercial Window Film',
    benefits: [
      'Improved comfort near sun-exposed glass',
      'Less glare on screens and counters',
      'Privacy without rebuilding walls',
      'Protection on accessible glass',
      'More cost-effective than replacing glazing',
      'Work scheduled around operations',
    ],
    projectsTitle: 'Recent Commercial Projects',
    projects: [
      {
        img: '/commercial-project-1.jpg',
        srcset: '/commercial-project-1-560.jpg 560w, /commercial-project-1.jpg 1000w',
        sizes: '(max-width: 640px) 71vw, (max-width: 900px) 85vw, 44vw',
        w: 1000,
        h: 750,
        alt: 'Solar control film installed across the windows of a two-story office building in the Los Angeles area',
        title: 'Office Building Solar Control',
        area: 'Los Angeles Area',
        tag: 'Solar Control Film',
        body: 'The old film was removed, the glass was cleaned and prepared, and new solar-control film was installed across 930 sq. ft. of office windows. The project was completed in three days.',
      },
      {
        img: '/commercial-project-2.jpg',
        srcset: '/commercial-project-2-560.jpg 560w, /commercial-project-2.jpg 1000w',
        sizes: '(max-width: 640px) 71vw, (max-width: 900px) 85vw, 44vw',
        w: 1000,
        h: 752,
        alt: 'Sun protection film installed on the office windows of a Los Angeles church building',
        title: 'Church Offices',
        area: 'Los Angeles',
        tag: 'Solar Control Film',
        body: 'Sun protection film installed across the office windows to cut heat and glare in the working rooms.',
      },
    ],
    processTitle: 'How a commercial project works',
    processSteps: [
      ['Send photos and a glazing count', 'Share photos of the frontage and interior glass, rough sizes and what the building is used for.'],
      ['Site review', 'We look at glass type, sun exposure, access, and which glazing is yours versus the landlord’s.'],
      ['Match film to each area', 'Different areas usually need different answers — perimeter glass, partitions, entry doors and ground-floor glazing.'],
      ['Schedule around operations', 'Outside trading hours where needed, and split into phases on larger sites.'],
      ['Installation, curing and paperwork', 'Film is installed, curing guidance is given, and the invoice — plus a W-9 on request — follows.'],
    ],
    faqTitle: 'Commercial window film questions',
    faq: [
      ['Can you work outside business hours?', 'Yes. Evenings, early mornings and closed days are all workable, and for retail, restaurants and schools that is usually how it is done. Tell us your operating hours when you send photos and we will schedule around them.'],
      ['Do you provide an invoice and W-9?', 'Yes. Commercial work is invoiced to the business, and a W-9 is provided on request so your accounts team can set us up as a vendor. Scope and line items are agreed in the estimate before anything starts.'],
      ['Do we need landlord approval?', 'For leased premises, often yes — many leases cover alterations to the glazing. It is worth checking early, because approval can take longer than the installation. We can supply product details for the request.'],
      ['Can film be installed on dual-pane commercial glass?', 'Often, but not with every film. The wrong film on insulated glass can create thermal stress, and it may affect the glazing warranty. We confirm the glass type first and use films rated for it.'],
      ['How long does a commercial installation take?', 'It depends on the glazing count, panel sizes and access — a small office suite is very different from a full frontage or roof glazing. We give a timeline once we have seen photos and a count.'],
      ['Can a large building be done in phases?', 'Yes, and on bigger sites it is usually the sensible approach. Work can be split by floor, wing or elevation so the building stays in use. We propose an order of work based on the glazing plan.'],
      ['Which film is right for an office versus a storefront?', 'Offices usually combine solar control on the perimeter with frosted or switchable film on interior partitions. Storefronts lean toward solar control plus a sacrificial anti-graffiti layer on the glass that gets hit. The property-type section above points to each one.'],
      ['Does window film reduce cooling costs?', 'Solar-control film reduces the heat coming through the glass, which is why glazed areas feel more comfortable. Whether that shows up as a measurable saving depends on the building, the HVAC and how much of the load comes through glass — we do not quote a figure without a specific product spec and a calculation.'],
      ['Is the film visible from outside?', 'It depends on the film. Clear safety and UV films leave the glass looking essentially unchanged. Solar-control and decorative films are visible by design, and on a commercial frontage that is often the point — we show samples before anything is ordered.'],
      ['Do you work with schools and clinics?', 'Yes. Both come with their own constraints — term calendars and after-hours access for schools, privacy and a clean finish in reception and consult rooms for clinics — and we plan the work around them.'],
    ],
    areasTitle: 'Commercial Window Film Service Areas',
    areasNote:
      'We install commercial window film throughout Los Angeles and surrounding areas for offices, retail, restaurants, schools, clinics, and warehouse and industrial buildings.',
    formIntro:
      'Send photos of the glazing, a rough panel count and your ZIP code. Tell us the property type and your operating hours, and we will recommend a film for each area.',
    serviceOptions: [
      'Solar Control',
      'Privacy & Decorative',
      'Safety & Security',
      'Anti-Graffiti',
      'Smart Film',
      'Storefront Protection',
      'Multiple Areas',
      'Not Sure',
    ],
  },
  {
    file: 'safety-security-window-film-los-angeles.html',
    eyebrow: 'Safety & Security Film',
    title: 'Safety & Security Window Film in Los Angeles',
    description:
      'Strengthen vulnerable glass, help hold shattered glass together and add resistance against impact and forced-entry attempts.',
    heroImage: {
      src: '/safety-hero.jpg',
      w: 1000,
      h: 1250,
      alt: 'Safety film installed on a full-height sliding glass wall in a Los Angeles home',
    },
    problemsTitle: 'Security-focused projects usually start with vulnerable glass.',
    problems: [
      'Concern about shattered glass after impact',
      'Break-in risk at storefronts or exposed entry points',
      'Need for a stronger hold on damaged glass',
      'Safety upgrades for residential or commercial properties',
    ],
    filmTypesTitle: 'Safety Film Thickness Options',
    filmTypes: [
      ['8 Mil Safety Film', 'A strong entry-level security film that holds shattered glass together and significantly increases the time and effort needed to break through the opening. A practical option for residential doors, accessible windows and lower-risk storefront applications.'],
      ['12 Mil Safety Film', 'A heavier security film that provides greater resistance to repeated impact and is commonly recommended when forced-entry deterrence is the main goal. Suitable for storefronts, entry doors and exposed ground-floor glazing.'],
      ['16 Mil Safety Film', 'A high-strength security film designed for projects that need more resistance to sustained impact and repeated forced-entry attempts. Often selected for higher-risk storefronts, commercial entries and vulnerable residential glass.'],
      ['21–24 Mil Security Film', 'The heaviest architectural security-film options for elevated protection requirements. These films provide the greatest resistance within the film system, but final performance depends heavily on the glass, frame condition and attachment system.'],
      ['Clear Safety Film', 'Optically clear at any of the above thicknesses — the glass keeps its appearance and light level, with no tint or visible change.'],
      ['Safety + Solar Control Film', 'Combines the safety interlayer with a solar-control layer, so one install handles both heat and glare and the protection goal.'],
    ],
    attachmentTitle: 'Wet Glaze Attachment System',
    attachmentIntro:
      'Structural silicone connects the filmed glass to the frame, helping the glazing system remain together longer after impact. This applies at any film thickness: film holds the glass together, but without attachment the pane itself can still be pushed out of the frame, so a heavier film is not a substitute for proper frame attachment.',
    attachmentPoints: [
      'Whether it is needed depends on the frame, the glass and the protection goal.',
      'When specified, structural silicone is typically installed on a return visit after the film has cured. Timing depends on the film thickness, weather, glass size and site conditions.',
      'It is not required on every project — plenty of safety installs do not call for it.',
      'The final decision comes after we inspect the glass and frame in person.',
    ],
    whereBestTitle: 'Where safety film works best',
    whereBest: [
      'Storefront windows',
      'Entry doors and sidelights',
      'Ground-floor residential windows',
      'Schools and offices',
      'Retail and commercial glass',
      'High-traffic interior glazing',
    ],
    doesTitle: 'What safety film does — and does not do',
    doesList: [
      'Helps hold shattered glass together after breakage',
      'Increases the time and effort needed to get through the glass',
      'Reduces flying shards and dangerous fallout',
      'Reinforces the glazing you already have, without replacing it',
    ],
    doesNotList: [
      'Does not make glass unbreakable, bulletproof or bullet-resistant',
      'Does not guarantee that entry is impossible',
      'Does not replace an alarm, cameras or locks',
      'Results depend on the glass, the frame, the film thickness and the attachment system',
    ],
    projectsTitle: 'Recent Safety & Security Film Projects',
    projects: [
      {
        img: '/safety-project-1.jpg',
        w: 1000,
        h: 752,
        alt: 'Clear safety film installed on a residential entry door and its glass sidelights in Los Angeles',
        title: 'Residential Entry Door & Sidelights',
        area: 'Los Angeles',
        tag: 'Clear Safety Film',
        body: 'Clear safety film applied to the door glass and both sidelights — the most accessible glass on the house — with no change to how the entry looks.',
      },
      {
        img: '/safety-project-2.jpg',
        w: 1000,
        h: 752,
        alt: 'Protective anti-vandal solar film installed on residential sliding glass doors in Los Angeles',
        title: 'Sliding Doors, Heat + Safety',
        area: 'Los Angeles',
        tag: 'Solar Control + Safety Film',
        body: 'Protective anti-vandal film on the sliding doors with solar control film across the rest of the home — heat and glare handled in the same install as the protection layer.',
      },
    ],
    processTitle: 'How a safety film installation works',
    processSteps: [
      ['Send photos & measurements', 'Share photos of the glass and frames, rough sizes and what you are protecting against — accidental breakage, storm debris or forced entry.'],
      ['Review glass, frame and risk', 'We check the glass type, the frame depth and how exposed each opening is. Dual-pane and older frames change what is appropriate.'],
      ['Select thickness and attachment', 'Pick the film thickness for the risk level, and decide whether a wet glaze attachment system is worth adding.'],
      ['Installation and curing', 'Film is installed and then cures over days to a few weeks depending on thickness and weather. Some haze during curing is normal.'],
      ['Optional structural silicone', 'When specified, structural silicone is typically installed on a return visit after the film has cured. Timing depends on the film thickness, weather, glass size and site conditions.'],
    ],
    faqTitle: 'Safety & security film questions',
    faq: [
      ['Does security film stop a break-in?', 'No film guarantees that. What it does is make the glass much harder to get through quickly — an intruder who expects one hit to clear the pane instead has to keep working at it, in the open, making noise. Deterrence and delay are the realistic goals, not prevention.'],
      ['What thickness is best for forced-entry protection?', '8 mil can already provide meaningful forced-entry deterrence by holding broken glass together and increasing the time and effort required to create an opening. 12 mil is a common choice when stronger resistance to repeated impact is the main goal, while 16 mil and thicker options may be recommended for higher-risk or more demanding applications. The final recommendation depends on the glass, frame, opening size and whether an attachment system is used.'],
      ['What is the difference between 8 mil, 12 mil and 16 mil?', '8 mil already adds meaningful resistance to break-through attempts while holding shattered glass together. 12 mil and 16 mil provide progressively greater resistance to repeated impact and sustained forced-entry attempts. Thicker film is generally stiffer and more difficult to penetrate, but overall performance also depends on the glass, frame and attachment system.'],
      ['Does safety film need structural silicone?', 'Not always. Film keeps the glass together, but on a hard enough hit the whole pane can still leave the frame. A wet glaze attachment system bonds the filmed glass to the frame to resist that. Whether it is worth adding depends on the frame, the glass and your protection goal — we advise after seeing them.'],
      ['Can safety film be installed on dual-pane glass?', 'Often yes, but not with every film. The wrong film on insulated glass can create thermal stress, so we confirm the glass type first and use films rated for it. This is one of the main reasons to have it installed professionally.'],
      ['Is security film visible?', 'Clear safety film is optically clear — the glass keeps its appearance and light level, and most people cannot tell it is there. If you also want heat or glare control, a tinted or solar-control version is available.'],
      ['How long does installation take?', 'Most homes and small storefronts take from a few hours to one day, depending on the number and size of openings and access. Thicker security films are slower to work with than standard film.'],
      ['How long does the film take to cure?', 'Installation moisture takes days to a few weeks to fully evaporate, longer for thicker films and in cooler weather. Slight haze or small water pockets during that period are normal and clear on their own.'],
      ['Can safety film also reduce heat?', 'Yes. Safety film is available with a solar-control layer, so a single install can handle heat and glare alongside the protection goal — that is the Safety + Solar Control option above.'],
      ['Does it protect against bullets?', 'No. Standard architectural safety and security film is not bullet-resistant glazing and should never be treated as such. Bullet resistance requires purpose-built laminated or ballistic glazing systems, which are a different product entirely.'],
    ],
    areasTitle: 'Safety & Security Film Service Areas',
    areasNote:
      'We install safety and security window film throughout Los Angeles and surrounding areas for homes, storefronts, offices, schools and commercial glazing.',
    formIntro:
      'Send photos of the glass and frames, approximate measurements and your ZIP code. We’ll recommend a film thickness and let you know whether an attachment system is worth adding.',
    serviceOptions: [
      '8 Mil Safety Film',
      '12 Mil Safety Film',
      '16 Mil Safety Film',
      '21–24 Mil Security Film',
      'Clear Safety Film',
      'Safety + Solar Control Film',
      'Not Sure',
    ],
  },
  {
    file: 'anti-graffiti-window-film-los-angeles.html',
    eyebrow: 'Anti-Graffiti Film',
    title: 'Anti-Graffiti Film in Los Angeles',
    description:
      'Protect storefront glass from scratches, tagging and costly replacement with a sacrificial anti-graffiti layer.',
    layout: ['problems', 'info', 'filmTypes', 'chooser', 'benefits', 'projects', 'process', 'faq', 'areas'],
    heroImage: {
      src: '/antigraffiti-hero.jpg',
      w: 1141,
      h: 707,
      alt: 'Combined solar control and anti-graffiti film on the glass frontage of a Los Angeles commercial storefront',
    },
    problemsTitle: 'Anti-graffiti projects usually start with exposed storefront glass.',
    problems: [
      'Frequent scratches or vandalism on street-facing glass',
      'Costly replacement of damaged storefront panels',
      'Need for a sacrificial protective layer',
      'High-traffic commercial zones with repeated abuse',
    ],
    infoBlocks: [
      {
        eyebrow: 'The basics',
        title: 'What Anti-Graffiti Film Is',
        intro:
          'Anti-graffiti film is an optically clear layer applied over the existing glass. It is designed to be damaged — scratching, tagging and etching land on the film instead of the pane underneath, and the film is what gets replaced afterwards. The glass itself stays where it is.',
        points: [
          'It goes over glass you already have — no panel removal, no reglazing.',
          'Clear versions leave the storefront looking unchanged.',
          'It suits storefront glass, entry doors, display windows and interior commercial glazing.',
          'It changes what damage costs you; it does not stop damage from happening.',
        ],
      },
      {
        eyebrow: 'How it works',
        title: 'The Sacrificial Replaceable Layer',
        intro:
          'There is no fixed replacement interval. The film is changed when it needs changing — once scratches, graffiti, etching or hazing become noticeable enough to affect how the storefront looks. Replacing that layer is normally faster and cheaper than replacing the whole glass panel.',
        points: [
          'Damage is assessed on the glass and on the existing film.',
          'The old sacrificial layer is removed and the glass cleaned and prepared.',
          'Where the glass underneath is marked, polishing or restoration is considered first.',
          'A new anti-graffiti layer goes on, and edges and surface are checked.',
        ],
      },
    ],
    filmTypesTitle: '4 Mil vs 7 Mil Anti-Graffiti Film',
    filmTypes: [
      ['4 Mil Anti-Graffiti Film', 'The standard, practical option for most storefronts, doors and commercial glass. Creates a replaceable sacrificial layer that takes on scratches and surface damage.'],
      ['7 Mil Anti-Graffiti Film', 'A thicker protective layer for sites with repeated vandalism, deeper scratching or an elevated risk of damage.'],
      ['Choosing between them', 'A thicker layer gives more material to absorb damage, but it does not make deep damage impossible. The final choice depends on the site and the condition of the glass, which is why we look before recommending.'],
      ['When the glass is already damaged', 'If the pane itself is scratched or etched, we assess polishing and restoration before any new film goes on. Some deeper damage cannot be removed completely — we say so before quoting.'],
    ],
    chooserTitle: 'Scratches, Tagging and Acid Etching',
    chooserHeadLeft: 'Type of damage',
    chooserHeadRight: 'How the film helps',
    chooser: [
      ['Key marks, tool damage and street-level abrasion', 'Lands in the sacrificial layer, not the pane'],
      ['Spray paint and marker tagging', 'Sits on the film; the layer is replaced if cleaning falls short'],
      ['Acid etching', 'Attacks the film first — protection, not immunity to every compound'],
      ['Hazing and general wear on the layer', 'Replaced when it becomes noticeable'],
      ['Damage that reached the glass itself', 'Polishing assessed first; some depths cannot be fully removed'],
    ],
    benefitsEyebrow: 'Key benefits',
    benefitsTitle: 'Benefits of Anti-Graffiti Film',
    benefits: [
      'Damage lands on film, not glass',
      'Cheaper than replacing a panel',
      'Less downtime for the business',
      'Clear film keeps the storefront look',
      'Replaceable as often as needed',
      'Works on storefront and interior glass',
    ],
    projectsTitle: 'Recent Anti-Graffiti Film Projects',
    projects: [
      {
        img: '/antigraffiti-project-1.jpg',
        srcset: '/antigraffiti-project-1-560.jpg 560w, /antigraffiti-project-1.jpg 1000w',
        sizes: '(max-width: 640px) 71vw, (max-width: 900px) 85vw, 44vw',
        w: 1000,
        h: 752,
        alt: 'Installer squeegeeing anti-graffiti film onto commercial storefront glass in Los Angeles',
        title: 'Commercial Storefront Entry',
        area: 'Los Angeles',
        tag: 'Anti-Graffiti Film',
        body: 'A replaceable protective layer installed across street-facing entry glass to help reduce the cost of future graffiti and surface damage.',
      },
      {
        img: '/storefront-project-1.jpg',
        srcset: '/storefront-project-1-560.jpg 560w, /storefront-project-1.jpg 1000w',
        sizes: '(max-width: 640px) 71vw, (max-width: 900px) 85vw, 44vw',
        w: 1000,
        h: 752,
        alt: 'Glass polishing and anti-graffiti film installation on a retail storefront in Hollywood, Los Angeles',
        title: 'Retail Storefront Restoration',
        area: 'Hollywood',
        tag: 'Glass Polishing + Anti-Graffiti Film',
        body: 'The existing storefront glass was polished to remove surface damage, then protected with a new replaceable layer of anti-graffiti film.',
      },
    ],
    processTitle: 'Installation and replacement process',
    processSteps: [
      ['Assess the glass and existing film', 'We look at what the damage actually is — surface marks on a film layer, or damage that has reached the glass itself.'],
      ['Remove the old sacrificial layer', 'Any previous anti-graffiti film is taken off so the pane underneath can be seen and worked on.'],
      ['Clean and prepare the glass', 'The surface is cleaned down so the new layer bonds properly and no debris is trapped underneath.'],
      ['Polish or restore where needed', 'If the glass is marked or etched, we assess polishing first. Some deeper damage cannot be fully removed, and we tell you before starting.'],
      ['Install the new anti-graffiti film', 'The 4 mil or 7 mil layer is fitted to each pane, chosen for how exposed the glass is and how it has been damaged before.'],
      ['Check edges and surface', 'Edges and the finished surface are checked so the layer sits cleanly and can be removed again later.'],
    ],
    faqTitle: 'Anti-graffiti film questions',
    faq: [
      ['Does anti-graffiti film prevent vandalism?', 'No. It does not stop anyone from scratching or tagging the glass. What it changes is the outcome: the damage lands on a replaceable layer instead of the pane, so you replace film rather than a storefront panel.'],
      ['What is the difference between 4 mil and 7 mil?', '4 mil is the standard, practical option for most storefronts, doors and commercial glass. 7 mil is a thicker protective layer for sites with repeated vandalism, deeper scratching or elevated risk. The final choice depends on the site and the condition of the glass.'],
      ['Does 7 mil stop deep scratches completely?', 'No, and we would not claim that. A thicker layer gives more material to absorb damage, but deep enough damage can still go through. It is a matter of how much it takes, not whether it is possible.'],
      ['Does it protect against acid etching?', 'It gives the etching something to attack other than the glass — the sacrificial layer takes it instead. How much protection you get depends on the substance and how long it sits, so this is protection rather than a guarantee against every compound and depth.'],
      ['Can the film be replaced without replacing the glass?', 'Yes, and that is the whole point of it. The damaged layer comes off, the glass is cleaned and prepared, and a new layer goes on. The original pane stays in place.'],
      ['How often does the film need replacing?', 'There is no fixed interval. It is replaced when it needs to be — when scratches, graffiti, etching or hazing have become noticeable enough to matter. Some storefronts go years; heavily targeted ones go sooner.'],
      ['What if the glass underneath is already damaged?', 'We assess whether polishing or restoration can bring it back before any new film goes on. Some deeper scratches and etching cannot be removed completely, and we tell you that up front rather than after the fact.'],
      ['Can anti-graffiti film be combined with solar-control film?', 'Yes. On some commercial storefronts, solar-control film and anti-graffiti film can be used as a combined system to address heat, glare and surface damage. The correct film order and compatibility depend on the glass, film products and installation conditions, so the system is confirmed after the glass is reviewed.'],
      ['Is anti-graffiti film visible?', 'Clear anti-graffiti film leaves the storefront looking essentially unchanged — the glass keeps its appearance and light level. In most applications it is difficult to notice during normal viewing, though edges, reflections or certain lighting can still reveal it.'],
      ['How long does installation take?', 'Many storefront installations can be completed within one day, depending on the number and size of panels, access and whether removal or polishing is required. We confirm the timeline once we have seen photos and a panel count.'],
      ['Can it be installed outside business hours?', 'Yes, and it is a common request for retail and restaurants. Tell us your trading hours when you send photos and we will schedule around them.'],
    ],
    areasTitle: 'Anti-Graffiti Film Service Areas',
    areasNote:
      'We install anti-graffiti window film throughout Los Angeles and surrounding areas for retail storefronts, restaurants, offices, commercial entries and interior glass.',
    formIntro:
      'Send photos of the glass, panel count, approximate measurements and your ZIP code. We’ll confirm whether polishing is needed and recommend a film thickness.',
    serviceOptions: [
      '4 Mil Anti-Graffiti Film',
      '7 Mil Anti-Graffiti Film',
      'Glass Polishing + Anti-Graffiti Film',
      'Replace Damaged Anti-Graffiti Film',
      'Not Sure',
    ],
  },
  {
    file: 'decorative-privacy-window-film-los-angeles.html',
    eyebrow: 'Decorative & Privacy Film',
    title: 'Decorative & Privacy Window Film in Los Angeles',
    description:
      'Frosted, blackout, gradient and custom decorative films for offices, bathrooms, conference rooms, entry glass and interior partitions.',
    heroImage: {
      src: '/decorative-hero.jpg',
      w: 900,
      h: 1342,
      alt: 'Frosted privacy film installed on a floor-to-ceiling office glass partition in Los Angeles',
    },
    problemsTitle: 'Decorative and privacy projects usually start with exposed interior glass.',
    problems: [
      'Bathrooms and entries that need privacy',
      'Conference rooms and offices with exposed glass',
      'Luxury interiors needing a cleaner design statement',
      'Need for decorative or branding-oriented glass treatments',
    ],
    filmTypesTitle: 'Types of Decorative & Privacy Film',
    filmTypes: [
      ['Frosted Privacy Film', 'The most common choice — an even etched-glass look that blocks the view while still letting daylight through, day and night.'],
      ['Blackout Film', 'Fully opaque film designed to block visibility and significantly reduce light transmission.'],
      ['Whiteout Film', 'Opaque white film that conceals storage, equipment and work areas while maintaining a clean, bright appearance.'],
      ['Gradient Film', 'A graded fade from frosted to clear, used to cover sightlines at seated height while leaving the upper glass open.'],
      ['Patterned Decorative Film', 'Bands, geometric patterns and textured finishes that add design to plain glass and mark it as visible.'],
      ['Custom Printed / Branded Film', 'Cut logos, lettering and printed graphics applied to glass for storefronts, offices and interior branding.'],
    ],
    whereBestTitle: 'Where decorative and privacy film works best',
    whereBest: [
      'Bathrooms and shower glass',
      'Office partitions',
      'Conference rooms',
      'Entry doors and sidelights',
      'Medical and professional offices',
      'Storefront branding',
      'Interior glass walls',
    ],
    benefitsTitle: 'Benefits of Decorative & Privacy Film',
    benefits: [
      'Privacy without losing daylight',
      'No curtains, blinds or hardware',
      'More cost-effective than replacing glass',
      'Defines and zones open spaces',
      'Makes clear glass visible and safer',
      'Removable and replaceable later',
    ],
    projectsTitle: 'Recent Decorative & Privacy Film Projects',
    projects: [
      {
        img: '/decorative-project-1.jpg',
        w: 1000,
        h: 752,
        alt: 'Blackout film installed on a full-height interior glass wall in a Los Angeles studio space',
        title: 'Studio Glass Wall',
        area: 'Los Angeles',
        tag: 'Blackout Film',
        body: 'Opaque black film applied across a full-height glass wall to block light and separate the room without building a partition.',
      },
      {
        img: '/decorative-project-2.jpg',
        w: 1000,
        h: 752,
        alt: 'White opaque privacy film installed on glass panels at a Los Angeles tennis club',
        title: 'Tennis Club Service Area Screening',
        area: 'Los Angeles',
        tag: 'Whiteout Privacy Film',
        body: 'White opaque film installed on glass panels to conceal the service area while maintaining a clean appearance from the court.',
      },
    ],
    processTitle: 'How a decorative film installation works',
    processSteps: [
      ['Send photos & goals', 'Share photos of the glass, rough measurements and what you need — privacy, blackout, branding or a design finish.'],
      ['Pick the finish', 'We show samples so you can compare frosted, whiteout, gradient and patterned options against your glass and lighting.'],
      ['Template & cut', 'Panels are measured and cut to fit each pane, including any logos, bands or custom patterns.'],
      ['Clean installation', 'Glass is cleaned and the film applied wet, then squeegeed out. Most interior jobs finish within a day.'],
    ],
    faqTitle: 'Decorative & privacy film questions',
    faq: [
      ['Does frosted privacy film work at night?', 'Yes. Unlike reflective daytime privacy film, frosted and other opaque decorative films diffuse the glass itself, so they obscure the view in both directions regardless of the lighting.'],
      ['Will frosted film make the room dark?', 'No. Frosted film scatters light rather than blocking it, so rooms stay bright while the view through the glass is obscured. Blackout and whiteout films are the ones that stop light.'],
      ['Can I still see out through decorative film?', 'Not with frosted, whiteout or blackout film — they obscure the view both ways. Gradient film keeps part of the glass clear, so you keep a view above or below the frosted band.'],
      ['Can you cut a logo or custom design into the film?', 'Yes. Logos, lettering, bands and patterns can be cut from frosted or coloured film, and full-colour graphics can be printed. Send artwork and we will confirm what works at your glass size.'],
      ['Can decorative film go on shower glass?', 'Yes, and it is a common request. We use films suited to wet areas and apply them to the dry outer face of the glass where the layout allows.'],
      ['Is it cheaper than replacing the glass with frosted glass?', 'In most cases yes, and it is far less disruptive — the existing glass stays in place and there is no removal, disposal or refitting.'],
      ['How long does decorative film last?', 'Interior decorative films typically last many years, since they are not exposed to weather or direct sun the way exterior applications are. We confirm the manufacturer warranty for the specific film used.'],
      ['Can the film be removed or changed later?', 'Yes. Decorative film can be removed without damaging the glass, which makes it practical for leased spaces, rebrands or changing a design.'],
    ],
    areasTitle: 'Decorative & Privacy Film Service Areas',
    areasNote:
      'We install decorative and privacy window film throughout Los Angeles and surrounding areas for homes, offices, clinics, retail spaces and interior glass partitions.',
    formIntro:
      'Send photos of the glass, approximate measurements and your ZIP code. We’ll recommend suitable finishes and show samples before anything is ordered.',
    serviceOptions: [
      'Frosted Privacy Film',
      'Blackout Film',
      'Whiteout Film',
      'Gradient Film',
      'Patterned Decorative Film',
      'Custom Printed / Branded Film',
      'Not Sure',
    ],
  },
  {
    file: 'smart-film-installation-los-angeles.html',
    eyebrow: 'Smart Film',
    title: 'Smart Film Installation in Los Angeles',
    description:
      'PDLC switchable film that changes between transparent and private modes using electrical power — for offices, conference rooms, clinics and homes across Los Angeles.',
    // Real projects are not published yet; the section returns once we have
    // confirmed photos of a job in both transparent and private modes. Until
    // then the hero photo is a demonstration of the system, and the modes
    // section is a drawn diagram — neither is presented as a project of ours.
    layout: [
      'problems',
      'info:0',
      'modes',
      'filmTypes',
      'chooser',
      'solutions',
      'info:1',
      'info:2',
      'info:3',
      'info:4',
      'doesDoesNot',
      'benefits',
      'process',
      'faq',
      'areas',
    ],
    heroImage: {
      src: '/card-smartfilm.jpg',
      srcset: '/card-smartfilm-560.jpg 560w, /card-smartfilm.jpg 900w',
      sizes: '(max-width: 900px) 92vw, 37vw',
      w: 900,
      h: 600,
      alt: 'Illustration of switchable smart film on an office conference room partition, shown in transparent and private modes',
    },
    modes: {
      eyebrow: 'How it looks',
      title: 'Transparent Mode and Private Mode',
      desktop: { src: '/smartfilm-modes.svg', w: 1000, h: 560 },
      mobile: { src: '/smartfilm-modes-mobile.svg', w: 600, h: 1120 },
      alt: 'Diagram of one glazed partition drawn in transparent mode and in private mode, with a single ON/OFF switch between the two states',
      note: 'Illustrative example — final appearance depends on the selected Smart Film system, glass and lighting conditions.',
    },
    problemsTitle: 'Smart film projects usually start with glass that needs privacy only part of the time.',
    problems: [
      'Meeting rooms that are open one hour and confidential the next',
      'Consult rooms that need privacy without losing daylight',
      'Glass walls where frosted film would make the change permanent',
      'Interiors where blinds and curtains do not suit the design',
      'Spaces where the privacy requirement changes through the day',
    ],
    infoBlocks: [
      {
        eyebrow: 'The basics',
        title: 'Transparent and Private Modes',
        intro:
          'Switchable film can change between transparent and private modes using electrical power. The default state and powered state depend on the selected film system: standard PDLC is typically private when unpowered and clearer when powered, while reverse configurations can operate in the opposite way.',
        points: [
          'In private mode the glass is translucent — daylight still passes through, but the view through it is obscured.',
          'In transparent mode the glass returns to a clear or near-clear view, depending on the film system.',
          'Switching is immediate and can be repeated as often as the room needs.',
          'The right system depends on which state the glass should hold when nothing is switched on, including if the power is interrupted.',
        ],
      },
      {
        eyebrow: 'Power',
        title: 'Transformer, Controller and Power Supply',
        intro:
          'Smart film is an electrical system, not only a film. It requires power, a transformer or power supply unit, and a control method, and that side of the project is planned before installation rather than after.',
        points: [
          'Every panel is connected, so the equipment locations are part of the design rather than an afterthought.',
          'The transformer or power supply and the controller need a position that stays accessible for service and is close enough to the glass for the cable run.',
          'The control method for the room is agreed at the same time as the equipment locations.',
          'Equipment positions and cable routing are confirmed before material is ordered.',
        ],
      },
      {
        eyebrow: 'Electrical',
        title: 'Wiring and Electrical Work',
        intro:
          'The film has to be connected to power, and that work is planned around the building rather than around the glass. Cable routing, the position of the equipment and the switch, and who carries out the connection are all settled before installation starts.',
        points: [
          'Cable routing is simplest when the wall or ceiling is still open, so new builds and remodels are the easiest case.',
          'On existing partitions the cable has to reach the frame or mullion without becoming visible, and that is usually what decides the layout.',
          'Electrical connection may need to be completed or coordinated with a qualified electrician, depending on the project.',
          'Electrical work is estimated separately from the film and its installation.',
        ],
      },
      {
        eyebrow: 'Limitations',
        title: 'Glass and Installation Limitations',
        intro:
          'Smart film is more constrained than standard architectural film, and the limits are worth knowing before the design is fixed. Panel size, seams, glass compatibility and installation conditions depend on the selected smart film system and are confirmed before material is ordered.',
        points: [
          'Wider glass can require more than one piece, so where a seam would fall is reviewed against the panel layout.',
          'The glass has to be clean, flat and in sound condition, which is checked before anything is ordered.',
          'The electrical connection sits at the edge of the film, so the frame or mullion has to be able to conceal it.',
          'Where a room does not suit a switchable system, a fixed privacy finish is often the better answer.',
        ],
        link: {
          href: '/decorative-privacy-window-film-los-angeles.html',
          label: 'Permanent privacy instead? See Decorative & Privacy Film →',
        },
      },
      {
        eyebrow: 'Cost',
        title: 'What Smart Film Costs',
        intro:
          'Smart film installation starts from $60 per sq ft. Electrical work is not included. It sits in a different price bracket from standard architectural film because it is an electrical product rather than a film alone.',
        points: [
          'The final cost depends on the panel sizes, the system selected, the number of panels, the control method and the electrical work involved.',
          'Electrical work is estimated separately, because it depends on the building rather than on the glass.',
          'We confirm the figure for a specific project after seeing photos and panel sizes.',
        ],
      },
    ],
    filmTypesTitle: 'Standard and Reverse Switchable Systems',
    filmTypes: [
      [
        'Standard PDLC Film',
        'Private when unpowered, clearer when powered. The glass holds its private state by default and is switched toward transparent when the room needs to open up, which suits spaces that are private most of the time.',
      ],
      [
        'Reverse Switchable Film',
        'Transparent when unpowered, private when powered. The glass stays clear by default and is switched to private on demand, which suits spaces that are open most of the day and need privacy only for part of it.',
      ],
      [
        'Choosing between them',
        'The practical question is which state the glass should hold when nothing is switched on, including what happens if power is interrupted. Neither sequence suits every project, so we confirm it for the specific system before anything is ordered.',
      ],
      [
        'What both have in common',
        'Both change between transparent and private modes electrically, and both need a power supply and a control method at every panel. The default state is what separates them.',
      ],
    ],
    chooserTitle: 'Which operating sequence fits the space',
    chooserHeadLeft: 'How the space is used',
    chooserHeadRight: 'Usual system',
    chooser: [
      ['Open most of the day, private occasionally', 'Reverse switchable'],
      ['Private most of the time, opened when needed', 'Standard PDLC'],
      ['Glass should stay clear if the power is off', 'Reverse switchable'],
      ['Glass should stay private if the power is off', 'Standard PDLC'],
      ['Bathroom, ensuite or permanently private glass', 'Standard PDLC'],
      ['Not sure which state should be the default', 'Decided from how the room is used'],
    ],
    solutionsTitle: 'What smart film solves in each space',
    solutions: [
      [
        'Offices',
        'Interior partitions and perimeter offices that need to look open most of the time and close down for part of it. The film goes onto the partition glass, so the layout of the office does not change.',
      ],
      [
        'Conference Rooms',
        'The most common request. The glass stays clear in normal use and switches to private for confidential meetings and presentations — no blinds to pull and nothing added to the design.',
      ],
      [
        'Clinics and Medical Offices',
        'Consult rooms, reception glazing and interior windows that need privacy at specific moments while keeping daylight and a clean, non-clinical finish.',
      ],
      [
        'Residential',
        'Bathrooms, ensuites, street-facing glass and interior glass walls in homes where fixed frosting would be permanent and blinds would not suit the space.',
      ],
    ],
    doesTitle: 'What smart film does — and does not do',
    doesList: [
      'Switches between transparent and private modes on demand',
      'Keeps daylight in the room in both modes',
      'Replaces blinds, curtains and fixed frosted film',
      'Leaves the existing glass and layout in place',
    ],
    doesNotList: [
      'Does not black the room out — private mode is translucent, not opaque',
      'Does not operate without power and a working control system',
      'Is not a solar-control or heat-rejection product on its own',
      'Does not add sound insulation between rooms',
      'Does not change its default state after the system is selected',
    ],
    benefitsEyebrow: 'Key benefits',
    benefitsTitle: 'Benefits of Smart Film',
    benefits: [
      'Privacy on demand',
      'Daylight kept in both modes',
      'No blinds, curtains or hardware',
      'Existing glass and layout unchanged',
      'Clean, minimal finish',
      'Switched as often as the room needs',
    ],
    processTitle: 'How a smart film project works',
    processSteps: [
      ['Send photos, sizes and how the room is used', 'Share the glass or partition, rough width and height per panel, and what the space is used for. How the room is used is what decides the operating sequence.'],
      ['Choose the system and operating sequence', 'Standard PDLC or a reverse configuration, based on which state the glass should hold by default and what should happen if power is interrupted.'],
      ['Plan power and controls', 'Equipment locations, cable routing and the control method for the room are agreed before anything is ordered.'],
      ['Arrange the electrical connection', 'Electrical connection may need to be completed or coordinated with a qualified electrician, depending on the project. It is estimated separately from the film.'],
      ['Order the film', 'Smart film is made to the panel sizes for the project, so it is ordered for the job rather than taken from stock.'],
      ['Installation and handover', 'Panels are installed, connected and checked in both modes, and the controls are handed over with care instructions.'],
    ],
    faqTitle: 'Smart film questions',
    faq: [
      ['How does smart film switch between transparent and private?', 'Switchable film can change between transparent and private modes using electrical power. The default state and powered state depend on the selected film system: standard PDLC is typically private when unpowered and clearer when powered, while reverse configurations can operate in the opposite way. The switch itself is immediate and can be repeated as often as the room needs.'],
      ['What is the difference between standard PDLC and reverse switchable film?', 'The default state. Standard PDLC is typically private when unpowered and clearer when powered, so the glass holds its private state unless it is switched. A reverse configuration works the other way — transparent when unpowered, private when powered. Neither suits every project, so which one is right depends on how the room is used and which state the glass should hold by default.'],
      ['What happens if the power goes out?', 'The film returns to its unpowered state, and which state that is depends on the system: standard PDLC goes to its private state, while a reverse configuration goes to its transparent state. That is one of the main reasons the operating sequence is decided before anything is ordered.'],
      ['Does private mode make the room dark?', 'No. Private mode is translucent rather than opaque — the view through the glass is obscured while daylight still passes through. If the goal is to block light or black a room out, that is a decorative or blackout film rather than smart film.'],
      ['Can smart film be installed on existing glass?', 'In many cases, yes. The final recommendation depends on the glass condition, size, wiring access, controller location, and whether the project is residential, office, clinic, conference room or commercial space. Panel size, seams, glass compatibility and installation conditions depend on the selected smart film system and are confirmed before material is ordered.'],
      ['Is smart film a heat or glare product?', 'No. Smart film is a privacy product — it changes what can be seen through the glass, not how much heat comes through it. Where heat and glare are the problem, solar-control film is the right answer, and the two are specified separately.'],
      ['Where is smart film normally used?', 'Offices and interior partitions, conference rooms, clinics and medical offices, and residential glass such as bathrooms, ensuites and interior glass walls. The common thread is glass that needs privacy for part of the time rather than all of it.'],
      ['How much does smart film cost?', 'Smart film installation starts from $60 per sq ft. Electrical work is not included. The final cost depends on the panel sizes, the system selected, the number of panels, the control method and the electrical work involved, so we confirm the figure after seeing photos and sizes.'],
      ['Do I need an electrician?', 'Smart film requires power, a transformer or power supply unit and a control method, so there is an electrical side to every project. Electrical connection may need to be completed or coordinated with a qualified electrician, depending on the project. We confirm what is involved once the equipment locations and cable routing are agreed.'],
    ],
    areasTitle: 'Smart Film Service Areas',
    areasNote:
      'We install smart film throughout Los Angeles and surrounding areas for offices, conference rooms, clinics, medical offices and homes.',
    formIntro:
      'Send photos of the glass or partition, rough sizes per panel and your ZIP code. Tell us how the room is used and we’ll recommend an operating sequence and confirm what the power and control side involves.',
    serviceOptions: [
      'Office / Conference Room',
      'Clinic or Medical Office',
      'Residential',
      'Standard PDLC',
      'Reverse Switchable',
      'Repair or Replace Existing Smart Film',
      'Not Sure',
    ],
  },
  {
    file: 'storefront-window-protection-los-angeles.html',
    eyebrow: 'Storefront Window Protection',
    title: 'Storefront Window Protection in Los Angeles',
    description:
      'Anti-graffiti, solar-control and safety film solutions for storefront glass, entry doors and customer-facing commercial spaces.',
    layout: ['problems', 'filmTypes', 'chooser', 'info', 'benefits', 'projects', 'process', 'faq', 'areas'],
    heroImage: {
      src: '/storefront-hero.jpg',
      w: 1000,
      h: 1250,
      alt: 'Solar control film installed on the storefront glass of a Los Angeles retail business',
    },
    problemsTitle: 'Storefront projects usually combine several problems at once.',
    problems: [
      'Scratches, vandalism or graffiti on exterior glass',
      'Heat and glare in customer-facing spaces',
      'Security concerns on exposed entry glass',
      'Storefront appearance and presentation',
    ],
    filmTypesTitle: 'Storefront Film Solutions',
    filmTypes: [
      ['Anti-Graffiti Film', 'A replaceable sacrificial layer that protects storefront glass from scratches, acid etching and vandalism.'],
      ['Solar Control Film', 'Reduces heat and glare in customer-facing spaces while helping protect displays and interior finishes.'],
      ['Safety & Security Film', 'Helps hold shattered glass together and increases the time and effort required to create an opening.'],
      ['Clear UV Film', 'Provides nearly invisible UV protection for merchandise, displays and interior finishes.'],
      ['Decorative & Branded Film', 'Adds privacy, logos, patterns or visual separation to storefront and interior commercial glass.'],
      ['Combined Film Packages', 'Combines compatible film solutions when the storefront needs heat control, glass protection and security support.'],
    ],
    chooserTitle: 'Choose a Storefront Film by Goal',
    chooser: [
      ['Protect against scratches and vandalism', 'Anti-graffiti film'],
      ['Reduce heat and glare', 'Solar-control film'],
      ['Delay forced-entry attempts', 'Safety & security film'],
      ['Protect merchandise from UV', 'Clear UV film'],
      ['Add privacy or branding', 'Decorative or branded film'],
      ['Address multiple issues', 'Combined film package'],
    ],
    infoBlocks: [
      {
        eyebrow: 'Vandalism',
        title: 'Anti-Graffiti Film for Storefront Glass',
        intro:
          'Anti-graffiti film acts as a replaceable sacrificial layer over the glass. When the film takes scratching, tagging or etching, it can usually be removed and replaced without replacing the original glass — which is normally the cheaper and far less disruptive path for a working storefront.',
        points: [
          '4 mil is a practical standard option for everyday storefront exposure.',
          '7 mil provides more material thickness and is generally preferred where deeper scratches or heavier damage are a concern.',
          'It reduces the cost and disruption of damage — it does not prevent vandalism from happening.',
          'Final suitability depends on the glass condition, access and the goals for the project.',
        ],
      },
      {
        eyebrow: 'Security',
        title: 'Storefront Safety Film',
        intro:
          'Safety and security film helps hold broken glass together and can meaningfully increase the time and effort required to penetrate a damaged storefront opening. 8 mil is a practical entry-level option, while 12 mil, 16 mil and thicker systems provide progressively greater resistance to repeated impact. Overall performance depends on the glass, frame and attachment system.',
        link: {
          href: '/safety-security-window-film-los-angeles.html',
          label: 'See the full Safety & Security Film page →',
        },
      },
      {
        eyebrow: 'Comfort',
        title: 'Solar Control for Storefronts',
        intro:
          'Solar-control film addresses the heat and light side of a storefront, which matters most where staff work all day next to the glass and where merchandise sits in direct sun.',
        points: [
          'Reduces heat build-up in customer-facing space.',
          'Reduces glare on displays, screens and counters.',
          'Improves day-to-day comfort for staff and visitors.',
          'Helps protect merchandise and interior finishes from UV exposure.',
          'Keeps visibility through the storefront, depending on the film selected.',
        ],
      },
    ],
    benefitsTitle: 'Benefits of Storefront Window Film',
    benefits: [
      'Lower glass-replacement risk',
      'Easier removal of vandalism damage',
      'Improved staff and customer comfort',
      'Added delay against forced entry',
      'Cleaner storefront appearance',
      'Flexible solutions for different glass areas',
    ],
    projectsTitle: 'Recent Storefront Protection Projects',
    projects: [
      {
        img: '/storefront-project-1.jpg',
        w: 1000,
        h: 752,
        srcset: '/storefront-project-1-560.jpg 560w, /storefront-project-1.jpg 1000w',
        sizes: '(max-width: 640px) 71vw, (max-width: 900px) 85vw, 44vw',
        alt: 'Glass polishing and anti-graffiti film installation on a retail storefront in Hollywood, Los Angeles',
        title: 'Retail Storefront Protection',
        area: 'Hollywood',
        tag: 'Glass Polishing + Anti-Graffiti Film',
        body: 'The existing storefront glass was polished to remove surface damage, then protected with a new replaceable layer of anti-graffiti film.',
      },
      {
        img: '/storefront-project-2.jpg',
        w: 1000,
        h: 752,
        srcset: '/storefront-project-2-560.jpg 560w, /storefront-project-2.jpg 1000w',
        sizes: '(max-width: 640px) 71vw, (max-width: 900px) 85vw, 44vw',
        alt: 'Dark solar control film installed across the storefront glass of a Los Angeles commercial unit',
        title: 'Commercial Storefront Tint',
        area: 'Los Angeles',
        tag: 'Black Solar-Control Film',
        body: 'Dark solar-control film installed across the full storefront glazing to cut heat and glare and give the frontage a clean, uniform look from the street.',
      },
    ],
    processTitle: 'How a storefront project works',
    processSteps: [
      ['Send photos and rough measurements', 'Share photos of the storefront, panel count, approximate sizes and the problems you want to solve.'],
      ['Review glass and exposure', 'We review the glass type, existing damage, sun exposure, access and security concerns.'],
      ['Select the film system', 'Choose anti-graffiti, solar-control, safety film or a compatible combined approach.'],
      ['Professional installation', 'The glass is prepared and the selected film is installed with attention to storefront access and business operations.'],
      ['Future replacement or aftercare', 'Sacrificial anti-graffiti film can be replaced later if damaged, while other films receive care and curing instructions.'],
    ],
    faqTitle: 'Storefront window film questions',
    faq: [
      ['What is the best film for storefront vandalism?', 'Anti-graffiti film, because it is designed to be sacrificial — the film takes the scratching or etching instead of the glass, and the film is what gets replaced. It does not prevent vandalism from happening; it changes what the damage costs you.'],
      ['What is the difference between 4 mil and 7 mil anti-graffiti film?', 'Material thickness. 4 mil is a practical standard for everyday storefront exposure, while 7 mil gives more material to absorb deeper scratches and heavier damage. Which one suits a given storefront depends on how exposed the glass is and how often it has been hit before.'],
      ['Can anti-graffiti film be replaced without replacing the glass?', 'That is the point of it. In most cases the damaged film is removed and a new layer applied, leaving the original glass in place — normally far cheaper and quicker than replacing a storefront panel. If the damage went through to the glass itself, the glass still needs attention.'],
      ['Can storefront film reduce heat and glare?', 'Yes. Solar-control film reduces heat build-up and glare in the customer-facing space and helps limit UV exposure to merchandise and finishes. How much depends on the specific film selected and the glass it goes on, so we confirm the product before quoting numbers.'],
      ['Can solar-control and safety film be combined?', 'Often yes — some films carry both a solar-control layer and a safety interlayer, and in other cases products can be layered. Compatibility has to be confirmed for the specific glass and products first, since the wrong combination can create thermal stress on the glass.'],
      ['Does security film stop a break-in?', 'No film guarantees that entry is impossible. What safety film does is hold the broken glass together so the opening does not clear in one hit, which increases the time, effort and noise involved. Standard architectural film is also not bullet-resistant glazing.'],
      ['Is storefront film visible?', 'It depends on the film. Clear safety and clear UV films are close to invisible and leave the storefront looking unchanged. Solar-control and decorative films are visible by design, since the tint or finish is doing the work.'],
      ['How long does storefront installation take?', 'Many storefronts are completed within a day, depending on the number and size of panels, the film type and access. Thicker security films are slower to work with. We confirm the timeline once we have seen photos and panel counts.'],
      ['Can installation be completed outside business hours?', 'Yes, and it is a common request for retail and restaurants. Scheduling evenings or early mornings keeps the storefront clear during trading hours — tell us your hours when you send photos and we will work around them.'],
      ['How long does storefront film last?', 'It varies by product, how exposed the glass is, whether the film is interior or exterior and how it is maintained. Anti-graffiti film is intended to be replaced periodically by design. We confirm the manufacturer warranty for the specific film used on your project.'],
    ],
    areasTitle: 'Storefront Window Film Service Areas',
    areasNote:
      'We install storefront window film throughout Los Angeles and surrounding areas for retail stores, offices, restaurants, commercial entries and customer-facing glass.',
    formIntro:
      'Send photos of the storefront, panel count, approximate measurements and your ZIP code. We’ll recommend a film system based on the problems you want to solve.',
    serviceOptions: [
      'Anti-Graffiti Film',
      'Solar Control Film',
      'Safety & Security Film',
      'Clear UV Film',
      'Decorative & Branded Film',
      'Combined Film Package',
      'Not Sure',
    ],
  },
]

const servicesDropdown = serviceMenuItems
  .map((item) => `<a href="${item.href}">${item.label}</a>`)
  .join('')

const route = window.location.pathname.split('/').pop() || 'residential-window-film-los-angeles.html'
const page = servicePages.find((item) => item.file === route) ?? servicePages[0]

const serviceSelectOptions = (page.serviceOptions ?? serviceOptions)
  .map((option) => `<option value="${option}">${option}</option>`)
  .join('')

const projectImageByPage = {
  'residential-window-film-los-angeles.html': {
    alt: 'Residential window film Los Angeles solar control film installation on home glass',
    text: 'Premium residential glass film for heat reduction, privacy and UV protection across Los Angeles.',
  },
  'commercial-window-film-los-angeles.html': {
    alt: 'Commercial window film Los Angeles office and storefront solar control film installation',
    text: 'Commercial film applications for storefronts, offices, glare control and cleaner building presentation.',
  },
  'safety-security-window-film-los-angeles.html': {
    alt: 'Safety security window film Los Angeles protection film on storefront glass and entry glazing',
    text: 'Safety and security film helps strengthen vulnerable glazing and hold shattered glass together after impact.',
  },
  'anti-graffiti-window-film-los-angeles.html': {
    alt: 'Anti graffiti window film Los Angeles storefront glass protection installation',
    text: 'Anti-graffiti protection for storefront glass exposed to scratching, tagging and repeated vandalism.',
  },
  'decorative-privacy-window-film-los-angeles.html': {
    alt: 'Decorative privacy window film Los Angeles frosted film on office and interior glass',
    text: 'Decorative and privacy film for offices, bathrooms, conference rooms and luxury interior glass.',
  },
  'smart-film-installation-los-angeles.html': {
    alt: 'Smart film installation Los Angeles switchable privacy film on office conference room glass',
    text: 'Switchable smart film for modern privacy control in clinics, offices and luxury interiors.',
  },
  'storefront-window-protection-los-angeles.html': {
    alt: 'Storefront window protection Los Angeles anti graffiti and safety film on retail glass',
    text: 'Storefront-focused film solutions that combine protection, comfort and premium curb presentation.',
  },
}

const pageImage = projectImageByPage[page.file]

// Optional deep-content sections (rendered only when the page config provides them)
const filmTypesSection = page.filmTypes
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Film types</p>
          <h2>${page.filmTypesTitle}</h2>
        </div>
        <div class="card-grid two-up">
          ${page.filmTypes
            .map(
              ([title, body, link]) => `
                <article class="service-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                  ${link ? `<p class="card-link"><a href="${link.href}">${link.label}</a></p>` : ''}
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const attachmentSection = page.attachmentPoints
  ? `
      <section class="section split-section attachment-section">
        <div>
          <p class="eyebrow">Film + frame</p>
          <h2>${page.attachmentTitle}</h2>
          <p class="attachment-intro">${page.attachmentIntro}</p>
        </div>
        <div class="luxury-list">
          ${page.attachmentPoints.map((item) => `<div>${item}</div>`).join('')}
        </div>
      </section>
    `
  : ''

const doesDoesNotSection = page.doesList
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Setting expectations</p>
          <h2>${page.doesTitle}</h2>
        </div>
        <div class="does-grid">
          <div class="does-col does-col-yes">
            <h3>What it does</h3>
            <ul>${page.doesList.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="does-col does-col-no">
            <h3>What it does not do</h3>
            <ul>${page.doesNotList.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        </div>
      </section>
    `
  : ''

const whereBestSection = page.whereBest
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Best applications</p>
          <h2>${page.whereBestTitle}</h2>
        </div>
        <ul class="benefits-list where-best-list">
          ${page.whereBest.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </section>
    `
  : ''

const benefitsSection = page.benefits
  ? `
      <section class="section benefits-section">
        <div class="section-heading">
          <p class="eyebrow">${page.benefitsEyebrow ?? 'Why homeowners install it'}</p>
          <h2>${page.benefitsTitle}</h2>
        </div>
        <ul class="benefits-list">
          ${page.benefits.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </section>
    `
  : ''

// Older pages still use the title+body "solutions" cards; residential replaced
// them with the shorter benefits list above.
const solutionsSection = page.solutions
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">What this service solves</p>
          <h2>${page.solutionsTitle}</h2>
        </div>
        <div class="card-grid two-up">
          ${page.solutions
            .map(
              ([title, body]) => `
                <article class="service-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const chooserSection = page.chooser
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Choosing a film</p>
          <h2>${page.chooserTitle}</h2>
        </div>
        <div class="chooser-table-wrap">
          <table class="chooser-table">
            <thead>
              <tr><th scope="col">${page.chooserHeadLeft ?? 'Your goal'}</th><th scope="col">${page.chooserHeadRight ?? 'Recommended film'}</th></tr>
            </thead>
            <tbody>
              ${page.chooser
                .map(
                  ([goal, film, href]) =>
                    `<tr><td>${goal}</td><td>${
                      href
                        ? `<a class="chooser-pick" href="${href}">${film}</a>`
                        : `<span class="chooser-pick">${film}</span>`
                    }</td></tr>`,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </section>
    `
  : ''

// Compact explainer blocks (storefront uses three of them). Each is an
// intro paragraph, optional bullets and an optional internal link.
// `info` in a layout renders them all together; `info:0`, `info:1` … place a
// single block, so a page can interleave them with other sections.
const infoBlockSections = (page.infoBlocks ?? []).map(
        (block) => `
      <section class="section info-block-section">
        <div class="section-heading">
          <p class="eyebrow">${block.eyebrow}</p>
          <h2>${block.title}</h2>
        </div>
        <p class="info-block-intro">${block.intro}</p>
        ${
          block.points
            ? `<ul class="info-block-list">${block.points.map((p) => `<li>${p}</li>`).join('')}</ul>`
            : ''
        }
        ${block.link ? `<p class="info-block-link"><a href="${block.link.href}">${block.link.label}</a></p>` : ''}
      </section>
    `,
)

const infoSection = infoBlockSections.join('')

// Drawn diagram rather than a photograph, so it is labelled as illustrative and
// never sits in a projects grid.
const modesSection = page.modes
  ? `
      <section class="section modes-section">
        <div class="section-heading">
          <p class="eyebrow">${page.modes.eyebrow}</p>
          <h2>${page.modes.title}</h2>
        </div>
        <picture class="modes-figure">
          <source media="(max-width: 640px)" srcset="${page.modes.mobile.src}" width="${page.modes.mobile.w}" height="${page.modes.mobile.h}" />
          <img
            src="${page.modes.desktop.src}"
            alt="${page.modes.alt}"
            loading="lazy"
            decoding="async"
            width="${page.modes.desktop.w}"
            height="${page.modes.desktop.h}"
          />
        </picture>
        <p class="modes-note">${page.modes.note}</p>
      </section>
    `
  : ''

const projectsSection = page.projects
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Real projects</p>
          <h2>${page.projectsTitle}</h2>
        </div>
        <div class="card-grid two-up project-mini-grid">
          ${page.projects
            .map(
              (project) => `
                <article class="service-card project-mini">
                  <img
                    src="${project.img}"
                    ${project.srcset ? `srcset="${project.srcset}" sizes="${project.sizes}"` : ''}
                    alt="${project.alt}"
                    ${project.lazy ? 'loading="lazy"' : ''}
                    decoding="async"
                    width="${project.w}"
                    height="${project.h}"
                  />
                  <div class="project-mini-body">
                    <h3 class="project-mini-title">${project.title}</h3>
                    <p class="project-mini-meta">${project.area} · ${project.tag}</p>
                    <p>${project.body}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
        ${page.projectsNote ? `<p class="projects-note">${page.projectsNote}</p>` : ''}
      </section>
    `
  : ''

const processSection = page.processSteps
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2>${page.processTitle}</h2>
        </div>
        <div class="card-grid two-up process-grid">
          ${page.processSteps
            .map(
              ([title, body], index) => `
                <article class="service-card">
                  <h3><span class="process-step-num">${index + 1}.</span> ${title}</h3>
                  <p>${body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const faqSection = page.faq
  ? `
      <section class="section service-faq-section">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>${page.faqTitle}</h2>
        </div>
        <div class="faq-list service-faq-list">
          ${page.faq
            .map(
              ([question, answer], index) => `
                <details${index === 0 ? ' open' : ''}><summary>${question}</summary><p>${answer}</p></details>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const areasSection = page.areasNote
  ? `
      <section class="section service-areas-note">
        <div class="section-heading">
          <p class="eyebrow">Where we work</p>
          <h2>${page.areasTitle ?? 'Service Areas'}</h2>
        </div>
        <p>${page.areasNote}</p>
      </section>
    `
  : ''

// Legacy filler section only for pages without the deeper content
const proofSection = page.filmTypes
  ? ''
  : `
      <section class="section service-proof-section">
        <div class="section-heading">
          <p class="eyebrow">Project fit</p>
          <h2>How this service supports premium Los Angeles properties.</h2>
          <p>${pageImage.text}</p>
        </div>
      </section>
    `

const heroSection = page.heroImage
  ? `
      <section class="section service-hero service-hero-split">
        <div class="service-hero-copy">
          <p class="eyebrow">${page.eyebrow}</p>
          <h1>${page.title}</h1>
          <p class="hero-text service-hero-text">${page.description}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Get a Fast Estimate</a>
            <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
          </div>
        </div>
        <img class="service-hero-photo" src="${page.heroImage.src}"${page.heroImage.srcset ? ` srcset="${page.heroImage.srcset}" sizes="${page.heroImage.sizes}"` : ''} alt="${page.heroImage.alt}" fetchpriority="high" width="${page.heroImage.w}" height="${page.heroImage.h}" />
      </section>
    `
  : `
      <section class="section service-hero">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p class="hero-text service-hero-text">${page.description}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">Get a Fast Estimate</a>
          <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
        </div>
      </section>
    `

const problemsSection = `
      <section class="section split-section">
        <div>
          <p class="eyebrow">Common reasons clients reach out</p>
          <h2>${page.problemsTitle}</h2>
        </div>
        <div class="luxury-list">
          ${page.problems.map((item) => `<div>${item}</div>`).join('')}
        </div>
      </section>
    `

// Section order. Pages keep the historical order unless they declare their
// own `layout`, so existing pages render byte-identically.
const SECTIONS = {
  problems: problemsSection,
  filmTypes: filmTypesSection,
  attachment: attachmentSection,
  whereBest: whereBestSection,
  doesDoesNot: doesDoesNotSection,
  benefits: benefitsSection,
  solutions: solutionsSection,
  chooser: chooserSection,
  info: infoSection,
  modes: modesSection,
  projects: projectsSection,
  process: processSection,
  faq: faqSection,
  areas: areasSection,
  proof: proofSection,
}

const DEFAULT_LAYOUT = [
  'problems',
  'filmTypes',
  'attachment',
  'whereBest',
  'doesDoesNot',
  'benefits',
  'solutions',
  'chooser',
  'projects',
  'process',
  'faq',
  'areas',
  'proof',
]

const bodySections = (page.layout ?? DEFAULT_LAYOUT)
  .map((key) => {
    if (key.startsWith('info:')) return infoBlockSections[Number(key.slice(5))] ?? ''
    return SECTIONS[key] ?? ''
  })
  .join('\n')

document.querySelector('#app').innerHTML = `
  <div class="site-shell service-page-shell">
    <header class="topbar" id="topbar">
      <a class="brand" href="/" aria-label="Solcrest Film Co home">
        <img
          class="brand-logo"
          src="/solcrest-logo-light.png"
          alt="Solcrest Film Co premium window film Los Angeles logo"
        />
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-shell" id="mobile-nav">
        <nav class="nav" aria-label="Main navigation">
          <a href="/#hero">Home</a>
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" type="button" aria-expanded="false">Services</button>
            <div class="nav-dropdown-menu">
              ${servicesDropdown}
            </div>
          </div>
          <a href="/residential-window-film-los-angeles.html">Residential</a>
          <a href="/commercial-window-film-los-angeles.html">Commercial</a>
          <a href="/about.html">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-cta nav-cta-secondary" href="${business.phoneHref}">Call / Text Now</a>
          <a class="nav-cta" href="/#contact">Get Estimate</a>
        </div>
      </div>
    </header>

    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">→</span>
        <span aria-current="page">${page.eyebrow}</span>
      </nav>

      ${heroSection}

      ${bodySections}

      <section class="section contact-section contact-section-form" id="contact">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>${page.formIntro ? 'Not sure which film you need?' : 'Request an estimate for this service.'}</h2>
          <p>
            ${page.formIntro ?? 'Send your ZIP, service type, measurements and photos if you have them. Leave either a phone number or an email so we can get back to you.'}
          </p>
          <div class="contact-block">
            <a href="${business.phoneHref}">${business.phoneDisplay}</a>
            <a href="mailto:${business.email}">${business.email}</a>
            <a class="text-link" href="/">Back to Homepage</a>
          </div>
        </div>
        <form
          id="contact-form"
          class="contact-card"
          action="${business.estimateFormAction}"
          method="POST"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="_subject" value="Solcrest Film Co — ${page.eyebrow} estimate request" />
          <input type="hidden" name="Service Category" value="${page.eyebrow}" />
          <input type="hidden" name="_replyto" value="" />
          <input type="text" name="_gotcha" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <p class="form-contact-hint">Please provide either a phone number or email.</p>

          <div class="form-grid two-column-form">
            <label>
              Name
              <input type="text" name="Name" autocomplete="name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="Phone" autocomplete="tel" />
            </label>
            <label>
              Email
              <input type="email" name="Email" autocomplete="email" />
            </label>
            <label>
              ZIP Code
              <input type="text" name="ZIP" autocomplete="postal-code" required />
            </label>
          </div>

          <label>
            Service
            <select name="Service" required>
              <option value="" disabled selected>Select a service</option>
              ${serviceSelectOptions}
            </select>
          </label>

          <label>
            Message / Notes (optional)
            <textarea name="Message / Notes" rows="5" placeholder="Tell us about the glass, goals, square footage, or timeline."></textarea>
          </label>

          <label>
            Photo upload (optional)
            <span class="file-upload-field">
              <input type="file" name="Photo Upload" accept="image/*" multiple class="file-upload-input" />
              <button type="button" class="file-upload-button">Choose Files</button>
              <span class="file-upload-filename">No file chosen</span>
            </span>
          </label>

          ${smsConsentFields}

          <button class="button button-primary submit-button" type="submit">Request My Free Estimate</button>
          <p class="form-promise">We typically reply within one business day.</p>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
${estimateSuccessMarkup}
        </form>
      </section>
    </main>
  </div>

  <footer class="footer footer-premium">
      <div class="footer-premium-inner footer-premium-inner-service">
        <div class="footer-col footer-col-brand">
          <img
            class="footer-logo"
            src="/solcrest-logo-header-dark.png"
            alt="Solcrest Film Co premium window film Los Angeles logo"
            width="573"
            height="202"
          />
          <p class="footer-tagline">Premium Architectural Window Film Installation in Los Angeles</p>
        </div>
        <div class="footer-col footer-col-contact">
          <h3 class="footer-col-title">Contact</h3>
          <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
          <p><a href="mailto:${business.email}">${business.email}</a></p>
          <div class="social-links footer-premium-social">
            <a href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Instagram">${icon('instagram')}</a>
            <a href="https://www.facebook.com/solcrestfilm/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Facebook">${icon('facebook')}</a>
            <a href="https://share.google/TTXOlBBFKuizqpQMi" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Google Business Profile">${icon('google')}</a>
          </div>
        </div>
        <div class="footer-col footer-col-links">
          <h3 class="footer-col-title">Services</h3>
          <div class="footer-quick-links">
            <a href="/residential-window-film-los-angeles.html">Residential Window Film</a>
            <a href="/commercial-window-film-los-angeles.html">Commercial Window Film</a>
            <a href="/safety-security-window-film-los-angeles.html">Safety &amp; Security Film</a>
            <a href="/anti-graffiti-window-film-los-angeles.html">Anti-Graffiti Film</a>
            <a href="/decorative-privacy-window-film-los-angeles.html">Decorative &amp; Privacy Film</a>
            <a href="/smart-film-installation-los-angeles.html">Smart Film</a>
            <a href="/storefront-window-protection-los-angeles.html">Storefront Window Protection</a>
          </div>
        </div>
        <div class="footer-col footer-col-areas">
          <h3 class="footer-col-title">Service Areas</h3>
          <p class="footer-areas-text">
            Los Angeles, Beverly Hills, Glendale, Burbank, Woodland Hills, West Hills, Porter Ranch and nearby communities.
          </p>
          <div class="footer-quick-links footer-quick-links-tight">
            <a href="/our-work.html">Our Work</a>
            <a href="/about.html">About</a>
            <a href="#contact">Request an Estimate</a>
          </div>
        </div>
      </div>
      <div class="footer-premium-bottom">
        <p>&copy; ${new Date().getFullYear()} Solcrest Film Co. All rights reserved.</p>
        <p class="footer-legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
        </p>
      </div>
    </footer>

  <div class="sticky-cta-bar">
    <a class="sticky-cta-call" href="${business.phoneHref}">${icon('smartphone')}<span>Call</span></a>
    <a class="sticky-cta-request" href="/#contact">${icon('badgeCheck')}<span>Get Estimate</span></a>
  </div>
`

const topbar = document.querySelector('.topbar')
const menuToggle = document.querySelector('.menu-toggle')
const navShell = document.querySelector('.nav-shell')
const dropdownToggle = document.querySelector('.nav-dropdown-toggle')
const contactForm = document.querySelector('#contact-form')
const formStatus = document.querySelector('#form-status')
const replyToField = contactForm?.querySelector('input[name="_replyto"]')
const fileUploadInput = contactForm?.querySelector('.file-upload-input')
const fileUploadButton = contactForm?.querySelector('.file-upload-button')
const fileUploadFilename = contactForm?.querySelector('.file-upload-filename')
const estimateSuccess = setupEstimateSuccess({ form: contactForm, status: formStatus })

fileUploadButton?.addEventListener('click', () => {
  fileUploadInput?.click()
})

fileUploadInput?.addEventListener('change', () => {
  if (!fileUploadFilename) return
  const files = fileUploadInput.files
  if (!files || files.length === 0) {
    fileUploadFilename.textContent = 'No file chosen'
  } else if (files.length === 1) {
    fileUploadFilename.textContent = files[0].name
  } else {
    fileUploadFilename.textContent = `${files.length} files selected`
  }
})

let lastScrollY = window.scrollY
let menuOpen = false
let servicesOpen = false

const setMenuState = (open) => {
  menuOpen = open
  if (!menuToggle || !navShell) return
  menuToggle.setAttribute('aria-expanded', String(open))
  navShell.classList.toggle('nav-shell-open', open)
  topbar?.classList.toggle('topbar-menu-open', open)
}

const setServicesState = (open) => {
  servicesOpen = open
  if (!dropdownToggle) return
  dropdownToggle.setAttribute('aria-expanded', String(open))
  dropdownToggle.parentElement?.classList.toggle('nav-dropdown-open', open)
}

window.addEventListener('scroll', () => {
  if (!topbar) return
  const currentY = window.scrollY
  if (!menuOpen && currentY > 120 && currentY > lastScrollY) {
    topbar.classList.add('topbar-hidden')
  } else {
    topbar.classList.remove('topbar-hidden')
  }
  lastScrollY = currentY
})

menuToggle?.addEventListener('click', () => {
  setMenuState(!menuOpen)
})

dropdownToggle?.addEventListener('click', () => {
  setServicesState(!servicesOpen)
})

document.addEventListener('click', (event) => {
  if (!servicesOpen) return
  const dropdown = dropdownToggle?.parentElement
  if (dropdown && !dropdown.contains(event.target)) {
    setServicesState(false)
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && servicesOpen) {
    setServicesState(false)
    dropdownToggle?.focus()
  }
})

navShell?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false)
    setServicesState(false)
  })
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    setMenuState(false)
  }
})

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  if (!formStatus) return
  // Enter in a field submits even while the button is disabled.
  if (estimateSuccess.isSending()) return
  const submitButton = contactForm.querySelector('.submit-button')
  const emailField = contactForm.querySelector('input[name="Email"]')
  const phoneField = contactForm.querySelector('input[name="Phone"]')
  const emailValue = emailField?.value?.trim() ?? ''
  const phoneValue = phoneField?.value?.trim() ?? ''
  if (replyToField) replyToField.value = emailValue

  if (!emailValue && !phoneValue) {
    formStatus.textContent = 'Please leave either a phone number or an email so we can get back to you.'
    emailField?.focus()
    return
  }

  const photoInput = contactForm.querySelector('input[name="Photo Upload"]')
  const selectedFiles = Array.from(photoInput?.files ?? [])

  if (selectedFiles.length > 10) {
    formStatus.textContent = 'Please upload up to 10 photos only.'
    photoInput?.focus()
    return
  }

  const formData = new FormData(contactForm)
  if (selectedFiles.length > 1) {
    formData.delete('Photo Upload')
    selectedFiles.forEach((file) => {
      formData.append('Photo Upload', file)
    })
  } else if (selectedFiles.length === 0) {
    formData.delete('Photo Upload')
  }
  estimateSuccess.setSending()

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    estimateSuccess.showSuccess()
  } catch (error) {
    estimateSuccess.showError()
  }
})

// FAQ structured data for pages that define their own FAQ
if (page.faq) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
  const schemaScript = document.createElement('script')
  schemaScript.type = 'application/ld+json'
  schemaScript.textContent = JSON.stringify(faqSchema)
  document.head.appendChild(schemaScript)
}

mountSmsConsent()
mountChatWidget()
