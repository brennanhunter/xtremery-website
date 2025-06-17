'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhoAmI() {
  return (
    <section className="w-full max-w-screen-3xl mx-auto py-28 px-6 sm:px-8 md:px-16 grid md:grid-cols-2 gap-10 items-start overflow-x-hidden">
      {/* Left: Text */}
      <div className="text-left space-y-8">
        <h2 className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-white to-cyan-700 text-transparent bg-clip-text">
          Who I Am
        </h2>
        <p className="text-gray-300 text-4xl leading-relaxed">
          I started Xtremery because I noticed something: a lot of tech companies talk fast and charge faster.
          I wanted to be different—accessible, reliable, and actually enjoyable to work with.
          I bring over a decade of experience in computer repair, web design, and user-first tech solutions.
        </p>
        <Link
          href="#services"
          className="inline-block mt-6 px-10 py-5 bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-2xl font-bold rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
        >
          What I Do
        </Link>
      </div>

      {/* Right: Static Image */}
      <div className="w-full overflow-hidden flex justify-center items-center">
        <div className="relative w-full max-w-2xl h-[700px] rounded-xl overflow-hidden shadow-2xl animate-pulse-slow">
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
