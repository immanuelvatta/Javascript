import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const JobUpdate = ({updateOnDom, removeFromDom}) => {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [remoteWorking, setRemoteWorking] = useState(false)
    const [status, setStatus] = useState("Pending")
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios
            // calling the DB to get the product
            .get(`http://localhost:8000/api/job/${id}`)
            .then(res => {
                // updating the state with the response data retrieved 
                setTitle(res.data.title)
                setCompany(res.data.company)
                setRemoteWorking(res.data.remoteWorking)
                setStatus(res.data.status)
                
            })
    }, [id])
    // runs when onSubmit is triggered
    const updateJob = (e) => {
        e.preventDefault();
        // Send a PUT request to backend API to update product by id 
        axios.put(`http://localhost:8000/api/job/edit/${id}`, {
            // passing in states to the put request
            title, company, remoteWorking, status
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

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/job/delete/${id}`)
            .then(() => {
                removeFromDom(id);
                navigate('/');
            })
            .catch((err) => {
                console.error('Error deleting job:', err);
            });
    };
    return (
        <div className='mt-5'>
                <Link className="btn btn-outline-light mb-5" to = {`/`}>Home</Link>
                <div className="border border-light rounded p-5 bg-light-subtle">
                    {/*call the function to handle form submission */}
                    <form onSubmit={updateJob}>
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
                        <div className="form-floating mb-3 row mt-2 ">
                            <select className="form-select" value={status} onChange={(e) => setStatus (e.target.value)} >
                                <option value="Pending">Pending</option>
                                <option value="Applied">Applied</option>
                                <option value="Interview(s) Scheduled">Interview(s) Scheduled</option>
                                <option value="Interview(s) Complete">Interview(s) Complete</option>
                            </select>
                            <label className="form-check-label" htmlFor="remoteWorking">Status</label>
                            {/* Make sure the value is set to the state var. Onchange to monitor the input. Set it to a callback function that sets the state */}
                        </div>
                        <button className='btn btn-outline-primary m-3' type='button' onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-outline-success m-3" type="submit">Submit</button>
                        <button className='btn btn-outline-danger m-3' type='button' onClick={() => handleDelete(id)}>Delete</button>
                    </form>
                </div>
            </div>
    )
}

export default JobUpdate