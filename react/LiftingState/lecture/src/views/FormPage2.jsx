import React, { useState } from "react"
import FormDisplayComponent from "../components/FormDisplayComponent";
//form input: store as state variable

const FormPage2 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        // send the info to the backend, process it in database
        // const newIceCream = {flavor: flavor, quantity: quantity, isDelivered: false};
        // ^ can be rewritten as this
        if (flavor.length >2  && quantity > 0){
            const newIceCream = {flavor, quantity};
            console.log(newIceCream); // simulate sending info to the backend
            // clearing the form
            setFlavor("")
            setQuantity("")
        }
        else{
            alert("Invalid Form")
        }
    }

    return (
        <fieldset>
            <legend> FormPage2.jsx</legend>
            <form on onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
                    {
                        flavor.length < 3 ? <p style={{color:"red"}}>Flavor must be at least 3 characters</p> : <p></p>
                    }
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    {
                        quantity < 1 && <p style={{color:"red"}}> Must be at least 1</p>
                    }
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
            <FormDisplayComponent flavor = {flavor} quantity= {quantity}></FormDisplayComponent>

        </fieldset>
    )
}

export default FormPage2