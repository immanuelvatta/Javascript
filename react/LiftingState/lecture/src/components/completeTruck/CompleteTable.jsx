import React from 'react'

const CompleteTable = (props) => {

    const handleDelete = (arrIdx) =>{
        props.removeItemWithIdx(arrIdx)

    }
    const toggleUrgent = (arrIdx, targetBool) =>{
        props.updateUrgentwithIdx(arrIdx, targetBool);
    }
    

  return (
    <fieldset>
        <legend>CompleteTable.jsx</legend>
        <table>
            <thead>
                <tr>
                    <th>Flavor</th>
                    <th>Quantity</th>
                    <th>chocoChip</th>
                    <th>isUrgent</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.icecreamList.map((eachIcecream, idx)=>
                        <tr key={idx} style={eachIcecream.isUrgent? {backgroundColor: "red", color: "white"}: {backgroundColor:"blanchedalmond", color:"black"}}>
                            <td>{eachIcecream.flavor}</td>
                            <td>{eachIcecream.quantity}</td>
                            <td>{eachIcecream.chocoChip?"Yes":"No"}</td>
                            <td>
                                <input type="checkbox" checked={eachIcecream.isUrgent} onChange={e=>toggleUrgent(idx, e.target.checked)}/>
                            </td>
                            {/* <td>{eachIcecream.isUrgent?"Yes":"No"}</td> */}
                            <td>
                                <button onClick={() => handleDelete(idx)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </fieldset>
  )
}

export default CompleteTable