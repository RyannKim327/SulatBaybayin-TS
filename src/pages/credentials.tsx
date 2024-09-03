const _input = (props: any) => {
  return (
    <div
      className={`${props.className} flex flex-row w-full justify-center items-center box-border px-2 my-2`}
    >
      <label for={props.name}>{props.children}</label>
      <input
        className="w-full box-border ml-2"
        type={props.type ?? "text"}
        id={props.name}
        name={props.name ?? props.children.toLowerCase()}
      />
    </div>
  );
};

const Creds = (props: any) => {
  return (
    <div className={`${props.className} flex flex-col w-full h-full`}>
      <form className="flex flex-col w-full h-full items-end justify-center box-border border-2 border-black border-solid">
        <_input type="text" name="username">
          Username
        </_input>
        <_input type="password" name="password">
          Password
        </_input>
        <_input type="password" name="confirmpassword">
          Retype Password
        </_input>
        <button className="border-2 border-black border-solid">Login</button>
      </form>
    </div>
  );
};

export default Creds;
