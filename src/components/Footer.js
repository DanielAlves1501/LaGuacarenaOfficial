import React from "react";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer className="w-full bg-darkGray pb-5 text-small ">
      <div className="main-container ">
        <Navbar buttons={false} />
      </div>
    </footer>
  );
};

export default Footer;
