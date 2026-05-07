import React, { useEffect, useRef } from 'react';

const SkyBlueSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawDiamondMandala = (cx: number, cy: number, size: number) => {
      const color = 'rgba(255,255,255,0.15)';

      // Diamond
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx + size, cy);
      ctx.lineTo(cx, cy + size);
      ctx.lineTo(cx - size, cy);
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner circle
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.6, 0, 2 * Math.PI);
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // 8 petals
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

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawPattern = () => {
      const W = canvas.width;
      const H = canvas.height;
      const tileW = 280;
      const tileH = 280;
      const size = 90;

      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / tileW) + 2;
      const rows = Math.ceil(H / tileH) + 2;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          let x = c * tileW;
          let y = r * tileH;

          // Staggered rows (odd rows offset by tileW/2)
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
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawPattern();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-[#5BC8E8]">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[0]"
      />

      {/* Sky Overlay */}
      <div className="absolute inset-0 bg-[#5BC8E8] opacity-[0.75] z-[1]" />

      {/* Gold Mandala Left - Detailed Indian Style */}
      <svg className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-[2] w-[180px] opacity-[0.9]" viewBox="0 0 180 360" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="50%" stopColor="#C9A020" />
            <stop offset="100%" stopColor="#9A7B1A" />
          </linearGradient>
        </defs>

        <g transform="translate(90, 180)">
          {/* OUTER RING - Large petals */}
          <g stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" opacity="0.95">
            <ellipse cx="0" cy="-140" rx="18" ry="35" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(30)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(60)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(90)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(120)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(150)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(180)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(210)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(240)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(270)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(300)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(330)" />
          </g>

          {/* SECOND RING - Curved paisley style */}
          <g stroke="url(#goldGrad)" strokeWidth="2" fill="none" opacity="0.9">
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(30)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(60)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(90)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(120)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(150)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(180)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(210)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(240)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(270)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(300)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(330)" />
          </g>

          {/* THIRD RING - Circles */}
          <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.85">
            <circle cx="0" cy="-75" r="12" />
            <circle cx="0" cy="-75" r="12" transform="rotate(30)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(60)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(90)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(120)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(150)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(180)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(210)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(240)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(270)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(300)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(330)" />
          </g>

          {/* FOURTH RING - Diamond shapes */}
          <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.8">
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(30)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(60)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(90)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(120)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(150)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(180)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(210)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(240)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(270)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(300)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(330)" />
          </g>

          {/* FIFTH RING - Main circles */}
          <g stroke="url(#goldGrad)" strokeWidth="2" fill="none" opacity="0.9">
            <circle r="55" />
            <circle r="45" />
            <circle r="35" />
          </g>

          {/* INNER PETALS - 8 fold */}
          <g stroke="url(#goldGrad)" strokeWidth="1.8" fill="none" opacity="0.85">
            <ellipse cx="0" cy="-25" rx="10" ry="18" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(45)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(90)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(135)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(180)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(225)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(270)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(315)" />
          </g>

          {/* CENTER - Detailed flower */}
          <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.9">
            <circle r="20" />
            <circle r="14" />
            <circle r="8" />
            <circle r="4" fill="url(#goldGrad)" stroke="none" />
          </g>

          {/* Decorative dots between petals */}
          <g fill="url(#goldGrad)" opacity="0.85">
            <circle cx="0" cy="-120" r="4" />
            <circle cx="0" cy="-120" r="4" transform="rotate(30)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(60)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(90)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(120)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(150)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(180)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(210)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(240)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(270)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(300)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(330)" />
          </g>

          {/* Swirl decorations */}
          <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" opacity="0.7">
            <path d="M25,-15 Q35,-25 45,-20" />
            <path d="M25,-15 Q35,-25 45,-20" transform="rotate(90)" />
            <path d="M25,-15 Q35,-25 45,-20" transform="rotate(180)" />
            <path d="M25,-15 Q35,-25 45,-20" transform="rotate(270)" />
          </g>
        </g>
      </svg>

      {/* Gold Mandala Right (mirrored) */}
      <svg className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 scale-x-[-1] z-[2] w-[180px] opacity-[0.9]" viewBox="0 0 180 360" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="50%" stopColor="#C9A020" />
            <stop offset="100%" stopColor="#9A7B1A" />
          </linearGradient>
        </defs>

        <g transform="translate(90, 180)">
          <g stroke="url(#goldGrad2)" strokeWidth="2.5" fill="none" opacity="0.95">
            <ellipse cx="0" cy="-140" rx="18" ry="35" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(30)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(60)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(90)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(120)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(150)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(180)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(210)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(240)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(270)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(300)" />
            <ellipse cx="0" cy="-140" rx="18" ry="35" transform="rotate(330)" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="2" fill="none" opacity="0.9">
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(30)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(60)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(90)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(120)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(150)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(180)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(210)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(240)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(270)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(300)" />
            <path d="M0,-105 Q15,-85 0,-70 Q-15,-85 0,-105" transform="rotate(330)" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="1.5" fill="none" opacity="0.85">
            <circle cx="0" cy="-75" r="12" />
            <circle cx="0" cy="-75" r="12" transform="rotate(30)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(60)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(90)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(120)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(150)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(180)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(210)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(240)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(270)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(300)" />
            <circle cx="0" cy="-75" r="12" transform="rotate(330)" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="1.5" fill="none" opacity="0.8">
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(30)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(60)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(90)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(120)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(150)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(180)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(210)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(240)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(270)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(300)" />
            <path d="M0,-50 L8,-42 L0,-34 L-8,-42 Z" transform="rotate(330)" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="2" fill="none" opacity="0.9">
            <circle r="55" />
            <circle r="45" />
            <circle r="35" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="1.8" fill="none" opacity="0.85">
            <ellipse cx="0" cy="-25" rx="10" ry="18" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(45)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(90)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(135)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(180)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(225)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(270)" />
            <ellipse cx="0" cy="-25" rx="10" ry="18" transform="rotate(315)" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="1.5" fill="none" opacity="0.9">
            <circle r="20" />
            <circle r="14" />
            <circle r="8" />
            <circle r="4" fill="url(#goldGrad2)" stroke="none" />
          </g>

          <g fill="url(#goldGrad2)" opacity="0.85">
            <circle cx="0" cy="-120" r="4" />
            <circle cx="0" cy="-120" r="4" transform="rotate(30)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(60)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(90)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(120)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(150)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(180)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(210)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(240)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(270)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(300)" />
            <circle cx="0" cy="-120" r="4" transform="rotate(330)" />
          </g>

          <g stroke="url(#goldGrad2)" strokeWidth="1.2" fill="none" opacity="0.7">
            <path d="M25,-15 Q35,-25 45,-20" />
            <path d="M25,-15 Q35,-25 45,-20" transform="rotate(90)" />
            <path d="M25,-15 Q35,-25 45,-20" transform="rotate(180)" />
            <path d="M25,-15 Q35,-25 45,-20" transform="rotate(270)" />
          </g>
        </g>
      </svg>

      {/* Content Area */}
      <div className="relative z-[4] min-h-[70vh] px-6 py-[90px] flex items-center justify-center">
        <div className="sky-content" />
      </div>
    </section>
  );
};

export default SkyBlueSection;
