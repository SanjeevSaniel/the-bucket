const InfoCard = ({ title, description, image, page }) => {
  return (
    <div className="relative h-[300px] w-[230px] rounded-md hover:shadow-xl hover:shadow-gray-700 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
      <img
        // src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        src={image}
        alt={title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-yellow-300 hover:underline">
          View More &rarr;
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
