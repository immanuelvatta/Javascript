import React, { useState } from "react"
import FormDisplayComponent from "../components/FormDisplayComponent";
//form input: store as state variable

const OneStateForm = () => {
    // const [flavor, setFlavor] = useState("Vanilla");
    // const [quantity, setQuantity] = useState(0);
    
    const [formState, setFormState] = useState({
        flavor: "Vanilla",
        quantity: 0
    })
    
    const [formErr, setFormErr] = useState({
        flavor: "",
        quantity: true
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleInput = (e) =>{
        const keyToUpdate = e.target.name;
        const valToUpdate = e.target.value;
        setFormState((prev) =>({
                ...prev,
                [keyToUpdate] : valToUpdate
        }))
        const errObj = {...formErr};
        // if (keyToUpdate ==="flavor"){
        //     valToUpdate.length < 3 ?
        //         errObj.flavor = "Flavor must be at least 3 characters":
        //         errObj.flavor = ""
        // }else if (keyToUpdate == 'quantity'){
        //     valToUpdate < 1 ?
        //         errObj.quantity = "Quantity must be at least 1":
        //         errObj.quantity = ""
        // }
        // setFormErr(errObj)
        switch(keyToUpdate){
            case 'flavor':
                valToUpdate.length < 3 ?
                errObj.flavor = "Flavor must be at least 3 characters":
                errObj.flavor = ""
                break;
            case 'quantity':
                valToUpdate < 1 ?
                errObj.quantity = "Quantity must be at least 1":
                errObj.quantity = ""
                break;
            default:
                break;
        }
        setFormErr(errObj)
    }

    return (
        <fieldset>
            <legend> OneStateForm.jsx</legend>
            <form on onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={formState.flavor} onChange={handleInput} />
                    <p>{formErr.flavor}</p>
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={formState.quantity} onChange={handleInput} />
                    <p>{formErr.quantity}</p>
                </div>
                {/* <button type="submit" disabled={(flavor.length < 3 || quantity < 1)? true : false}>Submit</button> */}
                <button type="submit">Submit</button>
            </form>
            {/* if invalid quantity or invalid flavor: true */}
            {/* 
            <div>
                <p>Flavor: {flavor}</p>
                <p>Quantity: {quantity} </p>
            </div> */}
            <FormDisplayComponent flavor = {formState.flavor} quantity= {formState.quantity}/>

        </fieldset>
    )
}

export default OneStateForm