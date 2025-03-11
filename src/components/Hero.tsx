import React from "react";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Header />
      <section className="flex justify-between py-16 just">
        <article>
          <h1 className="font-medium text-6xl/normal max-w-xl l">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl py-9 max-w-lg">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="px-9 py-4 bg-black text-gray rounded-xl">
            Book a consultation
          </button>
        </article>
        <div>
          <Image
            src={"/speaker.png"}
            alt="speaker image"
            width={560}
            height={450}
          />
        </div>
      </section>
      <section className="flex justify-between">
        <div>
          <Image
            className="grayscale"
            src={"/amazon.png"}
            alt="amazon logo"
            width={126}
            height={48}
          />
        </div>
        <div>
          <Image
            className="grayscale"
            src={"/dribble.png"}
            alt="dribble logo"
            width={126}
            height={48}
          />
        </div>
        <div>
          <Image
            className="grayscale"
            src={"/hubspot.png"}
            alt="hubspot logo"
            width={126}
            height={48}
          />
        </div>
        <div>
          <Image
            className="grayscale"
            src={"/notion.png"}
            alt="notion logo"
            width={126}
            height={48}
          />
        </div>
        <div>
          <Image
            className="grayscale"
            src={"/netflix.png"}
            alt="netflix logo"
            width={126}
            height={48}
          />
        </div>
        <div>
          <Image
            className="grayscale"
            src={"/zoom.png"}
            alt="zoom logo"
            width={126}
            height={48}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
