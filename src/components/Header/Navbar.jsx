// import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeButton from "../Byte Features/ThemeButton";

const menuItems = [
  { id: 1, label: "home", path: "" },
  { id: 2, label: "Articles", path: "articles" },
  // { id: 3, label: "about", path: "about" },
];

const Navbar = ({ scrollUp }) => {
  return (
    <div className="flex justify-center sticky top-0 z-40 bg-opacity-20 bg-gradient-to-r from-gray-900 to-slate-400 shadow-lg">
      <div className="flex flex-row justify-between items-center px-6 lg:px-14 py-3 w-[1440px]">
        <div className="flex-initial font-medium text-white text-xl drop-shadow-2xl">
          <Link to="/" onClick={scrollUp}>
            the bucket
          </Link>
        </div>
        <div className="flex-initial bg-[#414141] rounded-lg">
          <ul role="list" className="flex flex-row justify-between p-2">
            {menuItems.map((menu) => {
              return (
                <li key={menu.id}>
                  <NavLink
                    to={`/${menu.path}`}
                    className={({ isActive }) =>
                      `capitalize p-2 text-white hover:text-[#E3DC00] hover:cursor-pointer  ${
                        isActive &&
                        "text-yellow-300 underline underline-offset-1"
                      }`
                    }
                  >
                    {menu.label}
                  </NavLink>
                </li>
              );
            })}
            {/* <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown hover
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button> */}
            {/* <!-- Dropdown menu --> */}
            {/* <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div> */}
          </ul>
        </div>
        <div className="flex-initial">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
