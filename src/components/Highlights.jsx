const Highlights = ({ content }) => {
  return (
    <div className="grid grid-rows-6 lg:grid-cols-3 grid-flow-row grid-auto-rows lg:grid-rows-6 gap-4 p-14 ease-in-out duration-300">
      <div className="bg-green-700 lg:col-span-2 lg:row-span-4 h-[20rem] lg:h-[30rem] cursor-pointer">
        1
      </div>
      {[2, 3, 4, 5, 6].map((v, index) => {
        return (
          <div
            key={index}
            className="bg-green-700 lg:col-span-1 lg:row-span-2 hover:scale-105 ease-in-out duration-500 cursor-pointer"
          >
            {v}
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
