import { useState } from "react";
import BoxSocial from "../../atoms/BoxSocial";
import CardLarge from "../../atoms/CardLarge";
import CardSmall from "../../atoms/CardSmall";
import Modal from "../../atoms/Modal";
import RoundedImg from "../../atoms/RoundedImg";

import {
  listIndustries,
  listProjects,
  listSkills,
} from "../../../../utils/Constans";
import { useTranslation } from "react-i18next";

const HeroDetail = () => {
  const [dataProject, setDataProject] = useState(undefined);
  const { t } = useTranslation();

  const viewListSkills = () => {
    return listSkills.slice(0,3).map((item, index) => (
      <CardSmall
        key={index}
        img={item.icon}
        title={item.name}
        link={item.link}
      />
    ));
  };

  return (
    <>
      <section className="flex max-md:flex-col-reverse">
        <div className="w-[60%] text-left text-(--text-color-black) max-xl:w-[50%] max-md:mt-8 max-md:w-full">
          <p>Riko Purnama</p>

          <div className="flex gap-8 max-xl:flex-col">
            <div>
              <h3 className="font-mullish max-w-[370px] text-4xl leading-10 max-xl:w-[300px] max-xl:text-3xl">
                {t("headline")}
              </h3>
              <p className="text-md mt-4 max-w-[300px] leading-4 font-light">
                {t("description")}
              </p>
            </div>

            <div className="max-w-[200px] z-10">
              <p className="text-sm font-semibold">
                <span className="text-xl">+62K</span> {t("codeStats")}
              </p>
              <p className="text-sm leading-4">
                {t("industrySummary")}
              </p>

              <div className="mt-3 flex">
                {listIndustries.map((item, index) => (
                  <RoundedImg key={index} src={item.icon} index={index} />
                ))}

                <RoundedImg key={1} text="MORE" index={1} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="mt-6">
              <button
                className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 hover:bg-(--bg-secondary-cray)"
                onClick={() => {
                  window.location.href =
                    "mailto:your_email@example.com?subject=Subject&body=message%20goes%20here";
                }}
              >
                {t("discover")}
              </button>

              <BoxSocial />
            </div>

            <div className="flex gap-4 max-xl:hidden">{viewListSkills()}</div>
          </div>
        </div>

        <div className="flex w-[40%] flex-col gap-4 pl-4 max-xl:w-[50%] mt-1.5 max-md:mt-14 max-md:w-full">
          <div className="md:mx-auto mt-16 hidden gap-1 text-(--text-color-black) max-xl:flex max-xl:justify-center">
            {viewListSkills()}
          </div>

          {listProjects.map((item, index) => (
            <CardLarge
              key={index}
              img={item.background}
              index={index + 1}
              text={item.desc}
              title={item.title}
              tech={item.list_tech}
              onClick={() => {
                setDataProject(item as any);
              }}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={dataProject}
        onClose={() => setDataProject(undefined)}
        data={dataProject}
      />
    </>
  );
};

export default HeroDetail;