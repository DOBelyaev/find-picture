import { useContext } from "react";
import { PictureContext } from "../App";

const SearchField = () => {
  const {
    getData,
    response,
    searchValue,
    setSearchvalue,
    setPictures,
    setPage,
  } = useContext(PictureContext);

  const inputChange = (event) => {
    setSearchvalue(event.target.value);
    setPictures([]);
    setPage(1);
  };

  const buttonClick = () => {
    getData();
    window.scrollTo(0, 0);
  };

  const inputEnter = (event) => {
    if (event.key === "Enter") {
      getData();
      window.scrollTo(0, 0);
    }
  };

  const clearClick = () => {
    setSearchvalue("");
    setPictures([]);
  };
  //style={{width: "-webkit-fill-available"}}
  return (
    <div
      className={
        response === null
          ? "h-full flex flex-col bg-white justify-center items-center min-w-fit w-full"
          : "bg-white sticky top-0 pt-5 px-5 w-full z-10"
      }
    >
      <div className="flex md:max-w-[40%] min-w-[90%] md:min-w-[40%] h-10 mb-5">
        <div className="flex flex-1 relative">
          <input
            id="inputText"
            className="bg-gray-100 text-sm w-full indent-5 rounded-lg pl-7 outline-none"
            type="search"
            placeholder="Телефоны, яблоки, груши..."
            value={searchValue}
            onChange={inputChange}
            onKeyDown={inputEnter}
          ></input>
          <img
            src="/img/wallpaper.png"
            className="absolute bottom-2.5 left-4 h-5 w-5"
            alt="wallpaper"
          ></img>
          {searchValue ? (
            <button
              onClick={clearClick}
              className="text-white absolute top-2.5 right-2 bg-gray-300 rounded-full h-5 w-5 flex items-center justify-center"
            >
              <img src="/img/grey_x.png" className="h-2 w-2" alt="x"></img>
            </button>
          ) : null}
        </div>
        <button
          onClick={buttonClick}
          className="text-white bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-5 text-center dark:bg-red-600 dark:hover:bg-red-700 ml-2"
        >
          Искать
        </button>
      </div>
    </div>
  );
};

export default SearchField;
