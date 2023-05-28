import React from "react";
import Image from "./images/Image.svg";
import music from "./images/music.svg";
import musics from "./images/musics.svg";
import play from "./images/play.svg";
import upi from "./images/upi.svg";
import paytm from "./images/paytm.svg";
import visa from "./images/visa.svg";
import master from "./images/master.svg";
import amex from "./images/amex.svg";
import diners from "./images/diners.svg";
import logo from "./images/logo.svg";
import instagram from "./images/ins.svg";
import twitter from "./images/twitter.svg";
import facebook from "./images/fb.svg";
import world from "./images/world.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Premium = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">Get Premium free for 1 month</h1>
        <p className="subtitle">
          Just ₹119/month after. Debit and credit cards accepted. Cancel
          anytime.
        </p>

        <div className="buttons">
          <button className="button-primary" onClick={goSignup}>GET STARTED</button>
          <button className="button-secondary">SEE OTHER PLANS</button>
        </div>
        <div>
          <p className="terms">
            <u className="u-es">Terms and conditions apply</u>. 1 month free not available for
            users who have already tried Premium.
          </p>
        </div>
      </div>
      <div className="feature">
        <h1 className="title">The Power of Premium</h1>
        <div className="features">
          <div className="feat">
            <img src={Image} alt="" />
            <div className="titles">
              <h3>Ad-free music listening</h3>
            </div>
            <div className="paragraf">
              <p>Enjoy uninterrupted music.</p>
            </div>
          </div>
          <div className="feat">
            <img src={music} alt="" />
            <div className="titles">
              <h3>Offline playback</h3>
            </div>
            <div className="paragraf">
              <p>Save your data by listening offline.</p>
            </div>
          </div>
          <div className="feat">
            <img src={musics} alt="" />
            <div className="titles">
              <h3>Play everywhere</h3>
            </div>
            <div className="paragraf">
              <p>Listen on your speakers, TV, and other favorite devices.</p>
            </div>
          </div>
          <div className="feat">
            <img src={play} alt="" />
            <div className="titles">
              <h3>Pay your way</h3>
            </div>
            <div className="paragraf">
              <p>Prepay with Paytm, UPI, and more.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="choices">
        <h1 className="title">Pick your Premium</h1>
        <p className="subtitle">
          Listen without limits on your phone, speaker, and other devices.
        </p>
        <div className="cards">
          <img src={upi} alt="" />
          <img src={paytm} alt="" />
          <img src={visa} alt="" />
          <img src={master} alt="" />
          <img src={amex} alt="" />
          <img src={diners} alt="" />
        </div>
        <div className="offers">
          <div className="all">
            <div className="choice">
              <div className="part1">
                <button className="plans">One-time plans available</button>
                <h3>Mini</h3>
                <p>From ₹7/day</p>
                <p>1 account on mobile only</p>
              </div>
              <hr />
              <div className="part2">
                <ul>
                  <li>Ad-free music listening on mobile</li>
                  <li>Group Session</li>
                  <li>Download 30 songs on 1 mobile device</li>
                </ul>
              </div>
              <div className="view">
                <button>View Plans</button>
              </div>
            </div>
            <div >
              <p className="u">
                <u className="u-s">Terms and conditions apply.</u>
              </p>
            </div>
          </div>
          <div className="all">
            <div className="choice">
              <div className="part1">
                <button className="free">1 month free</button>
                <button className="plans">One-time plans available</button>
                <h3>Individual</h3>
                <p>₹119/month after offer period</p>
                <p>1 account </p>
              </div>
              <hr />
              <div className="part2">
                <ul>
                  <li>Ad-free music listening</li>
                  <li>Group Session</li>
                  <li>Download 10k songs/device on 5 devices</li>
                </ul>
              </div>
              <div className="view">
                <button>View Plans</button>
              </div>
            </div>
            <div >
              <p className="u">
                <u className="u-s">Terms and conditions apply.</u>1 month free not available for
                users who have already tried Premium.
              </p>
            </div>
          </div>
          <div className="all">
            <div className="choice">
              <div className="part1">
                <button className="free">1 month free</button>
                <button className="plans">One-time plans available</button>
                <h3>Duo</h3>
                <p>₹149/month after offer period</p>
                <p>2 accounts</p>
              </div>
              <hr />
              <div className="part2">
                <ul>
                  <li>For couples who live together</li>
                  <li>Ad-free music listening</li>
                  <li>Group Session</li>
                  <li>Download 10k songs/device, on 5 devices per account</li>
                </ul>
              </div>
              <div className="view">
                <button>View Plans</button>
              </div>
            </div>
            <div >
              <p className="u">
                <u className="u-s">Terms and conditions apply.</u>1 month free not available for
                users who have already tried Premium.
              </p>
            </div>
          </div>
          <div className="all">
            <div className="choice">
              <div className="part1">
                <button className="free">1 month free</button>
                <button className="plans">One-time plans available</button>
                <h3>Family</h3>
                <p>₹179/month after offer period</p>
                <p>Up to 6 accounts</p>
              </div>
              <hr />
              <div className="part2">
                <ul>
                  <li>For family who live together</li>
                  <li>Block explicit music</li>
                  <li>Ad-free music listening</li>
                  <li>Group Session</li>
                  <li>Download 10k songs/device on 5 devices</li>
                </ul>
              </div>
              <div className="view">
                <button>View Plans</button>
              </div>
            </div>
            <div >
              <p className="u">
                <u className="u-s">Terms and conditions apply.</u>1 month free not available for
                users who have already tried Premium.
              </p>
            </div>
          </div>
        </div>
        <div className="special">
          <div>
            <h3>Special discount for eligible students in university</h3>
          </div>
          <div>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="middle">
            <div className="m-left">
              <h5>COMPANY</h5>
              <ul>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div className="m-middle">
              <h5>COMMUNITIES</h5>
              <ul>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>
            </div>
            <div className="m-right">
              <h5>USEFUL LINKS</h5>
              <ul>
                <li>Support</li>
                <li>Web Player</li>
                <li>Free Mobile App</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
        <div className="end">
          <div className="list">
            <ul>
              <li>Legal</li>
              <li>Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
            </ul>
          </div>
          <div className="lang">
            <p>
              <img src={world} alt="" /> India(English){" "}
            </p>
            <h6>© 2023 Spotify AB</h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Premium;
