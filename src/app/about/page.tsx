'use client';
import Header from '../components/Header';
import HonorGrid from '../components/HonorGrid';
import WhoAmI from '../components/WhoAmI';
import AboutXtremery from '../components/AboutXtremery';


export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutXtremery />
      <main className="w-full min-h-screen bg-gradient-to-br from-purple-800 via-black to-cyan-500 text-gray-100 px-0 py-20">
        <div className="w-full px-6 sm:px-12">
          {/* Page Title & Intro */}
          

          <div className="space-y-20">
            {/* WHO AM I */}

            <WhoAmI />

            <HonorGrid />

            {/* OFF THE CLOCK */}
            <section className="bg-gray-800/50 px-8 py-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300">Off the Clock</h2>
              <p className="text-lg sm:text-xl leading-relaxed">
                When I&apos;m not wrangling tech issues, I&apos;m wrangling my three kids and cracking jokes with my wife. I
                believe that strong tech comes from strong values—honesty, effort, and a little bit of magic.
              </p>
            </section>

            {/* Contact CTA */}
            <div className="text-center mt-20">
              <p className="text-xl sm:text-2xl text-gray-400 italic mb-6">
                Have questions, want a quote, or just want to say hi?
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
