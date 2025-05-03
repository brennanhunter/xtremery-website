"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const honors = [
  {
    id: 1,
    title: "Fix it like it's ours",
    body:
      "Every laptop, site, or server we touch gets the royal treatment. If it were ours, we’d want it fast, clean, and working like magic.",
    image: "/honor/fix.png",
  },
  {
    id: 2,
    title: "Talk like humans",
    body:
      "No tech snobbery, no jargon walls. We explain things clearly, helpfully, and like you’re our friend—not an error message.",
    image: "/honor/talk.png",
  },
  {
    id: 3,
    title: "Own the outcome",
    body:
      "We don’t just deliver the work, we stand by it. If something breaks or bugs out, we’re already on our way.",
    image: "/honor/own.png",
  },
  {
    id: 4,
    title: "Make it fun (seriously)",
    body:
      "We believe tech can be joyful—even hilarious. We bring heart, humor, and humanity into everything we make.",
    image: "/honor/fun.png",
  },
  {
    id: 5,
    title: "No shady stuff",
    body:
      "No upsells you don’t need. No ghosting. No nonsense. Just honest help and heroic effort every time.",
    image: "/honor/no-shady.png",
  },
  {
    id: 6,
    title: "Level up often",
    body:
      "We’re always learning, tweaking, upgrading—because tomorrow’s tech is today’s edge.",
    image: "/honor/levelup.png",
  },
];

export default function HonorGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const renderItem = (item: typeof honors[0]) => {
    const isOpen = open === item.id;
    return (
      <div
        key={item.id}
        className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/70 backdrop-blur-md hover:shadow-lg transition-all duration-300"
      >
        <button
          onClick={() => setOpen(isOpen ? null : item.id)}
          className="flex justify-between items-center w-full px-6 py-4 text-left"
        >
          <span className="text-purple-300 font-mono text-sm">{String(item.id).padStart(2, "0")}</span>
          <span className="flex-1 ml-4 font-semibold text-xl text-white">
            {item.title}
          </span>
          <span className="text-2xl text-purple-400">
            {isOpen ? "✕" : "+"}
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 pb-6"
            >
              <Image
                src={item.image}
                alt="Honor illustration"
                width={400}
                height={200}
                className="mx-auto mb-4 object-contain"
              />
              <p className="text-gray-300 text-base leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-sm text-purple-400 uppercase tracking-widest">Yes, we have a Code of Honor</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
          Code of Honor
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          These are the guiding values that shape every repair, every pixel, and every interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          {honors.filter((_, i) => i % 2 === 0).map(renderItem)}
        </div>
        <div className="flex flex-col gap-6">
          {honors.filter((_, i) => i % 2 !== 0).map(renderItem)}
        </div>
      </div>
    </section>
  );
}
