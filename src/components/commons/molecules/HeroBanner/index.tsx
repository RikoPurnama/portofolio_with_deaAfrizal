import { useNavigate } from "react-router-dom";
import CardMedium from "../../atoms/CardMedium";
import DoubleCurvedText from "../../atoms/DoubleCurvedtext";

import Banner from "/images/bg-1.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[460px] w-full rounded-4xl">
      <img
        className="h-full w-full rounded-3xl object-cover"
        src={Banner}
      />
      <div className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full bg-(--bg-primary-cray)  after:content-[' '] after:absolute after:top-[42%] after:-left-[10.8px] after:w-3 after:h-2.5 after:bg-transparent after:rounded-br-full after:shadow-[3px_3px_0_0px_#FBF9EE] before:content-[' '] before:absolute before:top-[42%] before:-right-[11.2px] before:w-3 before:h-2.5 before:bg-transparent before:rounded-bl-full before:shadow-[-2px_3px_0_0px_#FBF9EE]" />
      <div
        className="absolute -bottom-14 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center rounded-full bg-(--bg-secondary-cray) shadow-lg transition-transform duration-300 ease-in-out "
        onClick={() => {
          window.location.href =
            "mailto:rikopurnama9051@gmail.com?subject=Subject&body=message%20goes%20here";
        }}
      >
        <div className="absolute top-0.5 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center  rounded-full">
          <DoubleCurvedText type="top" />
        </div>

        <IoArrowForwardOutline className="text-4xl text-white -rotate-45" />

        <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center  rounded-full">
          <DoubleCurvedText type="bottom" />
        </div>
      </div>

      <div className="absolute right-4 bottom-4 flex flex-col gap-4 max-md:bottom-14">
        <CardMedium
          title="About"
          bgImg={`/images/riko-purnama-about.jpg`}
          onClick={() => navigate("/about")}
        />

        <CardMedium
          title="Skills"
          bgImg={`/images/riko-purnama-profile.jpg`}
          onClick={() => navigate("/skills")}
        />
      </div>
    </section>
  );
};

export default HeroBanner;