import { useContext } from "react";
import { PictureContext } from "../App";
import Picture from "./Picture";
import Sceleton from "./Sceleton";
import { ReactComponent as XIcon } from "./x.svg";

const Gallary = () => {
  const { response, showPicture, setShowPicture } = useContext(PictureContext);

  if (response === null) {
    return null;
  }
  if (response.length === 0) {
    return (
      <div className="relative h-14 w-full">
        <h1 className="mx-5 absolute inset-x-0 bottom-0 text-gray-400">
          К сожалению, поиск не дал результатов
        </h1>
      </div>
    );
  }

  const closeClick = () => {
    setShowPicture(null);
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {response
          ? response.map((data, key) => <Picture key={key} data={data} />)
          : null}
        {response.length <= 10 ? (
          <Sceleton item={18 - response.length} />
        ) : null}
      </div>
      {showPicture ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 sm:pt-3 flex justify-center bg-gray-950/50 items-start">
          <img
            src={showPicture}
            style={{ objectFit: "contain" }}
            alt="big pic"
          ></img>
          <button
            onClick={closeClick}
            className="absolute top-3 right-3 bg-white rounded-full text-gray-400 h-5 w-5 flex items-center justify-center"
          >
            <XIcon />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Gallary;
