const LatestArticles = ({ backgroundColor, heading, articles }) => {
  const technologyArticles = articles.filter(
    (article) => article.topic.toLowerCase() === heading.toLowerCase()
  );

  return (
    <div className={`bg-[${backgroundColor}] p-14`}>
      <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
        {heading}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ease-linear duration-500">
        {technologyArticles.map((article, index) => {
          return (
            <div key={index}>
              {/* bg-[#138D75] */}
              <div className="w-full h-fit box-border font-sans hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.caption}
                  className="w-full h-[200px] object-fit"
                />
                <div className="bg-white p-4 rounded-b-lg border-x-2 border-b-2 border-gray-100">
                  {/* border-x-2 border-b-2 border-gray-100 */}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestArticles;
