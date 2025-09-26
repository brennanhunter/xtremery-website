'use client';
import ContactModal from "../ContactModal";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-t-3xl shadow-inner">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
        Ready to Grow Your Business?
      </h2>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-white/90">
        Get a professional website that converts visitors into customers, plus trusted tech support when you need it.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <ContactModal />
        <a
          href="https://calendar.app.google/TieHN52sEYn7CFKV8"
          className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-purple-700 transition"
        >
          Schedule Tech Support
        </a>
      </div>
    </section>
  );
}
