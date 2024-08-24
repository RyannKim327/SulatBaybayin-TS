import language from "../data/language";
import SetTitle from "../utils/title";

const About = (props: any) => {
  SetTitle("about");
  return (
    <div className={`${props.className} `}>
      <fieldset className="border-2 border-black border-solid rounded-md p-2">
        <legend className="ml-4">{language("what is baybayin")}</legend>
        {language("answer baybayin")}
      </fieldset>
    </div>
  );
};

export default About;
