import React from "react";
import { useContext } from "react";
import { PictureContext } from "../App";

const SearchFieldComp = ({ children }) => {
  const { response } = useContext(PictureContext);

  return (
    <div
      className={
        response === null
          ? "h-screen overflow-hidden"
          : "h-screen overflow-auto p-5"
      }
    >
      <div
        className={
          response === null
            ? "h-full flex flex-col bg-white justify-center items-center min-w-fit "
            : "flex flex-col bg-white "
        }
      >
        {children}
      </div>
    </div>
  );
};

export default SearchFieldComp;
