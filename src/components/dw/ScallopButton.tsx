type Props = { label?: string; onClick?: () => void };

const ScallopButton = ({ label = "FOOD MENU", onClick }: Props) => (
  <button className="scallop-btn" onClick={onClick}>
    {label}
  </button>
);

export default ScallopButton;
