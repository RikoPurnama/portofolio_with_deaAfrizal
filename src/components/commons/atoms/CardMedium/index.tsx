import { FaArrowRight } from "react-icons/fa";

const CardMedium = ({ bgImg, title, onClick } : any) => {
  return (
    <button
      className={`shadow-3xl relative flex h-34 w-34 cursor-pointer flex-col justify-end rounded-2xl bg-cover bg-center text-white shadow-lg max-md:h-28 max-md:w-28 overflow-hidden hover:scale-95 transition-transform duration-300 ease-in-out group`}
      onClick={onClick}
    >
      <img
        className="shadow-3xl h-full w-full rounded-2xl object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-120"
        src={bgImg}
      />
      <p className="absolute bottom-2 left-1/2 w-26 -translate-x-1/2 transform truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-md">
        {title}
      </p>

      <div className="absolute top-2 right-2 flex h-7 w-7 scale-75 -rotate-45 items-center justify-center rounded-[20px] border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20">
        <FaArrowRight className="text-xs text-white" />
      </div>
    </button>
  );
};

export default CardMedium;