import { Route, Routes } from "react-router-dom";
import {
  ArticlesPage,
  Form,
  MainContainer,
  PostInDetail,
  TopicPage,
} from "./components";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainContainer />} />
          <Route path="/category/:topic/:id" element={<PostInDetail />} />
          <Route path="/category/:topic" element={<TopicPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPage;
