'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';
import BounceTargetGame from './BounceTargetGame';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconHover = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

const gameProjects = [
  {
    name: 'Dawn and Dusk',
    genre: 'Platformer / Puzzle Solver',
    tools: 'Unreal Engine, Blueprints, Megascans, Landscaping, Animations, Behavior Trees',
    focus: 'Enemy AI and Combat',
    philosophy: [
      'Every ability serves dual purposes — both puzzle and combat.',
      'Combat is situational and strategic, not just reactive.',
      'Puzzles demand timing, logic, and movement.',
      'Power progression mirrors player growth.',
    ],
    deepDive: [
      'Combat begins with basic swordplay but evolves as the sprite grants elemental abilities like fire, freeze, quake, and light.',
      'Each power is situational and tied to both combat and puzzle-solving contexts.',
      'Puzzles require players to sequence actions, use the environment, and execute high-precision jumps.',
      'Levels introduce a core mechanic early, then ramp difficulty through clever escalation — teaching by doing.',
      'New abilities are introduced with minimal exposition and rely on the player to experiment and master them.',
    ],
    trailer: 'https://www.youtube.com/embed/r3SEvl1vqFs', // Cleaned URL
    insights: [
      {
        title: '⚔️ Combat Philosophy',
        description:
          'Combat begins with simple swordplay and evolves as players bond with the sprite, unlocking elemental powers like fire, ice, quake, and light. Each power offers unique tactical value — some enemies or areas demand specific strategies. Higher mobility (like enhanced jumps) plays a key role in both combat and traversal, allowing verticality to shape the player’s approach.',
        takeaway: 'Combat is a puzzle in itself — about choosing the right ability at the right time.',
      },
      {
        title: '🧠 Puzzle Design',
        description:
          'Puzzles are intentionally varied and often fuse elemental powers with movement. You might freeze platforms, burn doors, or trigger switches with earthquake pulses. Often, puzzles combine order-based sequencing with environmental interaction and mobility challenges.',
        takeaway: 'A great puzzle forces you to think about timing, positioning, and power synergy — not just logic.',
      },
      {
        title: '🧭 Level Flow',
        description:
          'Levels are structured to teach through doing. The player is first introduced to the level’s core mechanics or ideas in a safe, simple context. From there, each segment builds complexity — adding more layers of timing, enemy placement, or combo potential.',
        takeaway: 'Every level is a lesson. First, we teach; then we test.',
      },
      {
        title: '🌟 Progression Philosophy',
        description:
          'The sprite acts as a narrative and mechanical tether — granting new abilities and giving just enough guidance to push players into exploration. Rather than spoon-feeding tutorials, the game prefers environmental hints and letting players discover the full depth through experimentation.',
        takeaway: 'Empower curiosity. The game is most rewarding when players feel clever, not guided.',
      },
    ],
  },
  {
    name: 'Shadow Mind',
    genre: 'Puzzle',
    tools: 'Unreal Engine, Blueprints, Animations',
    focus: 'Modular Parts and Level Design',
    philosophy: [
      'Pillars activate with logic and timing — one button, layered challenge.',
      'The game never explains — it presents, and the player explores.',
      'Environmental hazards and feedback evolve with color and shape, not text.',
      'Constraints drove innovation — anti-gravity and ice-sliding emerged from the one-button rule.',
    ],
    deepDive: [
      'Puzzles are solved by activating different types of pillars — some of which are linked, move together, or kill the player.',
      'The only interaction is a single button, forcing careful level and mechanic design.',
      'Players are expected to learn through trial, curiosity, and subtle visual hints.',
      'Puzzle setups are designed to make the player feel smart, not tricked.',
      'New mechanics were developed to sustain depth with minimal controls, like anti-gravity zones and ice-sliding surfaces.',
    ],
    trailer: 'https://www.youtube.com/embed/M6s9ebqlRi8', // Cleaned URL
    insights: [
      {
        title: '🧩 Puzzle Design',
        description:
          'Puzzles mix logic and timing, where the challenge lies in knowing when to activate and how to move. The single-button constraint amplifies the decision-making pressure.',
        takeaway: 'Timing becomes a decision, not just a skill.',
      },
      {
        title: '👁️ Teaching Without Words',
        description:
          'A pillar in an empty room invites experimentation. Like Mario, Shadow Mind teaches through interaction, not instruction.',
        takeaway: 'Discovery is more powerful than instruction.',
      },
      {
        title: '🔁 Simplicity with Depth',
        description:
          'To keep things interesting under a one-button rule, environmental mechanics like anti-gravity and ice sliding were created to push the challenge further.',
        takeaway: 'Limitation breeds creativity — and challenge.',
      },
      {
        title: '🧠 The “Aha!” Philosophy',
        description:
          'Good puzzles in Shadow Mind should feel like you finally noticed what was always in front of you. The solutions must feel fair and self-earned.',
        takeaway: 'A good puzzle reveals the answer was hiding in plain sight.',
      },
    ],
  },
  {
    name: 'Dream Team Game Jam',
    genre: '24 Hour Platformer',
    tools: 'Unreal Engine, Blueprints, Animations',
    focus: 'Full Scope, Blueprint Communication, UI Design, Collectibles',
    philosophy: [
      'Built in 24 hours under the theme "Chasing the Dream."',
      'Platformer where you escape a nightmare that chases you across the level.',
      'Players must gather collectibles and unlock a gate to reach the dream world.',
      'The game was chaotic and unpolished — but full of honest learning and leadership moments.',
    ],
    deepDive: [
      'Led a team of 5, with only 1 other developer — handled core design, logic, and delivery.',
      'Used cubes and simple meshes for most platforms — focused on functional gameplay.',
      'Incorporated a nightmare that pursues the player through the level as a pressure mechanic.',
      'Implemented source control and team coordination in a high-pressure setting.',
      'Released a working vertical slice under severe time constraints and extracted key lessons.',
    ],
    trailer: '', // No trailer
    insights: [
      {
        title: '⚡ Rapid Prototyping Under Pressure',
        description:
          'Working under a 24-hour deadline meant cutting corners while still aiming for clarity. Every system had to be fast, readable, and breakproof.',
        takeaway: 'Speed forces clarity. You either make it work, or cut it.',
      },
      {
        title: '🎯 Chasing a Dream (Literally)',
        description:
          'We interpreted the theme as escaping a nightmare — the dream is something you earn by collecting, surviving, and unlocking the final gate.',
        takeaway: 'Themes work best when they’re embodied, not just referenced.',
      },
      {
        title: '🛠 Leading as the Backbone',
        description:
          'With most teammates new to development, I took the lead on design, Blueprints, and team workflow. It taught me how to ship fast while carrying others.',
        takeaway: 'Leadership is about removing fear — and taking the hard tasks first.',
      },
      {
        title: '💡 The Takeaway',
        description: 'This wasn’t our best game — but it taught me how to scope, lead, and fail forward.',
        takeaway: 'Sometimes the worst game is the most important one.',
      },
    ],
    itchLink: 'https://brennanhunter.itch.io/dreamteam',
  },
];

