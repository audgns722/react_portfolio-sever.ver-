import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      M.hun @Developer
      <Link to="https://github.com/audgns722" target="_blank">
        <FaGithubSquare />
      </Link>
    </footer>
  );
};

export default Footer;
