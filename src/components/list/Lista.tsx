import ListaTarefas from "@/model/ListaTarefas"
import ItemLista from "./ItemLista"
import BotaoLista from "./BotaoLista"
import RodapeLista from "./RodapeLista"

interface ListaProps {
    tarefas: ListaTarefas
    mudou: (tarefas: ListaTarefas) => void
}

export default function Lista(props: ListaProps) {

    const { tarefas } = props

    function renderizarTarefas() {
        return tarefas.itens.map(tarefa => {
            return (
                <ItemLista
                    key={tarefa.id}
                    descricao={tarefa.descricao}
                    concluido={tarefa.concluida}
                    alternarStatus={() => {
                        const tarefaModificada = tarefa.alternarStatus()
                        const novaLista = tarefas.modificarTarefa(tarefaModificada)
                        props.mudou(novaLista)
                    }} />
            )
        })
    }

    return (
        <div className={`flex w-3/5 items-start relative`}>
            <ul className={`w-full list-none bg-gray-100 shadow-lg rounded-lg absolute -top-16`}>
                {renderizarTarefas()}
                <RodapeLista tarefas={props.tarefas} mudou={props.mudou} />
            </ul>
        </div>
    )
}