import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../register/Signin";
import Signup from "../register/Signup";
import Premium from "../premium/Premium";
import Main from "../main/Main";
import Home from "../main/Home";
import Music from "../music/Music";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
