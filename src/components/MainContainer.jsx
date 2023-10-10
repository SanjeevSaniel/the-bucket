// import HomePage from "./HomePage";
import articles from "../api/articles.json";
import { createContext, useState, useEffect } from "react";
import { HomePage } from "../components";

export const ArticlesContext = createContext(articles);

const MainContainer = () => {
  const [updatedPosts, setUpdatedPosts] = useState(articles);

  useEffect(() => {
    setUpdatedPosts(articles);
  }, []);

  return (
    <ArticlesContext.Provider value={updatedPosts}>
      <div>
        <HomePage />
      </div>
    </ArticlesContext.Provider>
  );
};

export default MainContainer;
