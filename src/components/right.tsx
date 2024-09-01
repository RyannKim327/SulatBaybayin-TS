import { Route, Router, Routes } from "react-router-dom";
import Index from "../pages";

const Right = (props: any) => {
  return (
    <div className={`${props.className} flex flex-col justify-center items-center`}>
      <Routes>
        <Route element={<Index />} path="/" />
      </Routes>
    </div>
  );
};

export default Right;
