import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FirstRenderPage from "./screen/FirstRenderPage"; 
import ProfilePage from "./screen/ProfilePage";
import Login from "./screen/Login";
import Register from "./screen/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstRenderPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
