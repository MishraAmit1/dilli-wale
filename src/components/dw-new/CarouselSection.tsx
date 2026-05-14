import { useRef, useState } from "react";

const cards = [
  {
    tag: "Street Food",
    title: "Golgappe & Chaat",
    desc: "The soul of Old Delhi — crispy, tangy, and totally irresistible.",
    gradFrom: "#fd9805",
    gradTo: "#e31c79",
  },
  {
    tag: "Live Music",
    title: "Bollywood Beats",
    desc: "From 90s classics to today's chart toppers — the dance floor never stops.",
    gradFrom: "#00a1b0",
    gradTo: "#002855",
  },
  {
    tag: "Culture",
    title: "Folk & Classical Dance",
    desc: "Kathak, Bhangra, and folk performances celebrating India's diversity.",
    gradFrom: "#9fcf66",
    gradTo: "#00a1b0",
  },
  {
    tag: "Shopping",
    title: "Dilli Bazaar",
    desc: "Artisan crafts, handlooms, jewelry, and everything that smells of Delhi.",
    gradFrom: "#e31c79",
    gradTo: "#fd9805",
  },
  {
    tag: "Kids Zone",
    title: "Fun for All Ages",
    desc: "Games, workshops, face painting — because Dilli is for the whole family.",
    gradFrom: "#fec522",
    gradTo: "#9fcf66",
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

export default function CarouselSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const next =
      dir === "right"
        ? Math.min(activeIndex + 1, cards.length - 1)
        : Math.max(activeIndex - 1, 0);
    trackRef.current.scrollTo({ left: next * STEP, behavior: "smooth" });
    setActiveIndex(next);
  };

  const btnStyle = (disabled: boolean): React.CSSProperties => ({
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    border: "2px solid #FEC522",
    background: disabled ? "rgba(254,197,34,0.15)" : "transparent",
    color: disabled ? "rgba(254,197,34,0.35)" : "#FEC522",
    fontSize: "1.2rem",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s, color 0.2s",
  });

  return (
    <section
      id="carousel-section"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#002855",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
        zIndex: 20,
      }}
    >
      <h2
        className="font-display px-4 md:px-12 dw-shadow-pink"
        style={{
          fontSize: "clamp(2rem, 8vw, 10em)",
          lineHeight: 1.125,
          fontWeight: 400,
          letterSpacing: 0,
          color: "#FEC522",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        What&apos;s in Store
      </h2>

      <div
        ref={trackRef}
        className="px-4 md:px-12"
        style={{
          display: "flex",
          gap: `${CARD_GAP}px`,
          paddingBottom: "0.5rem",
          overflowX: "auto",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: `${CARD_WIDTH}px`,
              background: "#fff",
              borderRadius: "1.25rem",
              overflow: "hidden",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease",
              color: "#002855",
            }}
            className="hover:-translate-y-2"
          >
            <div
              style={{
                height: "280px",
                background: `linear-gradient(135deg, ${card.gradFrom}, ${card.gradTo})`,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(255,255,255,0.92)",
                  color: "#E31C79",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                }}
              >
                {card.tag}
              </span>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h3
                className="font-display"
                style={{ fontSize: "clamp(1.1rem, 3vw, 2.5em)", color: "#002855" }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.9rem",
                  opacity: 0.72,
                  lineHeight: 1.6,
                }}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls: prev · dots · next */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          style={btnStyle(activeIndex === 0)}
        >
          ←
        </button>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          {cards.map((_, i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === activeIndex ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "999px",
                background:
                  i === activeIndex ? "#FEC522" : "rgba(255,255,255,0.3)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          style={btnStyle(activeIndex === cards.length - 1)}
        >
          →
        </button>
      </div>
    </section>
  );
}
