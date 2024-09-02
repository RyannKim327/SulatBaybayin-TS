import { useEffect } from "react"

const _title = (title: string) => {
  useEffect(() => {
    const _t = document.getElementById("title")

    if (_t) {

      _t.textContent = title
      document.title = title
    }

  }, [title])
}

export default _title
