import { useContext } from "react";
import { ArticlesContext } from "../MainContainer";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  // faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import posts from "../../api/articles.json";

const PostInDetail = () => {
  // const articles = useContext(ArticlesContext);
  const { topic, id } = useParams();
  const article = posts.filter((article) => article.id === parseInt(id))[0];
  // console.log(article);
  const relatedPosts = posts
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
          <Link to="/posts">
            <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
              Posts
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
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center">
                {article.publisher === "BucketListly Blog" && (
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48.57 48.57"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className="inline-block h-10 w-10 mr-4 rounded-full ring-2 ring-white"
                  >
                    <title>BucketListly Logo</title>
                    <path
                      d="m48.56 24.28a24.28 24.28 0 1 0 -24.28 24.29 24.28 24.28 0 0 0 24.28-24.29z"
                      fill="#eebf25"
                    ></path>
                    <path
                      d="m12.506 19.144 1.258-.871 14.231 20.567-1.258.871zm20.844 1.626-7.78 5.38-1.29-1.87-3.32 2.3-6.22-8.99 5.91-4.09 2.24 3.24 7.54-5.21.61 5.21 4.66 2.4z"
                      fill="#231f20"
                    ></path>
                  </svg>
                )}
                {article.publisher !== "BucketListly Blog" && (
                  <span className="mr-2 ring-2 ring-white">
                    <Avatar size="50px" round="100%" name={article.publisher} />
                  </span>
                )}
                <div>
                  <p>{article.publisher}</p>
                  <p>{article.date}</p>
                </div>
              </div>

              {article.social?.length > 0 && (
                <div className="text-right">
                  <p className="text-xs uppercase font-sans pb-1">Connect</p>
                  <div className="flex gap-x-2">
                    {article?.social?.map((s) => {
                      return (
                        <a
                          key={s.id}
                          href={s.url}
                          // className="social-circle instagram loaded"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.arialabel}
                        >
                          {s.name === "instagram" && (
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                          )}

                          {s.name === "youtube" && (
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <p className="my-5 p-2">{article.description}</p>
          </div>

          <div className="col-span-1 mt-10">
            <h1 className="text-2xl font-semibold underline underline-offset-1">
              Related Posts
            </h1>
            <div>
              {relatedPosts.map((article, index) => {
                return (
                  <div key={index} className="my-6">
                    <Link to={`/posts/${article.topic}/${article.id}`}>
                      <div className="grid grid-cols-5 w-full max-h-[12rem] m-auto box-border font-sans ease-in-out duration-500 cursor-pointer rounded-md overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.caption}
                          className="w-full h-full object-fit col-span-2"
                        />
                        <div className="col-span-3 bg-white px-3 py-1 rounded-b-lg border-x-2 border-b-2 border-gray-100">
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
          <Link to="/posts">
            <p className="inline-flex p-2 hover:underline hover:underline-offset-1">
              Posts
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

            <div className="flex justify-between items-center p-2">
              <div className="flex items-center">
                {article.publisher === "BucketListly Blog" && (
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48.57 48.57"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className="inline-block h-10 w-10 mr-4 rounded-full ring-2 ring-white"
                  >
                    <title>BucketListly Logo</title>
                    <path
                      d="m48.56 24.28a24.28 24.28 0 1 0 -24.28 24.29 24.28 24.28 0 0 0 24.28-24.29z"
                      fill="#eebf25"
                    ></path>
                    <path
                      d="m12.506 19.144 1.258-.871 14.231 20.567-1.258.871zm20.844 1.626-7.78 5.38-1.29-1.87-3.32 2.3-6.22-8.99 5.91-4.09 2.24 3.24 7.54-5.21.61 5.21 4.66 2.4z"
                      fill="#231f20"
                    ></path>
                  </svg>
                )}
                {article.publisher !== "BucketListly Blog" && (
                  <span className="mx-4 ring-2 ring-white">
                    <Avatar size="50px" round="100%" name={article.publisher} />
                  </span>
                )}
                <div>
                  <p>{article.publisher}</p>
                  <p>{article.date}</p>
                </div>
              </div>

              <div>
                <p className="text-sm uppercase font-sans">Connect</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 mt-10">
            <h1 className="text-2xl font-semibold underline underline-offset-1">
              Related Posts
            </h1>
            <div>
              {relatedPosts.map((article, index) => {
                return (
                  <div key={index} className="my-6">
                    <Link to={`/posts/${article.topic}/${article.id}`}>
                      <div className="grid grid-cols-5 w-full max-h-[12rem] m-auto box-border font-sans ease-in-out duration-500 cursor-pointer rounded-md overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.caption}
                          className="w-full h-full object-fit col-span-2"
                        />
                        <div className="col-span-3 bg-white px-3 py-1 rounded-b-lg border-x-2 border-b-2 border-gray-100">
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
