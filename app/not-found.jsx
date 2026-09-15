import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page took a wrong turn.</h1>
      <p>The work is still here.</p>
      <Link className="button" href="/">
        Back to the portfolio
      </Link>
    </main>
  );
}
