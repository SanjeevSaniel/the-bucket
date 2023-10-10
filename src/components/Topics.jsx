import { Link } from "react-router-dom";
import { InfoCard } from "../components";

const Topics = ({ heading, data }) => {
  return (
    <div className="bg-[#41448d] p-5 lg:p-14 w-full text-white">
      <h1 className="capitalize underline underline-offset-4 mb-8 text-2xl">
        {heading}
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly items-center lg:justify-between lg:items-center my-4 gap-6">
        {data.map((d) => {
          return (
            <div key={d.id}>
              <Link
                to={`/category/${d.topic}`}
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
