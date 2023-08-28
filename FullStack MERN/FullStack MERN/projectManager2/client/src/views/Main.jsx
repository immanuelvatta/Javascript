import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = () => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNewProductCreate = () => {
        getProductList();
    };

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm onCreate={handleNewProductCreate}/>
            <ProductList productList={productList} />
        </div>
    );
};
export default Main;
