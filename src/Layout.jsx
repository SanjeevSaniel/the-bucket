import { Outlet, useLocation } from "react-router-dom";
import { Footer, GotoTop, Navbar } from "./components";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";

import articles from "./api/articles.json";
import { ArticlesProvider } from "./contexts/articles";

const Layout = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("block");

  const refScrollUp = useRef();
  const location = useLocation();

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (scrollPosition > 100) {
      return setshowGoTop("opacity-100");
    } else if (scrollPosition < 50) {
      return setshowGoTop("opacity-0");
    }
  };

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(window);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <ArticlesProvider value={{ articles }}>
        <div ref={refScrollUp} className="dark:bg-slate-800">
          <Navbar scrollUp={handleScrollUp} />
          <div className="m-auto lg:w-[1400px]">
            <Outlet />
          </div>
          <GotoTop showBtn={showGoTop} scrollUp={handleScrollUp} />
          <Footer />
        </div>
      </ArticlesProvider>
    </ThemeProvider>
  );
};

export default Layout;
