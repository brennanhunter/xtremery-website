import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Xtremery DeLand',
  description: 'Xtremery\'s privacy policy - how we collect, use, and protect your personal information for PC repair and web design services in DeLand, FL.',
  alternates: {
    canonical: 'https://www.xtremery.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 26, 2025";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-xtremery-purple via-xtremery-blue to-deep-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aqua-spark/10 via-transparent to-xtremery-purple/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: 'Handelson Two' }}>
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-aqua-spark" style={{ fontFamily: 'Avenir' }}>
            Your privacy matters to us
          </p>
          <p className="text-sm text-white/80">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12 p-6 bg-blue-50 border-l-4 border-xtremery-blue rounded-r-lg">
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Avenir' }}>
              At <strong>Xtremery</strong>, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              PC repair and web design services or visit our website.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Submit a contact form or service request</li>
                  <li>Schedule a PC repair appointment</li>
                  <li>Request a web design quote</li>
                  <li>Subscribe to our newsletter or blog updates</li>
                  <li>Create an account on our website</li>
                </ul>
                <p className="mt-4">This information may include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Address (for on-site PC repair services)</li>
                  <li>Device information (for PC repair diagnostics)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Business information (for web design clients)</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide PC repair and web design services</li>
                  <li>Communicate with you about your service requests</li>
                  <li>Send appointment reminders and service updates</li>
                  <li>Process payments and maintain transaction records</li>
                  <li>Improve our website and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                3. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-4">Service Providers</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment processors (Stripe) for secure payment handling</li>
                  <li>Email service providers for communications</li>
                  <li>Website hosting and analytics services (Vercel, Google Analytics)</li>
                  <li>CMS providers (Sanity) for content management</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-4">Legal Requirements</h3>
                <p>We may disclose your information if required by law or to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Comply with legal processes or government requests</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Prevent fraud or security threats</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                4. Data Security
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over 
                  the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p>Security measures include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure payment processing through PCI-compliant providers</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited employee access to personal information</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                5. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies are small data files stored on your device that help us understand how you use our site.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-4">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand site usage (Google Analytics, Vercel Analytics)</li>
                  <li><strong>Performance Cookies:</strong> Monitor site performance and speed</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>

                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect 
                  the functionality of our website.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                6. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Object:</strong> Object to certain processing of your information</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:hunter@xtremery.com" className="text-xtremery-blue hover:text-xtremery-purple font-semibold">
                    hunter@xtremery.com
                  </a>
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                7. Data Retention
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required by law. When we no longer need 
                  your information, we securely delete or anonymize it.
                </p>
                <p>Typical retention periods:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service records: 3-7 years (for warranty and legal purposes)</li>
                  <li>Marketing communications: Until you opt-out</li>
                  <li>Website analytics: 26 months (Google Analytics default)</li>
                  <li>Payment information: Retained by payment processor per PCI requirements</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                8. Third-Party Links
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices or content of these external sites. We encourage you to review the privacy policies 
                  of any third-party sites you visit.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                9. Children&apos;s Privacy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                  personal information from children. If you believe we have inadvertently collected information 
                  from a child, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                10. Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website with a new 
                  &ldquo;Last Updated&rdquo; date. Your continued use of our services after such changes constitutes acceptance of the 
                  updated policy.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-black mb-4 text-xtremery-purple" style={{ fontFamily: 'Handelson Two' }}>
                11. Contact Us
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-xtremery-blue mt-4">
                  <p className="font-bold text-gray-900 mb-2">Xtremery</p>
                  <p>DeLand, FL 32720</p>
                  <p>Email: <a href="mailto:hunter@xtremery.com" className="text-xtremery-blue hover:text-xtremery-purple font-semibold">hunter@xtremery.com</a></p>
                  <p>Phone: <a href="tel:+14068685850" className="text-xtremery-blue hover:text-xtremery-purple font-semibold">(406) 868-5850</a></p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-xtremery-purple/10 to-xtremery-blue/10 rounded-2xl border border-xtremery-purple/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
              Questions About Your Privacy?
            </h3>
            <p className="mb-6 text-gray-700" style={{ fontFamily: 'Avenir' }}>
              We&apos;re here to help. Reach out anytime with privacy concerns or data requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-xtremery-purple hover:bg-xtremery-purple/90 text-white font-bold rounded-lg transition-colors"
                style={{ fontFamily: 'Avenir' }}
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="px-8 py-3 bg-white hover:bg-gray-50 text-xtremery-purple font-bold rounded-lg border-2 border-xtremery-purple transition-colors"
                style={{ fontFamily: 'Avenir' }}
              >
                Back to Home
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
