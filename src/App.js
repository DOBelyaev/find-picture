import SearchFieldComp from "./component/SearchFieldComp";
import SearchField from "./component/SearchField";
import Gallary from "./component/Gallary";
import usePictureContextValue from "./hooks/usePictureContextValue";
import { createContext } from "react";

//Контекст полученный из запроса
export const PictureContext = createContext();

function App() {
  const value = usePictureContextValue();

  return (
    <PictureContext.Provider value={value}>
      <SearchFieldComp>
        <SearchField />
        <Gallary />
      </SearchFieldComp>
    </PictureContext.Provider>
  );
}

export default App;
