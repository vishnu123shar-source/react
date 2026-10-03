import { useParams } from "react-router-dom"

function Productdeatiles(){
    const products = [
        {
            id :1,
            name:'Iphone'
        },
        {
            id:2,
            name:'Samsung'
        }
    ]
    const {id} = useParams()

    const product = products.find((product)=> product.id === Number(id))
    if(!product){
        return <h1>Product Not Found</h1>
    }

    return(
        <>
            <h1>{product.name}</h1>
        </>
    )
}

export default Productdeatiles