export default function GameDesignSection() {
  type Game = {
    name: string;
    genre: string;
    tools: string;
    focus: string;
    philosophy: string[];
    deepDive: string[];
    trailer: string;
    insights: { title: string; description: string; takeaway: string }[];
    itchLink?: string;
  };

  const [openGame, setOpenGame] = useState<Game | null>(null);

  return (
    <section
      id="game-design"
      className="scroll-mt-32 max-w-6xl mx-auto py-24 px-6 space-y-20 rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 border-2 border-cyan-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Intro and Game */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-8 text-center"
      >
        <div>
          <motion.div
            className="text-6xl text-cyan-600 mb-4 mx-auto"
            whileHover="hover"
            variants={iconHover}
          >
            <FaGamepad />
          </motion.div>
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Game Design</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Indie game development built with Unreal Engine and more. Try this physics-based puzzle game to see my skills in action, then explore my full projects below!
          </p>
        </div>
        <BounceTargetGame />
      </motion.div>

      {/* Project Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {gameProjects.map((game, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group perspective-[1000px] w-full h-[360px]"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Face */}
              <div className="absolute inset-0 h-full bg-white p-6 rounded-xl shadow-xl backface-hidden flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-2">
                  {game.trailer || game.itchLink ? (
                    <a
                      href={game.trailer || game.itchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-purple-900 transition-colors duration-200"
                    >
                      {game.name}
                    </a>
                  ) : (
                    game.name
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-1">🎮 <strong>Genre:</strong> {game.genre}</p>
                <p className="text-sm text-gray-600 mb-1">🛠 <strong>Engine & Tools:</strong> {game.tools}</p>
                <p className="text-sm text-gray-600">🧠 <strong>Design Focus:</strong> {game.focus}</p>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 h-full bg-gradient-to-br from-cyan-200 to-teal-200 p-6 rounded-xl shadow-xl rotate-y-180 backface-hidden flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-purple-800 mb-2">Design Philosophy</h4>
                  {game.philosophy.length > 0 ? (
                    <ul className="list-disc pl-6 text-left text-sm text-gray-700 space-y-1">
                      {game.philosophy.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">More info coming soon...</p>
                  )}
                </div>
                <button
                  onClick={() => setOpenGame(game)}
                  className="mt-4 bg-cyan-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-cyan-700 transition-colors duration-300"
                >
                  More Info
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openGame && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-xl shadow-2xl p-6 relative text-left overflow-y-auto max-h-[90vh]"
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-cyan-700 font-bold text-xl"
                onClick={() => setOpenGame(null)}
              >
                ×
              </button>
              <h3 className="text-3xl font-extrabold text-cyan-700 mb-4">{openGame.name}</h3>
              <p className="text-sm text-gray-600 mb robust playback.
2">🎮 <strong>Genre:</strong> {openGame.genre}</p>
              <p className="text-sm text-gray-600 mb-2">🛠 <strong>Tools:</strong> {openGame.tools}</p>
              <p className="text-sm text-gray-600 mb-4">🧠 <strong>Focus:</strong> {openGame.focus}</p>

              {openGame.trailer ? (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-cyan-800 mb-2">Watch the Trailer</h4>
                  <div className="relative aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      className="w-full h-64 rounded-lg"
                      src={openGame.trailer} // No autoplay or mute
                      title={`${openGame.name} Trailer`}
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                    {/* Optional Play Button Overlay (Uncomment to Enable) */}
                    {/*
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg cursor-pointer hover:bg-black/30 transition-opacity"
                      onClick={() => {
                        const iframe = document.querySelector(`iframe[src="${openGame.trailer}"]`);
                        iframe?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                      }}
                    >
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    */}
                  </div>
                </div>
              ) : null}

              {openGame.insights?.length > 0 && (
                <div className="space-y-6">
                  {openGame.insights.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-bold text-cyan-800 mb-1">{section.title}</h4>
                      <p className="text-sm text-gray-700 mb-1">{section.description}</p>
                      <p className="text-sm italic text-cyan-600">{section.takeaway}</p>
                    </div>
                  ))}
                </div>
              )}

              {openGame.itchLink && (
                <div className="flex justify-center mt-8">
                  <a
                    href={openGame.itchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    🚀 Play on itch.io
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}