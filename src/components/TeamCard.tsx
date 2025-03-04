import Image from "next/image";
import React from "react";

export interface TeamCardProps {
  imageUrl: string;
  name: string;
  position: string;
  experience: string;
}

const TeamCard = ({ imageUrl, name, position, experience }: TeamCardProps) => {
  return (
    <div className="border border-b-8 border-dark rounded-[45px] px-9 py-10">
      <div className="border-b-2 pb-7 border-dark/50 flex gap-4 items-end">
        <div>
          <Image
            src={imageUrl}
            alt={`Image of ${name}`}
            width={102}
            height={102}
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm">{position}</p>
        </div>
        <div className="self-start">
          <Image
            src={"/linkedin-b.png"}
            alt="Linkedin Icon"
            width={34}
            height={34}
          />
        </div>
      </div>

      <div className="pt-7">{experience}</div>
    </div>
  );
};

export default TeamCard;
