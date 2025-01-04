import React, { useContext } from "react";
import { NavContext } from "./App";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Menu() {
  const { activeNav, setActiveNav } = useContext(NavContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`nav-bar ${
        activeNav ? "show" : ""
      } bg-white fixed w-full h-full z-[999] hidden inset-0`}
    >
      <div className="flex justify-between p-5">
        <a href="#">
          <p className="font-semibold text-xl text-oranges">fashoo corner</p>
        </a>
        <div className="cursor-pointer" onClick={() => setActiveNav(false)}>
          <FontAwesomeIcon
            className="w-[24px] h-[24px] lg:w-[32px] text-oranges lg:h-[32px]"
            icon={faTimes}
          />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="flex flex-col text-center items-center gap-5 relative mt-16"
      >
        <Link
          onClick={() => setActiveNav(false)}
          to="shop"
          className="text-3xl font-semibold text-oranges"
        >
          shop
        </Link>
        <Link
          onClick={() => setActiveNav(false)}
          className="text-3xl font-semibold text-oranges"
          to="contact"
        >
          contact
        </Link>
        <Link
          onClick={() => setActiveNav(false)}
          to="about"
          className="text-3xl font-semibold text-oranges"
        >
          about
        </Link>
      </motion.div>
      <div className="flex flex-col items-center text-center relative gap-5 mt-32">
        <p className="text-center text-oranges">developer</p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="flex gap-5"
        >
          <a href="" target="_blank">
            <FontAwesomeIcon
              className="text-oranges"
              icon={faGlobe}
              size="xl"
            />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon
              className="text-oranges"
              icon={faGithub}
              size="xl"
            />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon
              className="text-oranges"
              icon={faXTwitter}
              size="xl"
            />
          </a>
          <a href="" className="text-oranges" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Menu;
