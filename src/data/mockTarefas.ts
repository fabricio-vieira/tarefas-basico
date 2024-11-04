import Tarefa from "@/model/Tarefa";
import ListaTarefas from "@/model/ListaTarefas";
import Filtro from "@/model/Filtro";

const tarefasInicias: Tarefa[] = [
    Tarefa.criarPendente(1, 'Estudar Next'),
    Tarefa.criarConcluida(2, 'Ir para a Academia'),
    Tarefa.criarPendente(3, 'Comprar Verduras')

]

export default new ListaTarefas(tarefasInicias, Filtro.TODAS)




