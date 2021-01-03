import React from "react";
import "./NotableSpeeds.css";

//  Used to set WPM the site is running based on notable/historic examples.
const NotableSpeeds = ({ onClick }) => {
  const labelValuePairs = [
    { label: "Average Speed in 2020", wpm: 60 },
    { label: "Average Speed in 1960", wpm: 30 },
  ];

  const notableSpeeds = labelValuePairs.map((speed) => {
    return (
      <li value={speed.wpm} onClick={onClick} key={speed.wpm}>
        {`${speed.label}: ${speed.wpm}`}
      </li>
    );
  });
  return <ul className="notable-speeds list">{notableSpeeds}</ul>;
};

export default NotableSpeeds;
