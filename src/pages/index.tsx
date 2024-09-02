import _title from "../utils/title"

const __fieldset = (props: any) => {
  return (
    <fieldset className="border-[1px] border-black border-solid m-2 px-2 rounded-md">
      <legend className="ml-[25px] border-[1px] border-black border-solid px-2 rounded-md">{props.title}</legend>
      <blockquote>{props.children}</blockquote>
    </fieldset>
  )
}

const Index = (props: any) => {
  _title("Welcome to Sulat Baybayin")
  return (
    <div className={`${props.className} flex flex-col justify-center items-center`}>
      <__fieldset title="What is Baybayin?">It is a pre-spanish script used iin the Philippines, particularly in Luzon Island. it is belong to the family of Brahmic Script." </__fieldset>
      <__fieldset title="What is Sulat Baybayin?">Sulat Baybayin is an android application which gives the power to your old android phone particularly android 7 to android 4.4 to read and make the baybayin characters available. It also has a keyboard for its user that also available to your devices." </__fieldset>
    </div>
  )
}

export default Index
