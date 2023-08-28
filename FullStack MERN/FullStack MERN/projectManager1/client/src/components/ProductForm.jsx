import React, { useState } from "react";
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")


    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newProduct = {
            title: title, 
            price: price, 
            description: description,
        }
        axios.post('http://localhost:8000/api/products/new',newProduct)
            .then(res =>{
                setTitle("");
                setPrice(0);
                setDescription("");
            })
            .catch(err =>{
                console.log(err)
            })
        
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group row mt-2">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" name="title" value={title} onChange={(e) => setTitle (e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" name="price" value={price} onChange={(e) => setPrice (e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" name="description" id="description" cols="10" rows="3" value={description} onChange={(e) => setDescription (e.target.value)}/>
                    </div>
                </div>
                <button className="btn btn-success mt-3" type="submit">Create</button>
        </form>
        </div>
    );
};

export default ProductForm;
