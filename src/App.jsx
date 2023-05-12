import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Biodata from "./components/Biodata";

function App() {
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
