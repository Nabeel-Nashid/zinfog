import React from "react";
import logo from "../asset/zinfogLog.jpg";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";

function Header() {
  return (
    <div className="h-[80px] mt-6 border-b-2">
      <div className="flex justify-around">
        <img src={logo} />
        <ul className="flex justify-around">
          <li className="flex items-center">
            Username
            <FaUserCircle className="mx-3" />
          </li>
          <li className="flex items-center">
            <RiLogoutBoxRFill />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
