import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mbizana Medical Centre | Doctor in Mbizana (Bizana) — Dr Sabelo Nogemane",
    template: "%s | Mbizana Medical Centre",
  },
  description:
    "Mbizana Medical Centre — general practice of Dr Sabelo Nogemane in Mbizana (Bizana), Eastern Cape. Consultations, women's, men's and child health, chronic care and more. Book online or call 069 754 7363.",
  keywords: ["Doctor in Mbizana", "GP in Bizana", "Medical centre in Mbizana", "Mbizana Medical Centre", "Dr Sabelo Nogemane", "General practitioner Eastern Cape", "Medical practice in Bizana"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    images: [{ url: "/images/practice-banner.webp", width: 718, height: 294, alt: "Mbizana Medical Centre — Dr S. Nogemane" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logos/mbizana-mark.svg" },
};

export const viewport: Viewport = { themeColor: "#073477" };

const clinicLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${site.url}/#clinic`,
  name: site.name,
  url: site.url,
  image: `${site.url}/images/practice-banner.webp`,
  logo: `${site.url}/logos/mbizana-mark.svg`,
  telephone: site.phone.international,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: site.hours.filter((h) => h.open).map((h) => ({
    "@type": "OpeningHoursSpecification", dayOfWeek: h.day, opens: h.open, closes: h.close,
  })),
  medicalSpecialty: "PrimaryCare",
  employee: {
    "@type": "Physician",
    name: site.doctor.name,
    description: site.doctor.qualifications,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicLd) }} />
      </body>
    </html>
  );
}
