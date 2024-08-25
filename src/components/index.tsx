import LeftSide from "../parts/left-side";
import RightSide from "../parts/right-side";

const Index = (props: any) => {
  return (
    <div
      className={`${props.className} flex bg-[#faf5ff] dark:bg-slate-900 dark:text-white`}
    >
      <LeftSide className="w-3/12 h-full box-border bg-transparent p-2" />
      <RightSide className="w-9/12 h-full box-border rounded-md p-2 border-2 border-solid border-green-900 bg-transparent" />
    </div>
  );
};
export default Index;
