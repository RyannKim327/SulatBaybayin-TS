import ChatBox from "../pages/chatbox";

const Bottom = (props: any) => {
  return (
    <div className={`${props.className} flex box-border overflow-hidden`}>
      <ChatBox />
    </div>
  );
};

export default Bottom;
