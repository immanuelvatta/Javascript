import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const ProductUpdate = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/edit/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate(-1)
            })
                
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <div className="container">
            <form onSubmit={updateProduct}>
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
                <button className="btn btn-success mt-3" type="submit">Update</button>
            </form>
        </div>
    )
}

export default ProductUpdate