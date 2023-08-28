import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = (props) => {
    const [ product, setProduct ] = useState({});
    const { id } = useParams();

    useEffect(() =>{
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id]);
    
    console.log(product)
    return (
        <div className='container'>
            <h3>Product Details</h3>
            <hr />
            <div className='container border border-dark'>
                <h4 className='mt-3'>Product Name : {product.title} </h4>
                <h5 className='mt-3'>Product Price : ${product.price}</h5>
                <h5 className='mt-3'>Product Description : {product.description} </h5>
            </div>
        </div>
    )
}

export default ProductDetails