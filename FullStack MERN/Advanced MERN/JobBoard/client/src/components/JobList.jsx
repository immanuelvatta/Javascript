import React from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

// bringing in the product list and removeFromDom. Also destructuring them
const JobList = ({jobList, removeFromDom}) =>{
    const  navigate = useNavigate();
    // function to delete a product by id
    const deleteJob = (id)=>{
        // send the delete request to the backend API to remove the product
        axios.delete(`http://localhost:8000/api/job/delete/${id}`)
        .then(res =>{
            console.log(res)
            // 'removeFromDom' callback to update the product list in the parent component
            removeFromDom(id);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleEdit = (id) =>{
        navigate(`/job/edit/${id}`)
    }
    return(
        <div className="mt-5">
            <Link className="btn btn-outline-light mb-5" to = {`/job/new`}>Create new jobs</Link>
            <table className="table table-bordered border-light table-hover table-striped">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col" >Job Title</th>
                        <th scope="col" >Company</th>
                        <th scope="col" >Status</th>
                        <th scope="col" >Actions</th>
                    </tr>
                </thead>
                <tbody>
                {jobList.map((job)=>
                    <tr  key={job._id}>
                        <td className="text-start "> <Link className="ms-2 text-light" to={`/job/${job._id}`}>{job.title}</Link> {job.remoteWorking?"(Remote)":""}</td>
                        <td className="text-light">{job.company}</td>
                        <td className="text-light">{job.status}</td>
                        <td> 
                            <button className="m-1 btn btn-outline-info" onClick={()=>handleEdit(job._id)}>Edit</button>
                            <button className="m-1 btn btn-outline-danger" onClick={()=>deleteJob(job._id)}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default JobList