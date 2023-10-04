import InfoCard from "./InfoCard";
import PropTypes from "prop-types";

const Topics = ({ data }) => {
  return (
    <div className="bg-[#F6A1A1] px-14 py-10 w-full text-white">
      <h1 className="uppercase underline underline-offset-4">Topics</h1>
      <div className="flex flex-row flex-wrap justify-between my-4 gap-6">
        {data.map((d) => {
          return (
            <div key={d.id}>
              <InfoCard
                title={d.title}
                description={d.description}
                image={d.image}
                page={d.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Topics.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Topics;
