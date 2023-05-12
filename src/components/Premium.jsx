import React from "react";
import Image from "./images/Image.svg";
import music from "./images/music.svg";
import musics from "./images/musics.svg";
import play from "./images/play.svg";
import "./style/style.css";

const Premium = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Get Premium free for 1 month</h1>
        <h2 className="subtitle">
          Just ₹119/month after. Debit and credit cards accepted. Cancel
          anytime.
        </h2>

        <div className="buttons">
          <button className="button-primary">GET STARTED</button>
          <button className="button-secondary">SEE OTHER PLANS</button>
        </div>
        <div>
          <p className="terms">
            Terms and conditions apply. 1 month free not available for users who
            have already tried Premium.
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
    </div>
  );
};

export default Premium;
