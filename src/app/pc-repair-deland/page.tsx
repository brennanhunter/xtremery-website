export const metadata = {
  title: 'PC Repair DeLand FL | Expert Computer Help | Xtremery',
  description: 'DeLand PC repair & tech support. $50 diagnostic fee, honest pricing, same-day service. Virus removal, screen replacement, data recovery & more. Call (406) 868-5850!',
  keywords: [
    'PC repair DeLand FL', 'computer repair DeLand Florida', 'laptop repair DeLand', 
    'computer technician DeLand', 'tech support DeLand', 'computer help DeLand',
    'virus removal DeLand', 'screen replacement DeLand', 'data recovery DeLand',
    'PC cleanup DeLand', 'computer services Volusia County', 'same-day PC repair'
  ],
  alternates: {
    canonical: 'https://www.xtremery.com/pc-repair-deland',
  },
  openGraph: {
    title: 'PC Repair DeLand FL | Expert Computer Help | Xtremery',
    description: 'Expert computer repair in DeLand, FL. Same-day service, honest pricing, local tech support you can trust.',
    url: 'https://www.xtremery.com/pc-repair-deland',
    type: 'website',
    locale: 'en_US',
    siteName: 'Xtremery',
    images: [
      {
        url: 'https://www.xtremery.com/logos/logo-purple.png',
        width: 1200,
        height: 630,
        alt: 'Xtremery PC Repair Services in DeLand Florida'
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


import CTA from '../components/home/CTA';
import ReviewsSection from '../components/ReviewsSection';
import ContactForm from '../components/ContactForm';

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ComputerRepairService",
  "name": "Xtremery PC Repair DeLand",
  "image": "https://www.xtremery.com/logos/logo-purple.png",
  "description": "Expert computer and PC repair services in DeLand, Florida. Specializing in virus removal, screen repair, data recovery, and system optimization.",
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
  "priceRange": "$50-$200",
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
          "name": "Diagnostic Fee",
          "description": "Complete system diagnosis - $50 (applied to repair)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Virus Removal",
          "description": "Complete virus and malware removal"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Screen Repair",
          "description": "Laptop and desktop screen replacement"
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
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 px-6 py-20">
          {/* Floating Background Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-32 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              🟢 Available Today • Same-Day Service
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                DeLand&apos;s Local
              </span>
              <br />
              <span className="text-gray-900">PC Repair Expert</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Fast, honest computer repair with <strong>no hidden fees</strong>. 
              Same-day service from a local tech who actually cares.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">5.0/5 (30+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                <span className="font-semibold">Local DeLand Business</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="tel:+14068685850"
                className="inline-flex items-center justify-center bg-gradient-to-r from-xtremery-purple to-xtremery-blue text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:shadow-xl hover:scale-105"
              >
                📞 Call Now: (406) 868-5850
              </a>
              <a 
                href="sms:+14068685850?body=Hi! I need help with my computer."
                className="inline-flex items-center justify-center bg-white text-xtremery-purple border-2 border-xtremery-purple font-bold py-4 px-8 rounded-full text-lg transition-all hover:bg-purple-50 hover:scale-105"
              >
                💬 Text for Quick Quote
              </a>
            </div>
            
            <p className="text-sm text-gray-600 font-medium">
              <strong className="text-xtremery-purple">$50 diagnostic fee</strong> (applied to repair if you proceed)
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-cyan-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                  PC Problems I Fix Daily
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From virus removal to hardware upgrades, I handle it all with honest pricing and expert care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  icon: "🛡️", 
                  title: "Virus & Malware Removal", 
                  desc: "Deep clean your system and remove all threats",
                  price: "$70-100"
                },
                { 
                  icon: "💻", 
                  title: "Screen Replacements", 
                  desc: "Laptop and desktop screen repairs with quality parts",
                  price: "$80-150"
                },
                { 
                  icon: "⚡", 
                  title: "Speed Tests & Cleanup", 
                  desc: "Make your computer run like new again",
                  price: "$40"
                },
                { 
                  icon: "🔧", 
                  title: "Hardware Upgrades", 
                  desc: "RAM, SSD, and component upgrades for better performance",
                  price: "$80-150"
                },
                { 
                  icon: "💾", 
                  title: "Data Recovery", 
                  desc: "Recover lost files from damaged or failed drives",
                  price: "$60-200"
                },
                { 
                  icon: "📞", 
                  title: "Tech Support & Setup", 
                  desc: "New computer setup, software installation, and troubleshooting",
                  price: "$50-100"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 hover:border-purple-200"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                      {service.price}
                    </span>
                    {service.price.includes('-') && (
                      <span className="text-xs text-gray-500">varies</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Why Choose <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">Xtremery</span>?
              </h2>
              <p className="text-xl text-gray-600">
                Skip the big box stores and get personal, expert service from a local tech who lives in your community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-purple-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-xtremery-purple to-xtremery-blue rounded-full flex items-center justify-center text-white text-xl">
                  🏠
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Local & Personal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I&apos;m based right here in DeLand. You&apos;ll always talk to me directly, never a call center. 
                    My reputation in this community matters.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-purple-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  💰
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Honest Pricing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No surprise fees, no upsells, no games. I&apos;ll diagnose the issue for $50 and tell you 
                    exactly what it will cost before any work begins.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-purple-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-xtremery-purple to-xtremery-blue rounded-full flex items-center justify-center text-white text-xl">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Same-Day Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most repairs completed in 24-48 hours, not weeks. Emergency calls answered within 2 hours. 
                    I know you need your computer working.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-purple-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Expert & Reliable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional service you can trust. From simple fixes to complex issues, 
                    I have the experience to get your tech working right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                  Check Us Out on YouTube
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See our work in action and learn helpful tech tips from real repair projects.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white p-4">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/7tjhK5X3exk"
                  title="Xtremery PC Repair Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.youtube.com/@Xtremery58" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-xtremery-purple to-xtremery-blue text-white font-bold py-3 px-6 rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                <span className="text-2xl">▶️</span>
                Subscribe to Our Channel
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Service Areas */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                Serving DeLand & Surrounding Areas
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I provide expert computer repair services throughout Volusia County:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['DeLand', 'Orange City', 'Deltona', 'Lake Helen', 'DeBary', 'Sanford'].map((city) => (
                <span key={city} className="bg-white px-5 py-2 rounded-full text-gray-800 font-medium shadow-sm border border-gray-200">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How much does PC repair cost in DeLand?",
                  answer: "I charge a $50 diagnostic fee to properly assess your computer (applied to repair if you proceed). After diagnosis, most repairs range from $40-$200 depending on complexity. I always provide a clear quote before starting any work - no surprises."
                },
                {
                  question: "Do you offer same-day service?",
                  answer: "Yes! Most repairs are completed within 24-48 hours. For urgent issues, I can often provide same-day service. Emergency calls are answered within 2 hours. Just call (406) 868-5850 and I'll get you taken care of quickly."
                },
                {
                  question: "What if my computer was hacked or has viruses?",
                  answer: "Security issues are one of my specialties. I can remove malware, recover from hacker attacks, secure your system, and protect your data. Virus removal typically costs $70-100 and includes a complete system clean and security setup."
                },
                {
                  question: "Do you work on both Windows and Mac computers?",
                  answer: "Yes! I provide support for both Windows PCs and Mac computers, plus help with laptops, desktops, and general tech questions. Whether it's hardware issues, software problems, or just learning how to use your computer better, I can help."
                },
                {
                  question: "What areas do you serve?",
                  answer: "I'm based in DeLand and serve all of Volusia County including Orange City, Deltona, Lake Helen, DeBary, and Sanford. I'm your local computer expert - no corporate call centers, just personal service from someone who lives in your community."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" 
                  itemProp="mainEntity" 
                  itemScope 
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p className="text-gray-700 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-xtremery-purple to-xtremery-blue px-6 py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Fix Your Computer?</h2>
            <p className="text-xl sm:text-2xl mb-10 text-purple-100">
              Don&apos;t let tech problems slow you down. Call now for same-day service from DeLand&apos;s most trusted PC repair expert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+14068685850"
                className="inline-flex items-center justify-center bg-aqua-spark text-deep-navy font-bold py-4 px-8 rounded-full text-lg hover:bg-white transition-all hover:scale-105 shadow-lg"
              >
                📞 Call: (406) 868-5850
              </a>
              <a 
                href="sms:+14068685850?body=Hi! I need help with my computer."
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition-all hover:scale-105"
              >
                💬 Text for Instant Quote
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-100">
              <span className="flex items-center gap-2">
                <span className="text-aqua-spark text-lg">✓</span>
                $50 diagnostic fee
              </span>
              <span className="flex items-center gap-2">
                <span className="text-aqua-spark text-lg">✓</span>
                Same-day service
              </span>
              <span className="flex items-center gap-2">
                <span className="text-aqua-spark text-lg">✓</span>
                No hidden fees
              </span>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}