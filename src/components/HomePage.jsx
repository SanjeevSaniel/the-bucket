import { useContext } from "react";
import { ArticlesContext } from "./MainContainer";
import categories from "../api/categories.json";
import { Highlights, SlideShow, Topics, LatestArticles } from "../components";

// const highlightsData = [{ id: 1 }];

const HomePage = () => {
  const updatedPosts = useContext(ArticlesContext);

  const articleImages = [];
  updatedPosts.forEach((article) => articleImages.push(article.image));
  // console.log(articleImages);

  return (
    <div>
      <SlideShow images={articleImages} />
      <Highlights />
      <Topics heading="Topics" data={categories} />

      <LatestArticles heading="tech" articles={updatedPosts} />
      <LatestArticles heading="travel" articles={updatedPosts} />
      <LatestArticles heading="finance" articles={updatedPosts} />
    </div>
  );
};

export default HomePage;
