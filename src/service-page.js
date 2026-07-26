import './style.css'
import { icon } from './icons.js'
import { mountChatWidget } from './chat-widget.js'

const business = {
  phoneDisplay: '747-324-9008',
  phoneHref: 'tel:7473249008',
  textHref: 'sms:7473249008',
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
    title: 'Commercial Window Film for Offices, Storefronts and Buildings in Los Angeles',
    description:
      'Improve comfort, privacy, anti-graffiti protection, glare control and overall presentation for commercial glass across Los Angeles.',
    problemsTitle: 'Commercial projects usually start with customer-facing glass problems.',
    problems: [
      'Overheating storefront and office glass',
      'Privacy concerns in work areas and meeting rooms',
      'Glare on screens and interior workspaces',
      'A need for cleaner, more premium presentation',
    ],
    solutionsTitle: 'What commercial film can solve',
    solutions: [
      ['Reduce heat and glare', 'Improve day-to-day comfort for teams and visitors.'],
      ['Upgrade privacy', 'Add privacy solutions for offices, conference rooms and glass partitions.'],
      ['Improve presentation', 'Create a more polished appearance for client-facing properties.'],
      ['Support protection needs', 'Layer in safety, anti-graffiti or decorative solutions where needed.'],
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
    title: 'Anti-Graffiti Window Film for Storefront Protection in Los Angeles',
    description:
      'Protect storefront glass from scratches, vandalism and costly replacement with sacrificial anti-graffiti film.',
    problemsTitle: 'Anti-graffiti projects usually start with exposed storefront glass.',
    problems: [
      'Frequent scratches or vandalism on street-facing glass',
      'Costly replacement of damaged storefront panels',
      'Need for a sacrificial protective layer',
      'High-traffic commercial zones with repeated abuse',
    ],
    solutionsTitle: 'What anti-graffiti film can solve',
    solutions: [
      ['Protect finished glass', 'Take the damage on the film instead of the actual glass.'],
      ['Reduce replacement costs', 'Replacing film is usually simpler than replacing full glass panels.'],
      ['Protect storefront presentation', 'Keep high-visibility commercial spaces looking cleaner.'],
      ['Maintain business continuity', 'Avoid longer downtime tied to full glass replacement.'],
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
      'Switchable privacy film for offices, clinics, conference rooms and luxury interiors that want instant privacy control.',
    problemsTitle: 'Smart film projects usually start with a need for flexible privacy.',
    problems: [
      'Glass that needs privacy on demand',
      'Conference rooms and clinics needing fast visibility control',
      'Luxury interiors that want a more advanced privacy system',
      'Spaces where fixed frosting is too limiting',
    ],
    solutionsTitle: 'What smart film can solve',
    solutions: [
      ['Switch privacy instantly', 'Move from clear to private without physical coverings.'],
      ['Support modern interiors', 'A high-end solution for offices and luxury environments.'],
      ['Preserve clean design', 'Avoid cluttering glass with heavier treatments.'],
      ['Fit flexible spaces', 'Useful where privacy needs change throughout the day.'],
    ],
  },
  {
    file: 'storefront-window-protection-los-angeles.html',
    eyebrow: 'Storefront Window Protection',
    title: 'Storefront Window Protection in Los Angeles',
    description:
      'Protection-oriented film solutions for storefront glass, including anti-graffiti, solar control and security-focused applications.',
    problemsTitle: 'Storefront projects usually combine visibility, comfort and protection issues.',
    problems: [
      'Scratches, vandalism or graffiti on exterior glass',
      'Heat gain and glare in customer-facing spaces',
      'Security concerns on exposed entry glass',
      'Need for a cleaner premium storefront finish',
    ],
    solutionsTitle: 'What storefront protection can solve',
    solutions: [
      ['Defend against surface damage', 'Use anti-graffiti film as a sacrificial layer.'],
      ['Improve storefront comfort', 'Reduce heat and glare for staff and visitors.'],
      ['Support safer glass response', 'Layer in safety/security film where appropriate.'],
      ['Upgrade street presence', 'Cleaner glass and a more intentional retail presentation.'],
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
          <p class="eyebrow">Why homeowners install it</p>
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
              <tr><th scope="col">Your goal</th><th scope="col">Recommended film</th></tr>
            </thead>
            <tbody>
              ${page.chooser
                .map(
                  ([goal, film]) =>
                    `<tr><td>${goal}</td><td><span class="chooser-pick">${film}</span></td></tr>`,
                )
                .join('')}
            </tbody>
          </table>
        </div>
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
                  <img src="${project.img}" alt="${project.alt}" decoding="async" width="${project.w}" height="${project.h}" />
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
        <img class="service-hero-photo" src="${page.heroImage.src}" alt="${page.heroImage.alt}" fetchpriority="high" width="${page.heroImage.w}" height="${page.heroImage.h}" />
      </section>
    `
  : `
      <section class="section service-hero">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p class="hero-text service-hero-text">${page.description}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/#contact">Get a Fast Estimate</a>
          <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
        </div>
      </section>
    `

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

      <section class="section split-section">
        <div>
          <p class="eyebrow">Common reasons clients reach out</p>
          <h2>${page.problemsTitle}</h2>
        </div>
        <div class="luxury-list">
          ${page.problems.map((item) => `<div>${item}</div>`).join('')}
        </div>
      </section>

      ${filmTypesSection}

      ${attachmentSection}

      ${whereBestSection}

      ${doesDoesNotSection}

      ${benefitsSection}

      ${solutionsSection}

      ${chooserSection}

      ${projectsSection}

      ${processSection}

      ${faqSection}

      ${areasSection}

      ${proofSection}

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

          <button class="button button-primary submit-button" type="submit">Request My Free Estimate</button>
          <p class="form-promise">We typically reply within one business day.</p>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </section>
    </main>

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
      </div>
    </footer>

    <div class="sticky-cta-bar">
      <a class="sticky-cta-call" href="${business.phoneHref}">${icon('smartphone')}<span>Call</span></a>
      <a class="sticky-cta-request" href="/#contact">${icon('badgeCheck')}<span>Get Estimate</span></a>
    </div>
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
  formStatus.textContent = 'Sending your request...'
  submitButton?.setAttribute('disabled', 'disabled')

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    contactForm.reset()
    if (replyToField) replyToField.value = ''
    formStatus.textContent = "Thank you! We'll get back to you within 24 hours."
  } catch (error) {
    formStatus.textContent = 'Something went wrong. Please call or text us and we will help you directly.'
  } finally {
    submitButton?.removeAttribute('disabled')
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

mountChatWidget()
