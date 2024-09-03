import { Route, Routes } from "react-router-dom";
import Index from "../pages";
import DL from "../pages/download";
import Policies from "../pages/policy";

const Right = (props: any) => {
  return (
    <div
      className={`${props.className} flex flex-col justify-center items-center`}
    >
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<DL />} path="/download" />
        <Route element={<Policies />} path="/policies" />
      </Routes>
    </div>
  );
};

export default Right;
