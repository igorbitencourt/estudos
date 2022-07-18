import React from "react";
import { GlobalStorage } from "./Api";
import Produtos from "./Produtos";

const App = () => {
  return (
    <div>
      <GlobalStorage.Provider>
        <Produtos />
      </GlobalStorage.Provider>
    </div>
  );
};

export default App;
