import React, { useState } from "react"

// import FormDisplayComponent from "../components/FormDisplayComponent";
//form input: store as state variable

const IceCreamTruck = () => {

    //keep track of the ice cream list
    const [iceCreamList, setIceCreamList] = useState([])
    
    // form input
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        // send the info to the backend, process it in database
        // const newIceCream = {flavor: flavor, quantity: quantity, isDelivered: false};
        // ^ can be rewritten as this
        const newIceCream = {flavor, quantity};
        receiveNewIceCream(newIceCream)
        
        // console.log(newIceCream);
        // clearing the form
        // setFlavor("")
        // setQuantity("")
    }
    // push the new ice cream to the list
    const receiveNewIceCream  = (newIceCream)=>{
        setIceCreamList([...iceCreamList, newIceCream])
        // setIceCreamList((prev) => [...prev, newIceCream]) // when you want to set new state depending on previous state
    }
    // remove ice cream from the list by idx
    const removeIceCreamByIdx = (deleteIdx) =>{
        const filterList = iceCreamList.filter((eachIceCream, idx) => idx !== deleteIdx);
        setIceCreamList(filterList);
    }

    return (
        <fieldset>
            <legend> IceCreamTruck.jsx</legend>
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
            {/* <FormDisplayComponent flavor = {flavor} quantity= {quantity}></FormDisplayComponent> */}
            <table>
                <thead>
                    <tr>
                        <th>Flavor</th>
                        <th>Number of scoops</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        iceCreamList.map((eachIceCream, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{eachIceCream.flavor}</td>
                                    <td>{eachIceCream.quantity}</td>
                                    <td>
                                        <button type="button" onClick={() =>removeIceCreamByIdx(idx)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </fieldset>
    )
}

export default IceCreamTruck