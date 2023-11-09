import { Link } from "react-router-dom";
// import { ArticlesContext } from "./MainContainer";
// import { useContext } from "react";
import posts from "../../api/articles.json";

const Highlights = () => {
  // const updatedPosts = useContext(ArticlesContext);

  const topArticle = posts[0];
  const otherArticles = posts.slice(1, 6);

  return (
    <div className="grid grid-rows-6 lg:grid-cols-3 lg:grid-rows-6 gap-4 px-14 py-4 ease-in-out duration-300">
      <div className="lg:col-span-2 lg:row-span-4 w-full h-[20rem] lg:h-[33rem] cursor-pointer relative">
        <Link to={`/posts/${topArticle.topic}/${topArticle.id}`}>
          <img
            src={topArticle.image}
            alt={topArticle.caption}
            className="z-0 rounded-md object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
          <div className="absolute bottom-10 left-10 right-10 text-left ">
            <h1 className="text-lg font-semibold text-white">
              {topArticle.title}
            </h1>
            <p className="mt-2 text-sm line-clamp-3 text-gray-300">
              {topArticle.description}
            </p>
            <p className="font-sans font-bold text-yellow-400 mt-3">
              {topArticle.topic.toUpperCase()}
            </p>
          </div>
        </Link>
      </div>
      {otherArticles.map((article, index) => {
        return (
          <div
            key={index}
            className="lg:col-span-1 lg:row-span-2 hover:scale-105 ease-in-out duration-500 cursor-pointer overflow-clip rounded-lg relative h-[20rem] lg:h-[16rem]"
          >
            <Link to={`/posts/${article.topic}/${article.id}`}>
              <div>
                <img
                  src={article.image}
                  alt={article.caption}
                  className="z-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="z-10 absolute bottom-4 left-4 right-4 text-left">
                  <h1 className="text-lg font-semibold text-white line-clamp-2">
                    {article.title}
                  </h1>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                    {article.description}
                  </p>
                  <p className="font-sans font-bold text-yellow-400 mt-2">
                    {article.topic.toUpperCase()}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
