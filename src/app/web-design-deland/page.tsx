import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeLand Web Design & SEO - Xtremery',
  description: 'Custom websites that convert in DeLand, FL. Fast, modern, and SEO‑ready. Local expert helping small businesses get results.',
  keywords: [
    'web design DeLand',
    'DeLand web designer',
    'website design DeLand FL',
    'small business websites DeLand',
    'SEO DeLand',
    'web developer DeLand',
  ],
  alternates: { canonical: 'https://www.xtremery.com/web-design-deland' },
  openGraph: {
    title: 'DeLand Web Design & SEO | Xtremery',
    description: 'Local, conversion‑focused websites for DeLand businesses. Honest pricing, fast turnaround.',
    url: 'https://www.xtremery.com/web-design-deland',
    type: 'website',
    images: [{ url: '/LogoNew.png', width: 1200, height: 630, alt: 'Xtremery Web Design DeLand' }],
  },
  robots: { index: true, follow: true },
}

export default function WebDesignDelandPage() {
  return (
    <main className="bg-gradient-to-br from-purple-50 to-blue-100 text-gray-900">
      <section className="px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 DeLand Web Design & SEO
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-purple-800">
            Websites That Win Business in DeLand
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            I build fast, modern sites that rank locally and turn visitors into customers. No BS, no bloated retainers—just results.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-col sm:flex-row">
            <a href="tel:+14068685850" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              📞 Talk About Your Site
            </a>
            <a href="/services" className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
              See Web Packages
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: '⚡', title: 'Fast & SEO‑Ready', desc: 'Core Web Vitals friendly, semantic HTML, metadata, and schema.' },
            { icon: '📱', title: 'Mobile‑First', desc: 'Looks great and converts on phones—where most local traffic happens.' },
            { icon: '🧭', title: 'Local First', desc: 'Built to rank in DeLand, Orange City, Deltona, and nearby areas.' },
          ].map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">What You Get</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            {[
              'Brand‑aligned design guided by your style (see brand guidelines)',
              'On‑page SEO: titles, meta, canonicals, OpenGraph, Twitter cards',
              'Schema.org JSON‑LD for LocalBusiness & Services',
              'Blog setup for local content and FAQs',
              'Analytics + privacy‑friendly tracking',
              'Speed: image optimization, lazy loading, best‑practice code',
            ].map((item, i) => (
              <li key={i} className="bg-white p-4 rounded-lg shadow-sm">✅ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Ready to Get Noticed?</h2>
          <p className="text-lg text-gray-700 mb-6">Let’s build something your customers love—and Google does too.</p>
          <a href="sms:+14068685850?body=Hi! I need a website for my business in DeLand." className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">💬 Text Me Your Idea</a>
        </div>
      </section>
    </main>
  )
}
