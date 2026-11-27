import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-3 text-4xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn btn-navy mt-8">Back to home</Link>
    </section>
  );
}
