const dishes = [
  "CHAAT", "BIRYANI", "KEBAB", "DAHI BHALLA", "LASSI",
  "KULFI", "CHOLE BHATURE", "BUTTER CHICKEN", "PANI PURI", "JALEBI",
];

const MarqueeTicker = () => (
  <div className="overflow-hidden border-y-4 border-dw-dark bg-dw-teal py-5">
    <div className="marquee-inner">
      {[...dishes, ...dishes, ...dishes, ...dishes].map((d, i) => (
        <span
          key={i}
          className="mx-8 whitespace-nowrap font-display text-2xl font-extrabold uppercase tracking-wider text-dw-cream md:text-3xl"
        >
          {d} <span className="text-dw-yellow">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeTicker;
