'use client';
import { useState, useEffect } from 'react';
import { notifyLoaderFinished } from './dw/SplitText';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Notify all SplitText components that loader is done
      notifyLoaderFinished();
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-root">
      <div className="loader-wrap">

        {/* WHEEL */}
        <div className="dw-wheel">
          <img src="/wheels.svg" alt="Rotating Wheel" className="w-full h-full" />
        </div>

        {/* Brand name */}
        {/* <div className="loader-name">DILLI WALE</div> */}

        {/* Bouncing dots */}
        <div className="loader-dots">
          <span className="dw-dot dw-dot-1" />
          <span className="dw-dot dw-dot-2" />
          <span className="dw-dot dw-dot-3" />
        </div>

      </div>
    </div>
  );
}
