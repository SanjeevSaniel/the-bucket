// import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeButton from "../Byte Features/ThemeButton";

const menuItems = [
  { id: 1, label: "home", path: "" },
  { id: 2, label: "posts", path: "posts" },
  // { id: 3, label: "about", path: "about" },
];

const Navbar = ({ scrollUp }) => {
  return (
    <div className="flex flex-row justify-between items-center px-6 lg:px-14 py-3 sticky top-0 z-40 bg-opacity-20 bg-gradient-to-r from-gray-900 to-slate-400 shadow-lg">
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
                      isActive && "text-yellow-300 underline underline-offset-1"
                    }`
                  }
                >
                  {menu.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-initial">
        {/* <span className="material-symbols-outlined">person</span> */}
        {/* <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">person</span> */}
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
