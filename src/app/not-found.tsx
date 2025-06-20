export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
            Go back home
          </a>
        </div>
      </body>
    </html>
  );
}