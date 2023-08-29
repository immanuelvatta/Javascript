import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = (props) => {
    const [ product, setProduct ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res =>{
                navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    console.log(product)
    return (
        <div className='container'>
            <h3>Product Details</h3>
            <hr />
            <div className='container border border-dark'>
                <h4 className='mt-3'>Product Name : {product.title} </h4>
                <h5 className='mt-3'>Product Price : ${product.price}</h5>
                <h5 className='mt-3'>Product Description : {product.description} </h5>
                <Link className='btn btn-primary  m-2' to={`/`}>Home</Link>
                <Link className='btn btn-warning  m-2' to={`/products/edit/${product._id}`}>Edit</Link>
                <button className='btn btn-danger m-2' onClick={()=> deleteProduct(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ProductDetails