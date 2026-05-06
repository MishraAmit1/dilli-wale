const locations = [
  { name: "NEWCASTLE", x: 60, y: 35 },
  { name: "SUNDERLAND", x: 62, y: 38 },
  { name: "LEICESTER", x: 52, y: 62 },
  { name: "LEEDS", x: 54, y: 45 },
];

const footerLinks = [
  { label: "MENUS", href: "#menu" },
  { label: "DELIVERY", href: "#delivery" },
  { label: "COMMUNITY", href: "#community" },
  { label: "SHOP", href: "#shop" },
  { label: "CAREERS", href: "#careers" },
  { label: "ABOUT", href: "#about" },
];

export default function OurRestaurantLocations() {
  return (
    <section className="bg-dw-orange">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Map */}
        <div className="relative flex items-center justify-center bg-dw-orange p-8 md:p-12 lg:p-16 min-h-[400px] lg:min-h-[600px]">
          {/* UK Map SVG */}
          <svg
            viewBox="0 0 200 240"
            className="h-full w-full max-w-[400px] lg:max-w-[500px]"
            fill="none"
          >
            {/* Map background - UK shape simplified */}
            <path
              d="M80 200 L70 190 L60 180 L55 170 L50 160 L48 150 L45 140 L42 130 L40 120 L38 110 L35 100 L32 90 L30 80 L28 70 L25 60 L20 50 L15 40 L10 30 L8 25 L5 20 L8 15 L12 10 L20 8 L30 5 L40 3 L50 2 L60 1 L70 0 L80 1 L90 2 L100 3 L110 5 L120 8 L130 12 L140 18 L150 25 L160 35 L170 45 L175 55 L178 65 L180 75 L182 85 L185 95 L188 105 L190 115 L192 125 L194 135 L195 145 L196 155 L197 165 L198 175 L199 185 L200 195 L199 205 L198 215 L195 225 L190 235 L185 240 L180 238 L175 235 L170 232 L165 228 L160 224 L155 220 L150 216 L145 212 L140 208 L135 204 L130 200 L125 196 L120 192 L115 188 L110 184 L105 180 L100 176 L95 172 L90 168 L85 164 L80 160 L75 156 L70 152 L65 148 L60 144 L55 140 L50 136 L45 132 L40 128 L35 124 L30 120 L25 116 L20 112 L15 108 L10 104 L5 100 L2 95 L1 90 L0 85 L1 80 L2 75 L3 70 L5 65 L8 60 L12 55 L16 50 L20 45 L25 40 L30 35 L35 30 L40 25 L45 20 L50 15 L55 10 L60 5 L65 2 L70 0 L75 0 L80 0 L85 1 L90 2 L95 3 L100 4 L105 5 L110 6 L115 7 L120 8 L125 9 L130 10 L135 11 L140 12 L145 13 L150 14 L155 15 L160 16 L165 18 L170 20 L175 22 L180 25"
              fill="#4A4A4A"
              opacity="0.8"
            />
            {/* Simplified UK landmass */}
            <path
              d="M50 180 Q30 140 35 100 Q40 60 60 40 Q80 20 110 15 Q140 10 160 30 Q180 50 185 90 Q190 130 170 160 Q150 190 120 200 Q90 210 60 200 Q50 195 50 180Z"
              fill="#6B6B6B"
            />
            {/* Scotland */}
            <path
              d="M55 40 Q45 30 50 20 Q60 10 80 8 Q100 6 115 15 Q125 25 120 40 Q115 55 95 60 Q75 65 60 55 Q55 50 55 40Z"
              fill="#6B6B6B"
            />
            {/* Ireland */}
            <path
              d="M15 80 Q10 70 15 60 Q25 50 40 55 Q50 65 45 80 Q40 95 25 95 Q15 90 15 80Z"
              fill="#6B6B6B"
            />

            {/* Location pins */}
            {locations.map((loc) => (
              <g key={loc.name}>
                <circle cx={loc.x} cy={loc.y} r="5" fill="#FF5500" />
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="8"
                  fill="none"
                  stroke="#FF5500"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </g>
            ))}
          </svg>

          {/* Location labels near pins */}
          <div className="absolute left-1/4 top-1/3 text-dw-cream font-body text-xs font-bold">
            NEWCASTLE
          </div>
          <div className="absolute left-1/3 top-[45%] text-dw-cream font-body text-xs font-bold">
            LEEDS
          </div>
          <div className="absolute left-[28%] top-[55%] text-dw-cream font-body text-xs font-bold">
            LEICESTER
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center bg-dw-orange px-8 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
          {/* Heading */}
          <h2 className="font-display text-4xl font-bold leading-tight text-dw-cream md:text-5xl lg:text-6xl">
            OUR RESTAURANT
            <br />
            LOCATIONS
          </h2>
          <p className="mt-4 font-display text-2xl text-dw-yellow md:text-3xl">
            हमारा पता
          </p>

          {/* Locations Grid */}
          <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="font-body text-sm font-bold text-dw-cream">
              NEWCASTLE
            </div>
            <div className="font-body text-sm font-bold text-dw-cream">
              SUNDERLAND
            </div>
            <div className="font-body text-sm font-bold text-dw-cream">
              LEICESTER
            </div>
            <div className="font-body text-sm font-bold text-dw-cream">
              LEEDS
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs font-bold text-dw-cream/90 hover:text-dw-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
