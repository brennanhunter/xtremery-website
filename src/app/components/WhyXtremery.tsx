'use client';


export default function WhyXtremery() {
    return (
        <div className="mb-32 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4">Why Xtremery?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          I treat your computer like it&apos;s my own. That means honest pricing, clear answers, and showing up when I say I will.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-white/80 p-6 rounded-xl shadow-md w-full sm:w-80 text-left">
            <h3 className="text-xl text-purple-600 font-bold mb-2">✔ No Pushy Sales</h3>
            <p className="text-md text-gray-700">I only recommend what you actually need—nothing more.</p>
          </div>
          <div className="bg-white/80 p-6 rounded-xl shadow-md w-full sm:w-80 text-left">
            <h3 className="text-xl text-purple-600 font-bold mb-2">✔ Personal Touch</h3>
            <p className="text-md text-gray-700">You&apos;ll talk to a human. Probably me. And I care.</p>
          </div>
          <div className="bg-white/80 p-6 rounded-xl shadow-md w-full sm:w-80 text-left">
            <h3 className="text-xl text-purple-600 font-bold mb-2">✔ Local + Reliable</h3>
            <p className="text-md text-gray-700">I live here too. And I show up on time, every time.</p>
          </div>
        </div>


      </div>
    )
}
