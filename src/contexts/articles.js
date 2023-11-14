import { createContext, useContext } from "react";
// import articlesData from "../api/articles.json";

export const ArticlesContext = createContext({
  articles: [],
});

export const ArticlesProvider = ArticlesContext.Provider;

export default function useArticles() {
  return useContext(ArticlesContext);
}
