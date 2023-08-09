import React, { useState } from "react"
import FormDisplayComponent from "../components/FormDisplayComponent";
//form input: store as state variable

const FormPage1 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        // send the info to the backend, process it in database
        // const newIceCream = {flavor: flavor, quantity: quantity, isDelivered: false};
        // ^ can be rewritten as this
        const newIceCream = {flavor, quantity, isDelivered: false};
        console.log(newIceCream);
        // clearing the form
        setFlavor("")
        setQuantity("")
    }

    return (
        <fieldset>
            <legend> FormPage1.jsx</legend>
            <form on onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* 
            <div>
                <p>Flavor: {flavor}</p>
                <p>Quantity: {quantity} </p>
            </div> */}
            <FormDisplayComponent flavor = {flavor} quantity= {quantity}></FormDisplayComponent>

        </fieldset>
    )
}

export default FormPage1