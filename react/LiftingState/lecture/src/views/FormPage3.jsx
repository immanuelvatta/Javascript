import React, { useState } from "react"
import FormDisplayComponent from "../components/FormDisplayComponent";
//form input: store as state variable

const FormPage3 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const [flavorErr, setFlavorErr] = useState("");
    const [quantityErr, setQuantityErr] = useState(true);

    // when the form is submitted, show different message
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        // send the info to the backend, process it in database
        // const newIceCream = {flavor: flavor, quantity: quantity, isDelivered: false};
        // ^ can be rewritten as this
        // if (flavor.length > 2  && quantity > 0){ 
        // if(flavorErr == false && quantityErr == false){ // if none of the errors is true, then do this 
        if(flavorErr || quantityErr){ // if none of the errors is true, then do this 
            alert("Invalid Form")
        }
        else{
            const newIceCream = {flavor, quantity};
            console.log(newIceCream); // simulate sending info to the backend
            // clearing the form
            setFlavor("")
            setQuantity("")
            setIsSubmitted(true);
        }
    }

    const welcomeMessage = () => {
        if(isSubmitted){
            return "Thank you for submitting the form"
        }else{
            return "Please fill in the form"
        }
    }

    const handleFlavor = (e) =>{
        // handle input
        setFlavor(e.target.value)

        //handle error based on the input
        if(e.target.value.length < 3){
            setFlavorErr("Flavor must be at least 3 characters")
        }else{
            setFlavorErr("")
        }
    }

    const handleQuantity = (e) =>{
        setQuantity(e.target.value)

        if(e.target.value < 1){
            setQuantityErr("Quantity Must be at least 1")
        }else{
            setQuantityErr("")
        }
    }

    return (
        <fieldset>
            <legend> FormPage3.jsx</legend>
            {/* {
                isSubmitted?
                <h3>Thank you for submitting the form</h3>:
                <h3>Please fill in the form</h3>
            } */}
            <h3>{welcomeMessage()}</h3>
            <form on onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    {/* <input type="text" name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} /> */}
                    <input type="text" name="flavor" value={flavor} onChange={handleFlavor} />
                    {/* {
                        flavor.length < 3 ? <p style={{color:"red"}}>Flavor must be at least 3 characters</p> : <p></p>
                    } */}
                    <p style={{color: "red"}}>{flavorErr}</p>
                </div>
                <div>
                    <label> Quantity: </label>
                    {/* <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} /> */}
                    <input type="number" name="quantity" value={quantity} onChange={handleQuantity} />
                    {/* {
                        quantity < 1 && <p style={{color:"red"}}> Must be at least 1</p>
                    } */}
                    <p style={{color: "red"}}>{quantityErr}</p>
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

export default FormPage3