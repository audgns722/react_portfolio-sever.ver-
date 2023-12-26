import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";
import Contact from "./components/sections/Contact.jsx";

import Section2Detail from "./components/detail/Section2Detail.jsx";
import Section3Detail from "./components/detail/Section3Detail.jsx";
import Section4Detail from "./components/detail/Section4Detail.jsx";
import Section5Detail from "./components/detail/Section5Detail.jsx";

const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail2" element={<Section2Detail />} />
      <Route path="/detail3" element={<Section3Detail />} />
      <Route path="/detail4" element={<Section4Detail />} />
      <Route path="/detail5" element={<Section5Detail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
