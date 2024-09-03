import ChatBox from "../pages/chatbox";
import Creds from "../pages/credentials";
import Cookies from "../utils/cookiemanager";

const Bottom = (props: any) => {
  return (
    <div className={`${props.className} flex box-border overflow-hidden`}>
      {new Cookies().get("yamete-sensei") ? <ChatBox /> : <Creds />}
    </div>
  );
};

export default Bottom;
