import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Index from "./../pages/index";
import About from "../pages/about";
import Download from "../pages/download";
import FAQ from "../pages/faq";
import Feedbacks from "../pages/feedback";

const RightSide = (props: any) => {
  return (
    <div className={`${props.className}`}>
      <Header className="flex flex-row w-full box-border bg-slate-300 justify-between" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/feedback" element={<Feedbacks />} />
      </Routes>
    </div>
  );
};

export default RightSide;
