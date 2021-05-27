import { useRoutes } from "hookrouter";
import AtualizarTarefas from "./atualizar/atualizar-tarefas";
import CadastrarTarefa from "./cadastrar/cadastrar-tarefa";
import "./gerenciador-tarefas.css";
import ListarTarefas from "./listar/listar-tarefas";
import React from "react";

const routes = {
  "/": () => <ListarTarefas />,
  "/cadastrar": () => <CadastrarTarefa />,
  "/atualizar/:id": ({ id }) => <AtualizarTarefas id={id} />,
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
