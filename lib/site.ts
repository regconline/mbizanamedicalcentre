/**
 * Central practice configuration.
 * Every value can be overridden with an environment variable in Vercel,
 * so details can be corrected without code changes.
 */
const env = (key: string, fallback: string) => process.env[key]?.trim() || fallback;

export const site = {
  name: "Mbizana Medical Centre",
  shortName: "Mbizana Medical",
  tagline: "Compassionate Care. Your Health, Our Priority.",
  url: env("NEXT_PUBLIC_SITE_URL", "https://mbizanamedicalcentre.vercel.app"),
  doctor: {
    name: "Dr Sabelo Nogemane",
    shortName: "Dr S. Nogemane",
    qualifications: env("PRACTICE_QUALIFICATIONS", "MBChB (UKZN), Dip HIV Man (CMSA)"),
    practiceNumber: env("PRACTICE_NUMBER", "1345109"),
    // Set to "/images/doctor.jpg" (or similar) once the approved photograph is supplied.
    photo: process.env.DOCTOR_PHOTO_URL?.trim() || "",
    bio: env(
      "DOCTOR_BIO",
      "Dr Sabelo Nogemane is a medical practitioner associated with Mbizana Medical Centre in Mbizana, Eastern Cape. His professional commitment is centred on providing accessible, responsible and patient-focused healthcare.",
    ),
  },
  phone: {
    display: env("PRACTICE_PHONE_DISPLAY", "069 754 7363"),
    international: env("PRACTICE_PHONE_INTL", "+27 69 754 7363"),
    tel: env("PRACTICE_PHONE_TEL", "+27697547363"),
  },
  whatsapp: {
    number: env("WHATSAPP_NUMBER", "27697547363"),
    message: "Hello Mbizana Medical Centre. I would like to enquire about making an appointment.",
  },
  email: env("PRACTICE_EMAIL", "drnogemane@gmail.com"),
  address: {
    lines: ["ERF 322, Thompson Avenue", "Mabhanoyini, Behind Spar", "Mbizana, Eastern Cape, 4800"],
    street: "ERF 322, Thompson Avenue, Mabhanoyini",
    locality: "Mbizana",
    region: "Eastern Cape",
    postalCode: "4800",
    country: "ZA",
  },
  hours: [
    { day: "Monday", short: "Mon", open: "08:00", close: "17:00" },
    { day: "Tuesday", short: "Tue", open: "08:00", close: "17:00" },
    { day: "Wednesday", short: "Wed", open: "08:00", close: "17:00" },
    { day: "Thursday", short: "Thu", open: "08:00", close: "17:00" },
    { day: "Friday", short: "Fri", open: "08:00", close: "17:00" },
    { day: "Saturday", short: "Sat", open: "08:00", close: "13:00" },
    { day: "Sunday", short: "Sun", open: null, close: null },
  ] as { day: string; short: string; open: string | null; close: string | null }[],
  navitas: {
    bookingUrl: process.env.NEXT_PUBLIC_NAVITAS_BOOKING_URL?.trim() || "",
    embedUrl: process.env.NEXT_PUBLIC_NAVITAS_EMBED_URL?.trim() || "",
    portalUrl: process.env.NEXT_PUBLIC_NAVITAS_PORTAL_URL?.trim() || "",
    staffLoginUrl: "https://www.navitas.co.za/",
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "",
  },
};

export const links = {
  tel: `tel:${site.phone.tel}`,
  whatsapp: `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`,
  email: `mailto:${site.email}`,
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Mbizana+Medical+Centre,+ERF+322,+Mbizana,+Eastern+Cape,+South+Africa",
  openInMaps:
    "https://www.google.com/maps/search/?api=1&query=Mbizana+Medical+Centre,+Thompson+Avenue,+Mbizana,+Eastern+Cape",
  mapEmbed:
    "https://www.google.com/maps?q=Mbizana+Medical+Centre,+Thompson+Avenue,+Mbizana,+Eastern+Cape,+4800&output=embed",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
