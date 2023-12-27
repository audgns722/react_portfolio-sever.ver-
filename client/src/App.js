import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";

import Main from "./components/layout/Main.jsx";

const App = () => {
  useEffect(() => {
    // smooth();
  });
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes >
      </Main>
    </>


  );
};

export default App;
