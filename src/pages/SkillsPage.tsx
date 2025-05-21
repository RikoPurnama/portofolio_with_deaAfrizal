import { useState } from "react";
import CardLarge from "../components/commons/atoms/CardLarge";
import CardSmall from "../components/commons/atoms/CardSmall";
import Modal from "../components/commons/atoms/Modal";
import HeroBanner from "../components/commons/molecules/HeroBanner";

import { listProjects, listSkills } from "../utils/Constans";

type Tech = {
  name: string;
  icon: string;
};

type Project = {
  title: string;
  desc: string;
  background: string;
  list_tech: Tech[];
};

const SkillsPage = () => {
  const [dataProject, setDataProject] = useState<Project | undefined>(
    undefined
  );

  return (
    <>
      <section>
        <HeroBanner />
        <div className="mt-5 text-left text-(--text-color-black)">
          <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
            Skills
          </h1>
        </div>

        <div className="flex w-full gap-2 text-(--text-color-black) max-md:flex-col-reverse">
          <div className="flex w-1/2 flex-wrap gap-x-4 gap-y-19 overflow-hidden py-18 max-md:w-full max-md:items-center max-md:justify-center">
            {listSkills.map((item, index) => (
              <CardSmall
                key={index}
                img={item.icon}
                title={item.name}
                link={item.link}
              />
            ))}
          </div>

          <div className="flex w-1/2 flex-col gap-4 py-6 max-md:w-full">
            {listProjects.map((item, index) => (
              <CardLarge
                key={index}
                img={item.background}
                index={index + 1}
                text={item.desc}
                title={item.title}
                tech={item.list_tech}
                onClick={() => setDataProject(item)}
              />
            ))}
          </div>
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
export default SkillsPage;
