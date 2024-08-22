import { useEffect } from "react";

const SetTitle = (title: string, id: string) => {
  useEffect(() => {
    const mytitle = document.getElementById(id);
    if (mytitle) {
      mytitle.textContent = title;
    }
    document.title = title;
  }, [title]);
};
