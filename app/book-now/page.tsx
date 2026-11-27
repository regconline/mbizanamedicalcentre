import type { Metadata } from "next";
import { CalendarCheck, ExternalLink, Info, Lock, MessageCircle, Phone, UserRound } from "lucide-react";
import { site, links } from "@/lib/site";
import { PageHero, EmergencyNote } from "@/components/Shared";
import { BookingDemo } from "@/components/BookingDemo";

export const metadata: Metadata = {
  title: "Book Your Appointment",
  description: "Book an appointment with Dr Sabelo Nogemane at Mbizana Medical Centre — online via Navitas, by phone on 069 754 7363 or on WhatsApp.",
  alternates: { canonical: "/book-now" },
};

export default function BookNow() {
  const { bookingUrl, embedUrl, portalUrl, staffLoginUrl } = site.navitas;
  const live = Boolean(embedUrl || bookingUrl);

  return (
    <>
      <PageHero eyebrow="Appointments" title="Book Your Appointment" intro="Conveniently schedule your appointment with Mbizana Medical Centre through our online booking system." crumbs={[{ href: "/book-now", label: "Book Now" }]} />

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <aside className="space-y-6">
            <div className="card p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">You are booking with</p>
              <p className="mt-2 font-heading text-xl font-bold text-navy">{site.name}</p>
              <p className="text-sm text-muted">{site.doctor.name} · {site.doctor.qualifications}</p>
              <h2 className="mt-6 flex items-center gap-2 font-bold"><Info className="h-4 w-4 text-blue" aria-hidden /> Before you book</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                <li>• Have your ID and medical aid card (if applicable) ready.</li>
                <li>• Please arrive 10 minutes before your appointment.</li>
                <li>• If you cannot attend, let the practice know as early as possible.</li>
              </ul>
              <div className="mt-6 rounded-xl bg-bg p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Booking support</p>
                <a href={links.tel} className="mt-1 flex items-center gap-2 font-heading text-lg font-bold text-navy hover:text-blue"><Phone className="h-4 w-4" aria-hidden /> {site.phone.display}</a>
              </div>
            </div>
            <div className="card space-y-3 p-7">
              {portalUrl && (
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-navy w-full"><UserRound className="h-4 w-4" aria-hidden /> Patient Portal</a>
              )}
              <a href={staffLoginUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-xs font-medium text-muted hover:text-navy">
                <Lock className="h-3.5 w-3.5" aria-hidden /> Practice staff login (Navitas)
              </a>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-2">
            {embedUrl ? (
              <div className="card overflow-hidden">
                <div className="flex items-center justify-between border-b border-line px-6 py-4">
                  <h2 className="font-bold">Online booking</h2>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Live · Navitas</span>
                </div>
                <iframe src={embedUrl} title="Mbizana Medical Centre online booking (Navitas)" className="h-[760px] w-full" loading="lazy" />
              </div>
            ) : (
              <div className="card p-8 sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-red/10 text-red"><CalendarCheck className="h-6 w-6" aria-hidden /></span>
                <h2 className="mt-6 text-2xl font-extrabold">Book your appointment</h2>
                <p className="mt-3 max-w-xl text-muted">
                  {live
                    ? "Book online through our Navitas booking page, or contact the practice directly."
                    : "Contact the practice to book your appointment. Our team will confirm a date and time with you."}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {bookingUrl && (
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full"><ExternalLink className="h-4 w-4" aria-hidden /> Book through Navitas</a>
                  )}
                  <a href={links.tel} className={bookingUrl ? "btn btn-navy w-full" : "btn btn-primary w-full"}><Phone className="h-4 w-4" aria-hidden /> Call the practice</a>
                  <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn w-full bg-wa text-white hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp booking enquiry</a>
                </div>
              </div>
            )}
            <EmergencyNote />
            <div>
              <h2 className="mb-4 text-xl font-extrabold">See how online booking works</h2>
              <BookingDemo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
