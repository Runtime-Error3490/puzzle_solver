import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
function ProfilePage({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Profile Page</h2>
        <div className="modal-options">
          <Link className="modal-button" to="/login" title="login">
            Login
          </Link>
          <Link className="modal-button" to="/register" title="register">
            Register
          </Link>
        </div>
        <button className="close-button" onClick={onClose}>
          {" "}
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default ProfilePage;
