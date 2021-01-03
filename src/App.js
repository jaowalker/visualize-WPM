import "tachyons";
import "./App.css";

import ExampleText from "./components/ExampleText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Slow typer? Fast typer? What's it like on the other side?</h1>
        <h2>
          What's it like to type at <span> [ ] </span> WPM?
        </h2>
      </header>
      <section className="flex flex-row">
        <ul className="notable-speeds list">
          <li>Notable Speed</li>
          <li>Notable Speed</li>
          <li>Notable Speed</li>
          <li>Notable Speed</li>
          <li>Notable Speed</li>
          <li>Notable Speed</li>
          <li>Notable Speed</li>
        </ul>
        <ExampleText />
      </section>
    </div>
  );
}

export default App;
