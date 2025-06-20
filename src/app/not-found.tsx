import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
            Go back home
          </Link>
        </div>
      </body>
    </html>
  );
}