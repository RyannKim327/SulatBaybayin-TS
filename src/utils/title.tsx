import { useEffect } from "react";
import language from "../data/language";

const SetTitle = (title: string) => {
  useEffect(() => {
    const mytitle = document.getElementById("main-title");
    if (mytitle) {
      mytitle.textContent = language(title);
    }
    document.title = language(title);
  }, [title]);
};

export default SetTitle
