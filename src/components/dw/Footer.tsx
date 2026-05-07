import ScallopWave from "./ScallopWave";
import SplitText from "./SplitText";

const navLinks = [
  { label: "", href: "#" },
  { label: "", href: "#" },
  { label: "", href: "#" },
  { label: "", href: "#" },
  { label: "", href: "#" },
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

            {/* Right - Heading, Single Location & Nav Links - Placeholders */}
            <div className="flex flex-col justify-start">
              {/* Heading - Placeholder */}
              <div className="mb-8">
                <div className="h-12 w-64 bg-gray-800 rounded mb-4"></div>
                <div className="h-12 w-48 bg-gray-800 rounded"></div>
                <div className="mt-2 h-8 w-32 bg-gray-700 rounded"></div>
              </div>

              {/* Single Location - Placeholder */}
              <div className="mb-8">
                <div className="h-6 w-32 bg-gray-700 rounded mb-2"></div>
                <div className="h-6 w-48 bg-gray-600 rounded"></div>
              </div>

              {/* Navigation Links - Placeholder */}
              <div className="border-t border-dw-cream/20 pt-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {navLinks.map((link, index) => (
                    <div key={index} className="h-6 w-20 bg-gray-600 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Compact - Placeholder */}
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-dw-cream/20 pt-6 md:flex-row">
            <div className="h-4 w-48 bg-gray-700 rounded"></div>
            <div className="flex gap-6">
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
