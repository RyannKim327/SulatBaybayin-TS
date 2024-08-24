import english from "./english.json";
import tagalog from "./tagalog.json";
import baybayin from "./baybayin.json";

interface languages_interface {
  eng: Record<string, string>;
  tag: Record<string, string>;
  baybay: Record<string, string>;
}

const language = (key: string, lang: keyof languages_interface = "eng") => {
  const languages: languages_interface = {
    eng: english,
    tag: tagalog,
    baybay: baybayin,
  };
  return (
    languages[lang][key.toLowerCase().replace(/\s/g, "_").replace(/\W/g, "")] ??
    key.replace(/\?/g, " ")
  );
};

export default language;
