import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  ArticlesPage,
  Form,
  HomePage,
  PostInDetail,
  TopicPage,
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="articles" element={<ArticlesPage />}></Route>
      <Route path="articles/:topic/:id" element={<PostInDetail />} />
      <Route path="articles/:topic" element={<TopicPage />} />
      <Route path="form" element={<Form />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
