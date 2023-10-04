const LatestArticles = ({ heading, articles }) => {
  return (
    <div className="p-14">
      <h1 className="capitalize underline underline-offset-4 mb-8 text-3xl">
        {heading}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => {
          return (
            <div key={index}>
              {/* bg-[#138D75] */}
              <div className="w-full h-fit box-border font-sans hover:scale-110 ease-in-out duration-500 hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden">
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/google-pixel-watch-2-04051067-16x9.jpg?VersionId=ojcpp6y1KVkTxttUzv5nK2kTUWINI0A3&size=690:388"
                  alt="Google Pixel Watch 2"
                  className="w-full h-[250px] object-fit"
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
