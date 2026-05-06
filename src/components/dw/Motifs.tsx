export const Paisley = ({ color = "#FF5500", size = 60 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 85 C 10 65, 15 30, 45 20 C 75 12, 90 35, 80 55 C 72 70, 55 72, 50 60 C 46 50, 55 42, 65 45"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="60" cy="50" r="5" fill="#FFC300" />
    <circle cx="38" cy="65" r="3" fill={color} />
  </svg>
);

export const StarMotif = ({ color = "#067E85", size = 30 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <ellipse key={a} cx="20" cy="8" rx="3" ry="7" fill={color} transform={`rotate(${a} 20 20)`} />
    ))}
    <circle cx="20" cy="20" r="3" fill="#FFC300" />
  </svg>
);

export const Tassel = ({ color = "#C40878", size = 50 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 30 50" fill="none">
    <circle cx="15" cy="6" r="5" fill="#FFC300" stroke="#1A1A1A" strokeWidth="1.5" />
    <line x1="15" y1="11" x2="15" y2="18" stroke="#1A1A1A" strokeWidth="1.5" />
    {[6, 10, 14, 18, 22].map((x, i) => (
      <line key={i} x1={x} y1="18" x2={x} y2={42 + (i % 2) * 4} stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    ))}
  </svg>
);

export const Heart = ({ color = "#FF5500", size = 30 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M16 28 C 4 18, 4 8, 12 8 C 14 8, 16 10, 16 12 C 16 10, 18 8, 20 8 C 28 8, 28 18, 16 28 Z"
      fill={color}
      stroke="#1A1A1A"
      strokeWidth="1.5"
    />
    <path d="M16 22 C 12 18, 12 14, 14 14 C 16 14, 16 16, 16 16 C 16 16, 16 14, 18 14 C 20 14, 20 18, 16 22Z" fill="#FFC300" />
  </svg>
);

export const Diya = ({ color = "#FF5500", size = 40 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M8 26 Q 20 38 32 26 Z" fill={color} stroke="#1A1A1A" strokeWidth="1.5" />
    <path d="M20 22 Q 18 16 20 10 Q 22 16 20 22 Z" fill="#FFC300" />
  </svg>
);

export const Rickshaw = ({ size = 420 }: { size?: number }) => (
  <svg width={size} height={size * 0.66} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Canopy */}
    <path
      d="M100 220 Q 95 80 200 70 Q 280 65 280 200 L 280 240 L 100 240 Z"
      fill="#067E85"
      stroke="#1A1A1A"
      strokeWidth="3"
    />
    <path d="M195 70 Q 200 50 205 70" stroke="#FFC300" strokeWidth="3" fill="none" />
    {/* Canopy decoration */}
    <path
      d="M150 130 C 130 110, 145 80, 175 90 C 200 98, 200 130, 175 140 C 160 145, 155 135, 165 130"
      stroke="#FF5500"
      strokeWidth="3"
      fill="none"
    />
    <circle cx="170" cy="115" r="4" fill="#FFC300" />
    {/* Dots on canopy */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <circle key={i} cx={110 + i * 30} cy="225" r="3" fill="#FFC300" />
    ))}
    {/* Tassel */}
    <circle cx="100" cy="220" r="6" fill="#FFC300" stroke="#1A1A1A" strokeWidth="2" />
    {[0, 1, 2, 3].map((i) => (
      <line key={i} x1={92 + i * 5} y1="226" x2={92 + i * 5} y2={260 + (i % 2) * 5} stroke="#FF5500" strokeWidth="3" strokeLinecap="round" />
    ))}
    {/* Frame */}
    <path d="M280 240 L 380 180 L 460 240" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M280 240 L 360 300" stroke="#FF5500" strokeWidth="8" strokeLinecap="round" />
    <path d="M460 240 L 380 300 L 360 300" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Handlebar */}
    <path d="M460 240 L 500 200 L 530 200" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Seat */}
    <path d="M340 175 L 410 175 L 395 195 L 355 195 Z" fill="#067E85" stroke="#1A1A1A" strokeWidth="2" />
    {/* Wheels */}
    <circle cx="180" cy="320" r="55" fill="none" stroke="#067E85" strokeWidth="6" />
    <circle cx="180" cy="320" r="8" fill="#FF5500" />
    <path d="M173 312 L 180 320 L 173 328 L 187 320 Z" fill="#FFC300" />
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="180"
        y1="320"
        x2={180 + Math.cos((i * Math.PI) / 6) * 50}
        y2={320 + Math.sin((i * Math.PI) / 6) * 50}
        stroke="#FFC300"
        strokeWidth="2"
      />
    ))}
    <circle cx="430" cy="320" r="55" fill="none" stroke="#067E85" strokeWidth="6" />
    <circle cx="430" cy="320" r="8" fill="#FF5500" />
    <path d="M423 312 L 430 320 L 423 328 L 437 320 Z" fill="#FFC300" />
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="430"
        y1="320"
        x2={430 + Math.cos((i * Math.PI) / 6) * 50}
        y2={320 + Math.sin((i * Math.PI) / 6) * 50}
        stroke="#FFC300"
        strokeWidth="2"
      />
    ))}
    {/* Pedal */}
    <circle cx="320" cy="320" r="14" fill="#067E85" stroke="#1A1A1A" strokeWidth="2" />
    <circle cx="320" cy="320" r="4" fill="#FFC300" />
  </svg>
);
