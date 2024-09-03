import { Link } from "react-router-dom";

const Top = (props: any) => {
  return (
    <div className={`${props.className} flex flex-col items-center`}>
      <h3 id="title">Welcome to</h3>
      <ul className="flex flex-col w-full items-start">
        <Link className="pl-4 w-full hover:text-slate-500" to="/">
          Home
        </Link>
        <Link className="pl-4 w-full hover:text-slate-500" to="/download">
          Download the app
        </Link>
        <Link className="pl-4 w-full hover:text-slate-500" to="/policies">
          Policy and Guidelines
        </Link>
      </ul>
    </div>
  );
};

export default Top;
