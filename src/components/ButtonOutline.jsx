/* eslint-disable react/prop-types */
import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button
      className="bg-transparent border border-primary text-primary rounded-full font-semibold md:text-sm 
    text-xs tracking-wide md:px-9 px-7 py-3"
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
