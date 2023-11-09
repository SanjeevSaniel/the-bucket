// import { useContext } from "react";
// import { ArticlesContext } from "./MainContainer";
import categories from "../../api/categories.json";
import { Highlights, SlideShow, Topics, LatestArticles } from "..";
import posts from "../../api/articles.json";

const HomePage = () => {
  // const posts = useContext(ArticlesContext);
  const articleImages = [];
  posts.forEach((article) => articleImages.push(article.image));
  // console.log(articleImages);

  return (
    <div>
      <SlideShow images={articleImages} />
      <Highlights />
      <Topics heading="Topics" data={categories} />

      <LatestArticles heading="tech" posts={posts} />
      <LatestArticles heading="travel" posts={posts} />
      <LatestArticles heading="finance" posts={posts} />
    </div>
  );
};

export default HomePage;
