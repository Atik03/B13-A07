import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg ${
      isActive ? "bg-[rgb(36,77,63)] text-white" : "hover:bg-gray-100"
    }`;

  return (
    <>
      <div className="w-full border-b-2 border-gray-200 container mx-auto">
        <div className="navbar bg-base-100  px-4">
          <div className="navbar-start md:hidden">
            <div className="dropdown md:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <GiHamburgerMenu />
              </label>

              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink to="/" className={navLinkClass}>
                    <FaHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/timeline" className={navLinkClass}>
                    <RiTimeLine /> Timeline
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/stats" className={navLinkClass}>
                    <ImStatsDots /> Stats
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 flex justify-end md:justify-start">
            <img src={logo} alt="Logo" className="w-28" />
          </div>

          <div className="hidden md:flex gap-2">
            <NavLink to="/" className={navLinkClass}>
              <FaHome /> Home
            </NavLink>

            <NavLink to="/timeline" className={navLinkClass}>
              <RiTimeLine /> Timeline
            </NavLink>

            <NavLink to="/stats" className={navLinkClass}>
              <ImStatsDots /> Stats
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
