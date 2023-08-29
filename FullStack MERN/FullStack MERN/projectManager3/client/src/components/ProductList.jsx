import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ProductList = ({productList, removeFromDom }) => {

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                console.log(res)
                removeFromDom(id);
            })
            .catch(err => {
                console.log(err)
            })
        }


    return (
        <div className="container">
            <hr />
            <h1>Product List</h1>
            <ul className='list-group'>
                {productList.map((product) =>
                <li className="list-unstyled list-group-item justify-content-between align-items-center" key={product._id}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
                <button className=' ms-3 btn btn-danger' onClick={() => deleteProduct(product._id)}>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default ProductList