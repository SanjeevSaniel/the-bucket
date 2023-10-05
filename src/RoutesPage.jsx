import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./components/ArticlesPage";
import MainContainer from "./components/MainContainer";
import TopicPage from "./components/TopicPage";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainContainer />} />
          <Route path="/category/:topic" element={<TopicPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPage;
