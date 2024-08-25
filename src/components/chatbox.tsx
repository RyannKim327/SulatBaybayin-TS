import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import language from "../data/language";

const Chat = (props: any) => {
  return (
    <div
      className={`flex flex-col my-2 ${props.you ? "items-end" : "items-start"}`}
    >
      <span className="text-[0.75rem]">
        {props.sender ?? language("anonymous_user")}
      </span>
      <span
        className={`text-sm md: text-base rounded-full text-white px-2 py-[0.15rem] ${props.you ? "mr-2 bg-green-400 dark:bg-transparent dark:shadow dark:text-green-300 dark:shadow-green-300 dark:hover:shadow-lime-900" : "ml-2 bg-slate-300 text-green-700 dark:shadow dark:shadow-lime-400 dark:bg-transparent"}`}
      >
        {props.msg}
      </span>
    </div>
  );
};

const Room = (props: any) => {
  return (
    <div
      className={`h-full w-full box-border overflow-y-scroll ${props.className}`}
    >
      <Chat
        you={true}
        msg={language("sana all")}
        sender={language("sample", "tag")}
      />
      <Chat msg="Test" sender="sender" />
      <Chat msg="Hello World" sender="Santol" />
      <Chat msg="Test Message" sender="Sample" />
      <Chat you={true} msg="Hello" sender="Test" />
      <Chat msg="HAHAHA" sender="Santol" />
      <Chat msg="Yehey po" />
    </div>
  );
};

const ChatBox = (props: any) => {
  const [inputValue, setInputValue] = useState("");
  const [canSend, setSend] = useState(false);
  function send() {
    console.log(inputValue);
  }

  function handleKeyUp(event: any) {
    setInputValue(event.target.value);
    setSend(event.target.value.trim().length > 1);
  }

  return (
    <div className={`${props.className} flex flex-col`}>
      <div className="flex flex-col h-5/6 w-full box-border">
        <h3 className="text-center">{language("chatbox")}</h3>
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
          className={`p-4 text-green-700 ${canSend ? "" : "hidden"}`}
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
