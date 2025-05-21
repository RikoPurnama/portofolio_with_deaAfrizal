
const DoubleCurvedText = ({ type } : any) => {
  return (
    <svg viewBox="0 0 200 200" className="h-28 w-28 animate-spin-slow flex justify-center items-center my-auto">
      <defs>
        {type === "top" && (
          <path
            id="curveTop"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0"
            fill="none"
          />
        )}
        {type === "bottom" && (
          <path
            id="curveBottom"
            d="M 100,100 m -75,0 a 75,75 0 1,0 150,0"
            fill="none"
          />
        )}
      </defs>

      <text className="fill-black text-[18px] font-medium tracking-wide">
        <textPath
          href={type === "top" ? "#curveTop" : "#curveBottom"}
          startOffset="50%"
          textAnchor="middle"
        >
          {type === "top" ? "Get started with us" : "Discover more below"}
        </textPath>
      </text>
    </svg>
  );
};

export default DoubleCurvedText;