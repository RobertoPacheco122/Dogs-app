import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import "./assets/css/reset.css";
import "./assets/css/utility.css";
import "./assets/css/icons.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login/*" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
