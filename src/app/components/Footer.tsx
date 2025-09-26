'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { label: 'PC Repair', href: '/pc-repair-deland' },
      { label: 'Web Design', href: '/web-design-deland' },
      { label: 'Custom PC Builds', href: '/services#custom-builds' },
      { label: 'Data Recovery', href: '/services#data-recovery' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Tech Guides', href: '/guides' },
      { label: 'Blog', href: '/blog' },
    ],
    resources: [
      { label: 'Contact', href: '/contact' },
      { label: 'Get Quote', href: '/contact#quote' },
      { label: 'Support', href: '/contact#support' },
      { label: 'FAQ', href: '/guides' },
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-deep-navy via-deep-navy/95 to-deep-navy/90 text-off-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-xtremery-purple/10 via-transparent to-xtremery-blue/10"></div>
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/logos/logo-purple.png"
                  alt="Xtremery Logo"
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <p className="text-sm text-off-white/80 leading-relaxed max-w-sm">
                Professional PC repair and modern web design in DeLand, FL. We fix what others won&apos;t touch and build websites that actually convert.
              </p>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-2 h-2 rounded-full bg-aqua-spark"
                />
                <span className="text-xs text-off-white/70 uppercase tracking-wider">DeLand, Florida</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-aqua-spark uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map(({ label, href }) => (
                  <li key={label}>
                    <Link 
                      href={href}
                      className="text-sm text-off-white/80 hover:text-aqua-spark transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-xtremery-purple"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-aqua-spark uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map(({ label, href }) => (
                  <li key={label}>
                    <Link 
                      href={href}
                      className="text-sm text-off-white/80 hover:text-aqua-spark transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-xtremery-purple"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Resources */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-aqua-spark uppercase tracking-wider">Get In Touch</h3>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <a 
                    href="mailto:hunter@xtremery.com"
                    className="text-sm text-off-white/80 hover:text-aqua-spark transition-colors duration-200 block"
                  >
                    hunter@xtremery.com
                  </a>
                  <a 
                    href="tel:+14068685850"
                    className="text-sm text-off-white/80 hover:text-aqua-spark transition-colors duration-200 block"
                  >
                    (406) 868-5850
                  </a>
                </div>
              </div>

              {/* Resources */}
              <ul className="space-y-3">
                {footerLinks.resources.map(({ label, href }) => (
                  <li key={label}>
                    <Link 
                      href={href}
                      className="text-sm text-off-white/80 hover:text-aqua-spark transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-xtremery-purple"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-xtremery-purple/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-off-white/60">
                © {currentYear} Xtremery. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link 
                  href="/privacy"
                  className="text-xs text-off-white/60 hover:text-aqua-spark transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms"
                  className="text-xs text-off-white/60 hover:text-aqua-spark transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
