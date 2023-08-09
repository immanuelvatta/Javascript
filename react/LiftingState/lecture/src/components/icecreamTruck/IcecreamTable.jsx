import React from 'react'

const IcecreamTable = (props) => {
    return (
        <fieldset>
            <legend>IcecreamTable.jsx</legend>
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
                        props.iceCreamList.map((eachIceCream, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{eachIceCream.flavor}</td>
                                    <td>{eachIceCream.quantity}</td>
                                    <td> <button type="button" onClick={() =>props.removeIceCreamByIdx(idx)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default IcecreamTable