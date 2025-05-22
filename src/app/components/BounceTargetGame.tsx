"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Define the types for the game state
interface BallState {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  launched: boolean;
  bounces: number;
  rolling: boolean;
  trail: { x: number; y: number; alpha: number }[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

interface BackgroundParticle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
}

interface BounceFlash {
  alpha: number;
}

interface GameState {
  ball: BallState;
  isDragging: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  gravity: number;
  bounceDampening: number;
  friction: number;
  floorY: number;
  minVelocity: number;
  maxDist: number;
  maxArrowLength: number;
  targetBounces: number;
  resultMessage: string;
  particles: Particle[];
  backgroundParticles: BackgroundParticle[];
  bounceFlash: BounceFlash;
}

const BounceTargetGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  const gameStateRef = useRef<GameState>({
    ball: {
      x: 100,
      y: 300,
      radius: 10,
      vx: 0,
      vy: 0,
      launched: false,
      bounces: 0,
      rolling: false,
      trail: [],
    },
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    gravity: 0.3,
    bounceDampening: 0.8,
    friction: 0.9,
    floorY: 390,
    minVelocity: 2,
    maxDist: 200,
    maxArrowLength: 100,
    targetBounces: 0,
    resultMessage: "",
    particles: [],
    backgroundParticles: [],
    bounceFlash: { alpha: 0 },
  });

  // Reactive state for UI updates
  const [targetBounces, setTargetBounces] = useState(gameStateRef.current.targetBounces);
  const [bounces, setBounces] = useState(gameStateRef.current.ball.bounces);
  const [resultMessage, setResultMessage] = useState(gameStateRef.current.resultMessage);

  const getRandomBounceTarget = () => Math.floor(Math.random() * 5) + 1;

  const resetGame = () => {
    const state = gameStateRef.current;
    state.ball.x = 100;
    state.ball.y = 300;
    state.ball.vx = 0;
    state.ball.vy = 0;
    state.ball.bounces = 0;
    state.ball.launched = false;
    state.ball.rolling = false;
    state.ball.trail = [];
    state.targetBounces = getRandomBounceTarget();
    state.resultMessage = "";
    state.bounceFlash.alpha = 0;

    // Update React state
    setTargetBounces(state.targetBounces);
    setBounces(state.ball.bounces);
    setResultMessage(state.resultMessage);
  };

  const endAttempt = () => {
    const state = gameStateRef.current;
    state.ball.launched = false;
    if (state.ball.rolling && state.ball.x <= 800 && state.ball.x >= 0) {
      state.resultMessage = `❌ You lost! Ball rolled on floor`;
    } else if (state.ball.bounces === state.targetBounces) {
      state.resultMessage = "✅ Perfect!";
    } else {
      state.resultMessage = `❌ You got ${state.ball.bounces}, needed ${state.targetBounces}`;
    }
    setResultMessage(state.resultMessage); // Update React state
    setTimeout(() => {
      resetGame();
    }, 2000);
  };

