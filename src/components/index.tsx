import BottomSide from "../parts/bottom-side";
import RightSide from "../parts/right-side";
import TopSide from "../parts/top-side";
import Footer from "./footer";

const Index = (props: any) => {
  return (
    <div className={`${props.className} w-full h-full box-border main-base`}>
      <TopSide className="top h-full w-full" />
      <BottomSide className="bottom h-full w-full" />
      <RightSide className="right w-full rounded-md p-2 bg-transparent" />
      <Footer className="footer flex w-full h-full box-border justify-center" />
    </div>
  );
};
export default Index;
