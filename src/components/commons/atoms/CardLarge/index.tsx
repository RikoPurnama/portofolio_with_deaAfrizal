import { useTranslation } from "react-i18next";
import RoundedImg from "../RoundedImg";


const CardLarge = ({ img, tech, index, onClick }: any) => {
  const { t } = useTranslation();

  const viewButton = (extraClass?: string) => (
    <button
      className={`relative z-1 mt-auto h-8 cursor-pointer truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 px-5 py-1 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20 ${extraClass}`}
      onClick={onClick}
    >
      {t("discover")}
    </button>
  );

  return (
    <div className="relative flex flex-col gap-5 h-46 w-full justify-center items-center rounded-3xl p-4 shadow-xl transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-lg overflow-hidden group">
      <div className="w-full flex justify-between">
        <img
          src={img}
          alt="img"
          className="absolute top-0 left-0 z-0 h-full w-full rounded-3xl object-cover shadow-md group-hover:scale-102 transition-transform duration-300 ease-in-out"
        />
        <div className="relative z-1 flex max-w-[180px] flex-col items-start justify-start gap-2 text-left leading-4 text-white">
          <p>{t(`projects.project${index}.title`)}</p>
          <p className="line-clamp-3 text-xs leading-3">
            {t(`projects.project${index}.desc`)}
          </p>
        </div>
        <div className="relative z-1 flex">
          {tech.map((item : any, idx : number) => (
            <RoundedImg key={idx} src={item.icon} index={idx} />
          ))}
        </div>
      </div>

      {viewButton("max-lg:hidden")}

      <div className="flex flex-col items-end justify-between gap-2 pl-4">
        {viewButton("lg:hidden")}
      </div>
    </div>
  );
};

export default CardLarge;
