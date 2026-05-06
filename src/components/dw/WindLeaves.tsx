"use client";

import { useEffect, useRef, useState } from "react";

const leafSvgs = [
  // Leaf 1
  `<svg viewBox="0 0 50 50" fill="none"><path d="M25 0C25 0 35 15 35 25C35 35 25 50 25 50C25 50 15 35 15 25C15 15 25 0 25 0Z" fill="#FF5500"/><path d="M25 0V50" stroke="#C40878" stroke-width="1"/></svg>`,
  // Leaf 2
  `<svg viewBox="0 0 50 50" fill="none"><path d="M25 0L45 25L25 50L5 25L25 0Z" fill="#FFC300"/><path d="M25 0V50" stroke="#FF5500" stroke-width="1"/></svg>`,
  // Leaf 3
  `<svg viewBox="0 0 50 50" fill="none"><ellipse cx="25" cy="25" rx="15" ry="25" fill="#067E85"/><path d="M25 0V50" stroke="#3EC0F9" stroke-width="1"/></svg>`,
];

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  type: number;
  element: HTMLDivElement | null;
}

export default function WindLeaves() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<Leaf[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const [showReset, setShowReset] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    if (!container) return;

    const createLeaves = () => {
      // Clear existing
      leavesRef.current.forEach((leaf) => leaf.element?.remove());
      leavesRef.current = [];

      const leafNum = Math.floor(
        (window.innerWidth * window.innerHeight) / 2200
      );

      for (let i = 0; i < leafNum; i++) {
        const x = Math.round(Math.random() * (window.innerWidth - 30));
        const y = Math.round(Math.random() * (window.innerHeight - 30));
        const rotation = Math.floor(Math.random() * 360);
        const type = Math.floor(Math.random() * 3);

        const leafDiv = document.createElement("div");
        leafDiv.className = "absolute pointer-events-none transition-transform";
        leafDiv.style.width = "30px";
        leafDiv.style.height = "30px";
        leafDiv.style.left = `${x}px`;
        leafDiv.style.top = `${y}px`;
        leafDiv.style.transform = `rotate(${rotation}deg)`;
        leafDiv.innerHTML = leafSvgs[type];

        container.appendChild(leafDiv);

        leavesRef.current.push({
          id: i,
          x,
          y,
          rotation,
          type,
          element: leafDiv,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;

      if (mouseX !== 0 && mouseY !== 0) {
        leavesRef.current.forEach((leaf) => {
          if (!leaf.element) return;

          const elX = leaf.x + 15;
          const elY = leaf.y + 15;
          const maxDistance = 150;

          const distance = Math.sqrt(
            Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2)
          );

          if (distance <= maxDistance) {
            const speed = (maxDistance - distance) / 15;
            const dirX = Math.abs(mouseX - elX) / maxDistance;
            const dirY = Math.abs(mouseY - elY) / maxDistance;

            let newX = leaf.x;
            let newY = leaf.y;

            if (mouseX >= elX && leaf.x - 15 > 0) {
              newX = leaf.x - speed * dirX;
            } else if (mouseX < elX && leaf.x + 15 < window.innerWidth) {
              newX = leaf.x + speed * dirX;
            }

            if (mouseY >= elY && leaf.y - 15 > 0) {
              newY = leaf.y - speed * dirY;
            } else if (mouseY < elY && leaf.y + 15 < window.innerHeight) {
              newY = leaf.y + speed * dirY;
            }

            leaf.x = newX;
            leaf.y = newY;
            leaf.element.style.left = `${newX}px`;
            leaf.element.style.top = `${newY}px`;
          }
        });
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    const reset = () => {
      mouseRef.current = { x: 0, y: 0 };
      createLeaves();
      setShowReset(false);
    };

    const handleResize = () => {
      createLeaves();
    };

    // Initialize
    createLeaves();
    animationRef.current = requestAnimationFrame(loop);

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Show reset button after first mouse move
    const showResetBtn = () => {
      setShowReset(true);
      window.removeEventListener("mousemove", showResetBtn);
    };
    window.addEventListener("mousemove", showResetBtn);

    // Store reset function for button
    (window as any).resetWindLeaves = reset;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", showResetBtn);
      cancelAnimationFrame(animationRef.current);
      leavesRef.current.forEach((leaf) => leaf.element?.remove());
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      {/* Reset Button */}
      <button
        onClick={() => (window as any).resetWindLeaves?.()}
        className={`fixed left-4 top-4 z-50 p-2 transition-opacity duration-300 hover:opacity-100 ${showReset ? "opacity-70" : "opacity-0 pointer-events-none"
          }`}
        title="Reset Leaves"
      >
        <svg width="32" height="32" viewBox="0 0 350 350" fill="none">
          <g>
            <circle
              cx="175"
              cy="175"
              r="120"
              stroke="url(#paint0_linear)"
              strokeWidth="60"
            />
            <circle
              cx="175"
              cy="175"
              r="120"
              stroke="url(#paint1_linear)"
              strokeWidth="60"
            />
            <path d="M125 57.5L192.5 3.37341L192.5 111.627L125 57.5Z" fill="#fff" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="25"
              y1="175"
              x2="175"
              y2="54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="0.349344" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="325"
              y1="175"
              x2="175"
              y2="175"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="0.9999" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Leaves Container - Fixed behind content */}
      <div
        ref={containerRef}
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={{ mixBlendMode: "multiply" }}
      />
    </>
  );
}
