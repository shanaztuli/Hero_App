import { Github } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="home"
        className={({ isActive }) =>
          isActive ? "text-blue-600 border-b-2 border-blue-700" : ""
        }
      >
        <li className="">Home</li>
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "text-blue-600 border-b-2 border-blue-700" : ""
        }
      >
        <li className="pl-3">About</li>
      </NavLink>
      <NavLink
        to="installation"
        className={({ isActive }) =>
          isActive ? "text-blue-600 border-b-2 border-blue-700" : ""
        }
      >
        <li className="pl-3">Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="home">
          <div className="flex gap-1">
            <img className="h-8" src={logo} alt="" />
            <a className=" text-xl font-bold text-[#8134eb]">HERO.IO</a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="http://github.com/shanaztuli"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">
            {" "}
            <Github className="text-white" /> Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
