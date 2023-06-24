import  ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting, products}) => {

    if(products) {

        return (
            <div>
                <h1>{greeting}</h1>   
                <ItemList products={products}/>
            </div>
    )
}
}

export default ItemListContainer;