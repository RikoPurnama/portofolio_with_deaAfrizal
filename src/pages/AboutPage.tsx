import { useTranslation } from "react-i18next";
import BoxSocial from "../components/commons/atoms/BoxSocial";
import HeroBanner from "../components/commons/molecules/HeroBanner";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <HeroBanner />
      <div className="mt-14 text-left text-(--text-color-black)">
        <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
          {t("aboutUs")}
        </h1>
        <p className="text-lg">
          {t("desc_aboutUs")}
        </p>

        <BoxSocial />
      </div>
    </section>
  );
};

export default AboutPage;