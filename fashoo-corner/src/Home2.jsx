import {
  faAdd,
  faArrowRight,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home2() {
  return (
    <div className="flex flex-col p-4 mt-3 text-[14px] gap-4 font-medium lowercase">
      <div>
        <div className="border-b-neutral-200 border-b pb-3 cursor-pointer flex justify-between">
          <p>Holiday</p>
          <p className="font-extralight text-[15px]">{">"}</p>
        </div>
        <div className="border-b-neutral-200 border-b pb-3 pt-3 cursor-pointer flex justify-between">
          <p>Home</p>
          <p className="font-extralight text-[15px]">{">"}</p>
        </div>
      </div>

      <div className="relative mt-1 flex flex-col gap-5 border-b border-neutral-300 pb-5">
        <div className="cursor-pointer flex items-center justify-between">
          <p>All Home</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <p>sale home</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <p>home trackshows</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <p>home decor</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <p>home fragrance</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <p>children</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <p>what's new</p>
          <FontAwesomeIcon
            className="text-[12px] text-neutral-500"
            icon={faAdd}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b-neutral-300 border-b pb-5">
        <h1>Featured</h1>
        <div className="flex flex-col gap-4 cursor-pointer">
          <img src="/moda.jpg" alt="" />
          <p>faculty closet</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-3">
        <p>Sign In/Register</p>
        <p>my favourites</p>
      </div>
    </div>
  );
}

export default Home2;
