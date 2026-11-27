import type { Metadata } from "next";
import { PageHero } from "@/components/Shared";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Mbizana Medical Centre website.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" crumbs={[{ href: "/terms", label: "Terms & Conditions" }]} />
      <section className="py-16">
        <div className="container-x prose-article max-w-3xl">
          <h2>1. Use of this website</h2>
          <p>By using this website you agree to these terms. The website provides information about {site.name} and ways to contact the practice and book appointments.</p>
          <h2>2. Not medical advice</h2>
          <p>Content on this website, including health articles, is general information only. It is not a diagnosis and does not replace a consultation with a qualified healthcare professional.</p>
          <h2>3. Emergencies</h2>
          <p>The contact form and WhatsApp are not monitored for emergencies. In an emergency call 10177 or 112, or go to your nearest hospital emergency unit.</p>
          <h2>4. Appointments</h2>
          <p>Online bookings are processed through Navitas and are subject to confirmation by the practice. The interactive booking demonstration on this website does not create a real appointment.</p>
          <h2>5. Third-party services</h2>
          <p>This website links to third-party services such as Google Maps, WhatsApp and Navitas. We are not responsible for their content or privacy practices.</p>
          <h2>6. Intellectual property</h2>
          <p>The practice name, logo and website content belong to {site.name} and may not be reproduced without permission.</p>
          <h2>7. Governing law</h2>
          <p>These terms are governed by the laws of the Republic of South Africa.</p>
        </div>
      </section>
    </>
  );
}
