import { links } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with our practice on WhatsApp"
      className="group animate-fade-up fixed bottom-5 right-5 z-50 flex items-center gap-3 [animation-delay:1s]"
    >
      <span className="pointer-events-none hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink opacity-0 shadow-lift transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Chat with our practice
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lift transition group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3Zm0 23.62c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.04 1.06-3.86-.27-.4a10.6 10.6 0 0 1-1.63-5.6c0-5.86 4.78-10.62 10.65-10.62 5.86 0 10.62 4.76 10.62 10.62 0 5.87-4.76 10.63-10.34 10.63Zm5.84-7.95c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
