import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold tracking-tight text-foreground">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </h2>
      <p className="mt-2 text-muted text-sm max-w-md">
        Maybe the URL is wrong, or the page has moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
