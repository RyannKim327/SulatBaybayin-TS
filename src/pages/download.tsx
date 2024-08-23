import SetTitle from "../utils/title"


const Download = (props: any) => {
  SetTitle("download")
  return (
    <div className={`${props.className} `}>
      <h1>Download</h1>
    </div>
  )
}

export default Download
