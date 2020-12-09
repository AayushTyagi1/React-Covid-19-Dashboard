import React from "react";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import "./GithubCorner.css";

const GithubCorner = () => {
  return (
    <a
      href="https://github.com/AayushTyagi1/React-Covid-19-Dashboard"
      className="fixed top-0 right-0 hidden github-corner md:inline-block"
      aria-label="View source on GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubLogo />
    </a>
  );
};

export default GithubCorner;
