import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Xtremery DeLand',
  description: 'Terms of Service for Xtremery PC repair and web design services in DeLand, FL. Read our service terms, warranties, and policies.',
  keywords: ['terms of service', 'xtremery terms', 'deland pc repair terms', 'web design terms'],
  alternates: {
    canonical: 'https://www.xtremery.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-xtremery-purple via-xtremery-blue to-deep-navy py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl sm:text-6xl font-black mb-6 text-white leading-tight"
            style={{ fontFamily: 'Handelson Two' }}
          >
            Terms of Service
          </h1>
          <p className="text-xl text-aqua-spark mb-4" style={{ fontFamily: 'Avenir' }}>
            Xtremery - DeLand, Florida
          </p>
          <p className="text-sm text-off-white/80" style={{ fontFamily: 'Avenir' }}>
            Last Updated: October 26, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-xtremery-purple">
              <p className="text-gray-700 leading-relaxed mb-0" style={{ fontFamily: 'Avenir' }}>
                Welcome to Xtremery! These Terms of Service govern your use of our PC repair and web design services in DeLand, Florida. By engaging our services, you agree to these terms. We&apos;re committed to providing honest, transparent service with no hidden surprises.
              </p>
            </div>

            {/* 1. Services Offered */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                1. Services Offered
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Avenir' }}>
                Xtremery provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>PC Repair Services:</strong> Hardware diagnostics and repair, virus/malware removal, performance optimization, data recovery, custom PC builds, and hardware upgrades</li>
                <li><strong>Web Design Services:</strong> Custom website design and development, e-commerce solutions, SEO optimization, website maintenance, and web applications</li>
                <li><strong>Remote Support:</strong> Remote troubleshooting and software support when applicable</li>
                <li><strong>On-Site Services:</strong> In-person repair and consultation services in the DeLand area</li>
              </ul>
            </div>

            {/* 2. Service Estimates and Pricing */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                2. Service Estimates and Pricing
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Free Diagnostics:</strong> We offer free diagnostics on PC repair issues to provide accurate repair estimates</li>
                <li><strong>Transparent Pricing:</strong> All costs will be communicated before work begins</li>
                <li><strong>Approval Required:</strong> We will not proceed with any paid work without your explicit approval</li>
                <li><strong>Additional Discoveries:</strong> If additional issues are discovered during repair, we will contact you for approval before proceeding</li>
                <li><strong>Web Design Quotes:</strong> Web design projects require a detailed quote based on project scope, which must be approved before work begins</li>
              </ul>
            </div>

            {/* 3. Payment Terms */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                3. Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>PC Repairs:</strong> Payment is due upon completion of service unless otherwise agreed</li>
                <li><strong>Web Design Projects:</strong> Payment schedules vary by project (typically 50% upfront, 50% upon completion)</li>
                <li><strong>Accepted Payment Methods:</strong> Cash, credit/debit cards, digital payments, and bank transfers</li>
                <li><strong>Late Payments:</strong> Equipment or projects may be held until payment is received</li>
                <li><strong>Abandoned Property:</strong> Devices unclaimed for 90+ days may be disposed of or recycled</li>
              </ul>
            </div>

            {/* 4. Warranties and Guarantees */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                4. Warranties and Guarantees
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Repair Warranty:</strong> Most PC repairs are backed by a 30-day warranty on our workmanship</li>
                <li><strong>Parts Warranty:</strong> New parts come with manufacturer warranties (typically 1 year or more)</li>
                <li><strong>Exclusions:</strong> Warranty does not cover damage from accidents, misuse, liquid damage, or new issues unrelated to our service</li>
                <li><strong>Web Design:</strong> Websites include a 30-day bug-fix period after launch for issues related to our development work</li>
                <li><strong>No Guarantee on Data Recovery:</strong> While we&apos;ll do our best, successful data recovery cannot be guaranteed</li>
              </ul>
            </div>

            {/* 5. Liability and Disclaimers */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                5. Liability and Disclaimers
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Data Backup:</strong> You are responsible for backing up your data before service. Xtremery is not liable for data loss during repairs</li>
                <li><strong>Best Efforts:</strong> We provide professional service using industry best practices but cannot guarantee all repairs will be successful</li>
                <li><strong>Equipment Condition:</strong> We inspect equipment upon intake but are not responsible for pre-existing hidden damage</li>
                <li><strong>Third-Party Software:</strong> We are not responsible for issues with third-party software, licenses, or subscriptions</li>
                <li><strong>Maximum Liability:</strong> Our liability is limited to the amount paid for the specific service in question</li>
              </ul>
            </div>

            {/* 6. Customer Responsibilities */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                6. Customer Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Accurate Information:</strong> Provide accurate information about the issue and your equipment</li>
                <li><strong>Authorization:</strong> Ensure you have the authority to authorize repairs on the equipment</li>
                <li><strong>Passwords:</strong> Provide necessary passwords for service (we respect your privacy and security)</li>
                <li><strong>Illegal Content:</strong> Equipment must not contain illegal materials or software</li>
                <li><strong>Timely Pickup:</strong> Pick up repaired equipment within 14 days of notification</li>
              </ul>
            </div>

            {/* 7. Cancellations and Refunds */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                7. Cancellations and Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>PC Repairs:</strong> You may cancel before work begins with no charge. After work begins, you are responsible for parts ordered and time invested</li>
                <li><strong>Web Design:</strong> Cancellation terms are defined in project-specific agreements. Typically, deposits are non-refundable after work begins</li>
                <li><strong>Unsuccessful Repairs:</strong> If we cannot fix your PC, you owe only the diagnostic fee (if applicable) and any parts ordered at your request</li>
              </ul>
            </div>

            {/* 8. Intellectual Property */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                8. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Web Design:</strong> Upon full payment, you own the website content and code we create for you</li>
                <li><strong>Third-Party Assets:</strong> Licenses for third-party themes, plugins, or assets are your responsibility</li>
                <li><strong>Portfolio Use:</strong> We may showcase completed projects in our portfolio unless you request otherwise</li>
              </ul>
            </div>

            {/* 9. Privacy and Data Security */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                9. Privacy and Data Security
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Your Privacy:</strong> We respect your privacy and do not access personal files unless necessary for repairs</li>
                <li><strong>Data Security:</strong> We take reasonable measures to protect your data while in our possession</li>
                <li><strong>Data Wiping:</strong> Devices we recycle or dispose of are securely wiped</li>
                <li><strong>Privacy Policy:</strong> See our <a href="/privacy" className="text-xtremery-blue hover:text-xtremery-purple">Privacy Policy</a> for detailed information</li>
              </ul>
            </div>

            {/* 10. Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                10. Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>
                <li><strong>Communication First:</strong> We believe most issues can be resolved through direct communication</li>
                <li><strong>Good Faith:</strong> We commit to working in good faith to resolve any concerns</li>
                <li><strong>Governing Law:</strong> These terms are governed by the laws of Florida, USA</li>
                <li><strong>Jurisdiction:</strong> Disputes will be resolved in Volusia County, Florida</li>
              </ul>
            </div>

            {/* 11. Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                11. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                We may update these Terms of Service from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-xtremery-purple/10 to-xtremery-blue/10 rounded-2xl border border-xtremery-purple/20">
              <h2 className="text-2xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                Questions About Our Terms?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                We believe in transparency and clear communication. If you have any questions about these terms or our services, we&apos;re happy to discuss them.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700" style={{ fontFamily: 'Avenir' }}>
                  <strong>Email:</strong> <a href="mailto:hunter@xtremery.com" className="text-xtremery-blue hover:text-xtremery-purple">hunter@xtremery.com</a>
                </p>
                <p className="text-gray-700" style={{ fontFamily: 'Avenir' }}>
                  <strong>Phone:</strong> <a href="tel:+14068685850" className="text-xtremery-blue hover:text-xtremery-purple">(406) 868-5850</a>
                </p>
                <p className="text-gray-700" style={{ fontFamily: 'Avenir' }}>
                  <strong>Location:</strong> DeLand, FL 32720
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 italic" style={{ fontFamily: 'Avenir' }}>
                &quot;We fix the stuff other shops won&apos;t touch.&quot; - That&apos;s our promise, backed by these terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
