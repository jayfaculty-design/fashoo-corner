import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faGlobe,
  faHome,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import { NavContext } from "./App";

function Home() {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.7,
      },
    },
  };
  const { activeNav, setActiveNav } = useContext(NavContext);
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
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
          <NavLink
            onClick={() => setActiveNav(false)}
            to="shop"
            className="text-3xl font-semibold text-oranges"
          >
            shop
          </NavLink>
          <NavLink
            onClick={() => setActiveNav(false)}
            className="text-3xl font-semibold text-oranges"
            to="contact"
          >
            contact
          </NavLink>
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
      <div></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mid-section flex flex-col gap-24 lg:flex-row lg:items-center lg:pl-10 lg:pr-10 lg:justify-center h-[100%] lg:h-[100vh]"
      >
        <div className="image-slider flex flex-col pt-10 lg:pt-0 items-center">
          <div className="w-[300px]">
            <img src="/girl.png" alt="image" />
          </div>

          <div className="flex items-start justify-between w-[300px] relative mt-1">
            <FontAwesomeIcon
              className="border border-black transition-all ease-in-out p-3 flex items-center text-oranges cursor-pointer hover:bg-oranges hover:text-hashbgs"
              icon={faArrowLeft}
            />
            <FontAwesomeIcon
              className="border border-black transition-all ease-in-out p-3 flex items-center text-oranges cursor-pointer hover:bg-oranges hover:text-hashbgs"
              icon={faArrowRight}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="statement flex flex-col relative items-center pl-5 pr-5 gap-5 lg:mt-20"
        >
          <p className="font-bold text-3xl text-oranges text-center lg:text-5xl lg:font-extrabold">
            *fashion <br className="hidden lg:block" /> statement
          </p>
          <motion.p className="text-center text-oranges lg:w-[500px]">
            Never fear to show your aesthetic expression, regardless of time and
            place and specific context. Improve your habitual sense of style.
            Get on with the latest fashion, never go out of style.
          </motion.p>
          {/* <button className="capitalize border border-oranges p-2 w-36 bg-oranges text-hashbgs transition-all ease-in-out hover:bg-black hover:border-hashbgs">
            Shop Now
          </button> */}
          <NavLink to="shop">
            <button
              type="button"
              class="text-white bg-oranges hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Shop Now
            </button>
          </NavLink>

          <div className="flex flex-col items-center pb-10">
            <p className="font-semibold text-center text-2xl relative mt-16 text-oranges">
              #never go out of style
            </p>
            <p className="text-oranges text-center">
              your clothes is a way of life, live with passion
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
