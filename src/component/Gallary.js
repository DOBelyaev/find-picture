import { useContext, useCallback } from "react";
import { PictureContext } from "../App";
import Picture from "./Picture";
import Sceleton from "./Sceleton";
import List from "./List";
import { VirtuosoGrid } from "react-virtuoso";

const Gallary = () => {
  const { response, showPicture, setShowPicture, page, getData, searchValue } =
    useContext(PictureContext);

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      getData();
    }, 200);
  }, [page, searchValue]);

  if (response === null) {
    return null;
  }
  if (response.length === 0) {
    return (
      <div className="relative h-14 w-full">
        <h1 className="absolute inset-x-0 bottom-0 text-gray-400 px-5">
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
      <VirtuosoGrid
        style={{ height: "600px" }}
        data={response}
        endReached={loadMore}
        useWindowScroll
        components={{ ScrollSeekPlaceholder: Sceleton, List }}
        itemContent={(index, data) => {
          return <Picture data={data} />;
        }}
      />
      {showPicture ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 sm:pt-3 flex justify-center bg-gray-950/50 items-start z-20">
          <img
            src={showPicture}
            style={{ objectFit: "contain" }}
            alt="big pic"
          ></img>
          <button
            onClick={closeClick}
            className="absolute top-3 right-3 bg-white rounded-full text-gray-400 h-5 w-5 flex items-center justify-center"
          >
            <img src="/img/grey_x2.png" className="h-2.5 w-2.5" alt="x2"></img>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Gallary;
