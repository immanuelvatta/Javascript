import React from 'react'

const FormDisplayComponent = (props) => {
    const {flavor, quantity} = props
  return (
    <fieldset>
        <legend> FormDisplayComponent.jsx</legend>
        <div>
                <p>Flavor: {flavor}</p>
                <p>Quantity: {quantity} </p>
            </div>
    </fieldset>
  )
}

export default FormDisplayComponent