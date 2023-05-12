import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Biodata from "./components/biodata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex-row">
        <Biodata />
        <Card />
      </div>
    </>
  );
}

export default App;
