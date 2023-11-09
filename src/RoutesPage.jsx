import { Route, Routes } from "react-router-dom";
import {
  ArticlesPage,
  Form,
  MainContainer,
  PostInDetail,
  TopicPage,
} from "./components";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { createContext } from "react";

export const ArticlesContext = createContext();

const RoutesPage = () => {
  // const [posts, setPosts] = useState([]);

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

  //   // console.log(posts);

  //   // setUpdatedPosts(articles);
  // }, []);

  return (
    // <ArticlesContext.Provider value={posts}>
    <Routes>
      <Route path="/">
        <Route index element={<MainContainer />} />
        <Route path="/category/:topic/:id" element={<PostInDetail />} />
        <Route path="/category/:topic" element={<TopicPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
    // </ArticlesContext.Provider>
  );
};

export default RoutesPage;
