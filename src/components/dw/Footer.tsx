import ScallopWave from "./ScallopWave";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#story" },
  { label: "MENUS", href: "#menu" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "WHAT'S ON", href: "#events" },
];

export default function Footer() {
  return (
    <footer id="locations">
      {/* Wave from cream section to orange */}
      <ScallopWave bgColor="#F7F3EA" peakColor="#FF5500" />

      {/* Main Footer Content */}
      <div className="bg-dw-orange">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 md:px-12 md:pb-12 md:pt-16">
          {/* Two Column Layout - Map Left, Content Right */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left - Google Map (Taller) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-4 border-dw-dark shadow-[6px_6px_0_#1A1A1A]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.3007710688!2d-1.835631!3d54.9778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d857e0c6a1b27%3A0x52263dd65a2bf539!2sNewcastle%20upon%20Tyne%2C%20UK!5e0!3m2!1sen!2s!4v1704060800000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Right - Heading, Single Location & Nav Links */}
            <div className="flex flex-col justify-start">
              {/* Heading */}
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold leading-tight text-dw-cream md:text-4xl lg:text-5xl">
                  OUR RESTAURANT
                  <br />
                  LOCATION
                </h2>
                <p className="mt-2 font-display text-xl text-dw-yellow md:text-2xl">
                  हमारा पता
                </p>
              </div>

              {/* Single Location */}
              <div className="mb-8">
                <h3 className="mb-2 font-body text-xs font-bold tracking-wider text-dw-yellow">
                  NEWCASTLE
                </h3>
                <p className="font-body text-sm text-dw-cream/80">
                  123 Chilli Lane, NE1 1AA
                </p>
              </div>

              {/* Navigation Links */}
              <div className="border-t border-dw-cream/20 pt-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-body text-sm font-bold text-dw-cream/90 transition-colors hover:text-dw-cream"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Compact */}
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-dw-cream/20 pt-6 md:flex-row">
            <p className="font-body text-xs text-dw-cream/60">
              © 2024 Dilli Delight. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-dw-cream/60 transition-colors hover:text-dw-cream">
                Privacy
              </a>
              <a href="#" className="font-body text-xs text-dw-cream/60 transition-colors hover:text-dw-cream">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
