// import { app, authentication } from "../utils/firebase";

const _input = (props: any) => {
  return (
    <div
      className={`${props.className} flex flex-row w-full justify-between items-center box-border px-2 my-2`}
    >
      <label htmlFor={props.name}>{props.children}</label>
      <input
        onChange={props.onChange ?? null}
        className=""
        type={props.type ?? "text"}
        id={props.name}
        name={props.name ?? props.children.toLowerCase()}
      />
    </div>
  );
};

const Creds = (props: any) => {
  const checker = () => {
    const _ = async () => {
      const email = document.getElementById("email") as HTMLInputElement;
      if (email) {
        // const data = await authentication(app).fetchSignInMethodsForEmail(
        // email.value,
        // );
        // alert(data.length);
        alert(email.value);
      }
    };
    _();
  };
  return (
    <div className={`${props.className} flex flex-col w-full h-full`}>
      <form
        onSubmit={() => checker()}
        className="flex flex-col w-full h-full items-end justify-center box-border border-2 border-black border-solid"
      >
        <h3 className="flex w-full justify-center items-center">
          Setup your credentials
        </h3>
        <_input type="text" name="username">
          Username
        </_input>
        <_input onChange={() => checker()} type="email" name="email">
          Email
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
