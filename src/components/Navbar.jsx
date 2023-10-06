import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { id: 1, label: "home", path: "" },
  { id: 2, label: "articles", path: "articles" },
  // { id: 3, label: "about", path: "about" },
];

const Navbar = () => {
  const location = useLocation();

  const [currentMenu, setCurrentMenu] = useState(() => {
    return JSON.parse(localStorage.getItem("menu")) || "home";
  });

  const handleMenu = (menu) => {
    setCurrentMenu(menu);
  };

  useEffect(() => {
    if (location.pathname === `/`) {
      localStorage.setItem("menu", JSON.stringify("home"));
      setCurrentMenu("home");
    } else
      localStorage.setItem("menu", JSON.stringify(location.pathname.slice(1)));
  }, [location, currentMenu]);

  return (
    <div className="flex flex-row justify-between items-center px-6 lg:px-14 py-3 sticky top-0 z-40 bg-opacity-20 bg-gradient-to-r from-gray-900 to-slate-400 shadow-xl">
      <div className="flex-initial font-medium text-white text-xl drop-shadow-2xl">
        <Link to="/">the bucket</Link>
      </div>
      <div className="flex-initial bg-[#414141] rounded-lg">
        <ul role="list" className="flex flex-row justify-between">
          {menuItems.map((menu, index) => {
            return (
              <Link key={index} to={`/${menu.path}`}>
                <li
                  className={`mx-2 p-2 capitalize text-white hover:text-[#E3DC00] hover:cursor-pointer  ${
                    currentMenu.toLowerCase() === menu.label.toLowerCase() &&
                    "text-yellow-300 underline underline-offset-1"
                  }`}
                  onClick={() => handleMenu(menu.label)}
                >
                  {menu.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex-initial invisible">
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">person</span>
      </div>
    </div>
  );
};

export default Navbar;
