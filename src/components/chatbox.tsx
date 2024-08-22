import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Chat = (props: any) => {
  return (
    <div
      className={`flex flex-col my-2 ${props.you ? "items-end" : "items-start"}`}
    >
      <span className="text-[0.75rem]">{props.sender ?? "Anonymous User"}</span>
      <span
        className={`text-sm md: text-base rounded-full text-white px-2 py-[0.15rem] ${props.you ? "mr-2 bg-green-400" : "ml-2 bg-slate-300 text-green-700"}`}
      >
        {props.msg}
      </span>
    </div>
  );
};

const Room = (props: any) => {
  return (
    <div>
      <Chat you={true} msg="Hello" sender="Hehe" />
      <Chat msg="Test" className="sender" />
      <Chat msg="Hello World" sender="Santol" />
    </div>
  );
};

const ChatBox = (props: any) => {
  const [inputValue, setInputValue] = useState("");

  function send() {
    console.log(inputValue);
  }

  function handleKeyUp(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <div className={`${props.className} flex flex-col`}>
      <div className="flex flex-col h-full box-border">
        {/* TODO: To create a Chatroom for general */}
        <Room />
      </div>
      <div className="flex flex-row w-full border-solid border-2 border-green-500">
        <input
          onKeyUp={handleKeyUp}
          className="w-full box-border p-4 outline-none bg-transparent placeholder:text-green-700 text-green-900"
          type="text"
          name="message"
          placeholder="Enter your message"
        />
        <button
          type="submit"
          onClick={() => {
            send();
          }}
          className="p-4 text-green-700"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

const ChatRoom = (props: any) => {
  return (
    <div className={`${props.className}`}>
      <ChatBox className="w-full h-full box-border" />
    </div>
  );
};

export default ChatRoom;
