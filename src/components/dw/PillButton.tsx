type Props = { label?: string; onClick?: () => void };

const PillButton = ({ label = "Order Now", onClick }: Props) => (
  <button className="pill-btn" onClick={onClick}>
    <div className="pill-btn-l1">
      <div className="pill-btn-l2">
        <div className="pill-btn-l3">{label}</div>
      </div>
    </div>
  </button>
);

export default PillButton;
