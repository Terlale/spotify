import React, { useContext, useEffect, useState } from "react";
import Logo from "./img/Logo.svg";
import "./main.css";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { TfiWorld } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Homes from "./Homes";
import Library from "./Library";
import { MainContext } from "../context/Context";

const MainHome = () => {
  const navigate = useNavigate();
  const { activePage, setActivePage } = useContext(MainContext);
  const [showContent, setShowContent] = useState(false);

  const goHomes = () => {
    setActivePage("homes");
    navigate("/homes");
  };

  const goLibrary = () => {
    setActivePage("library");
    navigate("/library");
  };

  useEffect(() => {
    // Sayfa yüklendiğinde veya activePage değeri değiştiğinde çalışacak işlemler buraya yazılır
    if (activePage === "homes") {
      // "homes" sayfasına yönlendirme işlemleri veya gerekli işlemler burada yapılabilir
      setShowContent(true);
    } else if (activePage === "library") {
      // "library" sayfasına yönlendirme işlemleri veya gerekli işlemler burada yapılabilir
      setShowContent(true);
    }
  }, [activePage]);

  return (
    <div>
      <div className="spotify" id="spotify-container">
        <div className="spotify-main">
          <img src={Logo} alt="" />
          <div className="spotify-main-all">
            <div className="spotify-list-one">
              <ul>
                <li
                  className={`click ${activePage === "homes" ? "active" : ""}`}
                  onClick={goHomes}
                >
                  <AiFillHome className="icons" />
                  Home
                </li>
                <li>
                  <FaSearch className="icons" />
                  Search
                </li>
                <li
                  className={`click ${
                    activePage === "library" ? "active" : ""
                  }`}
                  onClick={goLibrary}
                >
                  <BiLibrary className="icons" />
                  Your Library
                </li>
              </ul>
            </div>
            <div className="spotify-list-two">
              <ul>
                <li>
                  <AiFillPlusSquare className="icons" />
                  Create Playlist
                </li>
                <li>
                  <FcLike className="icons" />
                  Liked Songs
                </li>
              </ul>
            </div>
          </div>
          <div className="main-footer-homes">
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
        {showContent && (
          <div className="spotify-right">
            {activePage === "homes" && <Homes />}
            {activePage === "library" && <Library />}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHome;
