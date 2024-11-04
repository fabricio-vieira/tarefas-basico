import Filtro from "./Filtro";
import Tarefa from "./Tarefa";

export default class ListaTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: Filtro

    constructor(todas: Tarefa[], filtroUtilizado = Filtro.TODAS) {
        this.#todas = todas,
            this.#filtroUtilizado = filtroUtilizado ?? Filtro.TODAS
    }

    get itens() {
        return this.aplicarFiltroEm(this.#todas)
    }

    get quantidade() {
        return this.itens.length
    }

    get filtroUtilizado() {
        return this.#filtroUtilizado
    }


    adicionarTarefas(novaTarefa: Tarefa): ListaTarefas {
        const todas = [...this.#todas]
        todas.push(novaTarefa)
        return new ListaTarefas(todas, Filtro.TODAS)
    }

    modificarTarefa(tarefaModificada: Tarefa): ListaTarefas {
        const todas = this.#todas.map(tarefa => {
            return tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa
        })
        return new ListaTarefas(todas, this.#filtroUtilizado)
    }

    filtrarPendentes() {
        if (!this.exibindoPendentes()) {
            return new ListaTarefas(this.#todas, Filtro.PENDENTES)
        } else {
            return this
        }
    }

    filtrarCncuidas() {
        if (!this.exibindoConcluidas()) {
            return new ListaTarefas(this.#todas, Filtro.CONCLUIDAS)
        } else {
            return this
        }
    }

    excluirConcluidas() {
        const somentePendentes = this.#todas.filter(tarefa => tarefa.pendente)
        return new ListaTarefas(somentePendentes, Filtro.TODAS)
    }

    removerFiltro() {
        if (!this.exibindoTodas()) {
            return new ListaTarefas(this.#todas, Filtro.TODAS)
        } else {
            return this
        }
    }

    exibindoTodas(): boolean {
        return this.#filtroUtilizado === Filtro.TODAS

    }

    exibindoPendentes(): boolean {
        return this.#filtroUtilizado === Filtro.PENDENTES
    }

    exibindoConcluidas(): boolean {
        return this.#filtroUtilizado === Filtro.CONCLUIDAS
    }

    private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {
        if (this.exibindoPendentes()) {
            return this.aplicarFiltroPendentes(tarefas)
        }
        else if (this.exibindoConcluidas()) {
            return this.aplicarFiltroConcluidas(tarefas)
        } else {
            return [...tarefas]
        }
    }

    private aplicarFiltroPendentes(tarefas: Tarefa[]): Tarefa[] {
        return tarefas.filter(tarefa => tarefa.pendente)
    }

    private aplicarFiltroConcluidas(tarefas: Tarefa[]): Tarefa[] {
        return tarefas.filter(tarefa => tarefa.concluida)
    }

}