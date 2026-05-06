import SplitText from "./SplitText";
import { StarMotif, Paisley } from "./Motifs";

const dishes = [
  {
    name: "Chole Bhature",
    desc: "Crispy fried bread with spiced chickpea curry. The ultimate Delhi breakfast.",
    image: "https://media.base44.com/images/public/69f995e1e263076ab3e8c6f8/18d16d30d_generated_ebb727b2.png",
  },
  {
    name: "Paneer Makhani",
    desc: "Rich, creamy tomato gravy with soft paneer cubes. Old Delhi's finest export.",
    image: "https://media.base44.com/images/public/69f995e1e263076ab3e8c6f8/cf7f71a9d_generated_538819e6.png",
  },
  {
    name: "Pani Puri",
    desc: "Crispy shells filled with tangy mint water. Six explosions of flavor.",
    image: "https://media.base44.com/images/public/69f995e1e263076ab3e8c6f8/61ecff82a_generated_b8faaa39.png",
  },
];

function FoodCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <div className="group">
      {/* Food Image */}
      <div className="w-full aspect-square rounded-3xl overflow-hidden mb-4 border-4 border-dw-dark shadow-[4px_4px_0_#1A1A1A]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Dish Name */}
      <h3 className="font-display font-extrabold text-dw-dark text-center text-2xl md:text-3xl">
        <SplitText
          text={dish.name}
          delay={0.1}
          stagger={0.03}
          duration={0.5}
          from={{ opacity: 0, y: 15 }}
          to={{ opacity: 1, y: 0 }}
        />
      </h3>
    </div>
  );
}

export default function FoodSection() {
  return (
    <section id="menu" className="relative bg-dw-cream px-6 py-24 md:px-12 md:py-32">
      {/* Floating Decorations - Original Style */}
      <div className="absolute left-8 top-12 float-slow"><StarMotif color="#FF5500" size={42} /></div>
      <div className="absolute right-12 top-20 float-medium"><Paisley color="#067E85" size={56} /></div>

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl font-extrabold text-dw-orange md:text-6xl">
            <SplitText
              text="KHANA JO YAAD RAHE"
              delay={0.1}
              stagger={0.03}
              duration={0.6}
              from={{ opacity: 0, y: 25 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h2>
          <p className="mt-3 font-body text-lg italic text-dw-teal md:text-xl">
            <SplitText
              text="— Food You'll Remember —"
              delay={0.3}
              stagger={0.02}
              duration={0.5}
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
            />
          </p>
        </div>

        {/* Food Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {dishes.map((dish) => (
            <FoodCard key={dish.name} dish={dish} />
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-8 py-4 bg-dw-teal text-dw-cream font-display font-extrabold text-lg rounded-full border-3 border-dw-dark shadow-[4px_4px_0_#1A1A1A] hover:shadow-[2px_2px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
