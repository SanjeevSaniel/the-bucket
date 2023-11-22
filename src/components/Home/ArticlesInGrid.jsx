import { Link } from "react-router-dom";
import posts from "../../api/articles.json";

const ArticlesInGrid = () => {
  const route = "articles";
  const articles = posts.slice(0, 9);

  return (
    <div className="grid grid-rows-6 lg:grid-cols-4 gap-1 lg:my-6 px-8 py-4 ease-in-out duration-300">
      {articles.map((article, index) => {
        return (
          <div
            key={article.id}
            className={`${
              (index === 0 || index === 4 || index === 8) && "lg:col-span-2"
            }  lg:row-span-2 hover:z-10 hover:scale-105 ease-in-out duration-500 cursor-pointer overflow-clip relative h-[20rem] lg:h-[20rem]`}
          >
            <Link to={`/${route}/${article.topic}/${article.id}`}>
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
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesInGrid;
