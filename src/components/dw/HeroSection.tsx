'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import rickshawImg from "@/assets/rickshaw.png";

const HeroSection = () => {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile: animate hero image like text (from bottom to top)
    if (window.innerWidth < 768 && heroImgRef.current) {
      gsap.fromTo(
        heroImgRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.9, // After text starts
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <section className="hero-pattern relative min-h-screen overflow-hidden pt-28 md:pt-32">

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-12 md:px-12">
        {/* Empty space for now - will add logos here */}
        <div className="relative z-10 md:col-span-7">
          {/* Client logos will be placed here */}
        </div>

        {/* Rickshaw - Static image initially, then ScrollRickshaw takes over */}
        <div ref={heroImgRef} className="relative z-0 items-end justify-center md:col-span-5 md:absolute md:right-0 md:top-32 md:w-1/2 opacity-0 md:opacity-100 hidden md:flex">
          <div className="float-slow">
            <img src={rickshawImg} alt="Decorative Indian rickshaw" className="w-full max-w-[460px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
