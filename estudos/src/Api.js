import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")((response) =>
      response.json()
    ).then((json) => setDados(json));
  }, []);

  return <GlobalStorage value={{ dados }}>{children}</GlobalStorage>;
};
