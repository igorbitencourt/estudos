import React from "react";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <div>
      <Titulo texto="Produtos" />
      {produtos.map(({ nome, propriedades }) => (
        <div style={{ border: "1px solid", margin: "1rem", padding: "1rem" }}>
          <h3>{nome}</h3>
          <ul>
            {propriedades.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
