import React from "react";
import { WindupChildren, Pace, useRewind, useSkip } from "windups";
import "./ExampleText.css";

//  Text content used to demo typing speeds

//  Converts from words per minute to miliseconds per character
//    Based on the fact that in the WPM metric it's assumed that a word is five characters
//    Had to break out the 'label method' from middle school to do this one.
//    min/x words * word/ 5 char * 60000 ms/min resulting in 12000 ms/x chars
const wpmToMspc = (wpm) => 12000 / wpm;

const SkipButton = () => {
  const skip = useSkip();
  return (
    <button className="button-reset" onClick={skip}>
      {"Skip"}
    </button>
  );
};

const RewindButton = () => {
  const rewind = useRewind();
  return (
    <button className="button-reset" onClick={rewind}>
      {"Restart"}
    </button>
  );
};

const ExampleText = ({ wpm }) => {
  const milisecondsPerCharacter = wpmToMspc(wpm);

  const exampleText =
    'Since the length or duration of words is clearly variable, for the purpose of measurement of text entry, the definition of each "word" is often standardized to be five characters or keystrokes long in English, including spaces and punctuation. For example, under such a method applied to plain English text the phrase "I run" counts as one word, but "rhinoceros" and "let\'s talk" would both count as two. Karat et al. found that one study of average computer users in 1999, the average rate for transcription was 32.5 words per minute, and 19.0 words per minute for composition. In the same study, when the group was divided into "fast", "moderate", and "slow" groups, the average speeds were 40 wpm, 35 wpm, and 23 wpm, respectively. With the onset of the era of desktop computers, fast typing skills became much more widespread. An average professional typist types usually in speeds of 50 to 80 wpm, while some positions can require 80 to 95 (usually the minimum required for dispatch positions and other time-sensitive typing jobs), and some advanced typists work at speeds above 120 wpm. Two-finger typists, sometimes also referred to as "hunt and peck" typists, commonly reach sustained speeds of about 37 wpm for memorized text and 27 wpm when copying text, but in bursts may be able to reach much higher speeds. From the 1920s through the 1970s, typing speed (along with shorthand speed) was an important secretarial qualification and typing contests were popular and often publicized by typewriter companies as promotional tools.';

  return (
    <div className="example-text">
      <WindupChildren>
        <SkipButton />
        <div key={milisecondsPerCharacter}>
          <Pace getPace={(char) => milisecondsPerCharacter}>
            <div>{exampleText}</div>
          </Pace>
        </div>
        <RewindButton />
      </WindupChildren>
    </div>
  );
};

export default ExampleText;
