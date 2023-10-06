import { useContext, useState } from "react";
import { ArticlesContext } from "./MainContainer";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const articles = useContext(ArticlesContext);
  const [categorySelected, setCategorySelected] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const categories = [];
  articles.forEach((article) => categories.push(article.topic));

  const filterArticles = (category) => {
    setCategorySelected(category);
    const result = category
      ? articles.filter((article) => article.topic === category)
      : articles;

    setFilteredArticles(result);
  };

  return (
    <div className={`px-14`}>
      <div className="my-4">
        <Link to="/">
          <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
            Home
          </p>
        </Link>
        <span className="">›</span>
        <p className="inline-flex p-2">Articles</p>
      </div>
      <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
        Articles
      </h1>

      <div className="mb-8">
        <span>Categories: </span>

        <button
          onClick={() => filterArticles("")}
          disabled={categorySelected == ""}
          className="border-2 border-solid border-black px-2 mx-2 rounded-md inline-block uppercase disabled:bg-gray-600 disabled:text-white"
        >
          ALL
        </button>

        {[...new Set([...categories])].map((c, index) => {
          return (
            <button
              key={index}
              disabled={categorySelected == c}
              className="disabled:bg-gray-600 disabled:text-white border-2 border-solid border-black px-2 mx-2 rounded-md uppercase"
              onClick={() => filterArticles(c)}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ease-linear duration-500">
        {filteredArticles.map((article, index) => {
          return (
            <div key={index}>
              {/* bg-[#138D75] */}
              <Link to={`/category/${article.topic}/${article.id}`}>
                <div className="w-full h-fit box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.caption}
                    className="w-full h-[200px] object-fit"
                  />
                  <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100">
                    <span className="inline-flex items-center rounded-md text-xs font-semibold text-red-700 mb-2 uppercase">
                      {article.topic}
                    </span>
                    <h2 className="line-clamp-2 font-bold">{article.title}</h2>
                    <p className="line-clamp-2 my-2 text-sm">
                      {article.description}
                    </p>
                    <hr />
                    <p className="text-sm my-2">
                      {article.publisher}, {article.date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
