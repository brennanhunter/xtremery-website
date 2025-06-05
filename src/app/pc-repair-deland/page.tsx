export const metadata = {
  title: 'DeLand Computer Support & Tech Services | Same-Day Help | Xtremery',
  description: 'Professional computer support in DeLand, FL. PC repair, website building, security help, system upgrades. Same-day service, honest pricing. Call (406) 868-5850 for expert tech help!',
  keywords: [
    'computer support DeLand FL', 'PC repair DeLand Florida', 'website building DeLand', 
    'computer security DeLand', 'hacker recovery DeLand', 'PC upgrade DeLand',
    'computer technician DeLand', 'tech support DeLand', 'computer help DeLand',
    'IT support DeLand', 'computer services Volusia County', 'website design DeLand'
  ],
  alternates: {
    canonical: 'https://www.xtremery.com/pc-repair-deland',
  },
  openGraph: {
    title: 'DeLand PC Repair & Computer Services | Same-Day Fix | Xtremery',
    description: 'Expert computer repair in DeLand, FL. 10+ years experience, same-day service, honest pricing. Your local tech hero!',
    url: 'https://www.xtremery.com/pc-repair-deland',
    type: 'website',
    locale: 'en_US',
    siteName: 'Xtremery',
    images: [
      {
        url: 'https://www.xtremery.com/images/deland-pc-repair.jpg',
        width: 1200,
        height: 630,
        alt: 'PC Repair Services in DeLand Florida'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ReviewsSection from '../components/ReviewsSection';
import ContactForm from '../components/ContactForm';

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ComputerRepairService",
  "name": "Xtremery PC Repair DeLand",
  "image": "https://www.xtremery.com/images/deland-pc-repair.jpg",
  "description": "Professional computer and PC repair services in DeLand, Florida. Specializing in virus removal, screen repair, data recovery, and system optimization.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "DeLand",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.0286,
    "longitude": -81.3031
  },
  "url": "https://www.xtremery.com/pc-repair-deland",
  "telephone": "+1-406-868-5850",
  "priceRange": "$40-$150",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "serviceArea": {
    "@type": "City",
    "name": "DeLand, Orange City, Deltona, Sanford"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Computer Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Virus Removal",
          "description": "Complete virus and malware removal without data loss"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Screen Repair",
          "description": "Laptop and desktop screen replacement and repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Data Recovery",
          "description": "Professional data recovery from failed drives"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "8"
  }
};

export default function PcRepairDelandPage() {
  return (
    <>
      <Header />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="bg-gradient-to-br from-purple-50 to-blue-100 text-gray-900">
        {/* Hero Section */}
        <section className="px-6 py-12 sm:py-20">
          <header className="max-w-5xl mx-auto text-center" role="banner">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🟢 Available Today • Same-Day Service
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-purple-800">
              DeLand&apos;s Trusted Computer Helper
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              <strong>Professional computer support.</strong> Same-day fixes. No upsells. Your tech problems solved by a local expert who actually cares.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span>5.0/5 (8 reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Same-Day Service</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+14068685850"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                📞 Call Now: (406) 868-5850
              </a>
              <a 
                href="sms:+14068685850?body=Hi! I'd like a quick quote for computer help."
                className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center"
              >
                💬 Text for Quick Quote
              </a>
            </div>
            
            <p className="text-sm text-gray-600">
              <strong>FREE diagnosis</strong> • No fix, no charge guarantee
            </p>
          </header>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-3">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="font-semibold">
              🚨 Computer Emergency? I can be there within 2 hours! 
              <a href="tel:+14068685850" className="underline hover:no-underline ml-2">
                Call now: (406) 868-5850
              </a>
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
              Computer & Tech Problems I Solve Every Day in DeLand
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: "🛡️", title: "Security & Hacker Recovery", desc: "Remove malware and recover from security breaches ($60-100)", popular: true },
                { icon: "💻", title: "PC Upgrades & Optimization", desc: "Hardware upgrades and system improvements ($80-150)", popular: true },
                { icon: "🌐", title: "Website Building & Setup", desc: "Custom websites and online presence help ($100-300)", popular: false },
                { icon: "🔧", title: "General Computer Support", desc: "Troubleshooting and technical guidance ($40-80)", popular: false },
                { icon: "⚡", title: "System Setup & Configuration", desc: "New computer setup and software installation ($50-100)", popular: false },
                { icon: "📞", title: "Ongoing Tech Support", desc: "Be your personal IT department ($50/hour)", popular: false }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
                  {service.popular && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
              Why DeLand Residents Choose Me Over Big Box Stores
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Skip the hassle, hidden fees, and weeks of waiting. Get expert help from someone who lives and works in your community.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 text-xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Local & Personal</h3>
                    <p className="text-gray-600">I live in DeLand. You&apos;ll always talk to me, not a call center. I care about my reputation in our community.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Honest Pricing</h3>
                    <p className="text-gray-600">No surprise fees or upsells. I&apos;ll tell you exactly what&apos;s wrong and what it costs upfront.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Same-Day Service</h3>
                    <p className="text-gray-600">Most repairs done in 24-48 hours, not weeks. Emergency calls answered within 2 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 text-xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Experienced & Reliable</h3>
                    <p className="text-gray-600">Professional service you can trust. From simple fixes to complex security issues, I&apos;ve got you covered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Now using the client component */}
        <ReviewsSection />

        {/* Service Areas */}
        <section className="bg-purple-50 px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Serving DeLand & Surrounding Areas</h2>
            <p className="text-gray-700 mb-6">
              I provide computer repair services throughout Volusia County including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-white px-3 py-1 rounded-full">DeLand</span>
              <span className="bg-white px-3 py-1 rounded-full">Orange City</span>
              <span className="bg-white px-3 py-1 rounded-full">Deltona</span>
              <span className="bg-white px-3 py-1 rounded-full">Lake Helen</span>
              <span className="bg-white px-3 py-1 rounded-full">DeBary</span>
              <span className="bg-white px-3 py-1 rounded-full">Sanford</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How much does computer help cost in DeLand?",
                  answer: "Most services range from $40-$150, depending on the complexity. General computer support is typically $40-80, security/hacker recovery $60-100, and PC upgrades $80-150. Website projects start at $100. I always provide a free consultation and quote before any work."
                },
                {
                  question: "Can you help with website building and online presence?",
                  answer: "Absolutely! In addition to computer repair, I help small businesses and individuals create websites and establish their online presence. This includes everything from basic websites to more complex projects."
                },
                {
                  question: "What if my computer was hacked or has security issues?",
                  answer: "Security issues are one of my specialties. I can help recover from hacker attacks, remove malware, secure your system, and protect your personal information. I work carefully to resolve issues while preserving your important data."
                },
                {
                  question: "Do you work on both Windows and Mac computers?",
                  answer: "Yes! I provide support for both Windows PCs and Mac computers, plus help with general tech questions and system setup. Whether it's hardware upgrades, software issues, or just learning how to use your computer better."
                },
                {
                  question: "Can you be my ongoing tech support?",
                  answer: "Definitely! Many of my customers use me as their personal IT department. I'm available for ongoing support, questions, and maintenance. It's like having your own tech expert on call whenever you need help."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md" itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-purple-600 text-white px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Computer Today?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Don&apos;t let computer problems slow you down. Call now for same-day service!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="tel:+14068685850"
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
              >
                📞 Call: (406) 868-5850
              </a>
              <a 
                href="sms:+14068685850?body=Hi! I need help with my computer. Can you give me a quote?"
                className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                💬 Text for Instant Quote
              </a>
            </div>
            
            <p className="text-sm text-purple-200">
              ✅ Free diagnosis • ✅ Same-day service • ✅ No fix, no charge guarantee
            </p>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}