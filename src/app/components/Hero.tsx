'use client';

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-br from-purple-50 to-blue-50">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        We Fix, Build, and Launch Your Tech
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-8">
        Whether it’s your personal PC or your next business site — Xtremery is your digital ally.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-500 to-blue-500 font-semibold shadow-md hover:shadow-lg transition"
        >
          Get Help Now
        </a>
        <a
          href="#"
          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 transition"
        >
          View Services
        </a>
      </div>
    </section>
  );
}
