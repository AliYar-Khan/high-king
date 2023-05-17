import React from "react";
import LOGO from "../../assets/logo.png";
import NavLinks from "./NavLinks";
const Nav = () => {
  return (
    <nav className="flex justify-between">
      <img src={LOGO} alt="Logo" className="h-9 cursor-pointer" />
      <ul className="md:flex hidden items-center gap-10">
        <NavLinks />
      </ul>
    </nav>
  );
};

export default Nav;
