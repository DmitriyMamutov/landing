import { Link } from "react-scroll";
import Button from "components/Button";

const ScrollButton = (props) => {
  const { size, className, onClick, text } = props;

  return (
    <Link to="price-card" smooth="easeOut" offset={-140} duration={800}>
      <Button size={size} className={className} onClick={onClick} text={text} />
    </Link>
  );
};

export default ScrollButton;
