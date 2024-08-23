import "./App.css";
import Index from "./components/index";

function App() {
  return (
    <div className="h-screen w-screen box-border overflow-hidden transition-all transition-75 ease-in delay-75">
      <Index className="w-full h-full box-border p-[0.5rem]" />
    </div>
  );
}

export default App;