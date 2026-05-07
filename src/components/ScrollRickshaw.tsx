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

      // Footer ko multiple ways se dhoondte hain
      const footer = document.querySelector('footer') ||
        document.querySelector('[class*="footer"]') ||
        document.querySelector('.footer') as HTMLElement

      if (!pinkSection || !blueSection) {
        console.warn('Sections not found - retrying...', { pinkSection, blueSection })
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 1000)
        return
      }

      ScrollTrigger.refresh()

      console.log('All sections found:', {
        pinkSection,
        blueSection,
        ambienceSection,
        footer,
        footerFound: !!footer,
        isMobile
      })

      // 1. Initial setup - start at hero position
      gsap.set(el, {
        left: '50vw',
        top: isMobile ? '70vh' : '72vh',
        xPercent: -50,
        yPercent: -50,
        scale: isMobile ? 0.9 : 1,
        rotation: 0,
        opacity: 0
      })

      // 2. Show when scroll starts
      gsap.to(el, {
        opacity: 1,
        scrollTrigger: {
          trigger: document.body,
          start: isMobile ? '5px top' : '10px top',
          end: '+=50',
          scrub: isMobile ? 0.3 : 0.5,
          immediateRender: false,
        }
      })

      // 3. FIRST MOVEMENT: Direct path to LEFT side of pink section
      gsap.to(el, {
        left: isMobile ? '30vw' : '20vw',
        top: '50vh',
        scale: isMobile ? 0.8 : 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: pinkSection,
          start: 'top bottom',
          end: 'top center',
          scrub: isMobile ? 1 : 1.5,
          immediateRender: false,
        }
      })

      // 4. SECOND MOVEMENT: Pink left to Blue RIGHT (80vw)
      gsap.to(el, {
        left: isMobile ? '70vw' : '80vw',
        top: '50vh',
        scale: isMobile ? 0.8 : 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: blueSection,
          start: 'top bottom',
          end: 'center center',
          scrub: isMobile ? 0.8 : 1,
          immediateRender: false,
        }
      })

      // 5. THIRD MOVEMENT: Blue right to BigJharokha CENTER (inside dome arch)
      if (ambienceSection) {
        gsap.to(el, {
          left: isMobile ? '30vw' : '28vw',
          top: isMobile ? '42vh' : '45vh',
          scale: isMobile ? 0.8 : 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ambienceSection,
            start: 'top bottom',
            end: 'top center',
            scrub: isMobile ? 0.8 : 1,
            immediateRender: false,
            onEnter: () => console.log('Ambience section entered'),
            onLeave: () => console.log('Ambience section left'),
          }
        })
      }

      // 6. FOURTH MOVEMENT: Gallery to Footer LEFT (with shrinking)
      // Footer trigger ko ambienceSection ke end se start karte hain
      if (ambienceSection) {
        gsap.to(el, {
          left: isMobile ? '18vw' : '12vw',
          top: isMobile ? '88vh' : '85vh',
          scale: isMobile ? 0.45 : 0.55,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ambienceSection,
            start: 'bottom center', // Ambience section ke bottom se start
            end: 'bottom top', // Jab ambience pura upar chala jaye
            scrub: isMobile ? 0.8 : 1,
            immediateRender: false,
            onEnter: () => console.log('Moving to footer position'),
            onUpdate: (self) => {
              console.log('Footer animation progress:', self.progress)
            }
          }
        })
      }

      // Alternative: Agar footer mil gaya ho to usse bhi trigger kar sakte hain
      if (footer) {
        gsap.to(el, {
          left: isMobile ? '18vw' : '12vw',
          top: isMobile ? '88vh' : '85vh',
          scale: isMobile ? 0.45 : 0.55,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: footer,
            start: 'top 80%', // Footer jab 80% visible ho
            end: 'top 50%',
            scrub: isMobile ? 0.8 : 1,
            immediateRender: false,
            onEnter: () => console.log('Footer trigger activated'),
          }
        })

        // Final pin at footer
        ScrollTrigger.create({
          trigger: footer,
          start: 'top 50%',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (self.progress >= 0.5) {
              gsap.set(el, {
                left: isMobile ? '18vw' : '12vw',
                top: isMobile ? '88vh' : '85vh',
                scale: isMobile ? 0.45 : 0.55,
              })
            }
          },
          scrub: true,
        })
      }

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
        filter: isMobile ? 'brightness(1.5) contrast(0.8)' : 'none'
      }}
    />
  )
}