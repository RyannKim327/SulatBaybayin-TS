import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import db from "../utils/firebase"

interface fbitem {
  sender: string
  msg: string
}

const __chat = (props: any) => {
  const you = props.sender === "you" ? "items-end" : "items-start"
  return (
    <div className={`${props.className} flex flex-col w-full ${you}`} >
      <fieldset className={
        `${props.sender === "you" ? "border-lime-500" : "border-black"} border-solid border-[1px] rounded-md p-2 m-2 max-w-[75%]`
      }>
        {
          props.sender === "you" ? "" : (
            <legend className="text-sm border-[1px] border-solid border-black px-2 ml-[5px] rounded-md">{props.sender}</legend>
          )
        }

        <p>
          {
            (props.sender === "you" ? "" : <span>&emsp;</span>)
          }{
            props.children
          }
        </p>
      </fieldset>
    </div >
  )
}

const ChatBox = (props: any) => {
  const [data, setData] = useState<fbitem[]>([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const snap = await db.collection("chats").get()
        const items = snap.docs.map(doc => doc.data() as fbitem)

        setData(items)

      } catch (e) { }
    }
    fetchdata()

  }, [])

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
    const msg = document.getElementById("msg") as HTMLInputElement

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

  setTimeout(() => {
    scroll()
  }, 100)

  const chats = [
    {
      "sender": "you",
      "msg": "hello"
    },
    {
      "sender": "Albert",
      "msg": "Kamusta"
    },
    {
      "sender": "Jayson",
      "msg": "Mundo"
    },
    {
      "sender": "you",
      "msg": "ang cute ko fhusa saduaiud fhfadh a"
    },
    {
      "sender": "Marvin",
      "msg": "Kaya nga e"
    },
    {
      "sender": "Jayson",
      "msg": "duda hsgdfuilgasedliugfasdspiufg asiudhf ad fuaf af af aif hasias dsdfgais ful"
    }
  ]

  return (
    <div className={`${props.className} flex flex-col h-full w-full box-border items-center`}>
      <h3>Chatbox</h3>
      <div id="chats" className="flex flex-col h-full w-full box-border overflow-scroll">
        {
          data.map((e, i) => {
            return (
              <__chat sender={e['sender']}>{e['msg']}</__chat>
            )
          })
        }
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
