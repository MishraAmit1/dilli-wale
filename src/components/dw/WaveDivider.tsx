type Props = { topColor?: string; bottomColor?: string; flip?: boolean };

const WaveDivider = ({ topColor = "#FFC300", bottomColor = "#F7F3EA", flip = false }: Props) => (
  <div style={{ background: bottomColor, lineHeight: 0 }}>
    <svg
      className="wave-svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : undefined, background: bottomColor }}
    >
      <path
        d="M0,30 Q120,0 240,30 T480,30 T720,30 T960,30 T1200,30 T1440,30 L1440,0 L0,0 Z"
        fill={topColor}
      />
    </svg>
  </div>
);

export default WaveDivider;
