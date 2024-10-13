import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FirstRenderPage from "./screen/FirstRenderPage"; 
import ProfilePage from "./screen/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstRenderPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
