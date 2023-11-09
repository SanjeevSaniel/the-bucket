import { useEffect, useState } from "react";

const SlideShow = ({ images }) => {
  const [position, setPosition] = useState(0);

  const handleSlide = (value) => {
    setPosition(value);
    console.log(value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (position === 5) setPosition(0);
      else setPosition((prev) => prev + 1);
    }, 6000);
  }, [position]);

  return (
    <div className="my-8 px-14 flex justify-center relative">
      {images.slice(position, position + 1).map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            className="w-full h-[40rem] object-cover"
          />
        );
      })}

      <div className="absolute bottom-2 left-20 right-20 p-2 z-20 bg-transparent flex gap-x-3 justify-center">
        <div
          className="p-2 bg-red-500 rounded-full flex-none"
          onClick={() => handleSlide(0)}
        ></div>
        <div
          className="p-2 bg-red-500 rounded-full flex-none"
          onClick={() => handleSlide(1)}
        ></div>
        <div
          className="p-2 bg-red-500 rounded-full flex-none"
          onClick={() => handleSlide(2)}
        ></div>
      </div>
    </div>
  );
};

export default SlideShow;
