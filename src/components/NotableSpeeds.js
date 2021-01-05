import React from "react";
import "./NotableSpeeds.css";

//  Used to set WPM the site is running based on notable/historic examples.
const NotableSpeeds = ({ onClick }) => {
  const labelValuePairs = [
    { label: "'Hunt and Peck' typist", wpm: 27 },
    { label: "Average Speed in 1990", wpm: 32 },
    { label: "Low threshold for professional typist", wpm: 50 },
    { label: "Stenotype typists as fast as", wpm: 226 },
    { label: "Guiness world record holder", wpm: 360 },
  ];

  const notableSpeeds = labelValuePairs.map((speed) => {
    return (
      <li
        className="green bg-navy br3 pa3 tl mt3 grow"
        value={speed.wpm}
        onClick={onClick}
        key={speed.wpm}
      >
        {`${speed.label}: ${speed.wpm}`}
      </li>
    );
  });
  return <ul className="notable-speeds list mr3">{notableSpeeds}</ul>;
};

export default NotableSpeeds;
