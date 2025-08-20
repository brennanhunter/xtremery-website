/*
  Injects JSON-LD structured data for LocalBusiness and WebSite/Organization
  to boost local SEO and site presence in search results.
*/
import React from 'react';

const SEOJsonLd = () => {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Xtremery',
    image: 'https://www.xtremery.com/LogoNew.png',
    url: 'https://www.xtremery.com',
    telephone: '+1-406-868-5850',
  email: 'hunter@xtremery.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'DeLand',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'DeLand' },
      { '@type': 'City', name: 'Orange City' },
      { '@type': 'City', name: 'Deltona' },
      { '@type': 'City', name: 'Lake Helen' },
      { '@type': 'City', name: 'DeBary' },
    ],
    sameAs: [
      'https://www.facebook.com/xtremery',
      'https://www.instagram.com/xtremery',
      'https://www.linkedin.com/company/xtremery',
    ],
    description:
      'DeLand, FL computer repair and custom web design. Honest pricing, expert service, fast help for PCs and high‑converting websites.',
    slogan: 'We fix the stuff other shops won’t touch',
    keywords:
      'DeLand web design, web design DeLand FL, PC repair DeLand, computer repair DeLand, small business websites Florida',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: [
        'Monday','Tuesday','Wednesday','Thursday','Friday'
      ], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: [
        'Saturday'
      ], opens: '10:00', closes: '16:00' },
    ],
    serviceType: [
      'Computer repair',
      'Laptop repair',
      'Custom PC builds',
      'Website design',
      'SEO',
      'Web development',
    ],
  } as const;

  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Xtremery',
  url: 'https://www.xtremery.com',
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
      />
    </>
  );
};

export default SEOJsonLd;
