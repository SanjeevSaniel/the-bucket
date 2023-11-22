// import { useContext } from "react";
// import { ArticlesContext } from "./MainContainer";
import categories from "../../api/categories.json";
import { SlideShow, Topics, LatestArticles } from "..";
import posts from "../../api/articles.json";
import ArticlesInGrid from "./ArticlesInGrid";

const HomePage = () => {
  // const posts = useContext(ArticlesContext);
  const articleImages = [];
  posts.forEach((article) => articleImages.push(article.image));
  // console.log(articleImages);

  return (
    <div>
      <SlideShow images={articleImages} />
      <ArticlesInGrid />
      <div className="flex justify-center items-center ">
        <Topics heading="Topics" data={categories} />
      </div>

      <LatestArticles heading="tech" />
      {/* <LatestArticles heading="travel" />
      <LatestArticles heading="finance" /> */}
    </div>
  );
};

export default HomePage;
