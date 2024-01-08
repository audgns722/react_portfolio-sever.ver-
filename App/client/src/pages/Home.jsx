import React, { useState } from "react";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Section2 isActive={isActive} setIsActive={setIsActive} />
      <Section3 isActive={isActive} setIsActive={setIsActive} />
      <Section4 isActive={isActive} setIsActive={setIsActive} />
      <Section5 isActive={isActive} setIsActive={setIsActive} />
      <Section6 isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Home;
