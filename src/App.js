import React, { useState } from "react";

import "tachyons";
import "./App.css";

import ExampleText from "./components/ExampleText";
import Input from "./components/Input";
import NotableSpeeds from "./components/NotableSpeeds";

function App() {
  const [wpm, setWPM] = useState(90);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Slow typer? Fast typer? What's it like on the other side?</h1>
        <h2>
          What's it like to type at{" "}
          <span>
            <Input wpm={wpm} onChange={(e) => setWPM(e.target.value || 90)} />
          </span>{" "}
          WPM?
        </h2>
      </header>
      <section className="flex flex-row">
        <NotableSpeeds onClick={(e) => setWPM(e.target.value || 90)} />
        <ExampleText wpm={wpm} />
      </section>
    </div>
  );
}

export default App;
