"use client";
import { useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="loader-root">
      <div className="loader-wrap">
        {/* WHEEL */}
        <div className="dw-wheel">
          <img
            src="/wheels.svg"
            alt="Rotating Wheel"
            className="w-full h-full"
          />
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
