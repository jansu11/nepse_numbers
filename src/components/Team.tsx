import React from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

const Team = () => {
  return (
    <section className="pt-24 md:pt-36 px-4">
      <div className="flex flex-col md:flex-row text-center md:text-start items-center gap-5 md:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">Team</h2>
        <p className="max-w-md">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-8 md:pt-16">
        {TeamDetails.map((det, idx) => (
          <TeamCard key={idx} {...det} />
        ))}
      </div>
      <div className="sm:justify-self-end mt-10">
        <a href="#!" className="block">
          <button className="w-full bg-dark text-white px-9 py-5 rounded-[14px]">
            See all team
          </button>
        </a>
      </div>
    </section>
  );
};

const TeamDetails: TeamCardProps[] = [
  {
    imageUrl: "/brian.png",
    name: "Sujan Bohora",
    position: "Founder & Data Strategist",
    experience:
      "Built real-time NEPSE data pipelines and custom analytics platforms. Expertise in WebSocket APIs, Kafka, and financial datasets.",
  },
  {
    imageUrl: "/emily.png",
    name: "Safalta Khanal",
    position: "Financial Analyst",
    experience:
      "5+ years in equity research and sector analysis. Specializes in identifying trends using historical and technical market data.",
  },
  {
    imageUrl: "/brian.png",
    name: "Roshan Shrestha",
    position: "Full Stack Developer",
    experience:
      "Expert in building frontend dashboards and backend systems using React, Node.js, and MongoDB for market data visualization.",
  },
  {
    imageUrl: "/brian.png",
    name: "Priya Acharya",
    position: "Client Success Manager",
    experience:
      "Handles client onboarding, custom data requests, and ensures smooth communication and timely delivery of datasets.",
  },
  {
    imageUrl: "/brian.png",
    name: "Niraj Thapa",
    position: "Data Engineer",
    experience:
      "3+ years working with data pipelines, Spark, and automated extraction systems. Specializes in large-scale market data workflows.",
  },
  {
    imageUrl: "/brian.png",
    name: "Meena Karki",
    position: "Data Visualization Expert",
    experience:
      "Designs intuitive charts, dashboards, and reports that make NEPSE data easy to interpret for traders and analysts.",
  },
];


export default Team;
