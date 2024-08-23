import english from "./english.json";
import tagalog from "./tagalog.json";
import baybayin from "./baybayin.json";

interface languages_interface {
  eng: Record<string, string>;
  tag: Record<string, string>;
  baybay: Record<string, string>;
}

const language = (key: string, lang: keyof languages_interface = "tag") => {
  const languages: languages_interface = {
    eng: english,
    tag: tagalog,
    baybay: baybayin,
  };
  return (
    languages[lang][key.toLowerCase().replace(/[\W\s]/g, "_")] ??
    key.replace(/\?/g, " ")
  );
};

export default language;
