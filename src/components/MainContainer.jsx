import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import articles from "../api/articles.json";
import { createContext } from "react";

export const ArticlesContext = createContext(articles);

const MainContainer = () => {
  return (
    <ArticlesContext.Provider value={articles}>
      <div>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </ArticlesContext.Provider>
  );
};

export default MainContainer;
