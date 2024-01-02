import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";

import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import Intro from "./components/sections/Intro.jsx";
import Contact from "./components/sections/Contact.jsx";

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
        </Routes>
      </Main>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
