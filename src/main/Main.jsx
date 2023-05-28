import React from "react";
import Logo from "./img/Logo.svg";
import "./main.css";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { TfiWorld } from "react-icons/tfi";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const goPremium = () => {
    navigate("/premium");
  };
  const goSignin = () => {
    navigate("/signin");
  };
  return (
    <div>
      <div className="spotify" id="#spotify-container">
        <div className="spotify-main">
          <img src={Logo} alt="" />
          <div className="spotify-main-all">
            <div className="spotify-list-one">
              <ul>
                <li className="click">
                  <AiFillHome className="icons" />
                  Home
                </li>
                <li onClick={goSignin}>
                  <FaSearch className="icons" />
                  Search
                </li>
                <li onClick={goSignin}>
                  <BiLibrary className="icons" />
                  Your Library
                </li>
              </ul>
            </div >
            <div className="spotify-list-two">
              <ul>
                <li onClick={goSignin}>
                  <AiFillPlusSquare className="icons" />
                  Create Playlist
                </li>
                <li onClick={goSignin}>
                  <FcLike className="icons" />
                  Liked Songs
                </li>
              </ul>
            </div>
          </div>
          <div className="main-footer">
            <div className="main-foot">
              <div>
                <ul>
                  <li>
                    <p>Legal</p>
                  </li>
                  <li>
                    <p>Privacy Policy</p>
                  </li>
                  <li>
                    <p>About Ads</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <p>Privacy Center</p>
                  </li>
                  <li>
                    <p>Cookies</p>
                  </li>
                  <li>
                    <p>Accessibility</p>
                  </li>
                </ul>
              </div>
            </div>
            <button>
              <TfiWorld /> English
            </button>
          </div>
        </div>
        <div className="spotify-right">
          <Home />
        </div>
      </div>
      <div className="main-end">
        <div>
          <h5>Preview of Spotify</h5>
          <h4>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </h4>
        </div>
        <div><button className="main-sign" onClick={goPremium}>Sign up free</button></div>
      </div>
    </div>
  );
};

export default Main;
