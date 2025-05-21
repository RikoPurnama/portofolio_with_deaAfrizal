import { FaArrowRight } from "react-icons/fa";

const CardSmall = ({ img, title, link } : any) => {
  return (
    <button
      className="relative flex h-24 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={img}
        alt={title}
        className="absolute -top-14 h-20 w-20 object-contain drop-shadow-xl drop-shadow-black/15"
      />
      <p className="text-center text-sm leading-4 font-semibold">{title}</p>

      <div className="absolute -bottom-4 flex h-10 w-10 scale-75 -rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
        <FaArrowRight className="text-xs text-white" />
      </div>
    </button>
  );
};

export default CardSmall;