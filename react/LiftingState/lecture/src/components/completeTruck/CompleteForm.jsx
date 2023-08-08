import React, { useState } from 'react'
// form input:
const CompleteForm = (props) => {
    const [flavor, setFlavor]  = useState("");
    const [quantity, setQuantity] = useState(0);
    const [chocoChip, setChocoChip] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newIcecream = {
            flavor,quantity, chocoChip, isUrgent: false
        }
        props.onCreate(newIcecream)
    }



  return (
    <fieldset>
        <legend>CompleteForm.jsx</legend>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Flavor: </label>
                <select name="flavor" value= {flavor} onChange= {e => setFlavor(e.target.value)}>
                    <option hidden>Please Choose a flavor</option>
                    <option value="Vanilla">Vanilla (Best seller!)</option>
                    <option value="Earl Grey">Earl Grey (Seasonal!)</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Mango">Mango</option>
                </select>
            </p>
            <p>
                <label>Quantity: </label>
                <input type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
            </p>
            <p>
                <label>Chocolate chip?</label>
                <input type="checkbox" name="chocoChip" checked={chocoChip} onChange={e=> setChocoChip(e.target.checked)} />
            </p>
            <button type='submit'>Send Request</button>
        </form>
    </fieldset>
  )
}

export default CompleteForm