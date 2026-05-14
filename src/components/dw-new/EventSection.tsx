import { useEffect, useRef } from "react";
import logoDilliWale from "@/assets/logodilliwale.svg";
import { initEventSectionAnimations } from "@/scripts/eventSection";
import "@/styles/eventSection.css";

const DishIconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 45"
    className="w-full h-full fill-current"
  >
    <ellipse
      cx="22.5"
      cy="32"
      rx="18"
      ry="4.5"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
    />
    <ellipse
      cx="22.5"
      cy="30"
      rx="18"
      ry="4.5"
      fill="currentColor"
      opacity="0.18"
    />
    <path
      d="M5,30 Q5,12 22.5,12 Q40,12 40,30"
      strokeWidth="2"
      stroke="currentColor"
      fill="currentColor"
      fillOpacity="0.12"
      strokeLinejoin="round"
    />
    <circle cx="22.5" cy="9" r="2" fill="currentColor" />
    <line
      x1="22.5"
      y1="11"
      x2="22.5"
      y2="13"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M15,8 Q14,5 16,3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M22.5,6 Q21.5,3 23.5,1"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M30,8 Q29,5 31,3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

const dishes = [
  {
    name: "Dish One",
    desc: "[Short description placeholder — describe the dish in one mouthwatering sentence.]",
  },
  {
    name: "Dish Two",
    desc: "[Short description placeholder — highlight what makes this plate signature to the house.]",
  },
  {
    name: "Dish Three",
    desc: "[Short description placeholder — speak to the technique, the season, the story behind it.]",
  },
];

const EventSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !logoRef.current) return;
    const cleanup = initEventSectionAnimations(
      sectionRef.current,
      logoRef.current,
    );
    return cleanup;
  }, []);

  return (
    <section
      id="event-section"
      ref={sectionRef}
      className="es-section relative text-center"
    >
      {/* ── Logo — sweeps left→right via GSAP (sits above banner) ── */}
      <span ref={logoRef} className="es-logo-sprite">
        <img src={logoDilliWale} alt="Dilli Wale" />
      </span>

      {/* ── Skewed banner ── */}
      <div className="relative z-10">
        <div className="relative -skew-y-6 left-1/2 -translate-x-1/2 w-screen">
          <h2
            id="cross-section-1"
            className="es-py-2-18 es-text-banner bg-[#ffc300] font-display"
          >
            <span className="es-text-navy es-banner-shadow">
              Dilli Ka Zaika Is Coming To You
            </span>
          </h2>
        </div>
      </div>

      {/* ── Cards + CTA ── */}
      <div id="ticket-section" className="relative z-30 pt-2 pb-16 px-4 sm:px-8 md:px-[12vw]">
        <div className="space-y-8 md:space-y-12">
          {/* Description — white, centered */}
          <p className="font-display es-text-headline text-white text-center">
            [Section intro placeholder — one line that frames the menu, the
            chef&apos;s point of view, and what guests should expect on the
            plate.]
          </p>

          {/* Cards — stack on mobile, row on md+ */}
          <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {dishes.map((dish, i) => (
              <li key={i} className="group w-full md:w-[250px] md:shrink-0">
                <a
                  href="#"
                  className="block rounded-t-lg w-full p-6 bg-white es-text-navy group-last:text-white group-last:bg-[#C40878] hover:-translate-y-4 hover:scale-105 transition-transform duration-300 will-change-transform"
                >
                  <p>
                    <strong>{dish.name}</strong>
                    <br />
                    {dish.desc}
                  </p>
                  <span className="block w-10 h-10 mx-auto my-8 text-[#C40878] group-last:text-white">
                    <DishIconSVG />
                  </span>
                  <p className="es-text-smallcaps uppercase font-bold text-[#C40878] group-last:text-white">
                    View Details
                  </p>
                </a>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            id="open-modal"
            className="flex items-center justify-center w-full md:w-[44.44vw] h-16 m-auto px-4 font-bold es-text-smallcaps uppercase text-white border-2 border-white border-solid rounded-lg hover:text-[#ffc300] hover:bg-white transition-colors duration-300"
            type="button"
            aria-expanded="false"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
