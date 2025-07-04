import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="pt-24 md:pt-36 px-4">
      <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 sm:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">
          Demo Use Cases
        </h2>
        <p className="max-w-lg">
          Explore real examples of how NEPSE data helped clients make smarter decisions.
        </p>
      </div>
      <div className="mt-8 lg:mt-16 lg:bg-dark lg:py-[70px] lg:px-[60px] lg:rounded-[45px] flex flex-wrap lg:flex-nowrap gap-8 lg:gap-16">
        <article className="bg-dark p-10 rounded-[45px] lg:bg-none lg:p-0 lg:rounded-none flex flex-col items-start gap-5 border-r-2 lg:pr-16 border-gray">
          <p className="text-gray text-sm">
             Compare Hydropower vs Microfinance gains in Q4.
             Enabled a retail investor to spot outperforming sectors and rebalance their portfolio.
          </p>
          <button className="text-green flex items-center">
            Learn more
            <Image
              src={"/arrow-icon.svg"}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2 w-auto h-auto"
            />{" "}
          </button>
        </article>
        <article className="bg-dark p-10 rounded-[45px] lg:bg-none lg:p-0 lg:rounded-none flex flex-col items-start gap-5 lg:pr-16 border-r-2 border-gray">
          <p className="text-gray text-sm">
            Identify top 10 stocks with the highest gain & volume over the last 30 days
          </p>
          <button className="text-green flex items-center">
            Learn more
            <Image
              src={"/arrow-icon.svg"}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2 w-auto h-auto"
            />{" "}
          </button>
        </article>
        <article className="bg-dark p-10 rounded-[45px] lg:bg-none lg:p-0 lg:rounded-none flex flex-col items-start gap-5">
          <p className="text-gray text-sm">
            Spot sudden trading volume surges across sectors.
          </p>
          <button className="text-green flex items-center">
            Learn more
            <Image
              src={"/arrow-icon.svg"}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2 w-auto h-auto"
            />{" "}
          </button>
        </article>
      </div>
    </section>
  );
};

export default CaseStudies;
