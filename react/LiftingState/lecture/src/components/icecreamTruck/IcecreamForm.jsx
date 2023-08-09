import React , {useState} from 'react'

const IcecreamForm = (props) => {

    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();

        // send the info to the backend, process it in database
        // const newIceCream = {flavor: flavor, quantity: quantity, isDelivered: false};
        // ^ can be rewritten as this
        const newIceCream = {flavor, quantity};
        props.onCreate(newIceCream)
    }
    
    return (
        <fieldset>
            <legend> IceCreamTruckForm.jsx</legend>
            <form onSubmit={handleSubmit}>
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
        </fieldset>
    )
    }

export default IcecreamForm