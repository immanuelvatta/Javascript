import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const AuthorUpdate = ({updateOnDom}) => {
    const { id } = useParams();
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios
            // calling the DB to get the product
            .get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                // updating the state with the response data retrieved 
                setName(res.data.name)
                
            })
    }, [id])
    // runs when onSubmit is triggered
    const updateAuthor = (e) => {
        e.preventDefault();
        // Send a PUT request to backend API to update product by id 
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
            // passing in states to the put request
            name,
        })
            .then(res => {
                // navigate back to the previous page
                updateOnDom();
                navigate(-1)
            })
                
            .catch(err => {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key in errResponse) {
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr);
            })
    }

    const handleCancel = () =>{
        navigate(-1)
    }
    return (
        <div className='mt-5'>
                <Link className="btn btn-outline-light mb-5" to = {`/`}>Home</Link>
                <h5 className="text-light mb-3">Edit this author: </h5>
                <div className="border border-light rounded p-5 bg-light-subtle">
                    {/*call the function to handle form submission */}
                    <form onSubmit={updateAuthor}>
                        
                        <div className="form-floating mb-3 row mt-2">
                            <input className="form-control" type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName (e.target.value)} />
                            <label htmlFor="name" className="text-start">Name:</label>
                            {errors.map((err, index) => <p className='alert alert-danger'key={index}>{err}</p>)}
                            {/* Make sure the value is set to the state var. Onchange to monitor the input. Set it to a callback function that sets the state */}
                        </div>
                        <button className='btn btn-outline-primary m-3' type='button' onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-outline-success m-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default AuthorUpdate