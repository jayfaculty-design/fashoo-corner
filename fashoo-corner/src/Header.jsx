import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { NavContext } from "./App";
import { NavLink } from "react-router";
// import { motion } from "framer-motion";

function Header() {
  const { activeNav, setActiveNav } = useContext(NavContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="top flex justify-between p-5 items-center border-b border-b-black"
    >
      <NavLink to="/">
        <div className="hidden text-oranges cursor-pointer md:flex">
          <FontAwesomeIcon
            className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
            icon={faHome}
          />
        </div>
      </NavLink>

      <div>
        <NavLink to="/">
          <p className="font-semibold text-xl text-oranges">fashoo corner</p>
        </NavLink>
      </div>
      <div className="cursor-pointer" onClick={() => setActiveNav(true)}>
        <FontAwesomeIcon
          className="text-oranges lg:w-[32px] lg:h-[32px]"
          size="lg"
          icon={faBars}
        />
      </div>
    </motion.div>
  );
}

export default Header;
