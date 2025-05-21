import { RiArrowDownSLine } from "react-icons/ri";

const BoxProfile = ({ picture, name, onClick } : any) => {
    return (
      <button
        className="flex h-10 cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-(--bg-primary-cray) bg-transparent pr-3 pl-1 opacity-85 hover:opacity-100"
        onClick={onClick}
      >
        <img src={picture} className="h-8 w-8 rounded-full object-cover object-top" />
        <p className="text-sm font-semibold text-(--text-color-cray)">{name}</p>
        <RiArrowDownSLine className="text-2xl text-(--text-color-cray)" />
      </button>
    );
  };
  
  export default BoxProfile;