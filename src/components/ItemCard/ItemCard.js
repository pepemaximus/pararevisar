import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";
import { productsDatabase } from "../../mock";


const ItemCard = ({product}) => {
console.log("🚀 ~ file: Itemcard.js:7 ~ ItemCard ~ product:", product)

    // se cambio la palabra image por logo para que funcione la imagen
    const {id, brand, price, model, image, stock} = product
    return (
        <div>
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img className="card-img" variant="top" src={image}/>
                <Card.Body>
                    <Card.Title className="card-title">{brand} {model} </Card.Title>
                    <Card.Text className="card-text">
                        <p>Price USD {price} </p>
                        <p>Available stock {stock} </p>
                    </Card.Text>
                    <Link to={`/Item/${id}`}>
                        See details
                    </Link>
                </Card.Body>
                <ItemCount initial = {1} stock={16} onAdd={(quantity) => console.log (quantity, "items added")}></ItemCount>
            </Card>
        </div>
    )
}

export default ItemCard