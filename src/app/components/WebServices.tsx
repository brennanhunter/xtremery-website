"use client";

import { motion } from "framer-motion";
import {useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import {
  FaCode,
  FaGamepad,
  FaPalette,
  FaImage,
  FaFacebookF,
  FaVideo,
} from "react-icons/fa";
import WebDesignSection from "./WebDesignSection";

const sections = [
  { id: "web-design", label: "Web Design", icon: <FaCode /> },
  { id: "game-design", label: "Game Design", icon: <FaGamepad /> },
  { id: "branding", label: "Branding", icon: <FaPalette /> },
  { id: "graphics", label: "Graphics", icon: <FaImage /> },
  { id: "social-media", label: "Social Media", icon: <FaFacebookF /> },
  { id: "video-editing", label: "Video", icon: <FaVideo /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function WebServices() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-100 text-gray-900 overflow-hidden">
      {/* Glowy Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-200/70 via-white/60 to-blue-200/70 backdrop-blur-md shadow-md py-4 px-6 flex flex-wrap justify-center gap-3 border-b border-purple-300">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-base sm:text-lg font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-100 hover:text-purple-900 ${
              activeSection === id
                ? "bg-purple-600 text-white shadow-md"
                : "text-purple-700"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Content */}

      <WebDesignSection />
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {sections.map(({ id, label, icon }, i) => (
          <motion.div
            key={id}
            id={id}
            className="scroll-mt-32 text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={i}
          >
            <div className="text-6xl text-purple-600 mb-4">{icon}</div>
            <h2 className="text-4xl font-extrabold text-purple-800 mb-4">{label}</h2>
            <p className="text-lg text-gray-700">
              {id === "web-design" &&
                "Tailored websites that reflect your brand and convert visitors into customers. No templates, just personality-packed pixels."}
              {id === "game-design" &&
                "Indie game development built with Unreal Engine. Fun-first mechanics, custom systems, and design that makes players come back for more."}
              {id === "branding" &&
                "Logos, colors, voice, and vibe. We help build brand identities that resonate with your audience—and stick in their minds."}
              {id === "graphics" &&
                "Need assets for print, social, or web? From icons to flyers, we bring creative muscle to your visual messaging."}
              {id === "social-media" &&
                "Content, scheduling, and strategy that grows your brand—without draining your time. Real engagement, not spam."}
              {id === "video-editing" &&
                "Pro-level edits for promos, tutorials, or social clips. We bring rhythm, clarity, and polish to every frame."}
            </p>
          </motion.div>
        ))}

        {/* Final CTA */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
            Let’s Build Something Awesome
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Book a free strategy call and let’s start turning your ideas into something you’re proud to show off.
          </p>
          <MagicButton />
        </motion.div>
      </div>
    </section>
  );
}
