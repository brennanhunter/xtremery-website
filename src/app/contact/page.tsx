'use client';

import ContactModal from '../components/ContactModal';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DialogflowChatbot from '../components/DialogflowChatbot';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="relative bg-gradient-to-br from-purple-950 via-black to-blue-950 text-white px-6 pt-20 pb-0 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-white to-cyan-400 text-transparent bg-clip-text">
            Contact Xtremery
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
            Questions? Ideas? Tech in distress? Reach out and let&apos;s get things fixed—or built—the right way.
          </p>

          <div className="mb-12">
            <ContactModal />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-left text-white">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-purple-300">Email</h2>
              <p><a href="mailto:hunter@xtremery.com" className="hover:text-cyan-400 underline">hunter@xtremery.com</a></p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-purple-300">Phone</h2>
              <p><a href="tel:+14068685850" className="hover:text-cyan-400 underline">(406) 868-5850</a></p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-purple-300">Location</h2>
              <p>Based in DeLand, FL</p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/Images/hunter-fixing.png"
              alt="Hunter fixing tech"
              width={900}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>

      <div className="h-[1px] bg-gradient-to-r from-purple-900 via-black to-blue-900" />
      <Footer />
      <DialogflowChatbot />
    </>
  );
}
