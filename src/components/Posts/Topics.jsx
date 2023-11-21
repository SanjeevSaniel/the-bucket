import { Link } from "react-router-dom";
import { InfoCard } from "..";

const Topics = ({ heading, data }) => {
  const route = "articles";

  return (
    <div className="bg-[#41448d] p-3 lg:p-10 w-fit text-white rounded-lg">
      <h1 className="capitalize underline underline-offset-4 mb-8 text-2xl">
        {heading}
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly items-center lg:justify-between lg:items-center my-4 gap-6">
        {data.map((d) => {
          return (
            <div key={d.id}>
              <Link
                to={`/${route}/${d.topic}`}
                onClick={() => console.log(d.topic)}
              >
                <InfoCard
                  topic={d.topic}
                  description={d.description}
                  image={d.image}
                  page={d.link}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
