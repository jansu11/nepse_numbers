import Image from "next/image";

interface CardProps {
  title1: string;
  title2: string;
  titleColor?: string;
  titleBgColor: string;
  bgColor: string;
  imgUrl: string;
  iconColor?: string;
}

const Card = ({
  title1,
  title2,
  titleBgColor,
  bgColor,
  imgUrl,
  titleColor = "text-black",
  iconColor = "black",
}: CardProps) => {
  return (
    <div
      className={`flex justify-between gap-4 p-12 rounded-[45px] border border-b-4 max-w-xl ${bgColor}`}
    >
      <div className="flex flex-col justify-between">
        <h2 className={`text-2xl font-bold leading-7 ${titleColor}`}>
          <span className={`px-2 rounded-md ${titleBgColor}`}>{title1}</span>{" "}
          <br />
          <span className={`px-2 rounded-md ${titleBgColor}`}> {title2}</span>
        </h2>
        <button
          className={`flex items-center gap-2 ${
            iconColor === "white" ? "text-white" : "text-black"
          }`}
        >
          <span>
            <Image
              src={
                iconColor === "black" ? "/btn-icon-b.svg" : "/btn-icon-w.svg"
              }
              alt="Arrow icon"
              width={30}
              height={30}
            />
          </span>{" "}
          Learn more
        </button>
      </div>
      <div>
        <Image
          src={imgUrl}
          alt={`${title1} ${title2}`}
          width={210}
          height={170}
        />
      </div>
    </div>
  );
};

export default Card;
