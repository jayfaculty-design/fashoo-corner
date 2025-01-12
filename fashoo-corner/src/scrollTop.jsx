import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function ScrollComp() {
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    function scrolllTop() {
      if (window.scrollY > 200) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    }
    window.addEventListener("scroll", scrolllTop);

    return () => {
      window.removeEventListener("scroll", scrolllTop);
    };
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={`btn ${
        scrollBtn ? "show" : ""
      } scroll-btn z-[999] fixed bg-oranges border-none text-white hidden items-center justify-center p-3 rounded-full w-12 h-12 bottom-5 right-5`}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
}

export default ScrollComp;
