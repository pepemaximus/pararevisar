import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getProducts } from "../mock";
import { collection, getDocs, getDoc, getFirestore } from "firebase/firestore";

const Home = () => {

    const [products, setProducts] = useState([])    
    const [error, setError] = useState(false);
    const [typeError, setTypeError] = useState ("");

    useEffect (() => {
        const db = getFirestore();
        const itemListCollection = collection (db, "itemList");
        getDocs(itemListCollection)
        .then((snapshot) => {
            setProducts (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        } )
        .catch((error) => setError(true));
    }
    )




    if(products.length > 0) {

        return (
            <div>
                <ItemListContainer greeting={'Welcome to Tech Store'} products={products}/>
            </div>
    )
}
}

export default Home;

