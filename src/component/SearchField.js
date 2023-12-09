import { useContext, useState } from "react";
import { PictureContext } from "../App";
import { ReactComponent as XIcon } from "./x.svg";

const SearchField = () => {
  const [searchValue, setSearchvalue] = useState("");
  const { getData } = useContext(PictureContext);

  const inputChange = (event) => {
    setSearchvalue(event.target.value);
  };

  const buttonClick = () => {
    getData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
    );
  };

  const inputEnter = (event) => {
    if (event.key === "Enter") {
      getData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
      );
    }
  };

  const clearClick = () => {
    setSearchvalue("");
  };

  return (
    <div className="flex md:max-w-[50%] min-w-[90%] md:min-w-[50%] h-10 mb-5">
      <div className="flex flex-1 relative">
        <input
          className="bg-gray-100 text-sm w-full indent-2 rounded-lg pl-7 outline-none"
          type="search"
          placeholder="Телефоны, яблоки, груши..."
          value={searchValue}
          onChange={inputChange}
          onKeyDown={inputEnter}
        ></input>
        <img
          src="/img/wallpaper.png"
          className="absolute bottom-2 left-0 h-6 w-6"
          alt="wallpaper"
        ></img>
        <button
          onClick={clearClick}
          className="text-white absolute top-2.5 right-2 bg-gray-400 rounded-full h-5 w-5 flex items-center justify-center"
        >
          <XIcon />
        </button>
      </div>
      <button
        onClick={buttonClick}
        className="text-white bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-5 text-center dark:bg-red-600 dark:hover:bg-red-700 ml-2"
      >
        Искать
      </button>
    </div>
  );
};

export default SearchField;
