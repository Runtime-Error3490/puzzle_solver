import React, { useState } from "react";
import Login from "./screen/Login";
import NumberGrid from "./components/NumberGrid";
import "./App.css";
import FirstRenderPage from "./screen/FirstRenderPage";
function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmission = (value) => {
    setSubmitted(value);
  };

  return (
    <>
    <FirstRenderPage/>
      {/* {!submitted && <Login onSubmission={handleSubmission} />}
      {submitted && (
        <div className="App">
          <h1>Puzzle Solver</h1>
          <NumberGrid />
        </div>
      )} */}
    </>
  );
}

export default App;
