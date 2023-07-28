import React from "react";
import igLogo from "../assets/Instagram_logo.svg.png";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <img src={igLogo} alt="instagram logo" className="w-[150px]" />
        </a>
        {/* search */}
        {/* button */}
        <div className="flex items-center gap-3">
          <Button></Button>
          <a href="#" className="bg-white text-blue rounded-lg block px-3 py-2">
            Daftar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
