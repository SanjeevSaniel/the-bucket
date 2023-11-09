// import HomePage from "./HomePage";
// import articles from "../api/articles.json";
import { createContext, useState, useEffect } from "react";
import { HomePage } from "../components";
// import axios from "axios";

export const ArticlesContext = createContext();
export const NewPostsContext = createContext();

const MainContainer = () => {
  // const [posts, setPosts] = useState(null);

  // const addNewPosts = (data) => {
  //   setUpdatedPosts((prev) => [
  //     ...prev,
  //     { id: parseInt(Date.now() * Math.random()), ...data },
  //   ]);
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/posts")
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => console.error("Exrror fetching data: ", error));
  // }, []);

  return (
    // <ArticlesContext.Provider value={posts}>
    <div>
      <HomePage />
    </div>
    // </ArticlesContext.Provider>
  );
};

export default MainContainer;
