import BottomSide from "./bottom-side";
import TopSide from "./top-side";

const LeftSide = (props: any) => {
  return (
    <div className={`${props.className} flex flex-col mr-2`}>
      <TopSide className="h-1/3 w-full box-border border-solid border-2 border-black mb-2 p-2 rounded-md" />
      <BottomSide className="h-2/3 w-full box-border border-solid border-2 border-black mt-2 p-2 rounded-md" />
    </div>
  );
};

export default LeftSide;
