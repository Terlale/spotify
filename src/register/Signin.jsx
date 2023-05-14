import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "./images/logo.svg";
import "./style/signin.css";


const Register = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };

  ///////////////////////////////////////////////////
  const [rememberMe, setRememberMe] = useState(false);

  function handleRememberMe() {
    setRememberMe(!rememberMe);
  }
  function handleRegister() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);
  }
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="" />
      </div>
      <hr />
      <div className="main">
        <div>
          <button className="facebook">
            <FaFacebook style={{ color: "white" }} /> Continue with Facebook
          </button>
        </div>
        <div>
          <button className="apple">
            <FaApple style={{ color: "white" }} /> Continue with Apple
          </button>
        </div>
        <div>
          <button className="google">
            <FcGoogle /> Continue with Google
          </button>
        </div>
        <div class="hr-text">
          <span>OR</span>
        </div>
        <div className="inputs">
          <div>
            <h5>Email address or username</h5>
            <input
              className="input"
              type="text"
              placeholder="Email address or username"
            />
          </div>
          <div>
            <h5>Password</h5>
            <input className="input" type="password" placeholder="Password" />
            <p>
              <u>Forgot your password ?</u>
            </p>
          </div>
          <div className="remember">
            <div className="show">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              Remember me
            </div>
            <div>
              <button className="log" onClick={handleRegister}>
                Log in
              </button>
            </div>
          </div>
          <hr />
          <div className="endl">
            <div>
              <h4>Don't have an account?</h4>
            </div>
            <div>
              <button onClick={goSignup} className="google">Sign up for Spotify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
