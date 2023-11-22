const HorizonalScrollButton = ({
  children,
  position,
  isHidden,
  handleClick,
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`absolute z-20 top-[10rem] bottom-[10rem] ${position} bg-slate-500 dark:bg-slate-300 p-3 flex items-center text-yellow-300 dark:text-yellow-900 text-2xl ${isHidden} opacity-80 dark:opacity-90`}
    >
      {children}
    </button>
  );
};

export default HorizonalScrollButton;
