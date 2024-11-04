import ListaTarefas from "@/model/ListaTarefas"
import BotaoLista from "./BotaoLista"

interface RodapeListaProps {
    tarefas: ListaTarefas
    mudou: (tarefas: ListaTarefas) => void
}

export default function RodapeLista(props: RodapeListaProps) {
    const { tarefas, mudou } = props

    function renderizarQtdeItens() {
        return (
            <>
                <span className=" text-gray-700 hidden lg:inline">
                    {tarefas.quantidade}
                    {tarefas.quantidade === 0
                        ? ' Nenhuma Tarefa'
                        : tarefas.quantidade === 1
                            ? ' Tarefa Encontrada'
                            : ' Tarefas Encontradas'}
                </span>
                <span className="flex-1 hidden lg:inline"></span>
            </>


        )
    }

    function renderizarBotoesFiltro() {
        return (
            <>

                <BotaoLista
                    selecionado={tarefas.exibindoTodas()}
                    onClick={() => mudou(tarefas.removerFiltro())}
                    className="hidden md:inline">
                    Todas
                </BotaoLista>
                <BotaoLista
                    selecionado={tarefas.exibindoPendentes()}
                    onClick={() => mudou(tarefas.filtrarPendentes())}
                    className="mx-4">
                    Pendentes
                </BotaoLista>
                <BotaoLista
                    selecionado={tarefas.exibindoConcluidas()}
                    onClick={() => mudou(tarefas.filtrarCncuidas())}>
                    Concluídas
                </BotaoLista>
            </>


        )
    }

    function renderizarExcluirConculidas() {
        return (
            <>
                <span className="flex-grow"></span>
                <BotaoLista
                    onClick={() => mudou(tarefas.excluirConcluidas())}>
                    Excluir <span className="hidden lg:inline">Concluidas</span>
                </BotaoLista>
            </>
        )
    }

    return (
        <li className="flex p-5">
            {renderizarQtdeItens()}
            {renderizarBotoesFiltro()}
            {renderizarExcluirConculidas()}
        </li>
    )


}