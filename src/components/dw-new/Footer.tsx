import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrap" style={{ background: '#ff5500', width: '100%', fontFamily: 'sans-serif', overflow: 'hidden', position: 'relative' }}>
      {/* Wave Top */}
      <svg className="wave-top" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px', marginBottom: '-2px' }}>
        <path d="M0,60 L1200,60 L1200,18 Q1150,60 1100,18 Q1050,0 1000,20 Q950,48 900,18 Q850,0 800,20 Q750,48 700,18 Q650,0 600,20 Q550,48 500,18 Q450,0 400,20 Q350,48 300,18 Q250,0 200,20 Q150,48 100,18 Q50,0 0,20 Z" fill="#ff5500" />
      </svg>

      {/* Main Footer Content */}
      <div className="main-footer" style={{ background: '#ff5500', padding: '36px 28px 20px', position: 'relative' }}>
        {/* Mandala Background */}
        <svg className="mandala-bg" width="280" height="280" viewBox="0 0 180 180" style={{ position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%)', opacity: '0.07', pointerEvents: 'none' }}>
          <g transform="translate(90,90)" stroke="#fff" fill="none">
            <circle r="80" strokeWidth="1.5" />
            <circle r="65" strokeWidth="1" />
            <circle r="50" strokeWidth="1" />
            <circle r="35" />
            <circle r="20" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(45)" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(90)" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(135)" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(180)" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(225)" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(270)" />
            <ellipse cx="0" cy="-70" rx="12" ry="22" transform="rotate(315)" />
          </g>
        </svg>

        {/* Footer Grid - Skeleton Structure */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '24px', marginBottom: '28px' }}>
          {/* Logo Column - Skeleton */}
          <div className="logo-col" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Logo Placeholder */}
            <div style={{ width: '60px', height: '38px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
            {/* Brand Name Placeholder */}
            <div style={{ width: '150px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
            {/* Subtitle Placeholder */}
            <div style={{ width: '120px', height: '11px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
            {/* Tagline Placeholder */}
            <div style={{ width: '160px', height: '20px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
            {/* Social Buttons - Skeleton */}
            <div className="social-row" style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
            </div>
          </div>

          {/* Quick Links - Skeleton */}
          <div>
            {/* Title Placeholder */}
            <div style={{ width: '80px', height: '11px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px', marginBottom: '14px' }}></div>
            {/* Links Placeholders */}
            <div className="col-links" style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ width: '40px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              <div style={{ width: '60px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              <div style={{ width: '35px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              <div style={{ width: '70px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              <div style={{ width: '35px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
            </div>
          </div>

          {/* Contact - Skeleton */}
          <div>
            {/* Title Placeholder */}
            <div style={{ width: '60px', height: '11px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px', marginBottom: '14px' }}></div>
            {/* Contact Placeholders */}
            <div className="col-links" style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '14px', height: '14px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }}></div>
                <div style={{ width: '100px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '14px', height: '14px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }}></div>
                <div style={{ width: '110px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '14px', height: '14px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }}></div>
                <div style={{ width: '120px', height: '13px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '0 0 16px' }}></div>

        {/* Footer Bottom - Skeleton */}
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', paddingBottom: '24px' }}>
          <div style={{ width: '180px', height: '11px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
          <div style={{ width: '140px', height: '11px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
