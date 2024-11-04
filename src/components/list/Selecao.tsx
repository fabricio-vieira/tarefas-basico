
interface SelecaoProps {
    valor: boolean
}

export default function Selecao(props: SelecaoProps) {
    const gradient = props.valor ?
        ' bg-gradient-to-br from-blue-600 to-purple-500' : ''
    return (
        <div className={`
            flex flex-col h-7 w-7 rounded-full justfy-center items-center cursor-pointer
            border border-gray-400 ${gradient} text-white           
        `}>
            {props.valor ? 'x' : ''}
        </div>
    )
} 