import "tachyons";
import "./App.css";

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
        <p className="example-text">
          Since the length or duration of words is clearly variable, for the
          purpose of measurement of text entry, the definition of each "word" is
          often standardized to be five characters or keystrokes long in
          English, including spaces and punctuation. For example, under such a
          method applied to plain English text the phrase "I run" counts as one
          word, but "rhinoceros" and "let's talk" would both count as two. Karat
          et al. found that one study of average computer users in 1999, the
          average rate for transcription was 32.5 words per minute, and 19.0
          words per minute for composition. In the same study, when the group
          was divided into "fast", "moderate", and "slow" groups, the average
          speeds were 40 wpm, 35 wpm, and 23 wpm, respectively. With the onset
          of the era of desktop computers, fast typing skills became much more
          widespread. An average professional typist types usually in speeds of
          50 to 80 wpm, while some positions can require 80 to 95 (usually the
          minimum required for dispatch positions and other time-sensitive
          typing jobs), and some advanced typists work at speeds above 120 wpm.
          Two-finger typists, sometimes also referred to as "hunt and peck"
          typists, commonly reach sustained speeds of about 37 wpm for memorized
          text and 27 wpm when copying text, but in bursts may be able to reach
          much higher speeds. From the 1920s through the 1970s, typing speed
          (along with shorthand speed) was an important secretarial
          qualification and typing contests were popular and often publicized by
          typewriter companies as promotional tools.
        </p>
      </section>
    </div>
  );
}

export default App;
