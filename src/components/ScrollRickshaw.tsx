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
      // Find the sections with better selectors
      const pinkSection = document.querySelector('section[class*="bg-[#c40878]"], section.bg-\\[\\#c40878\\]') as HTMLElement
      const blueSection = document.querySelector('section[class*="bg-[#5BC8E8]"], section.bg-\\[\\#5BC8E8\\]') as HTMLElement

      if (!pinkSection || !blueSection) {
        console.warn('Sections not found - retrying...', { pinkSection, blueSection })
        // Retry once after a longer delay
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 1000)
        return
      }

      // Refresh ScrollTrigger to ensure mobile viewport is calculated correctly
      ScrollTrigger.refresh()

      console.log('Sections found:', { pinkSection, blueSection, isMobile })

      // 1. Initial setup - start at hero position
      gsap.set(el, {
        left: '50vw',
        top: isMobile ? '70vh' : '72vh', // Adjusted for mobile viewport
        xPercent: -50,
        yPercent: -50,
        scale: isMobile ? 1.1 : 1, // Bigger on mobile
        rotation: 0,
        opacity: 0 // Hidden initially
      })

      // 2. Show when scroll starts
      gsap.to(el, {
        opacity: 1,
        scrollTrigger: {
          trigger: document.body,
          start: isMobile ? '5px top' : '10px top', // Earlier start on mobile
          end: '+=50',
          scrub: isMobile ? 0.3 : 0.5, // Faster response on mobile
          immediateRender: false,
          onToggle: (self) => {
            console.log(`ScrollRickshaw: ${isMobile ? 'Mobile' : 'Desktop'} - Animation ${self.isActive ? 'activated' : 'deactivated'}`)
          }
        }
      })

      // 3. FIRST MOVEMENT: Direct path to LEFT side of pink section
      gsap.to(el, {
        left: isMobile ? '30vw' : '20vw', // Less extreme left position on mobile
        top: '50vh', // Center of viewport
        scale: isMobile ? 1.0 : 1, // Bigger on mobile during movement
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: pinkSection,
          start: 'top bottom', // Start when pink section appears at bottom
          end: 'top center',   // End when pink section is at center
          scrub: isMobile ? 1 : 1.5, // Faster on mobile
          immediateRender: false,
          onToggle: (self) => {
            console.log(`ScrollRickshaw: ${isMobile ? 'Mobile' : 'Desktop'} - Pink section animation ${self.isActive ? 'activated' : 'deactivated'}`)
          }
        }
      })

      // 4. FINAL MOVEMENT: To center of blue section with instant rotation
      //    and then STICK there
      let blueReached = false; // Flag to track if blue section has been reached

      // First, set up the instant rotation when blue section comes into view
      ScrollTrigger.create({
        trigger: blueSection,
        start: 'top bottom-=10%',  // Just before blue section enters view
        onEnter: () => {
          // Instantly rotate 180 degrees (no animation)
          // gsap.set(el, { rotation: 180 });
        }
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

            // Starting position (left of pink section) - mobile adjusted
            const startX = isMobile ? 30 : 20;
            const startY = 50;

            // Ending position (center of blue section)
            const endX = 50;
            const endY = 50;

            // Calculate current position
            const currX = startX + (endX - startX) * progress;
            const currY = startY + (endY - startY) * progress;

            // Apply position with mobile-specific scale
            gsap.set(el, {
              left: `${currX}vw`,
              top: `${currY}vh`,
              scale: isMobile ? 0.9 + (0.2 * progress) : 1, // Bigger on mobile during movement
            });

            // Log progress on mobile for debugging
            if (isMobile && Math.floor(progress * 10) % 2 === 0) {
              console.log(`ScrollRickshaw: Mobile - Blue section progress: ${progress.toFixed(2)}, Position: (${currX.toFixed(1)}vw, ${currY.toFixed(1)}vh)`);
            }

            // If we've reached the end, mark the flag
            if (progress >= 0.99 && self.direction === 1) {
              blueReached = true;
              console.log(`ScrollRickshaw: ${isMobile ? 'Mobile' : 'Desktop'} - Blue section reached and stuck`);
            }
          }
        },
        scrub: isMobile ? 0.8 : true, // Faster response on mobile
        onToggle: (self) => {
          console.log(`ScrollRickshaw: ${isMobile ? 'Mobile' : 'Desktop'} - Blue section animation ${self.isActive ? 'activated' : 'deactivated'}`)
        }
      });

      // Add mobile-specific viewport refresh
      if (isMobile) {
        const handleOrientationChange = () => {
          setTimeout(() => {
            ScrollTrigger.refresh()
          }, 500)
        }

        window.addEventListener('orientationchange', handleOrientationChange)

        // Also refresh on resize for mobile
        const handleMobileResize = () => {
          setTimeout(() => {
            ScrollTrigger.refresh()
          }, 300)
        }

        window.addEventListener('resize', handleMobileResize)

        // Cleanup
        return () => {
          ScrollTrigger.getAll().forEach(t => t.kill())
          window.removeEventListener('orientationchange', handleOrientationChange)
          window.removeEventListener('resize', handleMobileResize)
        }
      }

    }, 500)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isReady, isMobile])

  // Responsive logo size - adjusted for mobile
  const imgSize = isMobile ? '190px' : '280px'

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
        opacity: 0,
        filter: isMobile ? 'brightness(1.3) contrast(0.9)' : 'none' // Make lighter on mobile
      }}
    />
  )
}