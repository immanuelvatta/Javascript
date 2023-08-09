import React, {useState} from 'react'
import CompleteForm from '../components/completeTruck/CompleteForm'
import CompleteTable from '../components/completeTruck/CompleteTable'

const CompleteTruck = () => {
    const [icecreamList, setIcecreamList] = useState([])

    // push new item into the list
    const receiveNewItem = (newIcecream) => {
        setIcecreamList([...icecreamList, newIcecream])
    }

    // remove an item from the list using array idx
    const removeItemWithIdx = (deleteArrIdx) => {
        const filteredList = icecreamList.filter((eachIcecream, idx) => deleteArrIdx !== idx)
        setIcecreamList(filteredList);
    }

    //toggle is Urgent according to the event
    const updateUrgentwithIdx = (targetIdx, targetBool) =>{
        const updatedList = icecreamList.map((eachIcecream, idx)=>{
            if(targetIdx === idx){
                return {...eachIcecream, isUrgent:targetBool};
            }else{
                return eachIcecream;
            }
        })
        setIcecreamList(updatedList)
    }

    return (
        <fieldset>
            <legend>CompleteTruck.jsx</legend>
            <h1>Complete IceCream Truck</h1>
            <CompleteForm onCreate = {receiveNewItem}/>
            <CompleteTable icecreamList={icecreamList} removeItemWithIdx = {removeItemWithIdx} updateUrgentwithIdx = {updateUrgentwithIdx}/>
        </fieldset>
    )
}

export default CompleteTruck