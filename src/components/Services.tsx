import React from "react";
import Card from "./Card";
import Image from "next/image";

const Services = () => {
  return (
    <div className="pt-24 md:pt-36 px-4">
      <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">Services</h2>
        <p className="max-w-xl">
          At Nepse Numbers, we provide specialized data services tailored for investors, analysts, and creators in the NEPSE market. Our offerings include:
        </p>
      </div>
      {/* Crads Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-10 lg:pt-16 place-items-center">
        <Card
          title1="Custom Data"
          title2=" NEPSE/Economy"
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/seo.png"
        />
        <Card
          title1="Performance Reports"
          title2="Sector & Index"
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/pay.png"
        />
        <Card
          title1="Order Book"
          title2="Data"
          titleBgColor="bg-white"
          bgColor="bg-dark"
          imgUrl="/social.png"
          iconColor="white"
        />
        <Card
          title1="Company"
          title2="Historical Data"
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/email-marketing.png"
        />
        <Card
          title1="Visual Analytics"
          title2="Charts and Graphs"
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/content-creation.png"
        />
      </div>

      {/* Proposal section */}
      <div className="relative flex justify-between items-center px-8 py-12 md:p-16 rounded-[45px] bg-gray mt-24 lg:mt-36">
        <div className="max-w-md flex flex-col gap-4">
          <h2 className="font-medium text-3xl">
            Use NEPSE Data Like a Pro
          </h2>
          <p>
            Explore our latest blog posts where we break down data-driven strategies, sector trends, and real-world use cases — all designed to help you turn NEPSE numbers into smart insights.
          </p>
          <button className="bg-dark py-5 px-5 md:px-9 text-gray rounded-2xl md:self-start">
            Blogs
          </button>
        </div>
        <div>
          <Image
            src="/stars.png"
            width={350}
            height={200}
            alt="decorative stars"
            className="hidden lg:block absolute -top-6 -bottom-4 right-0 mr-24 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
