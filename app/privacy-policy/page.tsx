import type { Metadata } from "next";
import { PageHero } from "@/components/Shared";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy (POPIA)",
  description: "How Mbizana Medical Centre processes personal information collected through this website, in line with the Protection of Personal Information Act (POPIA).",
  alternates: { canonical: "/privacy-policy" },
};

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Our commitment to protecting your personal information under the Protection of Personal Information Act 4 of 2013 (POPIA)." crumbs={[{ href: "/privacy-policy", label: "Privacy Policy" }]} />
      <section className="py-16">
        <div className="container-x prose-article max-w-3xl">
          <h2>1. Who we are</h2>
          <p>{site.name} ({site.doctor.name}, Practice No. {site.doctor.practiceNumber}), {site.address.lines.join(", ")}, is the responsible party for personal information collected through this website.</p>
          <h2>2. What we collect</h2>
          <p>Through the contact form we collect only your name, email address, contact number, subject and message. We do not request medical histories, diagnoses, prescriptions or ID numbers through this website. Please do not include such information in your message.</p>
          <p>Appointment bookings are handled by our practice management provider, Navitas. Information you provide when booking is processed within that system under its own privacy terms.</p>
          <h2>3. Why we use it</h2>
          <p>We use your information only to respond to your enquiry. We do not sell your information or use it for marketing without your consent.</p>
          <h2>4. Sharing</h2>
          <p>Your enquiry is delivered to the practice by a secure email service provider. We share information only with operators who process it on our behalf under appropriate safeguards, or where the law requires it.</p>
          <h2>5. Retention</h2>
          <p>Enquiries are kept only as long as needed to respond and for reasonable record-keeping, after which they are deleted.</p>
          <h2>6. Security</h2>
          <p>This website uses encrypted HTTPS connections, server-side validation and spam protection. We do not place personal or medical information in analytics, tracking or website logs.</p>
          <h2>7. Your rights</h2>
          <p>You may ask to access, correct or delete your personal information, object to its processing, or lodge a complaint with the Information Regulator (South Africa) at inforeg.org.za.</p>
          <h2>8. Contact / Information Officer</h2>
          <p>Information Officer: {site.doctor.name}. Email: {site.email}. Telephone: {site.phone.international}.</p>
        </div>
      </section>
    </>
  );
}
