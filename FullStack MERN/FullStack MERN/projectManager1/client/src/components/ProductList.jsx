import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() =>{
        axios
            .get('http://localhost:8000/api/products')
            .then((res)=>{
                console.log(res.data)
                setProductList(res.data)
            })
        } , []);


    return (
        <div>
            <h1>ProductList</h1>
            <ul>
                {productList.map((e,i) =>
                <li key={i}>
                    {e.title}
                </li>
                )}
            </ul>
        </div>
    )
}

export default ProductList