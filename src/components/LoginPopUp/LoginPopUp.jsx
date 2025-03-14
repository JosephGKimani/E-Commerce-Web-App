import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './LoginPopUp.css'

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>
            {currentState}
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </h2>
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>

        <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Agree to terms and conditions</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
