import { Link } from "react-router-dom";

const TopSide = (props: any) => {
  return (
    <div className={`${props.className}`}>
      <ul className="w-full box-border">
        <Link className="block" to="/">
          Home
        </Link>
        <Link className="block" to="/about">
          About Us
        </Link>
      </ul>
    </div>
  );
};

export default TopSide;
