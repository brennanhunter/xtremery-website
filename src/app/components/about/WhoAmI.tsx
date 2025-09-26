'use client';

import Image from 'next/image';
import Link from 'next/link';
import { handelsonTwo, avenir } from '@/app/fonts';

export default function WhoAmI() {
  return (
    <section className="w-full max-w-screen-3xl mx-auto py-28 px-6 sm:px-8 md:px-16 grid md:grid-cols-2 gap-10 items-start overflow-x-hidden bg-white">
      {/* Left: Text */}
      <div className="text-left space-y-8">
        <h2 className={`${handelsonTwo.className} text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text`}>
          Who I Am
        </h2>
        <p className={`${avenir.className} text-gray-700 text-2xl lg:text-3xl leading-relaxed font-light`}>
          I started Xtremery because I noticed something: a lot of tech companies talk fast and charge faster.
          I wanted to be different—accessible, reliable, and actually enjoyable to work with.
          I bring over a decade of experience in computer repair, web design, and user-first tech solutions.
        </p>
        <Link
          href="/services"
          className={`${avenir.className} inline-block mt-6 px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl lg:text-2xl font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
        >
          What I Do
        </Link>
      </div>

      {/* Right: Static Image */}
      <div className="w-full overflow-hidden flex justify-center items-center">
        <div className="relative w-full max-w-2xl h-[700px] rounded-xl overflow-hidden shadow-xl bg-gray-50 border border-gray-200">
          <Image
            src="/Images/hunter-fixing.png"
            alt="Hunter fixing a computer"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
