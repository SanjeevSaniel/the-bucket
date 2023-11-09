import { useState } from "react";
import { HorizonalScrollButton } from "..";
import { Link } from "react-router-dom";
// import posts from "../api/articles.json";

const LatestArticles = ({ heading, posts }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const [laptopEnd, setLaptopEnd] = useState(3);
  const [tabletEnd, setTabletEnd] = useState(2);
  const [mobileEnd, setMobileEnd] = useState(1);

  const filteredArticles = posts.filter(
    (article) => article.topic.toLowerCase() === heading.toLowerCase()
  );

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

  if (window.innerWidth >= 1200)
    return (
      <div className={`px-14 py-6`}>
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
          {heading}
        </h1>

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

          <div className="grid grid-cols-4 gap-8 ease-linear duration-500">
            {filteredArticles.slice(start, end).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/posts/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500  hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit rounded-t-lg"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-gray-100 border-x-2 border-b-2 dark:bg-slate-900">
                        <span className="inline-flex items-center rounded-md text-sm font-semibold text-red-700 mb-2 uppercase dark:text-red-300">
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
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
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

          <div className="grid grid-cols-3 gap-4 ease-linear duration-500">
            {filteredArticles.slice(start, laptopEnd).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/posts/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100">
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
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
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

          <div className="grid grid-cols-2  gap-8 ease-linear duration-500">
            {filteredArticles.slice(start, tabletEnd).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/posts/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100">
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

  if (window.innerWidth >= 460)
    return (
      <div className={`p-14`}>
        <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
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

          <div className="grid grid-cols-1 gap-8 ease-linear duration-500">
            {filteredArticles.slice(start, mobileEnd).map((article, index) => {
              return (
                <div key={index}>
                  {/* bg-[#138D75] */}
                  <Link to={`/posts/${article.topic}/${article.id}`}>
                    <div className="w-[300px] h-fit m-auto box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg">
                      <img
                        src={article.image}
                        alt={article.caption}
                        className="w-full h-[200px] object-fit"
                      />
                      <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100">
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
};

export default LatestArticles;
