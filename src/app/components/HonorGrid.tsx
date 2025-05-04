"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cinzel } from '../fonts';



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
      <motion.div
  key={item.id}
  className="rounded-xl overflow-hidden bg-gradient-to-r from-purple-700 via-white/10 to-cyan-600 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
  variants={{
    hidden: { opacity: 0, y: 300, scale: 0.9 }, // big entrance
    visible: { opacity: 1, y: 0, scale: 1 },
  }}
  transition={{ duration: 0.6, ease: "backOut" }} // snappy!
>
        <button
          onClick={() => setOpen(isOpen ? null : item.id)}
          className="flex justify-between items-center w-full px-6 py-4 text-left"
        >
          <span className="text-purple-300 font-mono text-3xl">{String(item.id).padStart(2, "0")}</span>
          <span className={`flex-1 ml-4 text-3xl text-white ${cinzel.className}`}>
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
              <p className="text-gray-100 text-2xl sm:text-3xl leading-relaxed text-center font-semibold">
                {item.body}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-12 py-20">
      <div className="text-center mb-12">
        <h2 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-white to-cyan-400 text-transparent bg-clip-text">
          Code of Honor
        </h2>
        <p className="text-3xl text-purple-400 uppercase tracking-widest">Yes, we have a Code of Honor</p>
        <p className="text-2xl mt-4 text-gray-300 max-w-xl mx-auto">
          These are the guiding values that shape every repair, every pixel, and every interaction.
        </p>
      </div>

      <motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }} // triggers when ~20% of the section is visible
>
        <div className="flex flex-col gap-6">
          {honors.filter((_, i) => i % 2 === 0).map(renderItem)}
        </div>
        <div className="flex flex-col gap-6">
          {honors.filter((_, i) => i % 2 !== 0).map(renderItem)}
        </div>
      </motion.div>
    </section>
  );
}
