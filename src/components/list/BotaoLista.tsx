
interface BotaoListaProps {
    selecionado?: boolean
    className?: string
    children: any
    onClick: (evento: any) => void
}

export default function BotaoLista(props: BotaoListaProps) {
    const selecionado = props.selecionado ? 'border-b-4 border-purple-600' : ''
    return (
        <button onClick={props.onClick} className={`
            text-gray-700 font-semibold hover:text-black focus:outline-none
            ${selecionado}
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}