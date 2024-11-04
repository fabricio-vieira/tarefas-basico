import { useState } from "react";
import Lista from "@/components/list/Lista";
import tareasIniciais from '../data/mockTarefas'
import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Formulario from "@/components/form/Formulario";
import Tarefa from "@/model/Tarefa";



export default function Home() {

  const [tarefas, setTarefas] = useState(tareasIniciais)

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefas(novaTarefa))
  }

  return (
    <div
      className={`flex flex-col bg-gradient-to-br from-slate-200 to-gray-400
       h-screen `}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>

      <Conteudo>
        <Lista tarefas={tarefas} mudou={(novasTarefas) => {
          setTarefas(novasTarefas)
        }} />
      </Conteudo>
    </div>
  );
}
