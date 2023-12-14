import axios from "axios";
import { useState } from "react";

const usePictureContextValue = () => {
  const [response, setResponse] = useState(null);
  const [searchValue, setSearchvalue] = useState(""); //что ищем
  const [isLoding, setIsloading] = useState(false); //данные загружены
  const [page, setPage] = useState(1); //номер загруженной страницы
  const [pictures, setPictures] = useState([]); //массив с уже загруженными катинками
  const [error, setError] = useState("");
  const [showPicture, setShowPicture] = useState(null); //клик на картинку - показать большую
  const [totalCount, setTotalCount] = useState(0); //максисмальное количество страниц

  axios.defaults.baseURL = "https://api.unsplash.com";

  //
  const getData = async () => {
    try {
      setIsloading(true);
      const res = await axios(
        `search/photos?page=${page}&per_page=20&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
      );
      if (res) {
        setPictures([...pictures, ...res.data.results]);
        setResponse([...pictures, ...res.data.results]);
        setTotalCount(res.data["total_pages"]);
        setPage((page) => page + 1);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  return {
    response,
    isLoding,
    error,
    showPicture,
    pictures,
    searchValue,
    page,
    totalCount,
    setTotalCount,
    setSearchvalue,
    setPictures,
    setShowPicture,
    setPage,
    getData: (url) => getData(url),
  };
};

export default usePictureContextValue;
