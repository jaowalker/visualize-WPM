import React from "react";

//  Used to set WPM the site is running based on the input text box.
const Input = ({ wpm, onChange }) => {
  return (
    <input
      className="input-reset"
      size="1"
      placeholder={wpm}
      onChange={onChange}
      maxLength="3"
    ></input>
  );
};

export default Input;
