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

    setTimeout(() => {
      const pinkSection = document.querySelector('section[class*="bg-[#c40878]"], section.bg-\\[\\#c40878\\]') as HTMLElement
      const blueSection = document.querySelector('section[class*="bg-[#5BC8E8]"], section.bg-\\[\\#5BC8E8\\]') as HTMLElement
      const ambienceSection = document.querySelector('section[class*="bg-[#FFC300"]') as HTMLElement
      const footer = document.querySelector('footer') || document.querySelector('[class*="footer"]') as HTMLElement

      if (!pinkSection || !blueSection) {
        console.warn('Sections not found - retrying...')
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 1000)
        return
      }

      ScrollTrigger.refresh()

      // Initial setup
      gsap.set(el, {
        left: '50vw',
        top: isMobile ? '70vh' : '72vh',
        xPercent: -50,
        yPercent: -50,
        scale: isMobile ? 0.9 : 1,
        rotation: 0,
        opacity: 0
      })

      // Create a single smooth timeline
      const tl = gsap.timeline()

      // Add all movements to the timeline
      tl.to(el, {
        opacity: 1,
        duration: 0.5,
      })
        .to(el, {
          left: isMobile ? '30vw' : '20vw',
          top: '50vh',
          scale: isMobile ? 0.8 : 1,
          duration: 2,
          ease: "none", // Linear for smooth scrubbing
        })
        .to(el, {
          left: isMobile ? '70vw' : '80vw',
          top: '50vh',
          scale: isMobile ? 0.8 : 1,
          duration: 2,
          ease: "none",
        })
        .to(el, {
          left: isMobile ? '30vw' : '28vw',
          top: isMobile ? '42vh' : '45vh',
          scale: isMobile ? 0.8 : 1,
          duration: 2,
          ease: "none",
        })
        .to(el, {
          left: isMobile ? '18vw' : '12vw',
          top: isMobile ? '88vh' : '85vh',
          scale: isMobile ? 0.45 : 0.55,
          duration: 2,
          ease: "none",
        })

      // Single ScrollTrigger for the entire timeline
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Single smooth scrub value
        animation: tl,
        onUpdate: (self) => {
          // Progressive triggers based on scroll progress
          const progress = self.progress

          if (progress < 0.05) {
            // Initial fade in
          } else if (progress < 0.3) {
            // Moving to pink section
          } else if (progress < 0.5) {
            // Moving to blue section  
          } else if (progress < 0.75) {
            // Moving to gallery
          } else {
            // Moving to footer
          }
        }
      })

      if (isMobile) {
        const handleOrientationChange = () => {
          setTimeout(() => {
            ScrollTrigger.refresh()
          }, 500)
        }

        window.addEventListener('orientationchange', handleOrientationChange)

        const handleMobileResize = () => {
          setTimeout(() => {
            ScrollTrigger.refresh()
          }, 300)
        }

        window.addEventListener('resize', handleMobileResize)

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

  const imgSize = isMobile ? '170px' : '280px'

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
        willChange: 'transform, opacity',
      }}
    />
  )
}