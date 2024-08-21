import { Link } from "react-router-dom";

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
      <h1 className="text-sm md:text-lg text-center" id="title">
        Home
      </h1>
      <ul className="w-full box-border">
        <Li to="/" value="Home" />
        <Li to="/about" value="About us" />
        <Li to="/download" value="Download" />
        <Li to="/faqs" value="FAQ's" />
        <Li to="/feedbacks" value="Feedback" />
      </ul>
    </div>
  );
};

export default TopSide;
