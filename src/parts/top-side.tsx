import { Link } from "react-router-dom";
import language from "../data/language";

const Li = (props: any) => {
  return (
    <div>
      <Link
        className={`${props.className} block text-sm md:text-lg my-px rounded-md px-2 bg-gradient-to-b text-green-900 from-transparent to-green-100 hover:from-green-100 hover:to-green-300 transition transition-75 ease-in`}
        to={props.to}
      >
        {props.value}
      </Link>
    </div>
  );
};

const TopSide = (props: any) => {
  return (
    <div className={`${props.className}`}>
      <h1 className="text-sm md:text-lg text-center" id="main-title"></h1>
      <ul className="w-full box-border">
        <Li to="/" value={language("home")} />
        <Li to="/about" value={language("about")} />
        <Li to="/download" value={language("download")} />
        <Li to="/faqs" value={language("faqs")} />
        <Li to="/feedback" value={language("feedback")} />
      </ul>
    </div>
  );
};

export default TopSide;
