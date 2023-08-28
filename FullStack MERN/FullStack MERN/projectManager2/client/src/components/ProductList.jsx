import React from 'react'
import { Link } from 'react-router-dom'


const ProductList = ({productList}) => {

    return (
        <div className="container">
            <hr />
            <h1>Product List</h1>
            <ul>
                {productList.map((product) =>
                <li className="list-unstyled" key={product._id}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}

export default ProductList