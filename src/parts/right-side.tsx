import { Route, Routes } from "react-router-dom";
import Header from "./header";

const RightSide = (props: any) => {
  return (
    <div className={`${props.className}`}>
      <Header className="flex flex-row w-full box-border bg-slate-300 justify-between" />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
};

export default RightSide;
