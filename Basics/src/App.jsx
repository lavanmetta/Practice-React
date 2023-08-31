import "./App.css";
import About from "./components/About";
import Home from "./components/home";

function App() {
  const a = "lavan";
  const b = "sai";

  return (
    <>
      <About name={a} />
      <Home name={b} />
    </>
  );
}

export default App;
