import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm/>
      <ProductList/>
    </div>
  )
}

export default Main