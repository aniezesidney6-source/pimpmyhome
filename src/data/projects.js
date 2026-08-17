// ============================================================
// CONTENT ARCHITECTURE (§24)
// Projects are structured data. Detail pages render dynamically
// from this — add a project here and it appears everywhere.
// ============================================================

// Unsplash helper — keeps sizing/quality consistent.
const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const studio = {
  name: 'Pimpmyhome',
  wordmark: 'Pimpmyhome',
  tagline: 'Interior Design Studio',
  email: 'pimpmyhome_lagos@gmail.com', // TODO: confirm/replace with the studio's real inbox
  phone: '+234 811 537 8396', // 08115378396
  phoneRaw: '08115378396',
  whatsappNumber: '07032701763',
  location: 'Lagos, Nigeria',
  instagram: 'pimpmyhome_lagos',
  instagramUrl: 'https://instagram.com/pimpmyhome_lagos',
  tiktok: 'pimpmyhome_lagos',
  tiktokUrl: 'https://tiktok.com/@pimpmyhome_lagos',
  whatsapp: 'https://wa.me/2347032701763', // +234 703 270 1763
}

export const projects = [
  {
    id: 'the-oak-residence',
    number: '01',
    title: 'The Oak Residence',
    location: 'Lagos, Nigeria',
    category: 'Residential',
    year: '2026',
    area: '420 m²',
    layout: 'a', // large image left, meta right
    description:
      'A family house reorganised around light and a single monolithic stair — where oak, lime plaster and brushed brass hold a quiet, unhurried domesticity.',
    intro:
      'Set on a corner plot in Ikoyi, The Oak Residence began as a request for calm. We stripped the house back to its structure and let a single material idea — solid oak — govern the interior, from the stair treads to the kitchen and the deep window reveals.',
    concept:
      'The plan folds around a top-lit stair core. By pulling circulation to the centre, every principal room gains two aspects of daylight, and the house reads as a sequence of framed views rather than a set of rooms.',
    materials: ['Solid European oak', 'Hand-troweled lime plaster', 'Brushed brass', 'Travertine'],
    services: ['Interior Design', 'Interior Architecture', 'FF&E', 'Styling'],
    featuredImage: img('1600210492486-724fe5c67fb0'),
    images: [
      img('1600210492486-724fe5c67fb0'),
      img('1600585154340-be6161a56a0c'),
      img('1600566753086-00f18fb6b3ea'),
      img('1618221195710-dd6b41faaea6'),
      img('1615529182904-14819c35db37'),
    ],
  },
  {
    id: 'maison-verde',
    number: '02',
    title: 'Maison Verde',
    location: 'Lisbon, Portugal',
    category: 'Hospitality',
    year: '2025',
    area: '1,150 m²',
    layout: 'b', // meta left, large image right
    description:
      'A twelve-key guesthouse in the Alfama — cool stone, deep green joinery and a courtyard that carries the whole scheme.',
    intro:
      'Maison Verde occupies a restored merchant house above the river. The brief was a hotel that felt like a private home — generous, tactile, and utterly without gloss.',
    concept:
      'A planted courtyard anchors the plan. Rooms borrow their light and their palette from it: eucalyptus greens, warm limestone and unlacquered bronze that will patinate with use.',
    materials: ['Estremoz limestone', 'Eucalyptus-stained oak', 'Unlacquered bronze', 'Handmade azulejo'],
    services: ['Interior Design', 'Interior Architecture', 'Space Planning', 'Art Direction'],
    featuredImage: img('1616486338812-3dadae4b4ace'),
    images: [
      img('1616486338812-3dadae4b4ace'),
      img('1567016376408-0226e4d0c1ea'),
      img('1586023492125-27b2c045efd7'),
      img('1600607687939-ce8a6c25118c'),
      img('1616137466211-f939a420be84'),
    ],
  },
  {
    id: 'the-gallery-apartment',
    number: '03',
    title: 'The Gallery Apartment',
    location: 'London, United Kingdom',
    category: 'Residential',
    year: '2025',
    area: '210 m²',
    layout: 'c', // full-width image, text below
    description:
      'A collector’s pied-à-terre conceived as a neutral ground for art — pale plaster, bleached timber and precise, recessive detailing.',
    intro:
      'A single-floor apartment in Fitzrovia for a collector of post-war works on paper. Everything the eye lands on had to defer to what hangs on the walls.',
    concept:
      'We designed the apartment as a gallery that happens to be lived in. Skirtings dissolve, doors sit flush, and a continuous plaster envelope lets each work define its own room.',
    materials: ['Polished plaster', 'Bleached Douglas fir', 'Patinated steel', 'Wool bouclé'],
    services: ['Interior Design', 'Interior Architecture', 'FF&E'],
    featuredImage: img('1583847268964-b28dc8f51f92'),
    images: [
      img('1583847268964-b28dc8f51f92'),
      img('1604014237800-1c9102c219da'),
      img('1616627561950-9f746e330187'),
      img('1600121848594-d8644e57abab'),
      img('1618219908412-a29a1bb7b86e'),
    ],
  },
  {
    id: 'atelier-noir',
    number: '04',
    title: 'Atelier Noir',
    location: 'Accra, Ghana',
    category: 'Commercial',
    year: '2024',
    area: '340 m²',
    layout: 'd', // offset composition
    description:
      'A fashion atelier and showroom — blackened timber, raw concrete and theatrical light staged for the clothes.',
    intro:
      'A workspace and by-appointment showroom for a womenswear label. The room needed two lives: a calm studio by day, a considered stage by night.',
    concept:
      'A dark, absorbent shell recedes so that garments and daylight become the only events in the room. Movable screens let the space compress and open for fittings and shows.',
    materials: ['Blackened ash', 'Board-formed concrete', 'Blackened steel', 'Natural linen'],
    services: ['Interior Design', 'Space Planning', 'FF&E', 'Art Direction'],
    featuredImage: img('1616486701797-0f33f61038ec'),
    images: [
      img('1616486701797-0f33f61038ec'),
      img('1600566753086-00f18fb6b3ea'),
      img('1615529182904-14819c35db37'),
      img('1567016376408-0226e4d0c1ea'),
      img('1600585154340-be6161a56a0c'),
    ],
  },
  {
    id: 'the-quiet-house',
    number: '05',
    title: 'The Quiet House',
    location: 'Marrakech, Morocco',
    category: 'Residential',
    year: '2024',
    area: '560 m²',
    layout: 'a',
    description:
      'A courtyard house of tadelakt and rammed earth — thick walls, deep shade, and a palette drawn entirely from the ground it sits on.',
    intro:
      'A weekend house outside the medina. The clients wanted somewhere to do very little, beautifully — a house that keeps its cool and its counsel.',
    concept:
      'Mass does the work. Deep rammed-earth walls temper the heat and frame a sequence of shaded courtyards, so the house is experienced as much through shadow as through surface.',
    materials: ['Rammed earth', 'Tadelakt', 'Reclaimed cedar', 'Zellige'],
    services: ['Interior Design', 'Interior Architecture', 'Space Planning', 'Styling'],
    featuredImage: img('1618221195710-dd6b41faaea6'),
    images: [
      img('1618221195710-dd6b41faaea6'),
      img('1616137466211-f939a420be84'),
      img('1586023492125-27b2c045efd7'),
      img('1600607687939-ce8a6c25118c'),
      img('1604014237800-1c9102c219da'),
    ],
  },
  {
    id: 'harbour-penthouse',
    number: '06',
    title: 'Harbour Penthouse',
    location: 'Cape Town, South Africa',
    category: 'Residential',
    year: '2023',
    area: '385 m²',
    layout: 'b',
    description:
      'A top-floor apartment where the interior steps back for the water — muted stone, pale oak and a horizon left uninterrupted.',
    intro:
      'A penthouse above the working harbour, with an outlook that made every design decision straightforward: do less, and give the view the last word.',
    concept:
      'A low, horizontal palette keeps the eye moving out to sea. Joinery is kept below sightline; the ceiling plane and the horizon do the composing.',
    materials: ['Honed Rustenburg stone', 'Pale oak', 'Brushed nickel', 'Undyed wool'],
    services: ['Interior Design', 'FF&E', 'Styling'],
    featuredImage: img('1600121848594-d8644e57abab'),
    images: [
      img('1600121848594-d8644e57abab'),
      img('1583847268964-b28dc8f51f92'),
      img('1618219908412-a29a1bb7b86e'),
      img('1616627561950-9f746e330187'),
      img('1600210492486-724fe5c67fb0'),
    ],
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)

export const getNextProject = (id) => {
  const i = projects.findIndex((p) => p.id === id)
  return projects[(i + 1) % projects.length]
}

export const services = [
  {
    number: '01',
    title: 'Interior Design',
    body: 'Complete interior schemes — from concept and spatial narrative to the final placement of every object.',
  },
  {
    number: '02',
    title: 'Interior Architecture',
    body: 'Reworking plan, structure and light. We design the fabric of the space, not only its surfaces.',
  },
  {
    number: '03',
    title: 'Space Planning',
    body: 'Rigorous studies of circulation, proportion and use that make a plan feel inevitable.',
  },
  {
    number: '04',
    title: 'FF&E',
    body: 'Furniture, fixtures and equipment — specified, sourced, commissioned and managed to completion.',
  },
  {
    number: '05',
    title: 'Project Management',
    body: 'Contractor coordination, procurement and programme, held to the standard of the design.',
  },
  {
    number: '06',
    title: 'Styling & Art Direction',
    body: 'The final layer — objects, textiles, art and photography that let a space read as a whole.',
  },
]

export const philosophy = [
  {
    number: '01',
    word: 'Material',
    body: 'We design with a small number of honest materials and let them age. Patina is not wear; it is authorship over time.',
  },
  {
    number: '02',
    word: 'Light',
    body: 'Before surface, before object, there is light. Every plan we draw is first a study of where the sun falls.',
  },
  {
    number: '03',
    word: 'Function',
    body: 'Beauty that does not work is decoration. A room must hold a life comfortably before it is allowed to be admired.',
  },
  {
    number: '04',
    word: 'Time',
    body: 'We design against the trend cycle — rooms that will feel considered, not dated, a decade after the last coat of plaster.',
  },
]

export const stats = [
  { value: '14', label: 'Years in practice' },
  { value: '60+', label: 'Completed projects' },
  { value: '9', label: 'Countries' },
  { value: '4', label: 'Design awards' },
]

export const recognition = [
  { year: '2025', body: 'AD100 — Emerging Practice' },
  { year: '2024', body: 'Dezeen Awards — Interior of the Year, shortlist' },
  { year: '2024', body: 'Wallpaper* Design Awards — Best Residential' },
  { year: '2023', body: 'Elle Decoration — Studio to Watch' },
]
