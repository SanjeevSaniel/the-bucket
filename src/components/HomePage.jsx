import { useContext } from "react";
import Highlights from "./Highlights";
import LatestArticles from "./LatestArticles";
import Topics from "./Topics";
import { ArticlesContext } from "./MainContainer";
import categories from "../api/categories.json";

const highlightsData = [{ id: 1 }];

const HomePage = () => {
  const articlesData = useContext(ArticlesContext);

  return (
    <div>
      <Highlights content={highlightsData} />
      <Topics heading="Topics" data={categories} />
      <LatestArticles
        backgroundColor="#1F618D"
        // backgroundColor="#138D75"
        // backgroundColor="#2E4053"
        heading="tech"
        articles={articlesData}
      />
      <LatestArticles
        // color="#1F618D"
        // backgroundColor="#138D75"
        heading="travel"
        articles={articlesData}
      />
      <LatestArticles
        // backgroundColor="#935116"
        // backgroundColor="#138D75"
        // backgroundColor={"#FA8072"}
        heading="finance"
        articles={articlesData}
      />
    </div>
  );
};

export default HomePage;
