export default class Tarefa {
    #id: number
    #descricao: string
    #concluida: boolean
    constructor(id: number, descricao: string, concluida = false) {
        this.#id = id
        this.#descricao = descricao
        this.#concluida = concluida
    }

    static criarPendente(id: number, descricao: string) {
        return new Tarefa(id, descricao)
    }

    static criarConcluida(id: number, descricao: string) {
        return new Tarefa(id, descricao, true)
    }

    get id() {
        return this.#id
    }

    get descricao() {
        return this.#descricao
    }

    get concluida() {
        return this.#concluida
    }

    alternarStatus() {
        return this.concluida ? this.tornarPendente() : this.concluir()
    }

    concluir() {
        return Tarefa.criarConcluida(this.id, this.descricao)
    }

    tornarPendente() {
        return Tarefa.criarPendente(this.id, this.descricao)
    }
}