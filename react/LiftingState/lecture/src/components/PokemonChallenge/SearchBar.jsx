import React, { useState } from 'react'

/*
1. form input: state
2.
*/

export const SearchBar = (props) => {
    const [inputName, setInputName] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit(inputName)
        setInputName("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Search For:
                    <input type='text' name="inputName" value={inputName}
                        onChange={e=> setInputName(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                    
                </p>
            </form>
        </div>
    )
}

export default SearchBar