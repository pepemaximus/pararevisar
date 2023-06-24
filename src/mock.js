export const productsDatabase = [  
    { "id":"1", "price":"100", "brand":"Apple", "model":"Iphone 9", "description": "A cheap cellphone for daily purposes", "image":"https://i.dummyjson.com/data/products/1/1.jpg", "category": "cellphones", "stock": 16 },
    { "id":"2", "price":"150", "brand":"Samsung", "model":"Galaxy S23", "description": "Fast and durable cellphone for daily purposes", "image": "https://i.dummyjson.com/data/products/2/1.jpg", "category": "cellphones", "stock": 16},
    { "id":"3", "price":"230", "brand":"Motorola", "model":"G200", "description": "A cellphone with a mix of speed and durability", "image": "https://i.dummyjson.com/data/products/4/1.jpg", "category": "cellphones", "stock": 16},
    { "id":"4", "price":"400", "brand":"Motorola", "model":"Moto G42", "description": "One of the best Motorola cellphones available", "image": "https://i.dummyjson.com/data/products/5/1.jpg", "category": "cellphones", "stock": 16},
    { "id":"5", "price":"600", "brand":"HP", "model":"Notebook HP15 ef2514la", "description": "Affordable laptop for basic purposes", "image": "https://i.dummyjson.com/data/products/10/2.jpg", "category": "notebooks", "stock": 16},
    { "id":"6", "price":"1800", "brand":"Mac", "model":"Pro A1502", "description": "Specially designed for UI designers with full editing and image software", "image": "https://i.dummyjson.com/data/products/6/1.png", "category": "notebooks", "stock": 16},
    { "id":"7", "price":"800", "brand":"Chinatown", "model":"China Jars", "description": "Exquisite handcrafted chinese jars", "image": "https://i.dummyjson.com/data/products/29/1.jpg", "category": "others", "stock": 16},
    { "id":"8", "price":"70", "brand":"Pictek", "model":"5000 pro gaming", "description": "Full led gaming keyboard, also very useful for programming at nightime", "image": "https://i.dummyjson.com/data/products/27/4.jpg", "category": "others", "stock": 16}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productsDatabase)
            }, 2000);
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve( productsDatabase.find(prod => prod.id === itemId)
            )
            }, 2000);
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve( productsDatabase.filter(prod => prod.category === categoryId)
            )
            }, 2000);
    })
}

