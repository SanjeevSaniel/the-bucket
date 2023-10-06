import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import RoutesPage from "./RoutesPage";
import Footer from "./components/Footer";
import GotoTop from "./components/GotoTop";
import Navbar from "./components/Navbar";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("block");

  const refScrollUp = useRef();
  const location = useLocation();

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
    window.scrollTo(0, 0);
    console.log(window);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <div className="relative" ref={refScrollUp}>
      <Navbar />
      <GotoTop showBtn={showGoTop} scrollUp={handleScrollUp} />
      <div className="min-h-screen">
        <RoutesPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
