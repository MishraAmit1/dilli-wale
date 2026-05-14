import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initSombreroAnimations(
  downtownEl: HTMLElement,
  spicesEl: HTMLElement,
  smokeEl: HTMLElement
) {
  const ctx = gsap.context(() => {
    // Scroll-driven parallax — both flavor overlays move up as downtown scrolls out
    gsap.to([spicesEl, smokeEl], {
      yPercent: -25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: downtownEl,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Continuous float on smoke only
    gsap.to(smokeEl, {
      y: -18,
      duration: 2.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, downtownEl);
  return () => ctx.revert();
}
