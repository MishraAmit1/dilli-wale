import CircleButton from "./CircleButton";
import { StarMotif, Heart, Paisley, Diya } from "./Motifs";

const CTASection = () => (
  <section id="contact" className="relative overflow-hidden bg-dw-dark px-6 py-28 md:py-36">
    <div className="absolute left-10 top-10 float-slow"><StarMotif color="#FFC300" size={40} /></div>
    <div className="absolute right-12 top-20 float-medium"><Heart color="#FF5500" size={42} /></div>
    <div className="absolute left-16 bottom-16 float-fast opacity-90"><Paisley color="#FFC300" size={70} /></div>
    <div className="absolute right-20 bottom-20 float-slow"><Diya color="#FFC300" size={50} /></div>

    <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
      <h2 className="font-display text-4xl font-extrabold leading-tight text-dw-yellow md:text-6xl">
        COME HUNGRY.
        <br />
        LEAVE HAPPY.
      </h2>
      <div className="mt-6 h-[3px] w-32 bg-dw-teal" />
      <p className="mt-6 max-w-md font-body text-base text-dw-cream/90 md:text-lg">
        24, Paranthe Wali Gali, Chandni Chowk, Old Delhi — 110006
        <br />
        Open Daily · 11am – 11pm
      </p>
      <div className="mt-12">
        <CircleButton />
      </div>
      <p className="mt-16 font-body text-sm text-dw-cream/50">
        © {new Date().getFullYear()} Dilli Wale · Made with <span className="text-dw-orange">♥</span> in India
      </p>
    </div>
  </section>
);

export default CTASection;
