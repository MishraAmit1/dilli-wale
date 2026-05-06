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
          <div className="dw-inner-rim" />

          {/* 12 spokes — full 360° every 30deg */}
          <div className="dw-spoke" style={{ transform: 'rotate(0deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(30deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(60deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(90deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(120deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(150deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(180deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(210deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(240deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(270deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(300deg)' }} />
          <div className="dw-spoke" style={{ transform: 'rotate(330deg)' }} />

          {/* Hub with heart */}
          <div className="dw-hub">♥</div>
        </div>

        {/* Brand name */}
        <div className="loader-name">DILLI WALE</div>

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
