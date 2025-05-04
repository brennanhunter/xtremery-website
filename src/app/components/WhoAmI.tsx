"use client";

import Image from 'next/image';

export default function WhoAmI() {
  return (
    <section className="w-[90%] mx-auto py-20 px-6 md:pl-[100px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: Text */}
      <div className="text-left space-y-6">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-white to-cyan-700 text-transparent bg-clip-text">
          Who I Am
        </h2>
        <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
          I started Xtremery because I noticed something: a lot of tech companies talk fast and charge faster.
          I wanted to be different—accessible, reliable, and actually enjoyable to work with.
          I bring over a decade of experience in computer repair, web design, and user-first tech solutions.
          Also, my wife says I tell good dad jokes.
        </p>
        <a
          href="/services"
          className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
        >
          See What I Do
        </a>
      </div>

      {/* Right: Image */}
      <div className="relative w-full h-full flex justify-center">
        <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/Images/hunter-fixing.png"
            alt="Hunter fixing a PC"
            width={600}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
        {/* Decorative background blob or dots */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl z-0" />
      </div>
    </section>
  );
}