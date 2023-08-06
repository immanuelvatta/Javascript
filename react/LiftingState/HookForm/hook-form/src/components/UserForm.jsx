import React, { useState } from "react";


const UserForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formOutput = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // create a javascript object to hold all of the values
        const formData = {firstName,lastName, email, password, confirmPassword};
        console.log(formData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


    return (
        <div>
            <form onSubmit={formOutput}>
                <div>
                    <label>First Name: </label>
                    <input type="text" className="form-control" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" className="form-control" onChange={ (e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" className="form-control" onChange={ (e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" className="form-control" onChange={ (e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" className="form-control" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </div>
                <input type="submit" className="btn btn-success" value="Submit Output" />
            </form>
            <div>
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>


    );
};

export default UserForm;
