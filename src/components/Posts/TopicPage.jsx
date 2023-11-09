// import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import { ArticlesContext } from "./MainContainer";
import posts from "../../api/articles.json";

const TopicPage = () => {
  const { topic } = useParams();
  // console.log("topic", topic);

  // const articles = useContext(ArticlesContext);

  const filteredArticles = posts.filter(
    (article) => article.topic === topic.toLowerCase()
  );

  return (
    <div className="px-14">
      <div className="my-4">
        <Link to="/">
          <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
            Home
          </p>
        </Link>
        <span className="">›</span>
        <Link to="/posts">
          <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
            Posts
          </p>
        </Link>
        <span className="">›</span>
        <p className="inline-flex p-2">{topic}</p>
      </div>

      <h1 className="my-4 capitalize text-4xl underline underline-offset-1 font-semibold">
        {topic}
      </h1>

      <div className="grid grid-cols-2 gap-6 ease-linear duration-500 my-8">
        {filteredArticles.map((article, index) => {
          return (
            <div key={index}>
              <Link to={`/posts/${article.topic}/${article.id}`}>
                <div className="grid grid-cols-2 max-h-[12rem] m-auto font-sans ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-md overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.caption}
                    className="w-full h-full object-fit"
                  />
                  <div className="bg-white p-4 rounded-b-lg border-gray-100">
                    <span className="inline-flex items-center text-xs font-semibold text-red-700 mb-2 uppercase">
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

export default TopicPage;
