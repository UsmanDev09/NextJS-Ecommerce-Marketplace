import Link from "next/link";
import { useState } from "react";

import * as path from "../../constants/paths";

const Category = (props) => {
  console.log('category', props)
  const [clicked, setClicked] = useState(false);
  return (
    <li>
      <button
        onClick={() => setClicked(!clicked)}
        id="mega-menu-icons-dropdown-button"
        data-dropdown-toggle="mega-menu-icons-dropdown"
        className={`flex justify-between items-center text-[16px] font-unica border-gray-100  hover:text-black md:hover:bg-transparent xs:hidden  lg:flex ${
          props.yScroll > 722 || props.path !== "/"
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-black"
        }`}
      >
        INFINITY
        <svg
          aria-hidden="true"
          className="ml-1 w-5 h-5 md:w-4 md:h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="mega-menu-icons-dropdown"
        className="dropdown-menu grid top-16 absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md md:grid-cols-3"
      >
        <style jsx>{`
          .dropdown-menu {
            display: ${clicked ? "flex" : "none"};
          }
        `}</style>

        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
          <ul className="space-y-4">
            {props?.categories ?
              props?.categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link
                      href={`/${path.CATEGORIES}/${category[Object.keys(category)[0]].name}`}
                      className="flex font-comfortaa text-[12px] text-[#1C1F22] items-center dark:text-gray-400 hover:text-[#A042E1] focus:text-[#A042E1] group"
                    >
                      {category[Object.keys(category)[0]].name}
                    </Link>
                  </li>
                );
              }): <p className="font-comfortaa text-[12px]"> No Categories are avaible </p>}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Category;
