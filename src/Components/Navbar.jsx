import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = <>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/find-partners'}>Find Partners</NavLink></li>
          <li><NavLink to={'/create-partner'}>Create Partner Profile</NavLink></li>
          <li><NavLink to={'/my-connections'}>My Connections</NavLink></li>

  </>
  return (
    <div className="container mx-auto">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">STUDY<span className="text-blue-500 font-bold">MATE</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <NavLink to={'/auth/login'} className="btn bg-gradient-to-r from-blue-500 to-[#B8B8FF]">Login</NavLink>
          <NavLink to={'/auth/register'} className="btn bg-gradient-to-r from-[#B8B8FF] to-blue-500">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
