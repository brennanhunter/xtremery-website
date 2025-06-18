'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from './analytics';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      pageview(pathname + searchParams.toString());
    }
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}