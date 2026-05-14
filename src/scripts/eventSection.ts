import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initEventSectionAnimations(
  sectionEl: HTMLElement,
  logoEl: HTMLElement
) {
  const ctx = gsap.context(() => {
    // Logo sweeps from off-screen left → off-screen right
    // during the full scroll lifetime of the section
    gsap.fromTo(
      logoEl,
      { x: "-50vw" },
      {
        x: "120vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",   // section enters viewport
          end: "center center",  // completes at half scroll — feels fast
          scrub: 0.4,            // low scrub = snappier response
        },
      }
    );
  }, sectionEl);

  return () => ctx.revert();
}
