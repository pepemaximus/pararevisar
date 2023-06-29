import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getProducts } from "../mock";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [error,setError] = useState(false);
    const [typeError, setTypeError] = useState("");    

    useEffect(() => { 
        const db = getFirestore();
        const productCollection = collection (db,"itemList");
        getDocs(productCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
        .catch((error) => setError(true))
        console.log(products);
        return (
            <div>
                <ItemListContainer greeting={'Welcome to Tech Store'} products={products}/>
            </div>
    )
})
}
export default Home;

