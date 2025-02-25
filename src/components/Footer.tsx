import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-36 bg-dark rounded-t-[45px] px-[60px] pt-[55px] pb-[50px]">
      <section className="flex justify-between items-end">
        <div>
          <Image
            src={"/logo-white.png"}
            alt="positivus logo"
            width={180}
            height={29}
          />
        </div>
        <nav className="flex items-center gap-8 list-none">
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex underline text-gray"
            >
              About us
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex underline text-gray"
            >
              Services
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex underline text-gray"
            >
              Use Cases
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex underline text-gray"
            >
              Pricing
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex underline text-gray"
            >
              Blog
            </a>
          </li>
        </nav>

        <div className="flex gap-3">
          <span>
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              width={30}
              height={30}
            />
          </span>
          <span>
            <Image
              src={"/facebook.svg"}
              alt="linkedin"
              width={30}
              height={30}
            />
          </span>
          <span>
            <Image src={"/twitter.svg"} alt="linkedin" width={30} height={30} />
          </span>
        </div>
      </section>
      <section className="flex justify-between mt-[66px]">
        <div className="flex flex-col justify-between text-white">
          <h3 className="text-black font-bold inline">
            <span className="bg-green px-1 py-0.5 rounded-lg">Contact us:</span>
          </h3>
          <p>Email: info@positivus.com </p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="bg-black px-10 py-14">
          <form className="flex gap-5">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent px-9 rounded-[14px] border border-white"
            />
            <button className="bg-green px-9 py-5 rounded-[14px]">
              Subscribe to news
            </button>
          </form>
        </div>
      </section>
      <hr className="mt-[50px] text-gray" />
      <div className="mt-[50px] flex gap-8 items-end text-white">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Positivus. All Rights Reserved.
        </p>

        <a href="#!" className="flex underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
