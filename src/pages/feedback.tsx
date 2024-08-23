import SetTitle from "../utils/title"


const Feedbacks = (props: any) => {
  SetTitle("feedback")
  return (
    <div className={`${props.className} `}>
      <h1>Feedback</h1>
    </div>
  )
}

export default Feedbacks
