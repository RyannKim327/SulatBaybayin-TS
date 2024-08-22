import ChatRoom from "../components/chatbox";

const BottomSide = (props: any) => {
  return (
    <div className={`${props.className} `}>
      <ChatRoom className="flex flex-cols w-full h-full box-border" />
    </div>
  );
};

export default BottomSide;
