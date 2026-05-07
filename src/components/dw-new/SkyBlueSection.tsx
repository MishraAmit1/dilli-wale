import React, { useEffect, useRef } from 'react';
import WaveDivider from '@/components/dw/WaveDivider';

const SkyBlueSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawDiamondMandala = (cx: number, cy: number, size: number) => {
      const color = 'rgba(255,255,255,0.15)';

      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx + size, cy);
      ctx.lineTo(cx, cy + size);
      ctx.lineTo(cx - size, cy);
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.6, 0, 2 * Math.PI);
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      for (let i = 0; i < 8; i++) {
        const angle = (i * 2 * Math.PI) / 8;
        const petalX = cx + Math.cos(angle) * size * 0.35;
        const petalY = cy + Math.sin(angle) * size * 0.35;

        ctx.save();
        ctx.translate(petalX, petalY);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.08, size * 0.15, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255,255,255,0.10)';
        ctx.fill();

        ctx.restore();
      }

      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawPattern = () => {
      const W = canvas.width;
      const H = canvas.height;

      const isMobile = W < 768;
      const tileW = isMobile ? 180 : 280;
      const tileH = isMobile ? 180 : 280;
      const size = isMobile ? 60 : 90;

      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / tileW) + 2;
      const rows = Math.ceil(H / tileH) + 2;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          let x = c * tileW;
          const y = r * tileH;

          if (Math.abs(r) % 2 === 1) {
            x += tileW / 2;
          }

          drawDiamondMandala(x, y, size);
        }
      }
    };

    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = container.clientWidth;
        const h = container.clientHeight;

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        ctx.scale(dpr, dpr);
        drawPattern();
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    handleResize();

    return () => {
      observer.disconnect();
    };
  }, []);

  const MandalaContent = ({ gradId }: { gradId: string }) => (
    <>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D03F" />
          <stop offset="50%" stopColor="#C9A020" />
          <stop offset="100%" stopColor="#9A7B1A" />
        </linearGradient>
      </defs>

      <g transform="translate(90, 180)">
        <g stroke={`url(#${gradId})`} strokeWidth="2.5" fill="none" opacity="0.95">
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse key={`outer-${i}`} cx="0" cy="-140" rx="18" ry="35" transform={`rotate(${i * 30})`} />
          ))}
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="2" fill="none" opacity="0.9">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={`paisley-${i}`} d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform={`rotate(${i * 30})`} />
          ))}
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="1.5" fill="none" opacity="0.85">
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={`circ-${i}`} cx="0" cy="-75" r="12" transform={`rotate(${i * 30})`} />
          ))}
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="1.5" fill="none" opacity="0.8">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={`dia-${i}`} d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform={`rotate(${i * 30})`} />
          ))}
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="2" fill="none" opacity="0.9">
          <circle r="55" />
          <circle r="45" />
          <circle r="35" />
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="1.8" fill="none" opacity="0.85">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={`inner-${i}`} cx="0" cy="-25" rx="10" ry="18" transform={`rotate(${i * 45})`} />
          ))}
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="1.5" fill="none" opacity="0.9">
          <circle r="20" />
          <circle r="14" />
          <circle r="8" />
          <circle r="4" fill={`url(#${gradId})`} stroke="none" />
        </g>

        <g fill={`url(#${gradId})`} opacity="0.85">
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={`dot-${i}`} cx="0" cy="-120" r="4" transform={`rotate(${i * 30})`} />
          ))}
        </g>

        <g stroke={`url(#${gradId})`} strokeWidth="1.2" fill="none" opacity="0.7">
          {Array.from({ length: 4 }).map((_, i) => (
            <path key={`swirl-${i}`} d="M25,-15 Q35,-25 45,-20" transform={`rotate(${i * 90})`} />
          ))}
        </g>
      </g>
    </>
  );

  return (
    <>
      <section className="relative w-full min-h-[55vh] md:min-h-[70vh] overflow-hidden bg-[#5BC8E8]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-[0]"
        />

        <div className="absolute inset-0 bg-[#5BC8E8] opacity-[0.75] z-[1]" />

        {/* Gold Mandala Left */}
        <svg
          className="
            absolute top-1/2 -translate-y-1/2 z-[2]
            left-[-25px] md:left-[-20px]
            w-[90px] sm:w-[110px] md:w-[150px] lg:w-[180px]
            opacity-80 md:opacity-90
          "
          viewBox="0 0 180 360"
          xmlns="http://www.w3.org/2000/svg"
        >
          <MandalaContent gradId="goldGradL" />
        </svg>

        {/* Gold Mandala Right */}
        <svg
          className="
            absolute top-1/2 -translate-y-1/2 scale-x-[-1] z-[2]
            right-[-25px] md:right-[-20px]
            w-[90px] sm:w-[110px] md:w-[150px] lg:w-[180px]
            opacity-80 md:opacity-90
          "
          viewBox="0 0 180 360"
          xmlns="http://www.w3.org/2000/svg"
        >
          <MandalaContent gradId="goldGradR" />
        </svg>

        {/* Content */}
        <div className="
          relative z-[4] min-h-[55vh] md:min-h-[70vh]
          px-4 sm:px-6 md:px-8 lg:px-12
          py-[70px] md:py-[90px]
          flex items-center justify-center
        ">
          <div className="sky-content w-full max-w-7xl mx-auto" />
        </div>
      </section>

      {/* Bottom Wave */}
      <WaveDivider
        topColor="#5BC8E8"
        bottomColor="#FFC300"
      />
    </>
  );
};

export default SkyBlueSection;