import React from "react";
import ReactDOM from "react-dom";
import ListarTarefas from "./listar-tarefas";

describe("Teste do componente de Listagem de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListarTarefas />, div);
    React.unmountComponentAtNode(div);
  });
});
