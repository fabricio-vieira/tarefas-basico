import Tarefa from "@/model/Tarefa"
import { useState } from "react"

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {
    const [descricao, setDescricao] = useState('')

    function criarNovaTarefa() {
        if (descricao.trim().length > 0) {
            const novaTarefa = Tarefa.criarPendente(Math.random(), descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescricao('')
        }

    }

    return (
        <div className="flex flex-1 justify-center">
            <input
                placeholder="Informe sua próxima tarefa"
                type="text" value={descricao}
                onChange={e => setDescricao(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
                className={`
                    border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600
                    w-1/2 py-2 px-3 rounded-lg border-2
                    `}

            />
            <button onClick={criarNovaTarefa} className={`
               ml-4 px-5 py-4 focus:outline-none rounded-lg
               bg-purple-500 text-white text-3xl hover:bg-purple-400
                `}>
                +
            </button>
        </div>
    )
}