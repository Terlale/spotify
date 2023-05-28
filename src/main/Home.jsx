import React from "react";
import "./main.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrPlayFill } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import piano from "./img/piano.svg";
import deep from "./img/deep.svg";
import insturmental from "./img/insturmental.svg";
import jazz from "./img/jazz.svg";
import today from "./img/today.svg";
import rap from "./img/rap.svg";
import all from "./img/all.svg";
import rock from "./img/rock.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };
  const goSignin = () => {
    navigate("/signin");
  };

  return (
    <div className="home-all">
      <div className="home-navbar" id="sticky-navbar">
        <div>
          <GrPrevious className="icons home-icons" />
          <GrNext className="icons home-icons" />
        </div>
        <div>
          <button className="sign" onClick={goSignup}>
            Sign Up
          </button>
          <button className="home-log" onClick={goSignin}>
            Log in
          </button>
        </div>
      </div>
      <div className="home-navbar-secondary">
        <div>
          <h2>Focus</h2>
        </div>
        <div>
          <h4>Show All</h4>
        </div>
      </div>
      <div className="home-list-all">
        <div className="home-list">
          <img src={piano} alt="" />
          <h4>Peaceful Piano</h4>
          <p>Relax and indulge with beautiful piano pieces</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
        <div className="home-list">
          <img src={deep} alt="" />
          <h4>Deep Focus</h4>
          <p>Keep calm and focus with ambient and post-rock music.</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
        <div className="home-list">
          <img src={insturmental} alt="" />
          <h4>Insturumental Study</h4>
          <p>Focus with soft study music in the background.</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
        <div className="home-list">
          <img src={jazz} alt="" />
          <h4>Jazz Vibes</h4>
          <p>Uptempo instrumental hip hop beats.</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
      </div>
      <div className="home-navbar-secondary">
        <div>
          <h2>Spotify Playlists</h2>
        </div>
        <div>
          <h4>Show All</h4>
        </div>
      </div>
      <div className="home-list-all">
        <div className="home-list">
          <img src={today} alt="" />
          <h4>Peaceful Piano</h4>
          <p>Relax and indulge with beautiful piano pieces</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
        <div className="home-list">
          <img src={rap} alt="" />
          <h4>Deep Focus</h4>
          <p>Keep calm and focus with ambient and post-rock music.</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
        <div className="home-list">
          <img src={all} alt="" />
          <h4>Insturumental Study</h4>
          <p>Focus with soft study music in the background.</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
        <div className="home-list">
          <img src={rock} alt="" />
          <h4>Jazz Vibes</h4>
          <p>Uptempo instrumental hip hop beats.</p>
          <button className="play-button">
            <GrPlayFill />
          </button>
        </div>
      </div>

      <div className="home-footer">
        <div className="home-feet">
          <div className="footer-list">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>{" "}
              </li>
              <li>
                <a href="#">Jobs</a>{" "}
              </li>
              <li>
                <a href="#">For the Record</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h4>Communities</h4>
            <ul>
              <li>
                <a href="#"> For Artists</a>
              </li>
              <li>
                <a href="#">Developers</a>{" "}
              </li>
              <li>
                <a href="#">Advertising</a>{" "}
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Vendors</a>{" "}
              </li>
              <li>
                <a href="#"> Spotify for Work</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h4>Useful links</h4>
            <ul>
              <li>
                <a href="#">Support</a>{" "}
              </li>
              <li>
                <a href="#">Free Mobile App</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <RiInstagramLine className="footer-logo" />
            <RiTwitterFill className="footer-logo" />
            <RiFacebookCircleFill className="footer-logo" />
          </div>
        </div>
        <hr />
        <div className="home-foot">
          <p>© 2023 Spotify AB</p>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
