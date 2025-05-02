'use client';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white rounded-b-2xl shadow-lg border-b-4 border-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
          <Image
  src="/LogoTransparent.png"
  alt="Xtremery Logo"
  width={192}
  height={64}
  className="object-contain"
/>
          </div>
        </div>

        <nav className="space-x-6">
          {['Home', 'Services', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-purple-600 relative group"
            >
              {link}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
