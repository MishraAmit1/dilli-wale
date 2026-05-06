import StarButton from "./StarButton";
import ScallopWave from "./ScallopWave";
import { Paisley, StarMotif, Tassel, Heart, Diya } from "./Motifs";

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
      {/* Left */}
      <div className="flex flex-col justify-center bg-dw-orange px-8 py-20 md:px-16 md:py-28">
        <h2 className="font-display text-[2.5rem] font-extrabold leading-[0.95] text-dw-cream md:text-[4.5rem]">
          WE BROUGHT
          <br />
          DELHI TO YOUR
          <br />
          <span className="text-dw-yellow">DOORSTEP.</span>
        </h2>
        <p className="mt-6 max-w-md font-body text-base text-dw-cream/90">
          Born in the bustling galis of Chandni Chowk, our recipes are carried by hand,
          cooked with heart, and delivered fresh — so every bite tastes like home.
        </p>
        <div className="mt-8">
          <StarButton label="Our Story →" />
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center bg-dw-yellow px-8 py-20 md:py-28 overflow-hidden">
        {/* Butter Chicken Image */}
        <div className="relative z-10 w-[90%] max-w-md rounded-3xl overflow-hidden border-4 border-dw-dark shadow-[6px_6px_0_#1A1A1A]">
          <img
            src="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp"
            alt="Butter Chicken"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Decorative Motifs */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 float-slow">
          <Paisley color="#FF5500" size={220} />
        </div>
        <div className="absolute left-10 top-10 float-medium"><StarMotif color="#067E85" size={48} /></div>
        <div className="absolute right-12 top-16 float-fast"><Tassel color="#C40878" size={56} /></div>
        <div className="absolute left-16 bottom-16 float-slow"><Heart color="#FF5500" size={44} /></div>
        <div className="absolute right-10 bottom-12 float-medium"><Diya color="#FF5500" size={56} /></div>
        <div className="absolute right-1/3 top-1/4 float-fast"><StarMotif color="#C40878" size={32} /></div>
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
