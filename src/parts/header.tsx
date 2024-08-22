import { Route } from "react-router-dom";

const Content = (props: any) => {
  return (
    <div className="flex flex-cols w-full h-full box-border">
      <Route element={props.element} />
    </div>
  );
};

const Header = (props: any) => {
  return (
    <div className={`${props.className}`}>
      <ul>{/* <Content /> */}</ul>
    </div>
  );
};

export default Header;
