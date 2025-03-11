import React from "react";
import Card from "./Card";
import Image from "next/image";

const Services = () => {
  return (
    <div className="pt-36">
      <div className="flex items-center gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">Services</h2>
        <p className="max-w-xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Crads Section */}
      <div className="grid grid-cols-2 gap-10 pt-16">
        <Card
          title1="Search engine"
          title2="optimization"
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/seo.png"
        />
        <Card
          title1="Pay-per-click"
          title2="advertising"
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/pay.png"
        />
        <Card
          title1="Social Media"
          title2="Marketing"
          titleBgColor="bg-white"
          bgColor="bg-dark"
          imgUrl="/social.png"
          iconColor="white"
        />
        <Card
          title1="Email"
          title2="Marketing"
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/email-marketing.png"
        />
        <Card
          title1="Content"
          title2="Creation"
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/content-creation.png"
        />
        <Card
          title1="Analytics and"
          title2="Tracking"
          titleBgColor="bg-green"
          bgColor="bg-dark"
          imgUrl="/analytics.png"
          iconColor="white"
        />
      </div>

      {/* Proposal section */}
      <div className="relative flex justify-between items-center p-16 rounded-[45px] bg-gray mt-36">
        <div className="max-w-md flex flex-col gap-4">
          <h2 className="font-medium text-3xl">
            Let&apos;s make things happen
          </h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-dark py-5 px-9 text-gray rounded-2xl self-start">
            Get your free proposal
          </button>
        </div>
        <div>
          <Image
            src="/stars.png"
            width={350}
            height={200}
            alt="decorative stars"
            className="absolute -top-6 -bottom-4 right-0 mr-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
