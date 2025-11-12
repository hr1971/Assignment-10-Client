import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  const { user, signOutFunc } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}
>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/find-partners"}>Find Partners</NavLink>
      </li>
      <li>
        <NavLink to={"/create-partner"}>Create Partner Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/my-connections"}>My Connections</NavLink>
      </li>
    </>
  );
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
          <a className="btn btn-ghost text-xl">
            
            STUDY<span className="text-blue-500 font-bold">MATE</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="mt-3">
                  <Link to={"/profile"}>
                    <FaUser /> Profile
                  </Link>
                </li>

                {/* <li>
                  <Link to={"/my-models"}>My Models</Link>
                </li>

                <li>
                  <Link to={"/my-downloads"}>My Downloads</Link>
                </li> */}

                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />

                <li>
                  <button
                    onClick={signOutFunc}
                    className="btn btn-xs text-left bg-gradient-to-r from-blue-500  to-sky-500 "
                  >
                    {/* <IoLogOut /> */}
                     Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn rounded-full   btn-outline bg-gradient-to-r from-blue-500 to-indigo-600"
            >
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
