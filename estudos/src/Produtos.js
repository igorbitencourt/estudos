import React from "react";
import { GlobalContext } from "./Api";

const Produtos = () => {
  const global = React.useContext(GlobalContext);

  if (global === null) return null;
  return <div>Produtos: {global.dados[0].nome}</div>;
};

export default Produtos;
