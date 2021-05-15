import "./gerenciador-tarefas.css";
import { useRoutes } from "hookrouter";
import ListarTarefas from "./listar/listar-tarefas";
import CadastrarTarefa from "./cadastrar/cadastrar-tarefa";
import AtualizarTarefas from "./atualizar/atualizar-tarefas";

const routes = {
  "/": () => <ListarTarefas />,
  "/cadastrar": () => <CadastrarTarefa />,
  "/atualizar/:id": ({ id }) => <AtualizarTarefas id={id} />,
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