  const drawBall = (ctx: CanvasRenderingContext2D) => {
    const { ball } = gameStateRef.current;

    // Draw trail
    ball.trail.forEach((trailPoint) => {
      ctx.beginPath();
      ctx.arc(trailPoint.x, trailPoint.y, ball.radius * (trailPoint.alpha * 0.8), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(8, 145, 178, ${trailPoint.alpha * 0.3})`; // cyan-600 with fading opacity
      ctx.fill();
    });

    // Draw ball with glow
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(8, 145, 178)"; // cyan-600
    ctx.shadowColor = "rgba(8, 145, 178, 0.7)";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  const drawFloor = (ctx: CanvasRenderingContext2D) => {
    const { floorY } = gameStateRef.current;
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(800, floorY);
    ctx.strokeStyle = "rgb(103, 232, 249)"; // cyan-200
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const drawArrow = (ctx: CanvasRenderingContext2D) => {
    const { isDragging, startX, startY, currentX, currentY, maxDist, maxArrowLength, ball } = gameStateRef.current;
    if (!isDragging) return;

    const dx = startX - currentX;
    const dy = startY - currentY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const power = Math.min(dist / maxDist, 1);

    if (dist > 0) {
      const arrowLength = power * maxArrowLength;
      const arrowX = ball.x + dx * (arrowLength / dist);
      const arrowY = ball.y + dy * (arrowLength / dist);

      const r = Math.floor(8 + (13 - 8) * power);
      const g = Math.floor(145 + (148 - 145) * power);
      const b = Math.floor(178 + (136 - 178) * power);
      ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.lineWidth = 2 + power * 3;

      ctx.beginPath();
      ctx.moveTo(ball.x, ball.y);
      ctx.lineTo(arrowX, arrowY);
      ctx.stroke();

      ctx.fillStyle = "rgb(229, 231, 235)"; // gray-200
      ctx.font = "14px sans-serif";
      const powerPercent = Math.floor(power * 100);
      ctx.fillText(`Power: ${powerPercent}%`, ball.x + 20, ball.y - 10);
    }
  };

  const drawBackgroundParticles = (ctx: CanvasRenderingContext2D) => {
    const { backgroundParticles } = gameStateRef.current;
    backgroundParticles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(103, 232, 249, ${p.alpha})`; // cyan-200
      ctx.fill();
      p.y -= p.speed;
      p.alpha = Math.sin(p.y / 50) * 0.3 + 0.4;
      if (p.y < -p.radius) {
        p.y = 400 + p.radius;
        p.x = Math.random() * 800;
      }
    });
  };

  const drawBounceFlash = (ctx: CanvasRenderingContext2D) => {
    const { bounceFlash, floorY } = gameStateRef.current;
    if (bounceFlash.alpha <= 0) return;

    ctx.fillStyle = `rgba(103, 232, 249, ${bounceFlash.alpha})`; // cyan-200
    ctx.fillRect(0, floorY - 10, 800, 20);
    bounceFlash.alpha -= 0.05;
  };

  const initBackgroundParticles = () => {
    const state = gameStateRef.current;
    state.backgroundParticles = [];
    for (let i = 0; i < 20; i++) {
      state.backgroundParticles.push({
        x: Math.random() * 800,
        y: Math.random() * 400,
        radius: Math.random() * 5 + 2,
        alpha: 0.5,
        speed: Math.random() * 1 + 0.5,
      });
    }
  };

  const spawnBounceParticles = (x: number, y: number) => {
    const state = gameStateRef.current;
    const colors = ["rgba(8, 145, 178, 0.7)", "rgba(13, 148, 136, 0.7)"]; // cyan-600, teal-600
    for (let i = 0; i < 20; i++) {
      state.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 5,
        vy: -(Math.random() * 4 + 2),
        alpha: 1,
        size: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    state.bounceFlash.alpha = 1; // Trigger bounce flash
    setBounces(state.ball.bounces); // Update React state for bounces
  };

  const update = (deltaTime: number = 1 / 60) => {
    const state = gameStateRef.current;
    if (!state.ball.launched || state.ball.rolling) return;

    state.ball.vy += state.gravity * deltaTime * 60;
    state.ball.x += state.ball.vx * deltaTime * 60;
    state.ball.y += state.ball.vy * deltaTime * 60;

    // Update ball trail
    if (state.ball.launched) {
      state.ball.trail.push({ x: state.ball.x, y: state.ball.y, alpha: 1 });
      if (state.ball.trail.length > 10) state.ball.trail.shift();
      state.ball.trail.forEach((trailPoint) => {
        trailPoint.alpha -= 0.1;
      });
    }

    if (state.ball.x < 0 || state.ball.x > 800 || state.ball.y > 400) {
      endAttempt();
      return;
    }

    if (state.ball.y + state.ball.radius >= state.floorY) {
      state.ball.y = state.floorY - state.ball.radius;
      state.ball.vy *= -state.bounceDampening;
      state.ball.vx *= state.friction;

      if (Math.abs(state.ball.vy) < 1.5) {
        state.ball.rolling = true;
        endAttempt();
        return;
      }

      if (!state.ball.rolling && state.ball.x >= 0 && state.ball.x <= 800) {
        state.ball.bounces += 1;
        spawnBounceParticles(state.ball.x, state.floorY);
      }
    }
  };

  const initParticles = () => {
    const state = gameStateRef.current;
    state.particles = [];
    for (let i = 0; i < 50; i++) {
      state.particles.push({
        x: Math.random() * 800,
        y: Math.random() * 400,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 1,
        color: "rgba(8, 145, 178, 0.7)", // cyan-600
      });
    }
  };

  const updateParticles = () => {
    const state = gameStateRef.current;
    state.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.008;
      p.size *= 0.98; // Gradually shrink particles
      if (p.alpha <= 0 || p.x < 0 || p.x > 800 || p.y < 0 || p.y > 400) {
        p.x = Math.random() * 800;
        p.y = Math.random() * 400;
        p.alpha = Math.random() * 0.5 + 0.2;
        p.vx = (Math.random() - 0.5) * 0.5;
        p.vy = (Math.random() - 0.5) * 0.5;
        p.size = Math.random() * 2 + 1;
        p.color = "rgba(8, 145, 178, 0.7)"; // cyan-600
      }
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const { particles } = gameStateRef.current;
    particles.forEach((p) => {
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  };

  const draw = (ctx: CanvasRenderingContext2D, particleCtx: CanvasRenderingContext2D) => {
    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = Math.max((currentTime - lastTime) / 1000, 1 / 240);
      lastTime = currentTime;

      particleCtx.clearRect(0, 0, 800, 400);
      drawParticles(particleCtx);
      drawBackgroundParticles(particleCtx);
      updateParticles();

      ctx.clearRect(0, 0, 800, 400);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 800, 400);
      gradient.addColorStop(0, "rgb(6, 182, 212)"); // cyan-100
      gradient.addColorStop(1, "rgb(20, 184, 166)"); // teal-100
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 800, 400);

      drawFloor(ctx);
      drawBounceFlash(ctx);
      drawBall(ctx);
      drawArrow(ctx);
      update(deltaTime);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    if (!canvas || !particleCanvas) return;

    const ctx = canvas.getContext("2d");
    const particleCtx = particleCanvas.getContext("2d");
    if (!ctx || !particleCtx) return;

    const getCanvasCoordinates = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const handleMouseDown = (e: MouseEvent) => {
      const state = gameStateRef.current;
      if (state.ball.launched) return;
      state.isDragging = true;
      const { x, y } = getCanvasCoordinates(e.clientX, e.clientY);
      state.startX = x;
      state.startY = y;
      state.currentX = x;
      state.currentY = y;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const state = gameStateRef.current;
      if (state.isDragging) {
        const { x, y } = getCanvasCoordinates(e.clientX, e.clientY);
        state.currentX = x;
        state.currentY = y;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      const state = gameStateRef.current;
      if (!state.isDragging) return;
      const { x: endX, y: endY } = getCanvasCoordinates(e.clientX, e.clientY);

      const dx = state.startX - endX;
      const dy = state.startY - endY;
      state.ball.vx = dx * 0.08;
      state.ball.vy = dy * 0.08;

      const totalVelocity = Math.sqrt(state.ball.vx * state.ball.vx + state.ball.vy * state.ball.vy);
      if (totalVelocity < state.minVelocity) {
        resetGame();
      } else {
        state.ball.launched = true;
      }

      state.isDragging = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const state = gameStateRef.current;
      if (state.ball.launched) return;
      state.isDragging = true;
      const touch = e.touches[0];
      const { x, y } = getCanvasCoordinates(touch.clientX, touch.clientY);
      state.startX = x;
      state.startY = y;
      state.currentX = x;
      state.currentY = y;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const state = gameStateRef.current;
      if (state.isDragging) {
        const touch = e.touches[0];
        const { x, y } = getCanvasCoordinates(touch.clientX, touch.clientY);
        state.currentX = x;
        state.currentY = y;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      const state = gameStateRef.current;
      if (!state.isDragging) return;
      const touch = e.changedTouches[0];
      const { x: endX, y: endY } = getCanvasCoordinates(touch.clientX, touch.clientY);

      const dx = state.startX - endX;
      const dy = state.startY - endY;
      state.ball.vx = dx * 0.08;
      state.ball.vy = dy * 0.08;

      const totalVelocity = Math.sqrt(state.ball.vx * state.ball.vx + state.ball.vy * state.ball.vy);
      if (totalVelocity < state.minVelocity) {
        resetGame();
      } else {
        state.ball.launched = true;
      }

      state.isDragging = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: false });

    initParticles();
    initBackgroundParticles();
    resetGame();
    draw(ctx, particleCtx);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [draw, resetGame]);

  useEffect(() => {
    controls.start({
      boxShadow: [
        "0 4px 20px rgba(8, 145, 178, 0.3)", // cyan-600
        "0 8px 30px rgba(13, 148, 136, 0.4)", // teal-600
        "0 4px 20px rgba(8, 145, 178, 0.3)", // cyan-600
      ],
      transition: { repeat: Infinity, duration: 3 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-cyan-100 to-teal-100 flex flex-col items-center justify-center p-6"
    >
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(8, 145, 178, 0.5)" }}
        className="bg-white rounded-xl p-6 max-w-4xl w-full relative overflow-hidden"
      >
        <motion.div
          animate={{
            borderColor: [
              "rgba(8, 145, 178, 0.5)", // cyan-600
              "rgba(13, 148, 136, 0.5)", // teal-600
              "rgba(8, 145, 178, 0.5)", // cyan-600
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 border-4 rounded-xl pointer-events-none"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-cyan-800 mb-4 text-center"
          >
            Bounce Target
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 mb-6 text-center"
          >
            Drag and release to match the bounce goal!
          </motion.p>
          <div className="relative">
            <canvas
              ref={particleCanvasRef}
              width={800}
              height={400}
              className="absolute top-0 left-0 w-full h-full"
            />
            <canvas
              ref={canvasRef}
              width={800}
              height={400}
              className="relative border-2 border-cyan-300 rounded-lg w-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: bounces === targetBounces && resultMessage ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 left-4 flex items-center gap-2 bg-cyan-600 text-white px-3 py-1 rounded-full shadow-md"
            >
              <span className="text-sm font-bold">🎯 Goal: {targetBounces}</span>
              <span className="text-sm font-bold">💥 Bounces: {bounces}</span>
            </motion.div>
            {resultMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-cyan-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg"
              >
                <span className="text-lg font-bold">{resultMessage}</span>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-cyan-800 mb-2">The Story Behind Bounce Target</h2>
            <p className="text-gray-700 text-sm">
              Bounce Target was inspired by a fun game I played with my boys around our kitchen table. We’d take turns bouncing a ball across the table, challenging each other to hit a specific number of bounces before it went off the edge. The first player aimed for one bounce, the next for two, and so on. It was all about precision, timing, and a bit of friendly competition. I created this digital version to capture that same joy and share it with others, turning our family game into a playful puzzle for everyone to enjoy!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BounceTargetGame;