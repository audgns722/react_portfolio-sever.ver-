import React from "react";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Contact from "../components/sections/Contact";
import Skill from "../components/sections/Skill";

const Home = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Skill />
      <Contact />
    </>
  );
};

export default Home;
