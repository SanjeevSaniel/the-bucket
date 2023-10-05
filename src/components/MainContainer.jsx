import HomePage from "./HomePage";
import articles from "../api/articles.json";
import { createContext } from "react";

export const ArticlesContext = createContext(articles);

const MainContainer = () => {
  return (
    <ArticlesContext.Provider value={articles}>
      <div>
        <HomePage />
      </div>
    </ArticlesContext.Provider>
  );
};

export default MainContainer;
