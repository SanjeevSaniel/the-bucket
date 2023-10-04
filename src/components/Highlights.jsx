import { ArticlesContext } from "./MainContainer";
import { useContext } from "react";

const Highlights = () => {
  const articles = useContext(ArticlesContext);

  const topArticle = articles[0];
  const otherArticles = articles.slice(1, 6);

  return (
    <div className="grid grid-rows-6 lg:grid-cols-3 lg:grid-rows-6 gap-4 p-14 ease-in-out duration-300">
      <div className="lg:col-span-2 lg:row-span-4 w-full h-[20rem] lg:h-[33rem] cursor-pointer relative">
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
          {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-yellow-300 hover:underline">
              View More &rarr;
            </button> */}
        </div>
      </div>
      {otherArticles.map((article, index) => {
        return (
          <div
            key={index}
            className="lg:col-span-1 lg:row-span-2 hover:scale-105 ease-in-out duration-500 cursor-pointer overflow-clip rounded-lg relative h-[20rem] lg:h-[16rem]"
          >
            <img
              src={article.image}
              alt={article.caption}
              className="z-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="z-10 absolute bottom-4 left-4 right-4 text-left">
              <h1 className="text-lg font-semibold text-white">
                {article.title}
              </h1>
              <p className="mt-2 text-sm line-clamp-3 text-gray-300">
                {article.description}
              </p>
              {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-yellow-300 hover:underline">
              View More &rarr;
            </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
