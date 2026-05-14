"use client";

import { useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const rickshawRef = useRef<HTMLImageElement>(null);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#FFC300] flex flex-col items-center justify-end">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Mandala texture — full cover behind everything */}
      <img
        src="/images/heroimage.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.25 }}
      />

      {/* All hero content — stacked at center-bottom */}
      <div
        ref={logoContainerRef}
        className="relative z-10 flex flex-col items-center pb-6 md:pb-10"
      >
        {/* 1. Rickshaw logo */}
        <img
          ref={rickshawRef}
          src="/logodilliwale.svg"
          alt="Dilli Wale"
          className="w-[120px] max-w-[38vw] md:w-[180px] lg:w-[200px] h-auto"
          style={{
            animation:
              "hero-rickshaw-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 5.4s both",
          }}
        />

        {/* 2. Logotext */}
        <img
          src="/logotext.png"
          alt="Dilli Wale"
          className="w-[55vw] max-w-[220px] md:max-w-[340px] lg:max-w-[420px] h-auto mt-1"
          style={{
            animation:
              "hero-text-up 1s cubic-bezier(0.16, 1, 0.3, 1) 5.8s both",
          }}
        />

        {/* 3. India collage */}
        {/* <img
          src="/images/herobg.png"
          alt=""
          aria-hidden="true"
          className="relative z-[1] w-auto max-w-[82vw] md:max-w-[48vw] lg:max-w-[40vw] mt-3 md:mt-4"
          style={{
            height: "38vh",
            objectFit: "contain",
            objectPosition: "top",
          }}
        /> */}

        {/* 4. CTAs */}
        <div
          className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6"
          style={{
            animation:
              "hero-text-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 6.3s both",
          }}
        >
          <a
            href="#conversion-section"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.65rem 1.5rem",
              background: "#FF5500",
              color: "#fff",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(255,85,0,0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              whiteSpace: "nowrap",
            }}
            className="hover:-translate-y-0.5"
          >
            Get Tickets
          </a>

          <a
            href="#carousel-section"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.65rem 1.5rem",
              background: "transparent",
              color: "#002855",
              border: "2px solid #067E85",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              textDecoration: "none",
              transition: "background 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#067E85";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F7F3EA";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#002855";
            }}
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}
