"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const BounceTargetGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  const gameStateRef = useRef({
    ball: {
      x: 100,
      y: 300,
      radius: 10,
      vx: 0,
      vy: 0,
      launched: false,
      bounces: 0,
      rolling: false,
    },
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    gravity: 0.4,
    bounceDampening: 0.75,
    friction: 0.9,
    floorY: 390,
    minVelocity: 2,
    maxDist: 200,
    maxArrowLength: 100,
    targetBounces: 0,
    resultMessage: "",
    particles: [] as { x: number; y: number; vx: number; vy: number; alpha: number; size: number; color: string }[],
  });

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
    state.targetBounces = getRandomBounceTarget();
    state.resultMessage = "";
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
    setTimeout(() => {
      resetGame();
    }, 2000);
  };

  const drawBall = (ctx: CanvasRenderingContext2D) => {
    const { ball } = gameStateRef.current;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  };

  const drawFloor = (ctx: CanvasRenderingContext2D) => {
    const { floorY } = gameStateRef.current;
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(800, floorY);
    ctx.strokeStyle = "white";
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

      const r = Math.floor(255 * power);
      const g = Math.floor(255 * (1 - power));
      ctx.strokeStyle = `rgb(${r}, ${g}, 0)`;
      ctx.lineWidth = 2 + power * 3;

      ctx.beginPath();
      ctx.moveTo(ball.x, ball.y);
      ctx.lineTo(arrowX, arrowY);
      ctx.stroke();

      ctx.fillStyle = "white";
      ctx.font = "14px sans-serif";
      const powerPercent = Math.floor(power * 100);
      ctx.fillText(`Power: ${powerPercent}%`, ball.x + 20, ball.y - 10);
    }
  };

  const drawUI = (ctx: CanvasRenderingContext2D) => {
    const { targetBounces, ball, resultMessage } = gameStateRef.current;
    ctx.fillStyle = "white";
    ctx.font = "16px sans-serif";
    ctx.fillText(`🎯 Goal: ${targetBounces} bounces`, 20, 30);
    ctx.fillText(`💥 Bounces: ${ball.bounces}`, 20, 50);

    if (resultMessage) {
      ctx.fillStyle = "yellow";
      ctx.font = "24px sans-serif";
      ctx.fillText(resultMessage, 800 / 2 - 100, 100);
    }
  };

  const spawnBounceParticles = (x: number, y: number) => {
    const state = gameStateRef.current;
    const colors = ["rgba(147, 51, 234, 0.7)", "rgba(59, 130, 246, 0.7)"];
    for (let i = 0; i < 15; i++) {
      state.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: -(Math.random() * 3 + 1),
        alpha: 1,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  };

  const update = () => {
    const state = gameStateRef.current;
    if (!state.ball.launched || state.ball.rolling) return;

    state.ball.vy += state.gravity;
    state.ball.x += state.ball.vx;
    state.ball.y += state.ball.vy;

    // Check if ball is off-screen
    if (state.ball.x < 0 || state.ball.x > 800 || state.ball.y > 400) {
      endAttempt();
      return;
    }

    // Bounce logic
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
        color: "rgba(147, 51, 234, 0.7)",
      });
    }
  };

  const updateParticles = () => {
    const state = gameStateRef.current;
    state.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.008;
      if (p.alpha <= 0 || p.x < 0 || p.x > 800 || p.y < 0 || p.y > 400) {
        p.x = Math.random() * 800;
        p.y = Math.random() * 400;
        p.alpha = Math.random() * 0.5 + 0.2;
        p.vx = (Math.random() - 0.5) * 0.5;
        p.vy = (Math.random() - 0.5) * 0.5;
        p.size = Math.random() * 2 + 1;
        p.color = "rgba(147, 51, 234, 0.7)";
      }
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const { particles } = gameStateRef.current;
    particles.forEach((p) => {
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  };

  const draw = (ctx: CanvasRenderingContext2D, particleCtx: CanvasRenderingContext2D) => {
    particleCtx.clearRect(0, 0, 800, 400);
    drawParticles(particleCtx);
    updateParticles();

    ctx.clearRect(0, 0, 800, 400);
    drawFloor(ctx);
    drawBall(ctx);
    drawArrow(ctx);
    drawUI(ctx);
    update();
    requestAnimationFrame(() => draw(ctx, particleCtx));
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
      state.ball.vx = dx * 0.1;
      state.ball.vy = dy * 0.1;

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
      state.ball.vx = dx * 0.1;
      state.ball.vy = dy * 0.1;

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
  }, []);

  useEffect(() => {
    controls.start({
      boxShadow: [
        "0 4px 20px rgba(147, 51, 234, 0.3)",
        "0 8px 30px rgba(59, 130, 246, 0.4)",
        "0 4px 20px rgba(147, 51, 234, 0.3)",
      ],
      transition: { repeat: Infinity, duration: 3 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center p-6"
    >
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(147, 51, 234, 0.5)" }}
        className="bg-white rounded-xl p-6 max-w-4xl w-full relative overflow-hidden"
      >
        <motion.div
          animate={{
            borderColor: [
              "rgba(147, 51, 234, 0.5)",
              "rgba(59, 130, 246, 0.5)",
              "rgba(147, 51, 234, 0.5)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 border-4 rounded-xl pointer-events-none"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4 text-center">Bounce Target</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">Drag and release to match the bounce goal!</p>
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
              className="relative border-2 border-black bg-black w-full rounded-lg"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-purple-800 mb-2">The Story Behind Bounce Target</h2>
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