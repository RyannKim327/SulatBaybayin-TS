const _fieldset = (props: any) => {
  return (
    <fieldset
      className={`${props.className} w-full border-[1px] border-black border-solid my-2 box-border`}
    >
      <legend className={`ml-2 border-[1px] border-black border-solid`}>
        {props.title}
      </legend>
      <blockquote>&emsp;{props.children}</blockquote>
    </fieldset>
  );
};

const Policies = (props: any) => {
  return (
    <div className={`${props.className} w-full p-2 box-border`}>
      <_fieldset title="hello">Test</_fieldset>
    </div>
  );
};

export default Policies;
