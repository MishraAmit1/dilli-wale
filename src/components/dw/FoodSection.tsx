import SplitText from "./SplitText";
import { StarMotif, Paisley } from "./Motifs";

const dishes = [
  {
    name: "",
    desc: "",
    image: "",
  },
  {
    name: "",
    desc: "",
    image: "",
  },
  {
    name: "",
    desc: "",
    image: "",
  },
];

function FoodCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <div className="group">
      {/* Food Image - Placeholder */}
      <div className="w-full aspect-square rounded-3xl overflow-hidden mb-4 border-4 border-dw-dark shadow-[4px_4px_0_#1A1A1A] bg-gray-200">
        {/* Placeholder for food image */}
      </div>

      {/* Dish Name - Placeholder */}
      <div className="h-8 bg-gray-200 rounded"></div>
    </div>
  );
}

export default function FoodSection() {
  return (
    <section id="menu" className="relative bg-dw-cream px-6 py-24 md:px-12 md:py-32">
      {/* Removed floating decorations */}

      <div className="mx-auto max-w-6xl">
        {/* Section Heading - Placeholder */}
        <div className="text-center mb-12 md:mb-16">
          <div className="h-16 bg-gray-200 rounded mx-auto max-w-md"></div>
          <div className="mt-3 h-6 bg-gray-200 rounded mx-auto max-w-xs"></div>
        </div>

        {/* Food Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {dishes.map((dish) => (
            <FoodCard key={dish.name} dish={dish} />
          ))}
        </div>

        {/* View Full Menu Button - Placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="h-12 w-48 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
