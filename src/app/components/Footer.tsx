'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 items-start">

        {/* Logo + Blurb */}
        <div className="space-y-4">
          <Image
            src="/LogoNew.png"
            alt="Xtremery Logo"
            width={180}
            height={60}
            className="object-contain"
          />
          <p className="text-sm text-gray-300 max-w-xs">
            Local tech wizardry, minus the ego. PC repairs, web design, and digital help—done with honesty and a bit of flair.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-purple-300">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-purple-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-purple-400 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-purple-400 transition">Services</Link></li>
            <li><Link href="#contact" className="hover:text-purple-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-purple-300">Get In Touch</h3>
          <p className="text-sm text-gray-300">Email: <a href="mailto:hunter@xtremery.com" className="underline hover:text-blue-400">hunter@xtremery.com</a></p>
          <p className="text-sm text-gray-300">Phone: <a href="tel:+4068685850" className="underline hover:text-blue-400">(406)868-5850</a></p>
          <p className="text-sm text-gray-300">Based in DeLand, FL</p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Xtremery. All rights reserved.
      </div>
    </footer>
  );
}
