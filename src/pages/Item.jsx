import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { getProductById } from "../mock";
import { useState } from "react";
import { useEffect } from "react";

const Item = () => {
    const {itemId} = useParams()
    const [product, setProduct] = useState()    

    useEffect(() => {
        getProductById(itemId).then(data => setProduct(data))
    }, [itemId])
    

    if (product) {

        return (
            <ItemDetailContainer product={product}/>
            )
    }
}
export default Item;