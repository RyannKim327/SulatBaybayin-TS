import language from "../data/language";
import SetTitle from "./../utils/title";

const Index = (props: any) => {
  SetTitle("home");
  return (
    <div
      className={`${props.className} flex flex-col items-center justify-center h-full w-full`}
    >
      <h1 className="text-md md:text-5xl">{language("welcome")}</h1>
      <h3 className="text-sm md:text-2xl">{language("title_home")}</h3>
    </div>
  );
};

export default Index;
