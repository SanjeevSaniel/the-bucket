import PropTypes from "prop-types";

const InfoCard = ({ title, description, image, page }) => {
  return (
    <div className="relative w-[12rem] h-[15rem] lg:h-[20rem] lg:w-[15rem] hover:shadow-xl hover:shadow-gray-700 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
      <img
        // src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        src={image}
        alt={title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
      <div className="absolute bottom-4 left-4 right-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm line-clamp-3 text-gray-300">{description}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-yellow-300 hover:underline">
          View More &rarr;
        </button>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  page: PropTypes.string,
};

export default InfoCard;
