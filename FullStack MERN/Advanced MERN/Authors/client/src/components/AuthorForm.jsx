import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const AuthorForm = ({onCreate}) => {
  // use state for each form input 
    // make sure to set default value as "" for strings and 0 for int
    const [name, setName] = useState("")
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()


    // define a function to handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // make sure your front end and backend variable names match if they do you can do like this comment below
        // example const newProduct = {title, price, description}
        const newAuthor = {
            name: name, 
        }
        // database call to create a new product
        // notice the post on the axios  
        // POST request to backend API to create a new product
        axios.post('http://localhost:8000/api/authors/new',newAuthor)
            .then(res =>{
                // call the 'onCreate' callback function to update the list
                onCreate();
                // this is resetting the states back to their default values after successful submission
                setName("");
                navigate(-1)
            })
            // does straight up nothing
            .catch(err =>{
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key in errResponse){
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr)
            }) 
    }

    const handleCancel = () =>{
        navigate(-1);
    }
    // this is the return lol
    return (
        <div className='mt-5'>
            <Link className="btn btn-outline-light mb-5" to = {`/`}>Home</Link>
            <h5 className="text-light mb-3">Add a new author: </h5>
            <div className="border border-light rounded p-5 bg-light-subtle">
                {/*call the function to handle form submission */}
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 row mt-2">
                        <input className="form-control" type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName (e.target.value)} />
                        <label htmlFor="name" className="text-start">Name:</label>
                        {errors.map((err,index) => <p className='alert alert-danger' key={index}>{err} </p>)}
                        {/* Make sure the value is set to the state var. Onchange to monitor the input. Set it to a callback function that sets the state */}
                    </div>
                    <button className='btn btn-outline-primary m-3' type='button' onClick={handleCancel}>Cancel</button>
                    <button className="btn btn-outline-success m-3" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AuthorForm