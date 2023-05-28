import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../register/Signin";
import Signup from "../register/Signup";
import Premium from "../premium/Premium";
import Main from "../main/Main";
import Home from "../main/Home";
import MainHome from "../main/MainHome";
import Library from "../main/Library";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/library" element={<Library/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
