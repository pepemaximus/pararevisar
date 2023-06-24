import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({products}) => {
return (
    <div className="ProductsGroup">
        {products.map(data => <ItemCard key={data.id} product={data}/>)}
    </div>
)
}

export default ItemList