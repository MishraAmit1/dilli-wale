'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollRickshaw() {
  const logoRef = useRef<HTMLImageElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    setIsReady(true)
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isReady || !logoRef.current) return

    const el = logoRef.current

    // Wait for DOM to be fully ready
    setTimeout(() => {
      // Find the sections
      const pinkSection = document.querySelector('section.bg-\\[\\#c40878\\]') as HTMLElement
      const blueSection = document.querySelector('section.bg-\\[\\#5BC8E8\\]') as HTMLElement

      if (!pinkSection || !blueSection) {
        console.warn('Sections not found')
        return
      }

      // 1. Initial setup - start at hero position
      gsap.set(el, {
        left: '50vw',
        top: isMobile ? '75vh' : '72vh',
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        rotation: 0,
        opacity: 0 // Hidden initially
      })

      // 2. Show when scroll starts
      gsap.to(el, {
        opacity: 1,
        scrollTrigger: {
          trigger: document.body,
          start: '10px top',
          end: '+=50',
          scrub: 0.5,
          immediateRender: false
        }
      })

      // 3. FIRST MOVEMENT: Direct path to LEFT side of pink section
      gsap.to(el, {
        left: isMobile ? '25vw' : '20vw', // Left side
        top: '50vh', // Center of viewport
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: pinkSection,
          start: 'top bottom', // Start when pink section appears at bottom
          end: 'top center',   // End when pink section is at center
          scrub: 1.5,          // Smooth movement
          immediateRender: false
        }
      })

      // 4. FINAL MOVEMENT: To center of blue section with instant rotation
      //    and then STICK there
      let blueReached = false; // Flag to track if blue section has been reached

      // First, set up the instant rotation when blue section comes into view
      ScrollTrigger.create({
        trigger: blueSection,
        start: 'top bottom-=10%',  // Just before blue section enters view
      });

      // Then create a scrolltrigger to move to center of blue and stick
      const blueTrigger = ScrollTrigger.create({
        trigger: blueSection,
        start: 'top bottom',      // Start when blue section appears
        end: 'center center',     // End when blue center is at viewport center
        onUpdate: (self) => {
          // Only proceed if we haven't already reached the blue section center
          // or if we're scrolling back up from below
          if (!blueReached || self.direction === -1) {
            // Calculate position based on scroll progress
            const progress = self.progress;

            // Starting position (left of pink section)
            const startX = isMobile ? 25 : 20;
            const startY = 50;

            // Ending position (center of blue section)
            const endX = 50;
            const endY = 50;

            // Calculate current position
            const currX = startX + (endX - startX) * progress;
            const currY = startY + (endY - startY) * progress;

            // Apply position
            gsap.set(el, {
              left: `${currX}vw`,
              top: `${currY}vh`,
            });

            // If we've reached the end, mark the flag
            if (progress >= 0.99 && self.direction === 1) {
              blueReached = true;
            }
          }
        },
        scrub: true
      });

    }, 500)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isReady, isMobile])

  // Responsive logo size
  const imgSize = isMobile ? '150px' : '280px'

  return (
    <img
      ref={logoRef}
      src="/logodilliwale.svg"
      alt="Floating Dilli Wale Logo"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: imgSize,
        height: 'auto',
        pointerEvents: 'none',
        zIndex: 50,
        opacity: 0
      }}
    />
  )
}