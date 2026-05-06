type ScallopWaveProps = {
  bgColor: string;
  peakColor: string;
  flip?: boolean;
};

const ScallopWave = ({ bgColor, peakColor, flip = false }: ScallopWaveProps) => {
  // Generate the path for ~20 repeating scallop arches
  // Each arch unit: width=72, peak height=40 (from y=60 to y=20)
  // Path: M 0,60 C 18,60 18,20 36,20 C 54,20 54,60 72,60
  let pathD = "";
  const numArches = 20;
  const archWidth = 72;

  for (let i = 0; i < numArches; i++) {
    const x = i * archWidth;
    if (i === 0) {
      pathD += `M ${x},60`;
    }
    // Cubic bezier to create the arch
    pathD += ` C ${x + 18},60 ${x + 18},20 ${x + 36},20 C ${x + 54},20 ${x + 54},60 ${x + archWidth},60`;
  }

  // Close the path at the bottom
  pathD += " L 1440,60 L 0,60 Z";

  return (
    <div style={{ background: peakColor, lineHeight: 0, margin: 0, padding: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          background: bgColor,
          transform: flip ? "scaleY(-1)" : undefined
        }}
      >
        <path d={pathD} fill={peakColor} />
      </svg>
    </div>
  );
};

export default ScallopWave;
