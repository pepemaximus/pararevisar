import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemDetail = ({id, brand, price, model, description, image, category, stock}) => {
    return (
        <h3 className="Information">
            Description: {description}
        </h3>
    )
}

export default ItemDetail;