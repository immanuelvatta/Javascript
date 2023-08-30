import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const JobDetails = (props) => {
    const [ job, setJob ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        axios
            .get(`http://localhost:8000/api/job/${id}`)
            .then(res => setJob(res.data))
            .catch(err => console.log(err))
    }, [id]);

    const deleteJob = (id) => {
        axios.delete(`http://localhost:8000/api/job/delete/${id}`)
            .then(res =>{
                props.removeFromDom(id)
                navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    console.log(job)
    return (
        <div className='mt-5'>
            <Link className="btn btn-outline-light mb-5" to={`/`}>Home</Link>
            <div className='container border border-light'>
                <h4 className='mt-3 text-light'>Title : {job.title} </h4>
                <h5 className='mt-3 text-light'>Company : {job.company}</h5>
                <h5 className='mt-3 text-light'>Remote : {job.remoteWorking?"Yes":"No"} </h5>
                <h5 className='mt-3 text-light'>Status : {job.status} </h5>
                <Link className='btn btn-outline-warning mt-5 m-2' to={`/job/edit/${job._id}`}>Edit</Link>
                <button className='btn btn-outline-danger mt-5 m-2' onClick={()=> deleteJob(id)}>Delete</button>
            </div>
        </div>
    )
}

export default JobDetails