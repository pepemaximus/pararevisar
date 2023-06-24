import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getProductByCategory } from "../mock";
import { useParams } from "react-router-dom";

const Category = () => {
    const {categoryId} = useParams()
    const [products, setProducts] = useState()    

    useEffect(() => {
        getProductByCategory(categoryId).then(data => setProducts(data))
    }, [categoryId])
    

    if (products) {
        return (
            <ItemListContainer products={products}/>
    )
    }
}

export default Category;
