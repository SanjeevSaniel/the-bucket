import { useState } from "react";

const menuItems = ["home", "blog", "about"];

const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useState("home");

  const handleMenu = (menu) => {
    setCurrentMenu(menu);
  };

  return (
    <div className="flex flex-row justify-between items-center px-14 py-7 mb-4">
      <div className="flex-initial">the bucket</div>
      <div className="flex-initial bg-[#292a43] rounded-lg">
        <ul role="list" className="flex flex-row justify-between">
          {menuItems.map((menu, index) => {
            return (
              <li
                key={index}
                className={`mx-2 p-2 text-white capitalize hover:text-yellow-300 hover:cursor-pointer ${
                  currentMenu.toLowerCase() === menu.toLowerCase() &&
                  "text-yellow-300 underline underline-offset-1"
                }`}
                onClick={() => handleMenu(menu)}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-initial">Icons</div>
    </div>
  );
};

export default Navbar;
