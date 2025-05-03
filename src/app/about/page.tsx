'use client';
import Header from '../components/Header';
import HonorGrid from '../components/HonorGrid';
import WhoAmI from '../components/WhoAmI';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-gradient-to-br from-purple-800 via-black to-cyan-500 text-gray-100 px-0 py-20">
        <div className="w-full px-6 sm:px-12">
          {/* Page Title & Intro */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-500 via-white to-cyan-400 text-transparent bg-clip-text">
              About Xtremery
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              At Xtremery, we believe tech shouldn&apos;t be frustrating—it should be magic. I&apos;m Hunter, a guy who fixes PCs,
              builds stunning websites, and makes coffee disappear like it&apos;s my side hustle.
            </p>
          </div>

          <div className="space-y-20">
            {/* WHO AM I */}

            <WhoAmI />

            {/* WHY XTREMERY */}
            <section className="bg-gray-800/50 px-8 py-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300">Why Xtremery?</h2>
              <p className="text-lg sm:text-xl leading-relaxed">
                I named my business Xtremery because it sounded cool, but also because it&apos;s a mix of two ideas:
                &quot;extreme&quot; capability and &quot;alchemy&quot;—the magic of transforming problems into solutions. Whether it&apos;s
                breathing life into a slow laptop or designing a website that actually converts, I&apos;m here to help.
              </p>
            </section>

            {/* WHAT I DO */}
            <section className="bg-gray-800/50 px-8 py-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300">What I Do</h2>
              <ul className="list-disc list-inside space-y-4 text-lg sm:text-xl leading-relaxed">
                <li>⚙️ PC Repair – From weird noises to &quot;it just won&apos;t turn on.&quot;</li>
                <li>🌐 Web Design – Clean, modern sites built with love and caffeine.</li>
                <li>📈 SEO & Tech Consulting – I&apos;ll help your digital presence actually show up online.</li>
                <li>🎮 Game Design & Development – I have a game dev degree and love to flex it.</li>
              </ul>
            </section>

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
