import SetTitle from "./../utils/title"

const Index = (props: any) => {
  SetTitle("home")
  return (
    <div className={`${props.className} `}>
      <h1>Welcome</h1>
    </div>
  )
}

export default Index
