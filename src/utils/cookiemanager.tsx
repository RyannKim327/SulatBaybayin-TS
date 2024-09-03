class Cookies {
  set(name: string, value: string) {
    const _ = 365 * (24 * (60 * (1000 * 60)));
    const date = new Date();
    date.setTime(date.getTime() * _);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  get(name: string): string {
    const cookie = decodeURIComponent(document.cookie);
    const _ = cookie.split(";");
    for (let c in _) {
      let __ = _[c];
      while (__[0] == " ") {
        __ = __.substring(1);
      }
      if (__.indexOf(`${name}=`) == 0) {
        return __.substring(`${name}`.length, __.length);
      }
    }
    return "";
  }
}

export default Cookies;
