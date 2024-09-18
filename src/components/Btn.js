import React from "react";

const Btn = ({ text, btnExtraStyles, handleClick }) => {
  return (
    <button
      className={`${btnExtraStyles} py-2 rounded-[5px]  bg-secondary hover:opacity-[.6] transition-all
      
`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Btn;
