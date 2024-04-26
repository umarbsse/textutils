import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase button wah clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  //setText ("abc");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
    </div>
  );
}
