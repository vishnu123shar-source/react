function Product({id,name,price}){
    return(
        <>
            <h2 key={id}>{name} : {price}</h2>
        </>
    )
}

export default Product