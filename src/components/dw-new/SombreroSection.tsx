import { useEffect, useRef } from "react";
import "@/styles/sombreroSection.css";
import { initSombreroAnimations } from "@/scripts/sombreroSection";

const IndianPennantFlags = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 150"
    className="w-full h-auto"
    aria-hidden="true"
    style={{ animation: "pennant-wave 2.5s ease-in-out infinite" }}
  >
    <path
      d="M0,35 C150,55 300,15 450,35 C600,55 750,15 900,35 C1050,55 1130,22 1200,38"
      stroke="#8B4513"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />

    {[
      { x: 30, y: 35, c: "#FF9933" },
      { x: 120, y: 25, c: "#FFFFFF" },
      { x: 210, y: 18, c: "#138808" },
      { x: 300, y: 18, c: "#E31C79" },
      { x: 390, y: 22, c: "#FEC522" },
      { x: 480, y: 30, c: "#002855" },
      { x: 570, y: 35, c: "#FF9933" },
      { x: 660, y: 30, c: "#138808" },
      { x: 750, y: 22, c: "#E31C79" },
      { x: 840, y: 20, c: "#FEC522" },
      { x: 930, y: 26, c: "#FF9933" },
      { x: 1020, y: 30, c: "#002855" },
      { x: 1110, y: 34, c: "#E31C79" },
    ].map(({ x, y, c }, i) => (
      <polygon
        key={i}
        points={`${x},${y} ${x + 36},${y + 70} ${x + 72},${y}`}
        fill={c}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1"
      />
    ))}

    {[0, 300, 600, 900, 1200].map((x, i) => (
      <circle
        key={i}
        cx={x}
        cy={
          x === 0 ? 35 : x === 300 ? 18 : x === 600 ? 35 : x === 900 ? 35 : 38
        }
        r="4"
        fill="#8B4513"
      />
    ))}
  </svg>
);

const features = [
  {
    heading: "[Feature One]",
    body: "[One line about what makes this special.]",
  },
  {
    heading: "[Feature Two]",
    body: "[One line about the experience or tradition.]",
  },
  {
    heading: "[Feature Three]",
    body: "[One line invitation to join or explore.]",
  },
  {
    heading: "[Feature Four]",
    body: "[One line about the community or celebration.]",
  },
];

const SombreroSection = () => {
  const downtownRef = useRef<HTMLDivElement>(null);
  const spicesRef = useRef<HTMLSpanElement>(null);
  const smokeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const downtown = downtownRef.current;
    const spices = spicesRef.current;
    const smoke = smokeRef.current;
    if (!downtown || !spices || !smoke) return;
    return initSombreroAnimations(downtown, spices, smoke);
  }, []);

  return (
    <section
      id="sombrero-section"
      className="cs-section cs-pb cs-food-bg text-center relative z-20"
    >
      {/* ── Skewed navy banner ── */}
      <div className="relative z-10 md:pt-[50%]">
        <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:skew-y-6 w-full md:w-screen">
          <h2
            id="cross-section-2"
            className="cs-py-2-18 cs-banner-text bg-[#002855] font-display"
          >
            <span className="block text-[#E31C79] cs-banner-shadow-pink">
              Let&apos;s Go Celebrate
            </span>
            <span className="block text-[#FEC522] cs-banner-shadow-yellow">
              Dilli Wale
            </span>
          </h2>
        </div>
      </div>

      {/* Smoke — positioned relative to section, above food image at bottom right */}
      <span
        id="smoke"
        ref={smokeRef}
        className="cs-flavor cs-flavor--smoke hidden md:block"
        aria-hidden="true"
      />

      {/* ── Downtown / flags + features ── */}
      <div
        id="downtown"
        ref={downtownRef}
        className="cs-downtown relative grid"
        style={{
          gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
          marginTop: "-5.55vw",
        }}
      >
        {/* Spices overlay — left, below downtown */}
        <span
          id="spices"
          ref={spicesRef}
          className="cs-flavor cs-flavor--spices"
          aria-hidden="true"
        />

        {/* Flags — responsive height via CSS class */}
        <div className="col-span-full row-start-1 cs-flags-container">
          <div className="cs-flag-row absolute top-0 left-0 w-full">
            <IndianPennantFlags />
          </div>
          <div className="cs-flag-row cs-flag-row--b absolute top-0 left-0 w-full opacity-70">
            <IndianPennantFlags />
          </div>
        </div>

        {/* Feature items */}
        <div
          className="relative row-start-2 cs-features-wrap"
          style={{ gridColumn: "2 / span 16" }}
        >
          <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-x-[5.55vw] gap-y-[8vw] md:gap-y-[5.55vw]">
            {features.map(({ heading, body }, i) => (
              <li
                key={i}
                className="md:w-[40%] space-y-2 md:space-y-4 text-center"
              >
                <h3 className="cs-feature-heading font-display text-white">
                  {heading}
                </h3>
                <p className="text-white/80 font-body text-base leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SombreroSection;
