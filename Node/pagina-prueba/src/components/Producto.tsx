

interface IProps {
    title: string;
    description: string;
    price: number;
}

export default function Producto(props:IProps) {
    return (
        <>
        <div className='border-4 border-red-500 shadow-amber-500 shadow-lg p-4 rounded-lg w-80 h-40 flex flex-col items-center justify-center m-10'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <span>{props.price}€</span>
        </div>
        </>
    )
}