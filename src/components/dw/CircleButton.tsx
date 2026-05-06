import { useState } from "react";

const CircleButton = ({ text = "· GET IN TOUCH WITH US " }: { text?: string }) => {
  const [hover, setHover] = useState(false);
  const repeated = (text + text).toUpperCase();

  return (
    <a href="#contact" className="relative inline-block w-[220px] h-[220px]" aria-label="Get in touch">
      <svg className="absolute inset-0 rotate-text" viewBox="0 0 200 200">
        <defs>
          <path id="circlePath" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
        </defs>
        <text fill="#F7F3EA" fontFamily="'Baloo 2', cursive" fontWeight="700" fontSize="14" letterSpacing="3">
          <textPath href="#circlePath">{repeated}</textPath>
        </text>
      </svg>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="absolute left-1/2 top-1/2 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: hover ? "#FFC300" : "#FF5500",
          transform: `translate(-50%, -50%) scale(${hover ? 1.08 : 1})`,
          boxShadow: "0 0 0 4px #1A1A1A, 0 0 0 8px #F7F3EA",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  );
};

export default CircleButton;
