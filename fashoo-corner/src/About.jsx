import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

function About() {
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
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="about component"
    >
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col  gap-10 lg:gap-24 items-center p-10"
      >
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
          className="flex flex-col gap-3 items-center lg:flex-row lg:items-center lg:justify-around"
        >
          <h1 className="text-2xl font-semibold text-black text-center">
            about
          </h1>
          <p className="text-center lg:text-left text-oranges lg:w-[50%] lg:tracking-wider lg:text-[20px]">
            Welcome to Fashoo Corner, your ultimate destination for discovering
            the latest trends and timeless classics in fashion. We believe that
            style is a form of self-expression and empowerment, and our mission
            is to help you embrace your unique aesthetic. Whether you're
            shopping for bold statement pieces, everyday essentials, or curated
            collections from emerging designers, Fashoo Corner is here to make
            your fashion journey seamless and enjoyable.
          </p>
        </motion.div>
        <div className="flex flex-col gap-3 items-center lg:flex-row lg:items-center lg:justify-around lg:pr-7">
          <h1 className="text-2xl font-semibold text-black text-center">
            our vision
          </h1>
          <p className="text-center text-oranges lg:w-[50%] lg:tracking-wider lg:text-[20px] lg:text-left">
            To create a vibrant community where fashion lovers can connect,
            express themselves, and access diverse, high-quality fashion options
            tailored to their lifestyles.
          </p>
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
          className="flex flex-col gap-3 items-center lg:flex-row lg:items-center lg:justify-between"
        >
          <h1 className="text-2xl font-semibold text-black text-center">
            what we offer
          </h1>
          <div className="flex flex-col gap-8 lg:w-[63%] lg:tracking-wider lg:text-[20px] lg:text-left ">
            <p className="text-oranges">
              <span className="font-bold">Trendy Collections:</span> Stay ahead
              of the curve with our carefully selected fashion lines.
            </p>
            <p className="text-oranges">
              <span className="font-bold">Personalized Shopping:</span> Find
              outfits that suit your style and preferences effortlessly.
            </p>
            <p className="text-oranges">
              <span className="font-bold">Seamless Experience:</span> Enjoy easy
              navigation, secure checkout, and fast delivery.
            </p>
          </div>
        </motion.div>
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
          className="flex flex-col gap-3 items-center lg:flex-row lg:items-center lg:justify-around lg:pr-7"
        >
          <h1 className="text-2xl font-semibold text-black text-center">
            our promise
          </h1>
          <p className="text-center text-oranges lg:w-[50%] lg:tracking-wider lg:text-[20px] lg:text-left">
            We’re committed to providing a fashion marketplace that values
            quality, sustainability, and customer satisfaction. At Fashoo
            Corner, every piece tells a story, and we’re here to help you tell
            yours.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
