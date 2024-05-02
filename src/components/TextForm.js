import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleClearTxt = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Txt cleared","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard","success")
  }
  const handleExtraspaces = ()=>{
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "))
    props.showAlert("Extra spaces removed","success")
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#03105a'}}>
      <h1 className="mb2">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'rgb(3, 16, 90)':'white',color:props.mode==='dark'?'white':'#03105a'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
        Convert to Lower case
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearTxt}>
        Clear Text
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleExtraspaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#03105a'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
}
