'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check element under cursor for color detection
      const element = document.elementFromPoint(mouseX, mouseY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;

        // Check if hovering over teal backgrounds (#067E85 or similar)
        const isTealBg = bgColor.includes('6, 126, 133') ||
          bgColor.includes('rgb(6, 126') ||
          element.classList.contains('bg-dw-teal');

        setIsHovering(isTealBg);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth animation loop
    let animationId: number;
    const animate = () => {
      // Follow with slight delay (4-5px offset effect)
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-ball"
      style={{
        position: 'fixed',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: isHovering ? '#FFC300' : '#067E85',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        transition: 'background-color 0.15s ease',
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
