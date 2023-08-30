import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


const JobForm = ({onCreate}) => {

    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [remoteWorking, setRemoteWorking] = useState(false)
    const [status, setStatus] = useState("Pending")
    const [errors, setErrors] = useState([]);
    
    const navigate = useNavigate()
    
    // define a function to handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // make sure your front end and backend variable names match if they do you can do like this comment below
        // example const newJob = {title, price, description}
        const newJob = {
            title: title, 
            company: company, 
            remoteWorking: remoteWorking,
            status: status
        }
        // database call to create a new job
        // notice the post on the axios  
        // POST request to backend API to create a new job
        axios.post('http://localhost:8000/api/job/new',newJob)
            .then(res =>{
                onCreate();
                // this is resetting the states back to their default values after successful submission
                setTitle("");
                setCompany("");
                setRemoteWorking(false);
                setStatus("Pending")
                navigate(-1)

            })
            // does straight up nothing
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    const handleCancel = () =>{
        navigate(-1);
    }
    return (
        <div className='mt-5'>
            <Link className="btn btn-outline-light mb-5" to = {`/`}>Home</Link>
            <div className="border border-light rounded p-5 bg-light-subtle">
                {/*call the function to handle form submission */}
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 row mt-2">
                            {errors.map((err,index) => <p className='alert alert-danger' key={index}>{err} </p>)}
                    </div>
                    <div className="form-floating mb-3 row mt-2">
                        <input className="form-control" type="text" name="title" placeholder='Title' value={title} onChange={(e) => setTitle (e.target.value)} />
                        <label htmlFor="name" className="text-start">Title:</label>
                        {/* Make sure the value is set to the state var. Onchange to monitor the input. Set it to a callback function that sets the state */}
                    </div>
                    <div className="form-floating mb-3 row mt-2">
                        <input className="form-control" type="text" name="company" placeholder='Company' value={company} onChange={(e) => setCompany (e.target.value)} />
                        <label htmlFor="name" className="text-start">Company:</label>
                        {/* Make sure the value is set to the state var. Onchange to monitor the input. Set it to a callback function that sets the state */}
                    </div>
                    <div className="form-check mb-3 mt-2 d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="remoteWorking" checked={remoteWorking} onChange={(e) => setRemoteWorking (e.target.checked)} />
                        <label className="form-check-label" htmlFor="remoteWorking">Remote</label>
                        {/* Make sure the value is set to the state var. Onchange to monitor the input. Set it to a callback function that sets the state */}
                    </div>
                    <button className="btn btn-outline-success m-3" type="submit">Submit</button>
                    <button className='btn btn-outline-primary m-3' type='button' onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default JobForm