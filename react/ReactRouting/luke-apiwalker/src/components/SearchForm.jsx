import React, {useState}  from 'react'
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [dropDown, setDropDown] = useState('people')
    const [id, setId] = useState(1)
    const navigate = useNavigate();
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${dropDown}/${id}`)
    }
    
    
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="select">Search for:</label>
                <select className='form-select' id='select' onChange={e => setDropDown(e.target.value)} value={dropDown}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">Id: </label>
                <input className='form-control' type="number" name="id" id="id" onChange={e => setId(e.target.value)} value={id}/>
                <button className='btn btn-success' type='submit'>Go</button>
            </form>
        </div>
    )
    }

export default SearchForm