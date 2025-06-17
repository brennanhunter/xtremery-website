'use client';
import ContactModal from "../ContactModal";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-t-3xl shadow-inner">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
        Ready to Power Up Your Tech?
      </h2>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-white/90">
        Whether it&apos;s computer repair, web design, or digital magic — I&apos;m here to help you make it happen.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://calendar.app.google/TieHN52sEYn7CFKV8"
          className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-100 transition"
        >
          Book a Repair
        </a>
        <ContactModal />
      </div>
    </section>
  );
}
