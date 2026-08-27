export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en-IN', dir: 'ltr' },
  ml: { label: 'മലയാളം', short: 'ML', htmlLang: 'ml-IN', dir: 'ltr' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Prefix a path for the given language. en -> "/about", ml -> "/ml/about" */
export function localePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path.replace(/^\/|\/$/g, '');
  if (lang === defaultLang) return `/${clean}`;
  return clean ? `/ml/${clean}` : '/ml/';
}

export const ui = {
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact' },
    cta: { call: 'Call now', whatsapp: 'WhatsApp us', enquire: 'Send enquiry', viewProducts: 'View products', directions: 'Get directions' },

    meta: {
      home: { title: 'Royal Foundry — Clamps & Terminal Connectors for H.V. Substations | Chingavanam, Kottayam',
              desc: 'Ferrous and non-ferrous castings since 1991. Suppliers of clamps and terminal connectors for electrical equipment in H.V. substations and transmission lines, and manufacturers of rubber and coir mat moulds. Chingavanam, Kottayam, Kerala.' },
      products: { title: 'Products — Royal Foundry, Kottayam',
                  desc: 'Aluminium T-clamps and terminal connectors for substations and transmission lines, A/B switch parts, earthing products, rubber and coir mat moulds, DTR boxes and custom fabrication — made to drawing at Chingavanam, Kottayam.' },
      about:    { title: 'About Us — Royal Foundry, Chingavanam, Kottayam',
                  desc: 'A family-run, woman-led foundry at Chingavanam, Kottayam, casting ferrous and non-ferrous components since 1991 for KSEB circles and tower lines, electrical contractors and industry across Kerala.' },
      contact:  { title: 'Contact — Royal Foundry, Chingavanam, Kottayam',
                  desc: 'Call or WhatsApp Royal Foundry, Chingavanam, Kottayam for enquiries, quotations and custom castings.' },
    },

    hero: {
      eyebrow: 'Chingavanam · Kottayam · Kerala',
      title: 'Clamps, connectors and moulds. Cast in Kottayam since 1991.',
      sub: 'Clamps and terminal connectors for electrical equipment in H.V. substations and transmission lines. Stainless steel DTR boxes. Rubber and coir mat moulds. Custom dies manufactured to your exact specification. All kinds of ferrous and non-ferrous castings, made to your drawing.',
      badge1: 'Ferrous & non-ferrous casting',
      badge2: 'Made to your drawing',
      badge3: 'Casting since 1991',
    },

    intro: {
      heading: 'What we make',
      body: 'Melting, casting, machining and fabrication under one roof. We supply KSEB electrical, transmission and generation circles and tower lines, along with contractors and industrial customers across Kerala — and mat moulds to prominent mat manufacturers across India. Send us a drawing, a sample or a photo on WhatsApp and we will quote.',
    },

    strip: {
      seeAll: (n: number) => `See all ${n} products →`,
    },

    lightbox: {
      open: 'View larger',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
      counter: (i: number, n: number) => `${i} of ${n}`,
    },

    people: {
      heading: 'The people behind the foundry',
      sub: 'Founded by K. A. Kamalasanan in 1991. Run today by his wife, Smt. Meenakumari.',
      founder: {
        name: 'Late Sri K. A. Kamalasanan',
        role: 'Founder',
        note: 'Retired Executive Engineer, Kerala State Electricity Board. He founded Royal Foundry in 1991.',
      },
      proprietor: {
        name: 'Smt. Meenakumari',
        role: 'Proprietor',
        note: 'Runs the works today. Named Best Entrepreneur for Kottayam District in the Women Category at the Kerala MSME District Level Awards, 2013–14.',
      },
    },
    awards: {
      heading: 'Awards & recognition',
      sub: 'In 2013–14 the Department of Industries and Commerce, Government of Kerala, named Royal Foundry\'s proprietor Best Entrepreneur for Kottayam District in the Women Category at the MSME District Level Awards.',
      plaque: 'District Level Award 2013–14 — Best Entrepreneur, Kottayam District (Women Category), Department of Industries and Commerce, Government of Kerala',
      certificate: 'Best Entrepreneur Award 2013–14 certificate, Government of Kerala',
      trophy: 'MSME District Level Award memento, 2013–14',
      ceremony: 'Receiving the MSME District Level Award, 2013–14',
      dic: 'Receiving an award from the District Industries Centre, Kottayam',
      cnc: 'Smt. Meenakumari at the CNC machine',
      proprietor: 'Smt. Meenakumari, proprietor, at the works office',
      signboard: 'Royal Foundry, Chingavanam, Kottayam',
    },
    creds: {
      heading: 'Registered and recognised',
      items: [
        { value: 'Best Entrepreneur, Kottayam District', label: 'MSME District Level Award 2013–14 (Women Category), Department of Industries & Commerce, Government of Kerala' },
        { value: 'Casting since 1991', label: 'Producing continuously since December 1991' },
        { value: 'Udyam registered', label: 'Micro enterprise, manufacturing — non-ferrous metal casting' },
      ],
    },

    gallery: {
      heading: 'From our workshop',
      sub: 'Castings, assemblies and moulds we have produced. Sizes and patterns are made to order — send a drawing, a sample or a photograph.',
      groups: {
        electrical: 'Electrical hardware',
        dtr: 'DTR boxes',
        moulds: 'Mat moulds',
      },
      mouldsNote: 'We manufacture the moulds, not the mats. Send a sample mat, a drawing or even a photograph and we will make the mould for it, in the size you need.',
      captions: {
        '01-fan-pattern-semicircle-mould-70x40-cm':  'Fan pattern semicircle mould — 70 × 40 cm',
        '02-fan-pattern-semicircle-mould-80x50-cm':  'Fan pattern semicircle mould — 80 × 50 cm',
        '03-plain-semicircle-mould-80x50-cm':      'Plain semicircle mould — 80 × 50 cm',
        '04-fluted-panel-mould':          'Fluted panel mould',
        '05-octagon-panel-mould-75x45-cm':   'Octagon panel mould — 75 × 45 cm',
        '06-hexagon-panel-mould':         'Hexagon panel mould',
        '07-diamond-lattice-mould-50x40-cm': 'Diamond lattice mould — 50 × 40 cm',
        '08-diamond-lattice-mould-75x45-cm': 'Diamond lattice mould — 75 × 45 cm',
        '09-leaf-spray-mould':            'Leaf spray mould',
        '10-scalloped-shell-mould':         'Scalloped shell mould',
        '11-floral-lace-mould':           'Floral lace mould',
        '12-flower-motif-mould':          'Flower motif mould',
        '13-basketweave-moulds':      'Basketweave moulds',
        '14-diagonal-lattice-mould':      'Diagonal lattice mould',
        '15-chevron-mould-with-welcome-lettering':       'Chevron mould with WELCOME lettering',
        '06-compressed-type-t-clamp': 'Compressed Type T-Clamp',
        '09-transformer-bushing-clamp-for-double-conductor': 'Transformer Bushing Clamp for Double Conductor',
        '10-ct-clamp': 'CT Clamp',
        '23-ab-switch-male-female-new-type': 'A/B Switch Male-Female New type',
        '25-female-contact-assembly': 'Female Contact Assembly',
        '26-female-contact-assembly-sideview': 'Female Contact Assembly SideView',
        '21-ab-switch-11kv-400a': 'A/B Switch 11kV 400A',
        '22-ab-switch-11kv-400a-topview': 'A/B Switch 11kV 400A TopView',
        '33-base-frame-for-section-fuse-with-neutral-link': 'Base Frame for Section Fuse with Neutral link',
        '16-down-lead-clamp': 'Down-lead clamp',
        '19-shorting-clip-with-spike-earth-rod': 'Shorting clip with spike earth rod',
        '01-dtr-box-front': 'DTR box — front with cable gland plates',
        '02-dtr-box-side-louvres': 'DTR box — louvred ventilation panel',
        '03-dtr-box-exterior': 'DTR box — stainless steel enclosure',
        '04-dtr-box-busbars': 'DTR box — busbars fitted',
        '05-dtr-box-busbar-rails': 'DTR box — busbar supports',
        '06-dtr-box-open': 'DTR box — lid open',
        '07-dtr-box-louvre-detail': 'DTR box — louvre detail',
        '08-dtr-box-glands': 'DTR box — cable glands',
        '20-earth-rod-with-earthing-clamp': 'Earth rod with earthing clamp',
        '01-clamps-range-of-five-sizes':   'Clamps — range of five sizes',
        '02-pg-clamps-range-of-three-sizes':  'PG Clamps — range of three sizes',
        '03-large-parallel-groove-clamp':     'Large Parallel-Groove clamp',
        '04-t-clamp-for-various-conductors-topview':         'T-clamp for various conductors TopView',
        '05-t-clamp-for-various-conductors-sideview':  'T-clamp for various conductors SideView',
        '07-transformer-bushing-clamp-sideview':    'Transformer Bushing clamp SideView',
        '08-transformer-bushing-clamp-topview': 'Transformer Bushing clamp TopView',
        '11-tall-clamp-with-bore':    'Tall clamp with bore',
        '12-flat-plate-clamps':  'Flat plate clamps',
        '13-isolator-pad-clamp': 'Isolator (PAD) Clamp',
        '14-bar-spacer-clamp':   'Bar / spacer clamp',
        '15-twin-bore-pg-clamp': 'Twin-bore PG clamp',
        '17-cable-lugs-and-terminal-ends':         'Cable lugs and terminal ends',
        '18-wedge-piece-with-pg-clamp':    'Wedge piece with PG clamp',
        '24-ab-switch-contact-assemblies':    'A/B switch contact assemblies',
        '27-ab-switch-jaw-contacts':  'A/B switch jaw contacts',
        '28-ab-switch-assembled':'A/B switch assembled',
        '29-ab-switch-operating-mechanism-set':   'A/B switch operating mechanism set',
        '30-covered-conductor-clamp-and-hardware-fittings':        'Covered Conductor Clamp and Hardware Fittings',
        '31-nylon-spacer-block': 'Nylon spacer block',
        '32-base-frame-pole-top-with-nylon-sheet':'Base frame (pole top) with nylon sheet',
        '34-tie-bar-connecting-link':            'Tie bar / connecting link',
      },
    },
    products: {
      heading: 'Our products',
      sub: 'Standard items and made-to-order work across six main lines.',
      note: 'Do not see what you need? Most of our work is made to customer drawings. Send us a sketch, a sample or a photo and we will quote.',
      items: [
        {
          slug: 'clamps',
          name: 'Clamps & terminal connectors',
          summary: 'Clamps and terminal connectors for electrical equipment in H.V. substations and transmission lines.',
          bullets: ['Aluminium T-clamps for A/B switches', 'Terminal connectors and tee connectors', 'Parallel groove and jumper clamps', 'Substation hardware and fittings', 'Made to customer drawings and specifications'],
        },
        {
          slug: 'ab-switches',
          name: 'A/B switch parts',
          summary: 'Air break switch components, operating mechanism parts and assemblies.',
          bullets: ['Air break (A/B) switch components', 'Operating mechanism and linkage parts', 'Base frames (pole top) and mounting hardware', 'Replacement and spare parts', 'Made to drawing or to sample'],
        },
        {
          slug: 'earthing',
          name: 'Earthing products',
          summary: 'Earth rods and earthing accessories for electrical installations.',
          bullets: ['Earth rods in standard and custom lengths', 'Earthing clamps and accessories', 'Suitable for substations, industry and buildings'],
        },
        {
          slug: 'moulds',
          name: 'Rubber & coir mat moulds',
          summary: 'Moulds for rubber mat and coir mat production — we make the mould, not the mat.',
          bullets: ['Rubber mat and coir mat moulds', 'Supplied to prominent mat manufacturers across India', 'Made from your sample mat, drawing or photograph', 'Any size — 50×40, 70×40, 75×45, 80×50 cm and others', 'Door moulds and panel moulds', 'CNC machined mould plates', 'Repair and refurbishment of existing moulds'],
        },
        {
          slug: 'dtr-boxes',
          name: 'DTR boxes',
          summary: 'Stainless steel distribution transformer boxes, fabricated to your drawing.',
          bullets: ['Distribution transformer (DTR) boxes', 'Stainless steel sheet metal fabrication', 'Louvred ventilation panels', 'Busbar supports and cable gland plates', 'Made to your drawing or sample'],
        },
        {
          slug: 'fabrication',
          name: 'Fabrication & job work',
          summary: 'General steel fabrication, machining and job work for industry and construction.',
          bullets: ['Structural and sheet metal fabrication', 'Stainless steel enclosures and boxes to drawing', 'Turning, milling and drilling', 'Welding and assembly', 'Custom brackets, frames and supports', 'One-off and small batch job work'],
        },
      ],
    },

    why: {
      heading: 'Why work with us',
      items: [
        { title: 'Made to your drawing', body: 'Send a drawing, sketch or sample. Pattern, melting, casting, machining and finishing all happen in our own unit.' },
        { title: 'Small batches welcome', body: 'One-off replacements and short runs are ordinary work for us, not an exception.' },
        { title: 'Three decades on the job', body: 'Casting since 1991 for electrical boards, contractors and industry — components that spend their lives outdoors or under load.' },
      ],
    },

    about: {
      heading: 'About Royal Foundry',
      lead: 'A family-run foundry at Chingavanam, Kottayam — casting since 1991.',
      body: [
        'Royal Foundry was founded in 1991 by the late Sri K. A. Kamalasanan, a retired Executive Engineer of the Kerala State Electricity Board. It has run as a family proprietorship ever since, today under Smt. Meenakumari. In 2013–14 the Department of Industries and Commerce, Government of Kerala, named her Best Entrepreneur for Kottayam District in the Women Category at the MSME District Level Awards.',
        'We undertake all kinds of ferrous and non-ferrous castings. Our main line is clamps and terminal connectors for electrical equipment in H.V. substations and transmission lines — the kind of component that spends thirty years outdoors on a pole and is simply expected to keep working. These go to KSEB electrical, transmission and generation circles and tower lines, and to contractors and industrial customers across Kerala. Our rubber mat and coir mat moulds go to prominent mat manufacturers across India. We also make stainless steel DTR boxes, earthing products, and general fabrication job work.',
        'Melting, casting, turning, milling, drilling and CNC work all happen in our own unit at Nattakom. Most of what we make is to customer drawings, which means we are as comfortable with a single replacement part as with a repeat production run.',
        'Being small and family-run is the point. There is no call centre between you and the shop floor — when you ring about a job, you speak to someone who can tell you exactly where it stands.',
      ],
      statsHeading: 'At a glance',
      stats: [
        { value: 'Since 1991', label: 'Producing continuously' },
        { value: 'Ferrous & non-ferrous', label: 'All kinds of castings undertaken' },
        { value: 'Award winning', label: 'MSME Best Entrepreneur, Kottayam District' },
      ],
    },

    contact: {
      heading: 'Contact us',
      sub: 'Call or WhatsApp for enquiries, quotations and custom work. Drawings and photos can be sent straight to our WhatsApp.',
      phoneLabel: 'Mobile',
      landlineLabel: 'Landline',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      addressLabel: 'Address',
      hoursLabel: 'Working hours',
      mapNote: 'Open in Google Maps for directions.',
      waMessage: "Hello Royal Foundry, I'd like to enquire about your products.",
    },

    ctaBand: {
      heading: 'Have a drawing or a sample?',
      body: 'Send it over on WhatsApp and we will get back to you with a quote.',
    },

    footer: {
      tagline: 'Ferrous & non-ferrous castings since 1991 · Chingavanam, Kottayam, Kerala',
      quickLinks: 'Quick links',
      contactHeading: 'Get in touch',
      rights: 'All rights reserved.',
    },

    skipLink: 'Skip to content',
    langLabel: 'Language',
  },

  ml: {
    nav: { home: 'ഹോം', products: 'ഉൽപ്പന്നങ്ങൾ', about: 'ഞങ്ങളെക്കുറിച്ച്', contact: 'ബന്ധപ്പെടുക' },
    cta: { call: 'ഇപ്പോൾ വിളിക്കുക', whatsapp: 'വാട്ട്‌സ്ആപ്പ് ചെയ്യുക', enquire: 'അന്വേഷണം അയക്കുക', viewProducts: 'ഉൽപ്പന്നങ്ങൾ കാണുക', directions: 'വഴി കാണിക്കുക' },

    meta: {
      home: { title: 'റോയൽ ഫൗണ്ടറി — എച്ച്.വി സബ്‌സ്റ്റേഷനുകൾക്കുള്ള ക്ലാമ്പുകളും ടെർമിനൽ കണക്ടറുകളും | ചിങ്ങവനം, കോട്ടയം',
              desc: '1991 മുതൽ ഫെറസ്, നോൺ-ഫെറസ് കാസ്റ്റിംഗുകൾ. എച്ച്.വി സബ്‌സ്റ്റേഷനുകൾക്കും ട്രാൻസ്മിഷൻ ലൈനുകൾക്കുമുള്ള ക്ലാമ്പുകളും ടെർമിനൽ കണക്ടറുകളും, റബ്ബർ-കയർ മാറ്റ് മോൾഡുകൾ. ചിങ്ങവനം, കോട്ടയം, കേരളം.' },
      products: { title: 'ഉൽപ്പന്നങ്ങൾ — റോയൽ ഫൗണ്ടറി, കോട്ടയം',
                  desc: 'അലുമിനിയം ടി-ക്ലാമ്പുകൾ, ടെർമിനൽ കണക്ടറുകൾ, എ/ബി സ്വിച്ച് ഭാഗങ്ങൾ, എർത്തിംഗ് ഉൽപ്പന്നങ്ങൾ, റബ്ബർ-കയർ മാറ്റ് മോൾഡുകൾ, ഡി.ടി.ആർ ബോക്സുകൾ, ഫാബ്രിക്കേഷൻ ജോലികൾ.' },
      about:    { title: 'ഞങ്ങളെക്കുറിച്ച് — റോയൽ ഫൗണ്ടറി, ചിങ്ങവനം, കോട്ടയം',
                  desc: '1991 മുതൽ ചിങ്ങവനം, കോട്ടയത്ത് പ്രവർത്തിക്കുന്ന ഒരു കുടുംബ ഫൗണ്ടറി. കെ.എസ്.ഇ.ബി, കോൺട്രാക്ടർമാർ, വ്യവസായ സ്ഥാപനങ്ങൾ എന്നിവർക്ക് വിതരണം.' },
      contact:  { title: 'ബന്ധപ്പെടുക — റോയൽ ഫൗണ്ടറി, ചിങ്ങവനം, കോട്ടയം',
                  desc: 'അന്വേഷണങ്ങൾക്കും ക്വട്ടേഷനുകൾക്കും റോയൽ ഫൗണ്ടറിയെ വിളിക്കുക അല്ലെങ്കിൽ വാട്ട്‌സ്ആപ്പ് ചെയ്യുക.' },
    },

    hero: {
      eyebrow: 'ചിങ്ങവനം · കോട്ടയം · കേരളം',
      title: 'ക്ലാമ്പുകൾ, കണക്ടറുകൾ, മോൾഡുകൾ. 1991 മുതൽ കോട്ടയത്ത് കാസ്റ്റിംഗ്.',
      sub: 'എച്ച്.വി സബ്‌സ്റ്റേഷനുകളിലെയും ട്രാൻസ്മിഷൻ ലൈനുകളിലെയും ഇലക്ട്രിക്കൽ ഉപകരണങ്ങൾക്കുള്ള ക്ലാമ്പുകളും ടെർമിനൽ കണക്ടറുകളും. സ്റ്റെയിൻലെസ് സ്റ്റീൽ ഡി.ടി.ആർ ബോക്സുകൾ. റബ്ബർ, കയർ മാറ്റ് മോൾഡുകൾ. നിങ്ങളുടെ കൃത്യമായ സ്പെസിഫിക്കേഷൻ അനുസരിച്ച് കസ്റ്റം ഡൈകൾ. എല്ലാത്തരം ഫെറസ്, നോൺ-ഫെറസ് കാസ്റ്റിംഗുകളും — നിങ്ങളുടെ ഡ്രോയിംഗ് അനുസരിച്ച്.',
      badge1: 'ഫെറസ് & നോൺ-ഫെറസ് കാസ്റ്റിംഗ്',
      badge2: 'നിങ്ങളുടെ ഡ്രോയിംഗ് അനുസരിച്ച്',
      badge3: '1991 മുതൽ കാസ്റ്റിംഗ്',
    },

    intro: {
      heading: 'ഞങ്ങൾ നിർമ്മിക്കുന്നത്',
      body: 'ഉരുക്കൽ, കാസ്റ്റിംഗ്, മെഷീനിംഗ്, ഫാബ്രിക്കേഷൻ — എല്ലാം ഒരേ യൂണിറ്റിൽ. കെ.എസ്.ഇ.ബി ഇലക്ട്രിക്കൽ, ട്രാൻസ്മിഷൻ, ജനറേഷൻ സർക്കിളുകൾ, ടവർ ലൈനുകൾ എന്നിവയ്ക്കും കേരളത്തിലുടനീളമുള്ള കോൺട്രാക്ടർമാർക്കും വ്യവസായ സ്ഥാപനങ്ങൾക്കും ഞങ്ങൾ വിതരണം ചെയ്യുന്നു — കൂടാതെ ഇന്ത്യയിലുടനീളമുള്ള പ്രമുഖ മാറ്റ് നിർമ്മാതാക്കൾക്ക് മാറ്റ് മോൾഡുകളും. ഡ്രോയിംഗോ സാമ്പിളോ ഫോട്ടോയോ വാട്ട്‌സ്ആപ്പിൽ അയക്കൂ, ഞങ്ങൾ ക്വട്ടേഷൻ നൽകാം.',
    },

    strip: {
      seeAll: (n: number) => `${n} ഉൽപ്പന്നങ്ങളും കാണുക →`,
    },

    lightbox: {
      open: 'വലുതായി കാണുക',
      close: 'അടയ്ക്കുക',
      prev: 'മുമ്പത്തെ ചിത്രം',
      next: 'അടുത്ത ചിത്രം',
      counter: (i: number, n: number) => `${n}-ൽ ${i}`,
    },

    people: {
      heading: 'ഫൗണ്ടറിക്ക് പിന്നിലുള്ളവർ',
      sub: '1991-ൽ കെ. എ. കമലാസനൻ സ്ഥാപിച്ചു. ഇന്ന് ഭാര്യ ശ്രീമതി മീനാകുമാരി നടത്തുന്നു.',
      founder: {
        name: 'പരേതനായ ശ്രീ കെ. എ. കമലാസനൻ',
        role: 'സ്ഥാപകൻ',
        note: 'കേരള സ്റ്റേറ്റ് ഇലക്ട്രിസിറ്റി ബോർഡിൽ നിന്ന് വിരമിച്ച എക്സിക്യൂട്ടീവ് എഞ്ചിനീയർ. 1991-ൽ അദ്ദേഹം റോയൽ ഫൗണ്ടറി സ്ഥാപിച്ചു.',
      },
      proprietor: {
        name: 'ശ്രീമതി മീനാകുമാരി',
        role: 'ഉടമ',
        note: 'ഇന്ന് സ്ഥാപനം നടത്തുന്നത് അവരാണ്. 2013–14 വർഷത്തെ കേരള എം.എസ്.എം.ഇ ജില്ലാതല അവാർഡുകളിൽ കോട്ടയം ജില്ലയിലെ മികച്ച സംരംഭക (വനിതാ വിഭാഗം).',
      },
    },
    awards: {
      heading: 'അവാർഡുകളും അംഗീകാരങ്ങളും',
      sub: '2013–14 വർഷത്തെ എം.എസ്.എം.ഇ ജില്ലാതല അവാർഡുകളിൽ, കേരള സർക്കാരിന്റെ വ്യവസായ വാണിജ്യ വകുപ്പ് റോയൽ ഫൗണ്ടറിയുടെ ഉടമയെ കോട്ടയം ജില്ലയിലെ മികച്ച സംരംഭകയായി (വനിതാ വിഭാഗം) തിരഞ്ഞെടുത്തു.',
      plaque: 'ജില്ലാതല അവാർഡ് 2013–14 — കോട്ടയം ജില്ലയിലെ മികച്ച സംരംഭക (വനിതാ വിഭാഗം), വ്യവസായ വാണിജ്യ വകുപ്പ്, കേരള സർക്കാർ',
      certificate: 'മികച്ച സംരംഭക അവാർഡ് 2013–14 സർട്ടിഫിക്കറ്റ്, കേരള സർക്കാർ',
      trophy: 'എം.എസ്.എം.ഇ ജില്ലാതല അവാർഡ് ഫലകം, 2013–14',
      ceremony: 'എം.എസ്.എം.ഇ ജില്ലാതല അവാർഡ് ഏറ്റുവാങ്ങുന്നു, 2013–14',
      dic: 'ജില്ലാ വ്യവസായ കേന്ദ്രം കോട്ടയത്തിൽ നിന്ന് അവാർഡ് ഏറ്റുവാങ്ങുന്നു',
      cnc: 'ശ്രീമതി മീനാകുമാരി സി.എൻ.സി മെഷീനിൽ',
      proprietor: 'ശ്രീമതി മീനാകുമാരി, ഉടമ, ഓഫീസിൽ',
      signboard: 'റോയൽ ഫൗണ്ടറി, ചിങ്ങവനം, കോട്ടയം',
    },
    creds: {
      heading: 'അംഗീകാരങ്ങളും രജിസ്ട്രേഷനും',
      items: [
        { value: 'കോട്ടയം ജില്ലയിലെ മികച്ച സംരംഭക', label: 'എം.എസ്.എം.ഇ ജില്ലാതല അവാർഡ് 2013–14 (വനിതാ വിഭാഗം), വ്യവസായ വാണിജ്യ വകുപ്പ്, കേരള സർക്കാർ' },
        { value: '1991 മുതൽ കാസ്റ്റിംഗ്', label: '1991 ഡിസംബർ മുതൽ തുടർച്ചയായി ഉൽപ്പാദനം' },
        { value: 'ഉദ്യം രജിസ്റ്റർ ചെയ്തത്', label: 'മൈക്രോ സംരംഭം, നിർമ്മാണം — നോൺ-ഫെറസ് ലോഹ കാസ്റ്റിംഗ്' },
      ],
    },

    gallery: {
      heading: 'ഞങ്ങളുടെ വർക്ക്‌ഷോപ്പിൽ നിന്ന്',
      sub: 'ഞങ്ങൾ നിർമ്മിച്ച കാസ്റ്റിംഗുകൾ, അസംബ്ലികൾ, മോൾഡുകൾ. വലുപ്പങ്ങളും പാറ്റേണുകളും ഓർഡർ അനുസരിച്ച് — ഡ്രോയിംഗോ സാമ്പിളോ ഫോട്ടോയോ അയക്കൂ.',
      groups: {
        electrical: 'ഇലക്ട്രിക്കൽ ഹാർഡ്‌വെയർ',
        dtr: 'ഡി.ടി.ആർ ബോക്സുകൾ',
        moulds: 'മാറ്റ് മോൾഡുകൾ',
      },
      mouldsNote: 'ഞങ്ങൾ നിർമ്മിക്കുന്നത് മോൾഡുകളാണ്, മാറ്റുകളല്ല. ഒരു സാമ്പിൾ മാറ്റോ ഡ്രോയിംഗോ ഫോട്ടോയോ അയച്ചാൽ, നിങ്ങൾക്ക് വേണ്ട വലുപ്പത്തിൽ അതിനുള്ള മോൾഡ് ഞങ്ങൾ നിർമ്മിച്ചു നൽകും.',
      captions: {
        '01-fan-pattern-semicircle-mould-70x40-cm':  'ഫാൻ പാറ്റേൺ അർധവൃത്ത മോൾഡ് — 70 × 40 സെ.മീ',
        '02-fan-pattern-semicircle-mould-80x50-cm':  'ഫാൻ പാറ്റേൺ അർധവൃത്ത മോൾഡ് — 80 × 50 സെ.മീ',
        '03-plain-semicircle-mould-80x50-cm':      'പ്ലെയിൻ അർധവൃത്ത മോൾഡ് — 80 × 50 സെ.മീ',
        '04-fluted-panel-mould':          'ഫ്ലൂട്ടഡ് പാനൽ മോൾഡ്',
        '05-octagon-panel-mould-75x45-cm':   'ഒക്ടഗൺ പാനൽ മോൾഡ് — 75 × 45 സെ.മീ',
        '06-hexagon-panel-mould':         'ഹെക്സഗൺ പാനൽ മോൾഡ്',
        '07-diamond-lattice-mould-50x40-cm': 'ഡയമണ്ട് ലാറ്റിസ് മോൾഡ് — 50 × 40 സെ.മീ',
        '08-diamond-lattice-mould-75x45-cm': 'ഡയമണ്ട് ലാറ്റിസ് മോൾഡ് — 75 × 45 സെ.മീ',
        '09-leaf-spray-mould':            'ഇല പാറ്റേൺ മോൾഡ്',
        '10-scalloped-shell-mould':         'സ്കാലപ്പ് ഷെൽ മോൾഡ്',
        '11-floral-lace-mould':           'ഫ്ലോറൽ ലേസ് മോൾഡ്',
        '12-flower-motif-mould':          'പുഷ്പ മോട്ടിഫ് മോൾഡ്',
        '13-basketweave-moulds':      'ബാസ്കറ്റ്‌വീവ് മോൾഡുകൾ',
        '14-diagonal-lattice-mould':      'ഡയഗണൽ ലാറ്റിസ് മോൾഡ്',
        '15-chevron-mould-with-welcome-lettering':       'WELCOME അക്ഷരങ്ങളോടു കൂടിയ ഷെവ്‌റോൺ മോൾഡ്',
        '06-compressed-type-t-clamp': 'കംപ്രസ്ഡ് ടൈപ്പ് ടി-ക്ലാമ്പ്',
        '09-transformer-bushing-clamp-for-double-conductor': 'ഡബിൾ കണ്ടക്ടറിനുള്ള ട്രാൻസ്ഫോർമർ ബുഷിംഗ് ക്ലാമ്പ്',
        '10-ct-clamp': 'സി.ടി ക്ലാമ്പ്',
        '23-ab-switch-male-female-new-type': 'എ/ബി സ്വിച്ച് മെയിൽ-ഫീമെയിൽ പുതിയ തരം',
        '25-female-contact-assembly': 'ഫീമെയിൽ കോൺടാക്ട് അസംബ്ലി',
        '26-female-contact-assembly-sideview': 'ഫീമെയിൽ കോൺടാക്ട് അസംബ്ലി — സൈഡ് വ്യൂ',
        '21-ab-switch-11kv-400a': 'എ/ബി സ്വിച്ച് 11 കെ.വി 400 എ',
        '22-ab-switch-11kv-400a-topview': 'എ/ബി സ്വിച്ച് 11 കെ.വി 400 എ — ടോപ്പ് വ്യൂ',
        '33-base-frame-for-section-fuse-with-neutral-link': 'ന്യൂട്രൽ ലിങ്കോടു കൂടിയ സെക്ഷൻ ഫ്യൂസിനുള്ള ബേസ് ഫ്രെയിം',
        '16-down-lead-clamp': 'ഡൗൺലീഡ് ക്ലാമ്പ്',
        '19-shorting-clip-with-spike-earth-rod': 'സ്പൈക്ക് എർത്ത് റോഡോടു കൂടിയ ഷോർട്ടിംഗ് ക്ലിപ്പ്',
        '01-dtr-box-front': 'ഡി.ടി.ആർ ബോക്സ് — കേബിൾ ഗ്ലാൻഡ് പ്ലേറ്റുകളോടെ മുൻവശം',
        '02-dtr-box-side-louvres': 'ഡി.ടി.ആർ ബോക്സ് — ലൂവർ വെന്റിലേഷൻ പാനൽ',
        '03-dtr-box-exterior': 'ഡി.ടി.ആർ ബോക്സ് — സ്റ്റെയിൻലെസ് സ്റ്റീൽ എൻക്ലോഷർ',
        '04-dtr-box-busbars': 'ഡി.ടി.ആർ ബോക്സ് — ബസ്ബാറുകൾ ഘടിപ്പിച്ചത്',
        '05-dtr-box-busbar-rails': 'ഡി.ടി.ആർ ബോക്സ് — ബസ്ബാർ സപ്പോർട്ടുകൾ',
        '06-dtr-box-open': 'ഡി.ടി.ആർ ബോക്സ് — മൂടി തുറന്ന നിലയിൽ',
        '07-dtr-box-louvre-detail': 'ഡി.ടി.ആർ ബോക്സ് — ലൂവർ വിശദാംശം',
        '08-dtr-box-glands': 'ഡി.ടി.ആർ ബോക്സ് — കേബിൾ ഗ്ലാൻഡുകൾ',
        '20-earth-rod-with-earthing-clamp': 'എർത്തിംഗ് ക്ലാമ്പോടു കൂടിയ എർത്ത് റോഡ്',
        '01-clamps-range-of-five-sizes':   'ക്ലാമ്പുകൾ — അഞ്ച് വലുപ്പങ്ങൾ',
        '02-pg-clamps-range-of-three-sizes':  'പി.ജി ക്ലാമ്പുകൾ — മൂന്ന് വലുപ്പങ്ങൾ',
        '03-large-parallel-groove-clamp':     'വലിയ പാരലൽ ഗ്രൂവ് ക്ലാമ്പ്',
        '04-t-clamp-for-various-conductors-topview':         'വിവിധ കണ്ടക്ടറുകൾക്കുള്ള ടി-ക്ലാമ്പ് — ടോപ്പ് വ്യൂ',
        '05-t-clamp-for-various-conductors-sideview':  'വിവിധ കണ്ടക്ടറുകൾക്കുള്ള ടി-ക്ലാമ്പ് — സൈഡ് വ്യൂ',
        '07-transformer-bushing-clamp-sideview':    'ട്രാൻസ്ഫോർമർ ബുഷിംഗ് ക്ലാമ്പ് — സൈഡ് വ്യൂ',
        '08-transformer-bushing-clamp-topview': 'ട്രാൻസ്ഫോർമർ ബുഷിംഗ് ക്ലാമ്പ് — ടോപ്പ് വ്യൂ',
        '11-tall-clamp-with-bore':    'ബോറോടു കൂടിയ നീളൻ ക്ലാമ്പ്',
        '12-flat-plate-clamps':  'ഫ്ലാറ്റ് പ്ലേറ്റ് ക്ലാമ്പുകൾ',
        '13-isolator-pad-clamp': 'ഐസൊലേറ്റർ (പാഡ്) ക്ലാമ്പ്',
        '14-bar-spacer-clamp':   'ബാർ / സ്പേസർ ക്ലാമ്പ്',
        '15-twin-bore-pg-clamp': 'ഇരട്ട ബോർ പി.ജി ക്ലാമ്പ്',
        '17-cable-lugs-and-terminal-ends':         'കേബിൾ ലഗ്ഗുകളും ടെർമിനൽ എൻഡുകളും',
        '18-wedge-piece-with-pg-clamp':    'പി.ജി ക്ലാമ്പോടു കൂടിയ വെഡ്ജ് പീസ്',
        '24-ab-switch-contact-assemblies':    'എ/ബി സ്വിച്ച് കോൺടാക്ട് അസംബ്ലികൾ',
        '27-ab-switch-jaw-contacts':  'എ/ബി സ്വിച്ച് ജോ കോൺടാക്ടുകൾ',
        '28-ab-switch-assembled':'അസംബിൾ ചെയ്ത എ/ബി സ്വിച്ച്',
        '29-ab-switch-operating-mechanism-set':   'എ/ബി സ്വിച്ച് ഓപ്പറേറ്റിംഗ് മെക്കാനിസം സെറ്റ്',
        '30-covered-conductor-clamp-and-hardware-fittings':        'കവേഡ് കണ്ടക്ടർ ക്ലാമ്പും ഹാർഡ്‌വെയർ ഫിറ്റിംഗുകളും',
        '31-nylon-spacer-block': 'നൈലോൺ സ്പേസർ ബ്ലോക്ക്',
        '32-base-frame-pole-top-with-nylon-sheet':'നൈലോൺ ഷീറ്റോടു കൂടിയ ബേസ് ഫ്രെയിം (പോൾ ടോപ്പ്)',
        '34-tie-bar-connecting-link':            'ടൈ ബാർ / കണക്ടിംഗ് ലിങ്ക്',
      },
    },
    products: {
      heading: 'ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ',
      sub: 'ആറ് പ്രധാന വിഭാഗങ്ങളിലായി സ്റ്റാൻഡേർഡ് ഉൽപ്പന്നങ്ങളും ഓർഡർ ജോലികളും.',
      note: 'നിങ്ങൾക്ക് വേണ്ടത് കാണുന്നില്ലേ? ഞങ്ങളുടെ ഭൂരിഭാഗം ജോലികളും ഉപഭോക്താവിന്റെ ഡ്രോയിംഗ് അനുസരിച്ചാണ്. ഒരു സ്കെച്ചോ സാമ്പിളോ ഫോട്ടോയോ അയക്കൂ, ഞങ്ങൾ ക്വട്ടേഷൻ നൽകാം.',
      items: [
        {
          slug: 'clamps',
          name: 'ക്ലാമ്പുകളും ടെർമിനൽ കണക്ടറുകളും',
          summary: 'എച്ച്.വി സബ്‌സ്റ്റേഷനുകളിലെയും ട്രാൻസ്മിഷൻ ലൈനുകളിലെയും ഇലക്ട്രിക്കൽ ഉപകരണങ്ങൾക്കുള്ള ക്ലാമ്പുകളും കണക്ടറുകളും.',
          bullets: ['എ/ബി സ്വിച്ചുകൾക്കുള്ള അലുമിനിയം ടി-ക്ലാമ്പുകൾ', 'ടെർമിനൽ കണക്ടറുകളും ടീ കണക്ടറുകളും', 'പാരലൽ ഗ്രൂവ്, ജമ്പർ ക്ലാമ്പുകൾ', 'സബ്‌സ്റ്റേഷൻ ഹാർഡ്‌വെയറും ഫിറ്റിംഗുകളും', 'ഉപഭോക്താവിന്റെ ഡ്രോയിംഗ് അനുസരിച്ച് നിർമ്മാണം'],
        },
        {
          slug: 'ab-switches',
          name: 'എ/ബി സ്വിച്ച് ഭാഗങ്ങൾ',
          summary: 'എയർ ബ്രേക്ക് സ്വിച്ച് ഭാഗങ്ങൾ, ഓപ്പറേറ്റിംഗ് മെക്കാനിസം, അസംബ്ലികൾ.',
          bullets: ['എയർ ബ്രേക്ക് (എ/ബി) സ്വിച്ച് ഭാഗങ്ങൾ', 'ഓപ്പറേറ്റിംഗ് മെക്കാനിസം, ലിങ്കേജ് ഭാഗങ്ങൾ', 'ബേസ് ഫ്രെയിമുകളും (പോൾ ടോപ്പ്) മൗണ്ടിംഗ് ഹാർഡ്‌വെയറും', 'സ്പെയർ പാർട്ടുകൾ', 'ഡ്രോയിംഗ് അല്ലെങ്കിൽ സാമ്പിൾ അനുസരിച്ച്'],
        },
        {
          slug: 'earthing',
          name: 'എർത്തിംഗ് ഉൽപ്പന്നങ്ങൾ',
          summary: 'ഇലക്ട്രിക്കൽ ഇൻസ്റ്റലേഷനുകൾക്കുള്ള എർത്ത് റോഡുകളും അനുബന്ധ ഉൽപ്പന്നങ്ങളും.',
          bullets: ['സ്റ്റാൻഡേർഡ്, കസ്റ്റം നീളങ്ങളിൽ എർത്ത് റോഡുകൾ', 'എർത്തിംഗ് ക്ലാമ്പുകളും ആക്സസറികളും', 'സബ്‌സ്റ്റേഷൻ, വ്യവസായ, കെട്ടിട ഉപയോഗത്തിന് അനുയോജ്യം'],
        },
        {
          slug: 'moulds',
          name: 'റബ്ബർ, കയർ മാറ്റ് മോൾഡുകൾ',
          summary: 'റബ്ബർ മാറ്റ്, കയർ മാറ്റ് നിർമ്മാണത്തിനുള്ള മോൾഡുകൾ — ഞങ്ങൾ നിർമ്മിക്കുന്നത് മോൾഡാണ്, മാറ്റല്ല.',
          bullets: ['റബ്ബർ മാറ്റ്, കയർ മാറ്റ് മോൾഡുകൾ', 'ഇന്ത്യയിലുടനീളമുള്ള പ്രമുഖ മാറ്റ് നിർമ്മാതാക്കൾക്ക് വിതരണം', 'നിങ്ങളുടെ സാമ്പിൾ മാറ്റ്, ഡ്രോയിംഗ് അല്ലെങ്കിൽ ഫോട്ടോ അനുസരിച്ച്', 'ഏത് വലുപ്പത്തിലും — 50×40, 70×40, 75×45, 80×50 സെ.മീ എന്നിവയും മറ്റും', 'ഡോർ മോൾഡുകളും പാനൽ മോൾഡുകളും', 'സി.എൻ.സി മെഷീൻ ചെയ്ത മോൾഡ് പ്ലേറ്റുകൾ', 'നിലവിലുള്ള മോൾഡുകളുടെ അറ്റകുറ്റപ്പണി'],
        },
        {
          slug: 'dtr-boxes',
          name: 'ഡി.ടി.ആർ ബോക്സുകൾ',
          summary: 'നിങ്ങളുടെ ഡ്രോയിംഗ് അനുസരിച്ച് നിർമ്മിക്കുന്ന സ്റ്റെയിൻലെസ് സ്റ്റീൽ ഡിസ്ട്രിബ്യൂഷൻ ട്രാൻസ്ഫോർമർ ബോക്സുകൾ.',
          bullets: ['ഡിസ്ട്രിബ്യൂഷൻ ട്രാൻസ്ഫോർമർ (ഡി.ടി.ആർ) ബോക്സുകൾ', 'സ്റ്റെയിൻലെസ് സ്റ്റീൽ ഷീറ്റ് മെറ്റൽ ഫാബ്രിക്കേഷൻ', 'ലൂവർ വെന്റിലേഷൻ പാനലുകൾ', 'ബസ്ബാർ സപ്പോർട്ടുകളും കേബിൾ ഗ്ലാൻഡ് പ്ലേറ്റുകളും', 'ഡ്രോയിംഗ് അല്ലെങ്കിൽ സാമ്പിൾ അനുസരിച്ച്'],
        },
        {
          slug: 'fabrication',
          name: 'ഫാബ്രിക്കേഷനും ജോബ് വർക്കും',
          summary: 'വ്യവസായ, നിർമ്മാണ ഉപഭോക്താക്കൾക്കുള്ള സ്റ്റീൽ ഫാബ്രിക്കേഷൻ, മെഷീനിംഗ്, ജോബ് വർക്ക്.',
          bullets: ['സ്ട്രക്ചറൽ, ഷീറ്റ് മെറ്റൽ ഫാബ്രിക്കേഷൻ', 'ഡ്രോയിംഗ് അനുസരിച്ച് സ്റ്റെയിൻലെസ് സ്റ്റീൽ എൻക്ലോഷറുകളും ബോക്സുകളും', 'ടേണിംഗ്, മില്ലിംഗ്, ഡ്രില്ലിംഗ്', 'വെൽഡിംഗും അസംബ്ലിയും', 'കസ്റ്റം ബ്രാക്കറ്റുകൾ, ഫ്രെയിമുകൾ, സപ്പോർട്ടുകൾ', 'ഒറ്റത്തവണ, ചെറിയ ബാച്ച് ജോലികൾ'],
        },
      ],
    },

    why: {
      heading: 'ഞങ്ങളെ തിരഞ്ഞെടുക്കാൻ',
      items: [
        { title: 'നിങ്ങളുടെ ഡ്രോയിംഗ് അനുസരിച്ച്', body: 'ഡ്രോയിംഗോ സ്കെച്ചോ സാമ്പിളോ അയക്കൂ. പാറ്റേൺ, ഉരുക്കൽ, കാസ്റ്റിംഗ്, മെഷീനിംഗ്, ഫിനിഷിംഗ് എല്ലാം ഞങ്ങളുടെ സ്വന്തം യൂണിറ്റിൽ.' },
        { title: 'ചെറിയ ഓർഡറുകളും സ്വാഗതം', body: 'ഒറ്റ ഭാഗത്തിന്റെ റീപ്ലേസ്‌മെന്റും ചെറിയ ബാച്ചുകളും ഞങ്ങൾക്ക് പതിവ് ജോലിയാണ്.' },
        { title: 'മൂന്ന് പതിറ്റാണ്ടിന്റെ പരിചയം', body: '1991 മുതൽ ഇലക്ട്രിസിറ്റി ബോർഡുകൾക്കും കോൺട്രാക്ടർമാർക്കും വ്യവസായങ്ങൾക്കും വേണ്ടി കാസ്റ്റിംഗ് — വർഷങ്ങളോളം വെയിലും മഴയും കൊള്ളേണ്ട ഭാഗങ്ങൾ.' },
      ],
    },

    about: {
      heading: 'റോയൽ ഫൗണ്ടറിയെക്കുറിച്ച്',
      lead: '1991 മുതൽ ചിങ്ങവനം, കോട്ടയത്ത് പ്രവർത്തിക്കുന്ന ഒരു കുടുംബ ഫൗണ്ടറി.',
      body: [
        'കേരള സ്റ്റേറ്റ് ഇലക്ട്രിസിറ്റി ബോർഡിൽ നിന്ന് വിരമിച്ച എക്സിക്യൂട്ടീവ് എഞ്ചിനീയറായിരുന്ന പരേതനായ ശ്രീ കെ. എ. കമലാസനൻ 1991-ൽ റോയൽ ഫൗണ്ടറി സ്ഥാപിച്ചു. അന്നുമുതൽ ഒരു കുടുംബ സ്ഥാപനമായി, ഇന്ന് ശ്രീമതി മീനാകുമാരിയുടെ ഉടമസ്ഥതയിൽ പ്രവർത്തിക്കുന്നു. 2013–14 വർഷത്തെ എം.എസ്.എം.ഇ ജില്ലാതല അവാർഡുകളിൽ കേരള സർക്കാരിന്റെ വ്യവസായ വാണിജ്യ വകുപ്പ് അവരെ കോട്ടയം ജില്ലയിലെ മികച്ച സംരംഭകയായി (വനിതാ വിഭാഗം) തിരഞ്ഞെടുത്തു.',
        'എല്ലാത്തരം ഫെറസ്, നോൺ-ഫെറസ് കാസ്റ്റിംഗുകളും ഞങ്ങൾ ഏറ്റെടുക്കുന്നു. എച്ച്.വി സബ്‌സ്റ്റേഷനുകളിലെയും ട്രാൻസ്മിഷൻ ലൈനുകളിലെയും ഇലക്ട്രിക്കൽ ഉപകരണങ്ങൾക്കുള്ള ക്ലാമ്പുകളും ടെർമിനൽ കണക്ടറുകളുമാണ് ഞങ്ങളുടെ പ്രധാന ഉൽപ്പന്നം — മുപ്പത് വർഷത്തോളം വെയിലും മഴയും കൊണ്ട് പോസ്റ്റിൽ നിൽക്കേണ്ട ഭാഗങ്ങൾ. ഇവ കെ.എസ്.ഇ.ബി ഇലക്ട്രിക്കൽ, ട്രാൻസ്മിഷൻ, ജനറേഷൻ സർക്കിളുകൾ, ടവർ ലൈനുകൾ എന്നിവയ്ക്കും കേരളത്തിലുടനീളമുള്ള കോൺട്രാക്ടർമാർക്കും വ്യവസായ സ്ഥാപനങ്ങൾക്കും പോകുന്നു. ഞങ്ങളുടെ റബ്ബർ മാറ്റ്, കയർ മാറ്റ് മോൾഡുകൾ ഇന്ത്യയിലുടനീളമുള്ള പ്രമുഖ മാറ്റ് നിർമ്മാതാക്കൾക്ക് പോകുന്നു. സ്റ്റെയിൻലെസ് സ്റ്റീൽ ഡി.ടി.ആർ ബോക്സുകളും, എർത്തിംഗ് ഉൽപ്പന്നങ്ങളും, ഫാബ്രിക്കേഷൻ ജോലികളും ഞങ്ങൾ ചെയ്യുന്നു.',
        'ഉരുക്കൽ, കാസ്റ്റിംഗ്, ടേണിംഗ്, മില്ലിംഗ്, ഡ്രില്ലിംഗ്, സി.എൻ.സി ജോലികൾ എന്നിവയെല്ലാം നാട്ടകത്തുള്ള ഞങ്ങളുടെ സ്വന്തം യൂണിറ്റിൽ നടക്കുന്നു. ഭൂരിഭാഗവും ഉപഭോക്താവിന്റെ ഡ്രോയിംഗ് അനുസരിച്ചാണ് — അതുകൊണ്ട് ഒറ്റ ഭാഗമായാലും ആവർത്തിച്ചുള്ള ഉൽപ്പാദനമായാലും ഞങ്ങൾക്ക് ഒരുപോലെ.',
        'ചെറുതും കുടുംബം നടത്തുന്നതുമാണ് എന്നത് ഞങ്ങളുടെ ബലമാണ്. നിങ്ങൾക്കും ഞങ്ങളുടെ ഷോപ്പ് ഫ്ലോറിനും ഇടയിൽ ഒരു കോൾ സെന്ററുമില്ല — വിളിച്ചാൽ ജോലിയുടെ സ്ഥിതി കൃത്യമായി പറയാൻ കഴിയുന്ന ആൾ തന്നെ മറുപടി പറയും.',
      ],
      statsHeading: 'ഒറ്റനോട്ടത്തിൽ',
      stats: [
        { value: '1991 മുതൽ', label: 'തുടർച്ചയായ ഉൽപ്പാദനം' },
        { value: 'ഫെറസ് & നോൺ-ഫെറസ്', label: 'എല്ലാത്തരം കാസ്റ്റിംഗുകളും' },
        { value: 'അവാർഡ് ജേതാവ്', label: 'എം.എസ്.എം.ഇ മികച്ച സംരംഭക, കോട്ടയം ജില്ല' },
      ],
    },

    contact: {
      heading: 'ബന്ധപ്പെടുക',
      sub: 'അന്വേഷണങ്ങൾ, ക്വട്ടേഷനുകൾ, ഓർഡർ ജോലികൾ എന്നിവയ്ക്ക് വിളിക്കുക അല്ലെങ്കിൽ വാട്ട്‌സ്ആപ്പ് ചെയ്യുക. ഡ്രോയിംഗുകളും ഫോട്ടോകളും വാട്ട്‌സ്ആപ്പിൽ അയക്കാം.',
      phoneLabel: 'മൊബൈൽ',
      landlineLabel: 'ലാൻഡ്‌ലൈൻ',
      whatsappLabel: 'വാട്ട്‌സ്ആപ്പ്',
      emailLabel: 'ഇമെയിൽ',
      addressLabel: 'വിലാസം',
      hoursLabel: 'പ്രവൃത്തി സമയം',
      mapNote: 'വഴി അറിയാൻ ഗൂഗിൾ മാപ്പിൽ തുറക്കുക.',
      waMessage: 'നമസ്കാരം റോയൽ ഫൗണ്ടറി, എനിക്ക് നിങ്ങളുടെ ഉൽപ്പന്നങ്ങളെക്കുറിച്ച് അറിയണം.',
    },

    ctaBand: {
      heading: 'ഒരു ഡ്രോയിംഗോ സാമ്പിളോ ഉണ്ടോ?',
      body: 'വാട്ട്‌സ്ആപ്പിൽ അയക്കൂ, ഞങ്ങൾ ക്വട്ടേഷനുമായി ബന്ധപ്പെടാം.',
    },

    footer: {
      tagline: '1991 മുതൽ ഫെറസ് & നോൺ-ഫെറസ് കാസ്റ്റിംഗുകൾ · ചിങ്ങവനം, കോട്ടയം, കേരളം',
      quickLinks: 'ലിങ്കുകൾ',
      contactHeading: 'ബന്ധപ്പെടാൻ',
      rights: 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
    },

    skipLink: 'ഉള്ളടക്കത്തിലേക്ക് പോകുക',
    langLabel: 'ഭാഷ',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
