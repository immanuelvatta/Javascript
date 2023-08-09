import React, { useState } from "react"
import IcecreamForm from "../components/icecreamTruck/IcecreamForm";
import IcecreamTable from "../components/icecreamTruck/IcecreamTable";
// import FormDisplayComponent from "../components/FormDisplayComponent";
//form input: store as state variable

const IceCreamTruck = () => {

    //keep track of the ice cream list
    const [iceCreamList, setIceCreamList] = useState([])

    
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
            <IcecreamForm onCreate={receiveNewIceCream} />
            <IcecreamTable iceCreamList = {iceCreamList} removeIceCreamByIdx={removeIceCreamByIdx}/>
            </fieldset>
    )
}

export default IceCreamTruck