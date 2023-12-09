import React from "react";
import { useContext } from "react";
import { PictureContext } from "../App";

const Picture = ({ data }) => {
  const { setShowPicture } = useContext(PictureContext);

  const pictureClick = () => {
    setShowPicture(data.urls.small);
  };

  return (
    <div href={data.urls.regular} onClick={pictureClick}>
      <img
        className=" w-full aspect-square object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default Picture;
