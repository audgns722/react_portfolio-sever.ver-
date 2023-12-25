import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";
import "./utils/canvas.js";
import Contact from "./components/sections/Contact.jsx";

import Detailsec2 from "./components/detail/Detailsec2.jsx";
import Detailsec3 from "./components/detail/Detailsec3.jsx";
import Detailsec4 from "./components/detail/Detailsec4.jsx";
import Detailsec5 from "./components/detail/Detailsec5.jsx";
import Skill from "./components/sections/Skill.jsx";

const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail2" element={<Detailsec2 />} />
      <Route path="/detail3" element={<Detailsec3 />} />
      <Route path="/detail4" element={<Detailsec4 />} />
      <Route path="/detail5" element={<Detailsec5 />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skill" element={<Skill />} />
    </Routes>
  );
};

export default App;
