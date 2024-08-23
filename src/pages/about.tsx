import SetTitle from "../utils/title"


const About = (props: any) => {
  SetTitle("about")
  return (
    <div className={`${props.className} `}>
      <h1>About brother</h1>
    </div>
  )
}

export default About
