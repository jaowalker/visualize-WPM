import React from "react";

//  Used to set WPM the site is running based on the input text box.
const Input = ({ wpm, onChange }) => {
  return (
    <input
      className="input-reset"
      type="number"
      size="1"
      value={wpm}
      onChange={onChange}
      maxLength="3"
      min="1"
      max="999"
    ></input>
  );
};

export default Input;
