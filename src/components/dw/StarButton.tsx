type Props = { label?: string; onClick?: () => void };

const Star = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FFC300" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1 L14.5 8.5 L22 9 L16 14 L18 22 L12 17.5 L6 22 L8 14 L2 9 L9.5 8.5 Z" stroke="#067E85" strokeWidth="1" />
  </svg>
);

const StarButton = ({ label = "View Menu", onClick }: Props) => (
  <button className="star-btn" onClick={onClick}>
    {label}
    <Star className="sb-star sb-1" />
    <Star className="sb-star sb-2" />
    <Star className="sb-star sb-3" />
    <Star className="sb-star sb-4" />
    <Star className="sb-star sb-5" />
    <Star className="sb-star sb-6" />
  </button>
);

export default StarButton;
