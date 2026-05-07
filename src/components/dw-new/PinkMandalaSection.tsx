import React, { useEffect, useRef } from 'react';

const PinkMandalaSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawMandala = (cx: number, cy: number, r: number) => {
      const mainColor = 'rgba(255,255,255,0.50)';
      const softColor = 'rgba(255,190,225,0.38)';
      const petals = 16;

      // Draw petals
      for (let i = 0; i < petals; i++) {
        const angle = (i * 2 * Math.PI) / petals;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        // Outer petal
        ctx.beginPath();
        ctx.ellipse(r * 0.55, 0, r * 0.18, r * 0.09, 0, 0, 2 * Math.PI);
        ctx.fillStyle = softColor;
        ctx.fill();

        // Inner petal (rotated by PI/petals)
        ctx.rotate(Math.PI / petals);
        ctx.beginPath();
        ctx.ellipse(r * 0.28, 0, r * 0.11, r * 0.06, 0, 0, 2 * Math.PI);
        ctx.fillStyle = softColor;
        ctx.fill();

        ctx.restore();
      }

      // Draw concentric rings
      const rings = 4;
      for (let i = 1; i <= rings; i++) {
        const ringRadius = (r * i) / rings;
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = i % 2 === 0 ? softColor : mainColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.08, 0, 2 * Math.PI);
      ctx.fillStyle = mainColor;
      ctx.fill();
    };

    const drawPattern = () => {
      const W = canvas.width;
      const H = canvas.height;
      const tileW = 165;
      const tileH = 165;
      const radius = 62;

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

          drawMandala(x, y, radius);
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
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-[#c40878]">
      {/* Top Wave */}
      <div className="absolute top-[-1px] left-0 w-full z-[3]">
        <svg viewBox="0 0 1200 70" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '70px' }}>
          <path
            d="M0,0 L1200,0 L1200,28 Q1150,70 1100,28 Q1050,0 1000,30 Q950,68 900,28 Q850,0 800,30 Q750,68 700,28 Q650,0 600,30 Q550,68 500,28 Q450,0 400,30 Q350,68 300,28 Q250,0 200,30 Q150,68 100,28 Q50,0 0,30 Z"
            fill="#FFC300"
          />
        </svg>
      </div>

      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-[#c40878] opacity-[0.68] z-[1]" />

      {/* Content Area */}
      <div className="relative z-[2] min-h-[85vh] px-6 py-[180px] flex items-center justify-center">
        <div className="pink-content w-full" />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-[-1px] left-0 w-full z-[3]">
        <svg viewBox="0 0 1200 70" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '70px' }}>
          <path
            d="M0,70 L1200,70 L1200,42 Q1150,0 1100,42 Q1050,70 1000,40 Q950,0 900,42 Q850,70 800,40 Q750,0 700,42 Q650,70 600,40 Q550,0 500,42 Q450,70 400,40 Q350,0 300,42 Q250,70 200,40 Q150,0 100,42 Q50,70 0,40 Z"
            fill="#5BC8E8"
          />
        </svg>
      </div>
    </section>
  );
};

export default PinkMandalaSection;
