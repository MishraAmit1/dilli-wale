import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global event for loader completion
let loaderFinished = false;
const loaderCallbacks: (() => void)[] = [];

export function notifyLoaderFinished() {
  loaderFinished = true;
  loaderCallbacks.forEach(cb => cb());
}

export { loaderFinished, loaderCallbacks };

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  from?: { opacity?: number; y?: number; x?: number; rotateX?: number };
  to?: { opacity?: number; y?: number; x?: number; rotateX?: number };
  tag?: keyof JSX.IntrinsicElements;
  onAnimationComplete?: () => void;
  autoPlay?: boolean; // If true, plays immediately when ready (for hero section)
}

const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  ease = 'power3.out',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  tag: Tag = 'span',
  onAnimationComplete,
  autoPlay = false
}: SplitTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [chars, setChars] = useState<string[]>([]);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const hasAnimated = useRef(false);
  const isReady = useRef(false);

  // Split text
  useEffect(() => {
    const characters = text.split('').map((char, i) =>
      char === ' ' ? `space-${i}` : char
    );
    setChars(characters);
  }, [text]);

  // Animation function
  const animate = useCallback(() => {
    if (hasAnimated.current || !containerRef.current) return;

    const charElements = containerRef.current.querySelectorAll('.split-char');
    if (charElements.length === 0) return;

    hasAnimated.current = true;
    animationRef.current = gsap.to(charElements, {
      ...to,
      opacity: to.opacity ?? 1,
      duration,
      ease,
      stagger,
      delay,
      onComplete: onAnimationComplete
    });
  }, [to, duration, ease, stagger, delay, onAnimationComplete]);

  // Main effect - setup animation
  useEffect(() => {
    if (!containerRef.current || chars.length === 0) return;

    const charElements = containerRef.current.querySelectorAll('.split-char');
    if (charElements.length === 0) return;

    isReady.current = true;

    // Set initial state
    gsap.set(charElements, { ...from, opacity: from.opacity ?? 0 });

    // If autoplay (hero section), animate when loader finishes
    if (autoPlay) {
      if (loaderFinished) {
        // Loader already finished, animate now
        animate();
      } else {
        // Wait for loader
        const callback = () => {
          setTimeout(() => {
            ScrollTrigger.refresh();
            animate();
          }, 300);
        };
        loaderCallbacks.push(callback);
        return () => {
          const index = loaderCallbacks.indexOf(callback);
          if (index > -1) loaderCallbacks.splice(index, 1);
        };
      }
    }

    // Scroll trigger for all cases (including re-animation on scroll)
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      once: false,
      onEnter: () => {
        if (!autoPlay || loaderFinished) {
          animate();
        }
      },
      onLeaveBack: () => {
        hasAnimated.current = false;
        gsap.set(charElements, { ...from, opacity: from.opacity ?? 0 });
      }
    });

    triggersRef.current.push(st);

    return () => {
      triggersRef.current.forEach(st => st.kill());
      triggersRef.current = [];
      if (animationRef.current) animationRef.current.kill();
    };
  }, [chars, from, autoPlay, animate]);

  return (
    <Tag
      ref={containerRef as any}
      className={`inline-block ${className}`}
      style={{
        whiteSpace: 'pre-wrap',
        willChange: 'transform'
      }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="split-char inline-block"
          style={{
            willChange: 'transform, opacity',
            display: char.startsWith('space-') ? 'inline' : 'inline-block',
            width: char.startsWith('space-') ? '0.3em' : undefined
          }}
        >
          {char.startsWith('space-') ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
