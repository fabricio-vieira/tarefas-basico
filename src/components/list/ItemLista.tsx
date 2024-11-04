import Selecao from "./Selecao"

interface ItemListaProps {
    descricao: string
    concluido: boolean
    alternarStatus: () => void
}

export default function ItemLista(props: ItemListaProps) {
    const estiloTexto = props.concluido ? 'line-through text-gray-400' : 'text-gray-700'
    return (
        <li onClick={props.alternarStatus} className={`
            flex text-black p-4
            items-center border-b border-purple-200 cursor-pointer 
            `}>
            <Selecao valor={props.concluido} />
            <span className={`ml-5 ${estiloTexto}`}>
                {props.descricao}
            </span>
        </li>
    )
}