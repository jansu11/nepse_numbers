import React from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="w-[220px] h-[56px]">
        <a href="#">
          <h1 className="font-bold text-2xl/normal md:text-3xl/normal lg:max-w-xl">NEPSE NUMBERS</h1>

        </a>
      </div>
      <nav>
        <ul className="hidden lg:flex p-4 gap-x-1 items-center">
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Use Cases
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#!">
              <button className="border border-dark py-3 px-6 rounded-md hover:font-medium hover:border-green hover:border-transparent hover:outline-2 hover:outline hover:outline-green transition-all">
                Request a quote
              </button>
            </a>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
