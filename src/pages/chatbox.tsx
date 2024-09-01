import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const __chat = (props: any) => {
  const you = props.sender === "you" ? "items-end" : "items-start"
  return (
    <div className={`flex flex-col w-full ${you}`} >
      {
        props.sender === "you" ? "" : (
          <span className="text-sm">{props.sender}</span>
        )
      }
      <p className={
        `${props.sender === "you" ? "border-2 border-solid border-lime-500" : "bg-slate-300"} rounded-md px-2 m-2`
      }>{props.msg}</p>
    </div >
  )
}

const ChatBox = (props: any) => {
  const scroll = () => {
    const _chat = document.getElementById("chats")
    if (_chat) {
      // NOTE: Ginamitan ko to ng chatgpt
      _chat.scrollTo({
        top: _chat.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  const sendmsg = () => {
    const _send = document.getElementById("sendIcon")
    const _load = document.getElementById("loader")
    const msg = document.getElementById("msg")
    if (_send && _load && msg) {
      if (msg.value.trim() === "") {
        return alert("No input message")
      }
      _send.style.display = "none"
      _load.style.display = "inline"
      msg.value = ""
      scroll()
      setTimeout(() => {
        _send.style.display = "block"
        _load.style.display = "none"
      }, 1500)
    }
  }

  scroll()

  return (
    <div className={`${props.className} flex flex-col h-full w-full box-border items-center`}>
      <h3>Chatbox</h3>
      <div id="chats" className="flex flex-col h-full w-full box-border overflow-scroll">
        <__chat sender="you" msg="test" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="you" msg="test" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="you" msg="test" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="you" msg="test" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
        <__chat sender="ikaw" msg="test ng kabila" />
      </div>
      <div className="flex w-full box-border p-2">
        <input id="msg" className="w-full outline-none box-border bg-slate-300/50" placeholder="Enter your message" />
        <button className="px-2">
          <FontAwesomeIcon onClick={() => { sendmsg() }} id="sendIcon" className="text-lg" icon={faPaperPlane} />
          <span id="loader" className="hidden">
            <div className="loader" ></div>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ChatBox
