"use client";

import { useEffect, useRef, useState } from "react";

const reels = [
  { src: "/videos/reel1.mp4", dish: "Chaat Papri", emoji: "🥘" },
  { src: "/videos/reel2.mp4", dish: "Chicken Biryani", emoji: "🍗" },
  { src: "/videos/reel3.mp4", dish: "Dahi Bhalla", emoji: "🥣" },
  { src: "/videos/reel4.mp4", dish: "Seekh Kebab", emoji: "🍢" },
  { src: "/videos/reel5.mp4", dish: "Kulfi Falooda", emoji: "🍨" },
];

const brandColors = ["#FFC300", "#FF5500", "#067E85", "#C40878", "#FFC300"];

export default function ReelsSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const cardWidth = isMobile ? 240 : 340;
  const cardHeight = isMobile ? 420 : 580;
  const cardMargin = 24;
  const sidePadding = windowWidth * 0.05;
  const totalWidth = reels.length * (cardWidth + cardMargin) + sidePadding * 2;

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const handleScroll = () => {
      if (!outerRef.current) return;
      const outer = outerRef.current;
      const scrollRange = outer.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - outer.offsetTop;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      const totalSlide = totalWidth - window.innerWidth;

      setTranslateX(-progress * totalSlide);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [totalWidth]);

  return (
    <section className="bg-dw-cream">
      {/* Heading Section */}
      <div className="px-6 pt-16 pb-8 md:px-12 md:pt-[60px] md:pb-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold text-dw-orange md:text-[3rem]">
            FOOD FROM THE CAPITAL
          </h2>
          <div className="my-3 h-[2px] w-20 bg-dw-yellow" />
          <p className="font-display text-2xl text-dw-teal md:text-[2rem]">
            राजधानी से भोजन
          </p>
        </div>
      </div>

      {/* Sticky Scroll-Jacked Horizontal Strip */}
      <div
        ref={outerRef}
        className="relative"
        style={{ height: "400vh" }}
      >
        <div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ height: "100vh" }}
        >
          <div
            className="flex h-full items-center"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.1s linear",
              paddingLeft: "5vw",
              paddingRight: "5vw",
            }}
          >
            {reels.map((reel, index) => (
              <div
                key={reel.dish}
                className="relative flex-shrink-0 overflow-hidden rounded-[20px] border-[3px] border-dw-dark bg-dw-dark"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  marginRight: cardMargin,
                }}
              >
                {/* Video or Placeholder */}
                <video
                  src={reel.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  style={{ display: "none" }}
                  onError={(e) => {
                    (e.target as HTMLVideoElement).style.display = "none";
                  }}
                  onLoadedData={(e) => {
                    (e.target as HTMLVideoElement).style.display = "block";
                  }}
                />
                {/* Placeholder */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: brandColors[index] }}
                >
                  <span className="font-display text-6xl">{reel.emoji}</span>
                  <span className="font-display mt-4 text-lg font-bold text-white">
                    {reel.dish}
                  </span>
                </div>

                {/* Content Overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    height: "40%",
                  }}
                >
                  <h3 className="font-display text-lg font-bold text-white">
                    {reel.dish}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#067E85" }}
                    />
                    <span className="font-body text-sm text-white/90">
                      Delhi Style
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
