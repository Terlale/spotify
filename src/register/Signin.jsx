import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "./images/logo.svg";
import "./style/signin.css";
import axios from "axios";
import { MainContext } from "../context/Context";

const Register = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };

  const {
    email,
    setEmail,
    password,
    setPassword,
    db,
    setDb,
    error,
    setError,
    emailError,
    setEmailErrors,
    passwordError,
    setPasswordErrors,
  } = useContext(MainContext);

  useEffect(() => {
    axios
      .get("https://646106ce491f9402f49cfe25.mockapi.io/api/spotify")
      .then((res) => {
        setDb(res.data);
      });
  }, []);

  console.log(db);

  const handleSignup = () => {
    const check = db.find(
      (item) => item.email.includes(email) && item.password.includes(password)
    );
    console.log(email, "includes email");
    console.log(email, "includes password");
    if (email === "") {
      setEmailErrors(true);
      setPasswordErrors(false);
      setError("Fill in the blanks"); // Set email error message
    } else if (password === "") {
      setEmailErrors(false);
      setPasswordErrors(true);
      setError("Fill in the blanks"); // Set password error message
    } else {
      setEmailErrors(false);
      setPasswordErrors(false);
      const check = db.find(
        (item) =>
          item.email.includes(email) && item.password.includes(password)
      );

      if (check) {
        navigate("/mainhome");
      } else {
        setEmail("");
        setPassword("");
        setError("Email and password are incorrect. Please try again.");
      }
    }
  };
  console.log(email);
  return (
    <div>
      <div className="sign-navbar-one">
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
              className={`input ${emailError ? "error-border" : ""}`}
              type="text"
              value={email}
              placeholder="Email address or username"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErrors(false);
                setError("");
              }}
            />
          </div>
          <div>
            <h5>Password</h5>
            <input
              className={`input ${passwordError ? "error-border" : ""}`}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordErrors(false);
                setError("");
              }}
            />
            <div className="error">{error}</div>
            <p>
              <u>Forgot your password ?</u>
            </p>
          </div>
          <div className="remember">
            <div className="show">
              <input type="checkbox" />
              Remember me
            </div>
            <div>
              <button className="log" onClick={handleSignup}>
                Log in
              </button>
            </div>
          </div>
          <div className="endl">
            <div>
              <h4>Don't have an account?</h4>
            </div>
            <div>
              <button onClick={goSignup} className="google">
                Sign up for Spotify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
