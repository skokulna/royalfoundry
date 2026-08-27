/**
 * Single source of truth for business details.
 * Sourced from the documents in /files — invoice, GST certificate,
 * Udyam registration certificate and the Word letterhead template.
 *
 * NOT on this site, deliberately: bank account details, the authorised
 * signature image, the proprietor's Aadhaar/PAN, and customer details.
 * Those belong on invoices and filings, not a public web page.
 */
export const site = {
  name: 'Royal Foundry',
  legalName: 'ROYAL FOUNDRY',
  tradeName: 'Royal Foundry Chinganavum',   // as on the GST certificate
  constitution: 'Proprietorship',

  // phonePrimary is the main mobile and the WhatsApp number
  phonePrimary: '+919447375292',
  phoneSecondary: '+919447415255',
  landline: '+914812432005',                // Office: 0481-2432005
  whatsapp: '919447375292',                 // confirmed: the main mobile, and the one on WhatsApp

  // Live address. Keep the Gmail here until Zoho has verified the domain and
  // contact@royalfoundry.in actually receives mail — then swap the two lines,
  // rebuild, and push. Publishing an address that bounces is worse than a Gmail.
  email: 'royalfoundrychingavanam@gmail.com',
  // email: 'contact@royalfoundry.in',        <- switch to this once Zoho works

  // Planned mailboxes on the domain (Zoho free plan allows 5):
  //   contact@royalfoundry.in   public address, website + invoices
  //   cpmeena@royalfoundry.in   proprietor, direct correspondence

  gstin: '32ARMPM1413A1ZI',
  udyam: 'UDYAM-KL-07-0001298',             // MSME — Micro, Manufacturing
  stateCode: '32',

  // Principal place of business, per the GST certificate
  address: {
    line1: 'Royal Foundry, 1/102',
    line2: 'TECIL – Mission Church Road',
    locality: 'Nattakom, Chingavanam P.O.',
    city: 'Kottayam',
    state: 'Kerala',
    pin: '686531',
    country: 'India',
  },

  // Resolved from the shared link https://maps.app.goo.gl/yLpYiGmXeq8EZCuUA
  geo: { lat: 9.5151455, lng: 76.5275791 },
  mapEmbedUrl: 'https://www.google.com/maps?q=9.5151455,76.5275791&z=16&output=embed',
  mapShareUrl: 'https://maps.app.goo.gl/yLpYiGmXeq8EZCuUA',
  googlePlaceId: 'ChIJ98QNHpgpBjsRDzDngh085Ho',

  // The works runs round the clock — the CNC machines run continuously in shifts.
  hours: {
    weekdays: 'Open 24 hours, all week',
    sunday: 'Closed only on national holidays and festivals',
    note: 'CNC machines run continuously in shifts.',
  },

  // Udyam certificate: incorporated 30/11/1991, production from 01/12/1991
  established: 1991,

  jurisdiction: 'Kottayam',

  social: { facebook: '', instagram: '' },
} as const;

/** Whole years in business, as at build time. */
export const yearsInBusiness = new Date().getFullYear() - site.established;

export const telHref = (n: string) => `tel:${n}`;
export const waHref = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

/** "+919447375292" -> "+91 94473 75292";  "+914812432005" -> "0481 243 2005" */
export const prettyPhone = (n: string) => {
  const d = n.replace(/\D/g, '').replace(/^91/, '');
  if (d.startsWith('481')) return `0481 ${d.slice(3, 6)} ${d.slice(6)}`;
  return `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
};

export const fullAddress = [
  site.address.line1,
  site.address.line2,
  site.address.locality,
  `${site.address.city}, ${site.address.state} ${site.address.pin}`,
].join(', ');

/** Opens the actual Google Maps listing rather than a name search. */
export const mapsSearchUrl = site.mapShareUrl;

/** Locale-aware embed src for the Contact page iframe. */
export const mapEmbedFor = (lang: string) =>
  `${site.mapEmbedUrl}&hl=${lang === 'ml' ? 'ml' : 'en'}`;
