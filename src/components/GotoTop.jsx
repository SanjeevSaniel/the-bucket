const GotoTop = ({ showBtn, scrollUp }) => {
  return (
    <div className="">
      <button
        className={`${showBtn} transition-opacity duration-500 `}
        onClick={scrollUp}
      >
        <div className="fixed z-30 px-3 py-2 rounded-full bottom-20 right-5 bg-orange-700 text-center text-white text-2xl leading-7 hover:scale-110 ease-linear">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  );
};

export default GotoTop;
