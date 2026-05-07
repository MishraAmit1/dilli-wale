import StarButton from "./StarButton";
import ScallopWave from "./ScallopWave";

const StoryStrip = () => (
  <section id="story">
    {/* Top Wave - Two colors: left orange, right yellow */}
    <div className="flex">
      <div className="w-1/2">
        <ScallopWave bgColor="#067E85" peakColor="#FF5500" />
      </div>
      <div className="w-1/2">
        <ScallopWave bgColor="#067E85" peakColor="#FFC300" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left - Placeholder */}
      <div className="flex flex-col justify-center bg-dw-orange px-8 py-20 md:px-16 md:py-28">
        <div className="h-16 w-64 bg-gray-300 rounded mb-4"></div>
        <div className="h-16 w-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-16 w-40 bg-gray-400 rounded mb-6"></div>
        <div className="h-24 w-80 bg-gray-300 rounded mb-8"></div>
        <div className="h-12 w-40 bg-gray-400 rounded"></div>
      </div>

      {/* Right - Placeholder */}
      <div className="relative flex items-center justify-center bg-dw-yellow px-8 py-20 md:py-28 overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative z-10 w-[90%] max-w-md h-64 bg-gray-300 rounded-3xl border-4 border-dw-dark shadow-[6px_6px_0_#1A1A1A]"></div>
        {/* Removed decorative motifs */}
      </div>
    </div>

    {/* Bottom Wave - Two colors: left orange, right yellow to cream */}
    <div className="flex">
      <div className="w-1/2">
        <ScallopWave bgColor="#FF5500" peakColor="#F7F3EA" />
      </div>
      <div className="w-1/2">
        <ScallopWave bgColor="#FFC300" peakColor="#F7F3EA" />
      </div>
    </div>
  </section>
);

export default StoryStrip;
