import React from "react";
import { NavLink } from "react-router";

function Error404() {
  return (
    <div className="h-[100vh] flex gap-4 flex-col items-center justify-center">
      <p>Page does not exist</p>
      <NavLink
        className="bg-black w-[300px] text-center text-white p-2"
        to="/shop"
      >
        Back Home
      </NavLink>
    </div>
  );
}

export default Error404;
