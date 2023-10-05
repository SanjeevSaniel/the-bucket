import { useContext } from "react";
import { ArticlesContext } from "./MainContainer";
import { Link, useParams } from "react-router-dom";

const PostInDetail = () => {
  const articles = useContext(ArticlesContext);
  const { topic, id } = useParams();
  const article = articles.filter((article) => article.id === parseInt(id))[0];
  console.log(article);
  const relatedPosts = articles
    .filter(
      (article) =>
        article.id !== parseInt(id) && article.topic === topic.toLowerCase()
    )
    .slice(0, 4);

  if (window.innerWidth >= 1200)
    return (
      <div className="px-14 relative">
        <div className="my-4">
          <Link to="/">
            <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
              Home
            </p>
          </Link>
          <span className="">›</span>
          <Link to="/articles">
            <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
              Articles
            </p>
          </Link>
          <span className="">›</span>
          <p className="inline-flex p-2 capitalize">{topic}</p>
        </div>

        <div className="py-2 grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <h1 className="text-3xl font-semibold">{article.title}</h1>
            <img
              src={article.image}
              alt={article.caption}
              className="w-full max-h-[30rem] mt-5 mb-2 object-cover"
            />
            <p>
              {article.publisher}, {article.date}
            </p>
            <p className="my-5">{article.description}</p>
          </div>

          <div className="col-span-1 mt-10">
            <h1 className="text-2xl font-semibold underline underline-offset-1">
              Related Posts
            </h1>
            <div>
              {relatedPosts.map((article, index) => {
                return (
                  <div key={index} className="my-6">
                    <Link to={`/category/${article.topic}/${article.id}`}>
                      <div className="grid grid-cols-5 w-full max-h-[12rem] m-auto box-border font-sans ease-in-out duration-500 cursor-pointer rounded-md overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.caption}
                          className="w-full h-full object-fit col-span-2"
                        />
                        <div className="col-span-3 bg-white px-3 py-1 rounded-b-lg border-x-2 border-b-2 border-gray-100">
                          {/* <span className="inline-flex items-center text-xs font-semibold text-red-700 mb-2 uppercase">
                          {article.topic}
                        </span> */}
                          <h2 className="line-clamp-2 font-bold">
                            {article.title}
                          </h2>
                          <p className="line-clamp-2 my-1 text-sm">
                            {article.description}
                          </p>
                          <hr />
                          <p className="text-sm my-1">
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
        </div>
      </div>
    );

  if (window.innerWidth >= 450)
    return (
      <div className="px-14 relative">
        <div className="my-4">
          <Link to="/" target="_self">
            <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
              Home
            </p>
          </Link>
          <span className="">›</span>
          <Link to="/articles">
            <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
              Articles
            </p>
          </Link>
          <span className="">›</span>
          <p className="inline-flex p-2 capitalize">{topic}</p>
        </div>

        <div className="py-2 grid grid-cols-1 gap-5">
          <div className="col-span-1">
            <h1 className="text-3xl font-semibold">{article.title}</h1>
            <img
              src={article.image}
              alt={article.caption}
              className="w-full max-h-[30rem] mt-5 mb-2 object-cover"
            />
            <p>
              {article.publisher}, {article.date}
            </p>
            <p className="my-5">{article.description}</p>
          </div>

          <div className="col-span-1 mt-10">
            <h1 className="text-2xl font-semibold underline underline-offset-1">
              Related Posts
            </h1>
            <div>
              {relatedPosts.map((article, index) => {
                return (
                  <div key={index} className="my-6">
                    <Link to={`/category/${article.topic}/${article.id}`}>
                      <div className="grid grid-cols-5 w-full max-h-[12rem] m-auto box-border font-sans ease-in-out duration-500 cursor-pointer rounded-md overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.caption}
                          className="w-full h-full object-fit col-span-2"
                        />
                        <div className="col-span-3 bg-white px-3 py-1 rounded-b-lg border-x-2 border-b-2 border-gray-100">
                          {/* <span className="inline-flex items-center text-xs font-semibold text-red-700 mb-2 uppercase">
                          {article.topic}
                        </span> */}
                          <h2 className="line-clamp-2 font-bold">
                            {article.title}
                          </h2>
                          <p className="line-clamp-2 my-1 text-sm">
                            {article.description}
                          </p>
                          <hr />
                          <p className="text-sm my-1">
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
        </div>
      </div>
    );
};

export default PostInDetail;
