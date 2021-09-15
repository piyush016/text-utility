import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!!", "success");
  };

  const handleLoClick = () => {
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!!", "success");
  };

  const handleCopyClick = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied!!", "success");
  };

  const handleClearClick = () => {
    var newText = "";
    setText(newText);
    props.showAlert("Text Deleted!!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "New Text"; Wrong way
  return (
    <>
      <div
        className="container my-3 text-center"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#353434" : "	mintcream",
              color: props.mode === "dark" ? "mintcream" : "#353434",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>

        <br />

        <button className="btn btn-success mx-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button className="btn btn-danger my-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="text-center">YOUR TEXT SUMMARY</h1>
        <p>
          Words:{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>Characters: {text.length} </p>
        <p>Minute Read (Slow): {0.008 * text.split(" ").length} </p>
        <p>Minute Read (Average): {0.0032 * text.split(" ").length} </p>
        <br />
        <h3 className="container my-3 text-center">Preview</h3>
        <p>{text.length > 0 ? text : "NOTHING TO PREVIEW!!!"}</p>
      </div>
    </>
  );
}
