import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// bringing in the product list and removeFromDom. Also destructuring them
const AuthorList = ({authorList, removeFromDom}) =>{
    const  navigate = useNavigate();
    // function to delete a product by id
    const deleteAuthor = (id)=>{
        // send the delete request to the backend API to remove the product
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
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
        navigate(`/authors/edit/${id}`)
    }
    return(
        <div className="mt-5">
            <Link className="btn btn-outline-light mb-5" to = {`/authors/new`}>Add an Author</Link>
            <h5 className="text-light mb-3">We have quotes by: </h5>
            <table className="table table-bordered border-light table-hover table-striped">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col" >Name</th>
                        <th scope="col" >Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {authorList.map((author)=>
                    <tr  key={author._id}>
                        <td className="text-light">{author.name}</td>
                        <td> 
                            {/* <button className="btn btn-primary">
                                <Link to={`/authors/${author._id}`}>Edit</Link>
                            </button> */}
                            <button className="m-1 btn btn-outline-info" onClick={()=>handleEdit(author._id)}>Edit</button>
                            <button className="m-1 btn btn-outline-danger" onClick={()=>deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList