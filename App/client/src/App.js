import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";

import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import Intro from "./components/sections/Intro.jsx";
import Contact from "./components/sections/Contact.jsx";
import { Loading } from "./pages/Loading.jsx";

const App = () => {
  useEffect(() => {
    smooth();
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
    };
    loadData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
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
      )}
    </>
  );
};

export default App;
