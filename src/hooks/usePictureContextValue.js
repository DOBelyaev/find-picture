import axios from "axios";
import { useState } from "react";

const usePictureContextValue = () => {
  const [response, setResponse] = useState(null);
  const [isLoding, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [showPicture, setShowPicture] = useState(null);

  axios.defaults.baseURL = "https://api.unsplash.com";

  const getData = async (url) => {
    try {
      if (!!url) {
        setIsloading(true);
        const res = await axios(url);
        setResponse(res.data.results);
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
    setShowPicture,
    getData: (url) => getData(url),
  };
};

export default usePictureContextValue;
