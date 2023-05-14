import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../register/Signin";
import Signup from "../register/Signup";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;