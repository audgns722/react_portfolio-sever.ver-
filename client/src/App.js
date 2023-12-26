import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";
import Contact from "./components/sections/Contact.jsx";

import Section2Detail from "./components/detail/Section2Detail.jsx";

const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail2" element={<Section2Detail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
