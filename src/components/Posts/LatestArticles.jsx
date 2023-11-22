import { useContext, useState } from "react";
import { HorizonalScrollButton } from "..";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../../contexts/articles";
// import posts from "../api/articles.json";

const LatestArticles = ({ heading }) => {
  const { articles } = useContext(ArticlesContext);
  const route = "articles";
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const [laptopEnd, setLaptopEnd] = useState(3);
  const [tabletEnd, setTabletEnd] = useState(2);
  const [mobileEnd, setMobileEnd] = useState(1);

  // const filteredArticles = articles.filter(
  //   (article) => article.topic.toLowerCase() === heading.toLowerCase()
  // );

  const [categorySelected, setCategorySelected] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const hideLeftArrow = start <= 0 && "hidden";

  // TODO: Desktop
  const hideRightArrow = filteredArticles.length <= end && "hidden";
  const handleNext = () => {
    if (end < filteredArticles.length) {
      setStart((prev) => prev + 1);
      setEnd((prev) => prev + 1);
    }
    console.log("end", end);
  };

  const handlePrevious = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
      setEnd((prev) => prev - 1);
    }
  };

  // TODO: Laptop
  const hideLaptopRightArrow = filteredArticles.length <= laptopEnd && "hidden";
  const hideTabletRightArrow = filteredArticles.length <= tabletEnd && "hidden";
  const hideMobileRightArrow = filteredArticles.length <= mobileEnd && "hidden";

  const handleLaptopNext = () => {
    if (laptopEnd < filteredArticles.length) {
      setStart((prev) => prev + 1);
      setLaptopEnd((prev) => prev + 1);
    }
    console.log("end", end);
  };

  const handleLaptopPrevious = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
      setLaptopEnd((prev) => prev - 1);
    }
  };

  // TODO: Tablet
  const handleTabletNext = () => {
    if (tabletEnd < filteredArticles.length) {
      setStart((prev) => prev + 1);
      setTabletEnd((prev) => prev + 1);
    }
    console.log("end", end);
  };

  const handleTabletPrevious = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
      setTabletEnd((prev) => prev - 1);
    }
  };

  // TODO: Mobile
  const handleMobileNext = () => {
    if (mobileEnd < filteredArticles.length) {
      setStart((prev) => prev + 1);
      setMobileEnd((prev) => prev + 1);
    }
    console.log("end", end);
  };

  const handleMobilePrevious = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
      setMobileEnd((prev) => prev - 1);
    }
  };

  const categories = [];
  articles.forEach((article) => categories.push(article.topic));

  const filterArticles = (category) => {
    setCategorySelected(category);
    const result = category
      ? articles.filter((article) => article.topic === category)
      : articles;

    setFilteredArticles(result);
  };

  if (window.innerWidth >= 1200)
    return (
      <div className={`mx-3 my-14 px-10 py-6 rounded-lg dark:border-slate-500`}>
        <h1 className="text-3xl mx-2 mb-6 dark:text-white">Articles</h1>
        <div className="mb-8 dark:text-white">
          <button
            onClick={() => filterArticles("")}
            disabled={categorySelected == ""}
            className="uppercase border-2 border-solid border-black dark:border-gray-400 px-2 mx-2 rounded-md inline-block  disabled:bg-gray-600 disabled:text-white dark:disabled:bg-yellow-600"
          >
            All
          </button>

          {[...new Set([...categories])].map((c, index) => {
            return (
              <button
                key={index}
                disabled={categorySelected == c}
                className=" border-2 border-solid border-black dark:border-gray-400 px-2 mx-2 rounded-md uppercase disabled:bg-gray-600 disabled:text-white dark:disabled:bg-yellow-600"
                onClick={() => filterArticles(c)}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* TODO: Scroll buttons */}
        <div className="relative">
          <HorizonalScrollButton
            isHidden={hideLeftArrow}
            position="left-0"
            handleClick={handlePrevious}
          >
            &lt;
          </HorizonalScrollButton>

          <HorizonalScrollButton
            isHidden={hideRightArrow}
            position="right-0"
            handleClick={handleNext}
          >
            &gt;
          </HorizonalScrollButton>

          <div className="grid grid-cols-4 gap-8 dark:text-white">
            {filteredArticles.slice(start, end).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/${route}/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 linear duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit rounded-t-lg"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-gray-100 border-x-2 border-b-2 dark:bg-slate-900 dark:border-gray-500">
                        <span className="inline-flex items-center rounded-md text-sm font-semibold text-red-700 mb-2 uppercase dark:text-yellow-400">
                          {article.topic}
                        </span>
                        <h2 className="line-clamp-2 font-bold">
                          {article.title}
                        </h2>
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
      </div>
    );

  if (window.innerWidth >= 900)
    return (
      <div className={`p-14`}>
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl dark:text-gray-200">
          {heading}
        </h1>

        {/* TODO: Scroll buttons */}
        <div className="relative">
          <HorizonalScrollButton
            isHidden={hideLeftArrow}
            position="left-0"
            handleClick={handleLaptopPrevious}
          >
            &lt;
          </HorizonalScrollButton>

          <HorizonalScrollButton
            isHidden={hideLaptopRightArrow}
            position="right-0"
            handleClick={handleLaptopNext}
          >
            &gt;
          </HorizonalScrollButton>

          <div className="grid grid-cols-3 gap-4 ease-linear duration-500 dark:text-white">
            {filteredArticles.slice(start, laptopEnd).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/${route}/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100 dark:bg-slate-900 dark:border-gray-500">
                        <span className="inline-flex items-center rounded-md text-xs font-semibold text-red-700 mb-2 uppercase">
                          {article.topic}
                        </span>
                        <h2 className="line-clamp-2 font-bold">
                          {article.title}
                        </h2>
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
      </div>
    );

  if (window.innerWidth >= 700)
    return (
      <div className={`p-14`}>
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl dark:text-gray-200">
          {heading}
        </h1>

        {/* TODO: Scroll buttons */}
        <div className="relative">
          <HorizonalScrollButton
            isHidden={hideLeftArrow}
            position="left-0"
            handleClick={handleTabletPrevious}
          >
            &lt;
          </HorizonalScrollButton>

          <HorizonalScrollButton
            isHidden={hideTabletRightArrow}
            position="right-0"
            handleClick={handleTabletNext}
          >
            &gt;
          </HorizonalScrollButton>

          <div className="grid grid-cols-2  gap-8 ease-linear duration-500 dark:text-white">
            {filteredArticles.slice(start, tabletEnd).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/${route}/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100 dark:bg-slate-900 dark:border-gray-500">
                        <span className="inline-flex items-center rounded-md text-sm font-semibold text-red-700 dark:text-yellow-400 mb-2 uppercase">
                          {article.topic}
                        </span>
                        <h2 className="line-clamp-2 font-bold">
                          {article.title}
                        </h2>
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
      </div>
    );

  if (window.innerWidth >= 460)
    return (
      <div className={`p-14`}>
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl dark:text-gray-200">
          {heading}
        </h1>

        {/* TODO: Scroll buttons */}
        <div className="relative">
          <HorizonalScrollButton
            isHidden={hideLeftArrow}
            position="left-0"
            handleClick={handleMobilePrevious}
          >
            &lt;
          </HorizonalScrollButton>

          <HorizonalScrollButton
            isHidden={hideMobileRightArrow}
            position="right-0"
            handleClick={handleMobileNext}
          >
            &gt;
          </HorizonalScrollButton>

          <div className="grid grid-cols-1 gap-8 ease-linear duration-500 dark:text-white">
            {filteredArticles.slice(start, mobileEnd).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/${route}/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100 dark:bg-slate-900 dark:border-gray-500">
                        <span className="inline-flex items-center rounded-md text-sm font-semibold text-red-700 dark:text-yellow-400 mb-2 uppercase">
                          {article.topic}
                        </span>
                        <h2 className="line-clamp-2 font-bold">
                          {article.title}
                        </h2>
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
      </div>
    );
};

export default LatestArticles;
