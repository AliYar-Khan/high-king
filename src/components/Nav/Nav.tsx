import React, { useState } from "react";
import LOGO from "../../assets/logo.png";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <nav className="flex justify-between">
      <img src={LOGO} alt="Logo" className="h-9 cursor-pointer" />
      <ul className="md:flex hidden items-center gap-10">
        <NavLinks />
      </ul>
      {/*Mobile Nav Bar*/}
      <ul
        className={`md:hidden flex flex-col gap-10 text-medium p-7 pt-20 fixed-top-0 z-50 bg-white w-2/3 h-screen shadow-2xl ${
          openDrawer ? "visible" : "invisible"
        } duration-500`}
      >
        <NavLinks />
      </ul>
      <div
        className="text-2xl md:hidden z-50"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <ion-icon name="menu"></ion-icon>
      </div>
    </nav>
  );
};

export default Nav;
