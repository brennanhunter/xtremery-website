'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from './analytics';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID && isClient) {
      const url = pathname + (searchParams ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams, isClient]);

  if (!GA_MEASUREMENT_ID || !isClient) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}