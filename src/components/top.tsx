import { Link } from "react-router-dom";

const Top = (props: any) => {
  return (
    <div className={`${props.className} flex flex-col items-center`}>
      <h3 id="title">Welcome to</h3>
      <ul className="flex flex-col w-full items-start">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/download">Download the app</Link>
        <Link to="/policy">Policy and Guidelines</Link>
      </ul>
    </div>
  );
};

export default Top;
