"use client";

import { useEffect, useRef, useState } from "react";
import SplitText from "./SplitText";

const leafImages = [
  "https://raw.githubusercontent.com/Nik439/Images/master/cpc-wind/leaf_1.svg",
  "https://raw.githubusercontent.com/Nik439/Images/master/cpc-wind/leaf_2.svg",
  "https://raw.githubusercontent.com/Nik439/Images/master/cpc-wind/leaf_3.svg",
];

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  type: number;
  element: HTMLDivElement | null;
}

export default function WindLeavesCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<Leaf[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    if (!container) return;

    const createLeaves = () => {
      leavesRef.current.forEach((leaf) => leaf.element?.remove());
      leavesRef.current = [];

      const containerHeight = container.offsetHeight;
      const containerWidth = container.offsetWidth;
      const leafNum = Math.floor((containerWidth * containerHeight) / 3000);

      for (let i = 0; i < leafNum; i++) {
        const x = Math.round(Math.random() * (containerWidth - 30));
        const y = Math.round(Math.random() * (containerHeight - 30));
        const rotation = Math.floor(Math.random() * 360);
        const type = Math.floor(Math.random() * 3);

        const leafDiv = document.createElement("div");
        leafDiv.className = "absolute pointer-events-none";
        leafDiv.style.width = "50px";
        leafDiv.style.height = "50px";
        leafDiv.style.left = `${x}px`;
        leafDiv.style.top = `${y}px`;
        leafDiv.style.transform = `rotate(${rotation}deg)`;
        leafDiv.style.backgroundImage = `url(${leafImages[type]})`;
        leafDiv.style.backgroundSize = "contain";
        leafDiv.style.backgroundRepeat = "no-repeat";
        leafDiv.style.opacity = "0.8";

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
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const loop = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      if (mouseX !== 0 && mouseY !== 0) {
        leavesRef.current.forEach((leaf) => {
          if (!leaf.element) return;

          const elX = leaf.x + 15;
          const elY = leaf.y + 15;
          const maxDistance = 120;

          const distance = Math.sqrt(
            Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2)
          );

          if (distance <= maxDistance) {
            const speed = (maxDistance - distance) / 12;
            const dirX = Math.abs(mouseX - elX) / maxDistance;
            const dirY = Math.abs(mouseY - elY) / maxDistance;

            let newX = leaf.x;
            let newY = leaf.y;

            if (mouseX >= elX && leaf.x - 10 > 0) {
              newX = leaf.x - speed * dirX;
            } else if (mouseX < elX && leaf.x + 10 < containerWidth) {
              newX = leaf.x + speed * dirX;
            }

            if (mouseY >= elY && leaf.y - 10 > 0) {
              newY = leaf.y - speed * dirY;
            } else if (mouseY < elY && leaf.y + 10 < containerHeight) {
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

    const handleResize = () => {
      createLeaves();
    };

    createLeaves();
    animationRef.current = requestAnimationFrame(loop);

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
      leavesRef.current.forEach((leaf) => leaf.element?.remove());
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <section className="relative bg-dw-cream">
      {/* Content with leaves layered properly - CREAM BACKGROUND */}
      <div className="relative px-6 py-20 md:px-12 md:py-28">
        {/* Wind Leaves Layer - Behind content text but visible */}
        <div
          ref={containerRef}
          className="pointer-events-auto absolute inset-0 z-0 overflow-hidden"
        />

        {/* Content Text - Above leaves, pointer events pass through */}
        <div className="relative z-10 mx-auto max-w-4xl text-center pointer-events-none">
          {/* Heading */}
          <h2 className="font-display text-4xl font-bold text-dw-orange md:text-5xl lg:text-6xl">
            <SplitText
              text="EXPERIENCE THE"
              delay={0.1}
              stagger={0.04}
              duration={0.6}
              from={{ opacity: 0, y: 25 }}
              to={{ opacity: 1, y: 0 }}
            />
            <br />
            <span className="text-dw-dark">
              <SplitText
                text="MAGIC OF DILLI"
                delay={0.25}
                stagger={0.04}
                duration={0.6}
                from={{ opacity: 0, y: 25 }}
                to={{ opacity: 1, y: 0 }}
              />
            </span>
          </h2>
          <p className="mt-4 font-display text-2xl text-dw-teal md:text-3xl">
            <SplitText
              text="दिल्ली की जादू"
              delay={0.4}
              stagger={0.05}
              duration={0.5}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </p>

          {/* CTA Button */}
          <div className="relative z-20 mt-12 pointer-events-auto">
            <a
              href="#locations"
              className="group relative inline-flex items-center gap-3 rounded-full bg-dw-teal px-8 py-4 font-display text-lg font-bold text-dw-cream border-3 border-dw-dark shadow-[4px_4px_0_#1A1A1A] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A]"
            >
              <span>Find Us</span>
              <svg
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Subtext */}
          <p className="mt-8 font-body text-base text-dw-dark/70 md:text-lg">
            <SplitText
              text="Move your cursor through the falling leaves"
              delay={0.6}
              stagger={0.01}
              duration={0.4}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
