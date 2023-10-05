import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./components/ArticlesPage";
import MainContainer from "./components/MainContainer";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainContainer />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPage;
