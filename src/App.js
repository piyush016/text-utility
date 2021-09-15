import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={Mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                mode={Mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
