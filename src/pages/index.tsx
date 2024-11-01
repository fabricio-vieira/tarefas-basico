import Tarefa from "@/model/Tarefa";

let tarefa: Tarefa = new Tarefa(1, 'Exemplo Tarefa')
tarefa = tarefa.alternarStatus()

export default function Home() {
  return (
    <div
      className={`flex flex-col bg-gradient-to-tr from-purple-700 to-green-500
        justify-center h-screen items-center text-white`}>
      <h2>{tarefa.id}</h2>
      <h2>{tarefa.descricao}</h2>
      <h2>{tarefa.concluida ? 'Concluida' : 'Pendente'}</h2>

    </div>
  );
}
