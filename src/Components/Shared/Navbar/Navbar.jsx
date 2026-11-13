import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border-2 border-green-500 bg-transparent rounded-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border-2 border-green-500 bg-transparent rounded-lg"
              : ""
          }
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listed-books"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border-2 border-green-500 bg-transparent rounded-lg"
              : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to={"/pages-to-read"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border-2 border-green-500 bg-transparent rounded-lg"
              : ""
          }
        >
          Page to Read
        </NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-6 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" font-bold text-md md:text-xl">
          Book Gallery
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn  btn-active btn-success">Sign in</button>
        <button className="btn btn-active hidden md:flex btn-info">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
