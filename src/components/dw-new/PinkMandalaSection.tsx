import React, { useEffect, useRef } from 'react';

const TOP_WAVE_DESKTOP =
  'M0,0 L1200,0 L1200,28 Q1150,70 1100,28 Q1050,0 1000,30 Q950,68 900,28 Q850,0 800,30 Q750,68 700,28 Q650,0 600,30 Q550,68 500,28 Q450,0 400,30 Q350,68 300,28 Q250,0 200,30 Q150,68 100,28 Q50,0 0,30 Z';

const TOP_WAVE_MOBILE =
  'M0,0 L1200,0 L1200,24 Q1050,68 900,28 Q750,0 600,28 Q450,68 300,28 Q150,0 0,28 Z';

const BOTTOM_WAVE_DESKTOP =
  'M0,70 L1200,70 L1200,42 Q1150,0 1100,42 Q1050,70 1000,40 Q950,0 900,42 Q850,70 800,40 Q750,0 700,42 Q650,70 600,40 Q550,0 500,42 Q450,70 400,40 Q350,0 300,42 Q250,70 200,40 Q150,0 100,42 Q50,70 0,40 Z';

const BOTTOM_WAVE_MOBILE =
  'M0,70 L1200,70 L1200,46 Q1050,0 900,42 Q750,70 600,42 Q450,0 300,42 Q150,70 0,42 Z';

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

        // Inner petal
        ctx.rotate(Math.PI / petals);
        ctx.beginPath();
        ctx.ellipse(r * 0.28, 0, r * 0.11, r * 0.06, 0, 0, 2 * Math.PI);
        ctx.fillStyle = softColor;
        ctx.fill();

        ctx.restore();
      }

      const rings = 4;
      for (let i = 1; i <= rings; i++) {
        const ringRadius = (r * i) / rings;
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = i % 2 === 0 ? softColor : mainColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

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

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          let x = col * tileW;
          const y = row * tileH;

          if (Math.abs(row) % 2 === 1) {
            x += tileW / 2;
          }

          drawMandala(x, y, radius);
        }
      }
    };

    const handleResize = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawPattern();
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
      <div className="absolute top-[-1px] left-0 w-full z-[3] h-[50px] md:h-[70px]">
        {/* Mobile - fewer, bigger waves */}
        <svg
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
          className="block md:hidden w-full h-full"
          aria-hidden="true"
        >
          <path d={TOP_WAVE_MOBILE} fill="#FFC300" />
        </svg>

        {/* Desktop - existing detailed waves */}
        <svg
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
          className="hidden md:block w-full h-full"
          aria-hidden="true"
        >
          <path d={TOP_WAVE_DESKTOP} fill="#FFC300" />
        </svg>
      </div>

      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Pink Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#c40878] opacity-[0.68]" />

      {/* Content Area */}
      <div className="relative z-[2] flex min-h-[85vh] items-center justify-center px-6 py-[120px] md:py-[180px]">
        <div className="pink-content w-full" />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-[-1px] left-0 w-full z-[3] h-[50px] md:h-[70px]">
        {/* Mobile - fewer, bigger waves */}
        <svg
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
          className="block md:hidden w-full h-full"
          aria-hidden="true"
        >
          <path d={BOTTOM_WAVE_MOBILE} fill="#5BC8E8" />
        </svg>

        {/* Desktop - existing detailed waves */}
        <svg
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
          className="hidden md:block w-full h-full"
          aria-hidden="true"
        >
          <path d={BOTTOM_WAVE_DESKTOP} fill="#5BC8E8" />
        </svg>
      </div>
    </section>
  );
};

export default PinkMandalaSection;