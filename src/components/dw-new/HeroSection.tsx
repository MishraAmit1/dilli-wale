"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { notifyLoaderFinished, loaderFinished, loaderCallbacks } from "@/components/dw/SplitText";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const rickshawRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 82" width="72" height="49">
  <g transform="matrix(.1 0 0 -.1 0 82)">
    <path d="M875 586c-53-30-115-112-115-151l0-30 25 30c14 17 35 46 47 65 18 28 23 31 26 17 7-34-8-67-48-109-21-23-37-45-34-49 6-10 45 1 75 22 40 28 89 141 89 207 0 28-14 27-65-2zM520 562c-13-47-13-159 0-167 6-3 10-16 11-28 1-26 30-79 46-84 6-2 21 10 33 27 35 49 30 124-15 210-45 83-61 93-75 42zm55-104c-12-56-30-66-41-22-5 18-1 29 12 39 29 22 36 18 29-17zm35-38c0-16-4-30-9-30-10 0-22 40-15 52 11 18 24 6 24-22zm-20-95c0-8-4-15-10-15-5 0-10 7-10 15 0 8 5 15 10 15 6 0 10-7 10-15zM325 469c-12-19 6-97 36-158 33-66 72-101 113-101 25 0 26 3 26 50 0 73-47 148-122 196-43 27-44 28-53 13zm142-166c20-41-1-58-32-27-29 29-30 34-10 34 8 0 15 5 15 10 0 19 15 10 27-17zM673 255c-18-7-38-23-45-34-7-12-18-21-24-21-7 0-15-7-18-15-8-23 37-37 119-38 56-1 77 3 100 19 17 11 47 28 68 38 20 9 37 21 37 25 0 15-97 41-152 41-29-1-67-7-85-15zm57-20c0-9-52-35-60-30-14 9 31 44 47 38 7-3 13-6 13-8zm65 5c3-6-4-10-17-10-18 0-20 2-8 10 19 12 18 12 25 0zm-140-40c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm115 0c0-5-9-10-21-10-11 0-17 5-14 10 3 6 13 10 21 10 8 0 14-4 14-10z" fill="#A85C20"/>
  </g>
</svg>`;

    const img = new Image();
    img.onload = () => {
      drawPattern();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgString);

    const imgW = 100;
    const imgH = 68;
    const gapX = 25;
    const gapY = 25;
    const tileW = imgW + gapX;
    const tileH = imgH + gapY;

    function drawPattern() {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.fillStyle = "#FFC300";
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 0.88;

      // Adjust leaf size for mobile
      const isMobile = window.innerWidth < 768;
      const adjustedImgW = isMobile ? imgW * 0.7 : imgW;
      const adjustedImgH = isMobile ? imgH * 0.7 : imgH;
      const adjustedTileW = adjustedImgW + gapX;
      const adjustedTileH = adjustedImgH + gapY;

      const cols = Math.ceil(width / adjustedTileW) + 2;
      const rows = Math.ceil(height / adjustedTileH) + 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offsetX = row % 2 === 1 ? adjustedTileW / 2 : 0;
          const x = col * adjustedTileW + offsetX;
          const y = row * adjustedTileH;

          ctx.drawImage(img, x, y, adjustedImgW, adjustedImgH);
        }
      }

      ctx.globalAlpha = 1;
    }

    function resizeCanvas() {
      if (!canvas) return;

      // Make canvas responsive to device pixel ratio for sharper images
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Scale the canvas back down using CSS
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';

      // Scale the drawing context to account for the device pixel ratio
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      drawPattern();
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Logo animation
  useEffect(() => {
    if (!logoContainerRef.current || !rickshawRef.current || !textRef.current) return;

    // Set initial state - hidden
    gsap.set([rickshawRef.current, textRef.current], {
      opacity: 0,
      y: 60
    });

    // Animation function
    const animateLogos = () => {
      // Animate rickshaw first
      gsap.to(rickshawRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      });

      // Animate text after rickshaw
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.55,
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      });
    };

    // Wait for loader to finish before animating
    if (loaderFinished) {
      // Loader already finished, animate now
      setTimeout(animateLogos, 300);
    } else {
      // Wait for loader
      const callback = () => {
        setTimeout(animateLogos, 300);
      };
      loaderCallbacks.push(callback);

      return () => {
        const index = loaderCallbacks.indexOf(callback);
        if (index > -1) loaderCallbacks.splice(index, 1);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFC300]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div
        ref={logoContainerRef}
        className="absolute top-[75%] md:top-[72%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
      >
        <img
          ref={rickshawRef}
          src="/logodilliwale.svg"
          alt="Dilli Wale Rickshaw"
          className="w-[200px] max-w-[60vw] md:w-[320px] lg:w-[280px] h-auto"
        />
        <img
          ref={textRef}
          src="/logotext.png"
          alt="Dilli Wale Text"
          className="w-[300px] max-w-[90vw] md:w-[450px] lg:w-[650px] h-auto mt-1"
        />
      </div>
    </div>
  );
}
