import React, { useContext } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "./images/logo.svg";
import "./style/signup.css";
import { MainContext } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const goSignin = () => {
    navigate("/signin");
  };

  const {
    email,
    password,
    name,
    month,
    year,
    day,
    setEmail,
    setPassword,
    setName,
    setMonth,
    setYear,
    setDay,
    errors,
    setErrors,
  } = useContext(MainContext);

  const sendData = () => {
    const newErrors = {
      email: email === "" ? "Fill in the blanks" : "",
      password: password === "" ? "Fill in the blanks" : "",
      name: name === "" ? "Fill in the blanks" : "",
    };

    setErrors(newErrors);

    // Check if any of the fields are empty and return if true
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    axios
      .post(`https://646106ce491f9402f49cfe25.mockapi.io/api/spotify`, {
        email,
        password,
        name,
        month,
        year,
        day,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/mainhome")
      });

    setEmail("");
    setPassword("");
    setName("");
    setMonth("");
    setYear("");
    setDay("");
  };
  console.log(email);
  return (
    <div>
      <div className="sign-navbar-two">
        <img src={logo} alt="" />
      </div>
      <div className="main">
        <div>
          <h1>Sign up for free to start listening.</h1>
        </div>
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
            <h2>Sign up with your email address</h2>
          </div>
          <div>
            <h5>What's your email?</h5>
            <input
              className={`input ${errors.email && "error-border"}`}
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <h5>Create a password</h5>
            <input
              className={`input ${errors.password && "error-border"}`}
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <div>
            <h5>What should we call you?</h5>
            <input
              className={`input ${errors.name && "error-border"}`}
              type="text"
              placeholder="Enter a profile name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
            <p>This appears on your profile.</p>
          </div>
          <h5>What's your date of birth?</h5>
          <div className="birth">
            <div>
              <div>
                <p>Month</p>
              </div>
              <select
                className="month"
                id="month"
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div>
              <p>Day</p>
              <input
                className="day"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div>
              <p>Year</p>
              <input
                className="year"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="check">
            <input type="checkbox" />
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </div>
          <div className="endl">
            <div className="btn">
              <div className="ps">
                <p>
                  By clicking on sign-up, you agree to Spotify's{" "}
                  <u>Terms and Conditions of Use.</u>
                </p>
                <p>
                  To learn more about how Spotify collects, uses, shares and
                  protects your personal data, please see{" "}
                  <u>Spotify's Privacy Policy.</u>
                </p>
              </div>
              <div>
                <button className="log" onClick={sendData}>
                  Sign up
                </button>
              </div>
              <div onClick={goSignin}>
                <h4>
                  Have an account? <u>Log in.</u>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
