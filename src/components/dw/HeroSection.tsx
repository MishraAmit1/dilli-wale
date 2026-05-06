import PillButton from "./PillButton";
import StarButton from "./StarButton";
import { Paisley, StarMotif, Heart, Tassel, Diya } from "./Motifs";
import rickshawImg from "@/assets/rickshaw.png";
const HeroSection = () => (
  <section className="hero-pattern relative min-h-screen overflow-hidden pt-28 md:pt-32">
    {/* Floating motifs */}
    <div className="absolute left-6 top-28 float-slow"><Paisley color="#FF5500" size={70} /></div>
    <div className="absolute right-10 top-32 float-medium"><StarMotif color="#067E85" size={48} /></div>
    <div className="absolute left-10 bottom-20 float-fast"><Heart color="#C40878" size={42} /></div>
    <div className="absolute right-1/3 top-44 float-slow hidden md:block"><Tassel color="#C40878" size={40} /></div>
    <div className="absolute left-1/3 bottom-32 float-medium hidden md:block"><Diya color="#FF5500" size={50} /></div>
    <div className="absolute right-[8%] bottom-[20%] float-fast hidden md:block"><StarMotif color="#C40878" size={36} /></div>

    <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-12 md:px-12">
      {/* Text */}
      <div className="relative z-10 md:col-span-7">
        <h1 className="mt-6 font-display font-extrabold leading-[0.95]">
          <span className="block text-[2.5rem] text-dw-dark sm:text-5xl md:text-[5rem]">STREET FOOD</span>
          <span
            className="block text-[3.5rem] text-dw-orange sm:text-[5.5rem] md:text-[7rem]"
            style={{ textShadow: "4px 4px 0 #067E85" }}
          >
            FROM DILLI
          </span>
          <span className="block text-[2rem] text-dw-teal sm:text-4xl md:text-[4rem]">TO YOUR DOOR</span>
        </h1>

        <p className="mt-6 max-w-md font-body text-base text-dw-dark/80 md:text-lg">
          Hot chaat, smoky kebabs, and creamy lassi — packed with Purani Dilli soul and sent straight to your doorstep.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PillButton label="Order Now →" />
          <StarButton label="View Menu" />
        </div>
      </div>

      {/* Rickshaw */}
      <div className="relative z-0 flex items-end justify-center md:col-span-5 md:absolute md:right-0 md:top-32 md:w-1/2">
        <div className="float-slow">
          <img src={rickshawImg} alt="Decorative Indian rickshaw" className="w-full max-w-[460px] h-auto" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
