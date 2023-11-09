const GotoTop = ({ showBtn, scrollUp }) => {
  return (
    <div className="">
      <button
        className={`${showBtn} transition-opacity duration-800 `}
        onClick={scrollUp}
      >
        <div
          className="fixed z-30 px-3 py-2 bottom-20 right-5 bg-orange-700 text-center text-white text-2xl leading-7 hover:scale-110 ease-linear"
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  );
};

export default GotoTop;
