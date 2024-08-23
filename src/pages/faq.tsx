import SetTitle from "../utils/title"


const FAQ = (props: any) => {
  SetTitle("faqs")
  return (
    <div className={`${props.className} `}>
      <h1>FAQ</h1>
    </div>
  )
}
export default FAQ

