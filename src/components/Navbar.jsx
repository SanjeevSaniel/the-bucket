import { useState } from "react";

const menuItems = ["Home", "Articles", "About"];

const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useState("Home");

  const handleMenu = (menu) => {
    setCurrentMenu(menu);
  };

  return (
    <div className="flex flex-row justify-between items-center p-7">
      <div className="flex-initial">the bucket</div>
      <div className="flex-initial bg-black rounded-lg">
        <ul role="list" className="flex flex-row justify-between">
          {menuItems.map((menu, index) => {
            return (
              <li
                key={index}
                className={`mx-2 p-2 hover:text-yellow-300 ${
                  currentMenu === menu && "underline underline-offset-1"
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
