import React from "react";
import imgLight from "./light1.png";
import imgDark from "./dark1.png";

import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <div className="container">
        <div
          className="card my-5 mx-auto"
          style={{ border: "3px solid green" }}
        >
          <img
            src={`${props.mode === "dark" ? imgLight : imgDark}`}
            className="card-img-top"
            alt="an img of something"
          />
          <hr />
          <div className="card-body">
            <h5 className="card-title text-center">Text Utility App</h5>
            <p className="card-text">
              It gives me immense pleasure to launch this app called TextUtils
              app which I made using React and Bootstrap. <br /> <br />
              In this app, whatever text you enter: <br />
              1. Can be either converted to uppercase, lowercase.
              <br />
              2. Can get to know how many characters and words are there.
              <br />
              3. Can get know how much time will it take to read the whole text.
              4. Can copy the modified text at once.
              <br />
            </p>

            <div className="text-center">
              <Link to="/">
                <button className="btn btn-dark">Go to the app</button>
              </Link>
            </div>
            <br />

            <p className="card-text">
              This app will be update with few more updates such as: 1. Email
              Extractor. <br />
              2. Deleting extra Spaces. <br />
              3. Phone no. Extractor. <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
