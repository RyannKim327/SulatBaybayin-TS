import Bottom from "./components/bottom";
import Footer from "./components/footer";
import Right from "./components/right";
import Top from "./components/top";

const App = () => {
  return (
    <div className="app h-dvh w-dvw">
      <Top className="top h-full w-full box-border" />
      <Right className="right h-full w-full box-border" />
      <Bottom className="bottom h-full w-full box-border" />
      <Footer className="footer w-full" />
    </div>
  );
};

export default App;
