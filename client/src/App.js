import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";

import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import Intro from "./components/layout/Intro.jsx";
import About from "./components/sections/About.jsx";

const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <>
      <Intro />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
