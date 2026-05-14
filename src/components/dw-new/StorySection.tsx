import { useEffect, useRef } from "react";
import "@/styles/storySection.css";

const StorySection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const para1Ref   = useRef<HTMLParagraphElement>(null);
  const para2Ref   = useRef<HTMLParagraphElement>(null);
  const btnRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [
      headingRef.current,
      para1Ref.current,
      para2Ref.current,
      btnRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const fromTop: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(-40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };
  const fromBottom: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
  };
  const fromBottomDelay: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
  };
  const btnAnim: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
  };

  return (
    <section
      id="story-section"
      className="ss-section py-[11.11vw] text-center"
    >
      <div className="px-[12vw] space-y-8 md:space-y-12">

        <h2
          ref={headingRef}
          style={fromTop}
          className="ss-heading font-display text-[#002855] dw-shadow-orange"
        >
          Our Story
        </h2>

        <p
          ref={para1Ref}
          style={fromBottom}
          className="ss-body font-body max-w-3xl mx-auto"
        >
          [Story paragraph one placeholder — open with the origin moment: where
          the restaurant began, the longing that built it, and the hands behind
          the first plate. Keep it warm, specific, and human.]
        </p>

        <p
          ref={para2Ref}
          style={fromBottomDelay}
          className="ss-body font-body max-w-3xl mx-auto"
        >
          [Story paragraph two placeholder — carry the through-line into today:
          the room you&apos;ve built, the dishes you guard, and the invitation
          extended to every guest who walks in.]
        </p>

        <div ref={btnRef} style={btnAnim} className="flex justify-center pt-2">
          <a href="#" className="ss-btn">
            Read Full Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ss-btn__arrow w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default StorySection;
