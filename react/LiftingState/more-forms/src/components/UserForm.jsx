import React, { useState } from "react";


const UserForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); // default value of false
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // const submitForm = (e) => {
    //     // we must prevent the default refresh of the browser to keep our state from being reset
    //     e.preventDefault();
        
    //     // create a javascript object to hold all of the values
    //     const formData = {firstName,lastName, email, password, confirmPassword};
    //     console.log(formData);
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");

    //     // updating state will change the message to be displayed in the form
    //     setHasBeenSubmitted(true);

    // };


    // const formMessage = () => {
    //     if (hasBeenSubmitted){
    //         return "Successfully submitted form!";
    //     }else{
    //         return "Please submit the form";
    //     }
    // };

    // validations
    const handleFormValidation = (e,type) => {
        switch(type){
            case "firstName":
                setFirstName(e.target.value);
                if(e.target.value.length < 1){
                    setFirstNameError("First name is required!");
                }else if(e.target.value.length < 2){
                    setFirstNameError("First Name must be at least 2 characters")
                }else{
                    setFirstNameError("");
                }
                break;
            case "lastName":
                setLastName(e.target.value);
                if(e.target.value.length < 1){
                    setLastNameError("Last name is required!");
                }else if(e.target.value.length < 2){
                    setLastNameError("Last Name must be at least 2 characters")
                }else{
                    setLastNameError("");
                }
                break;
            case "email":
                setEmail(e.target.value);
                if(e.target.value.length < 1){
                    setEmailError("Email is required!");
                }else if(e.target.value.length < 2){
                    setEmailError("Email must be at least 2 characters")
                }else{
                    setEmailError("");
                }
                break;
            case "password":
                setPassword(e.target.value);
                if(e.target.value.length < 1){
                    setPasswordError("Password is required!");
                }else if(e.target.value.length < 8){
                    setPasswordError("Password must be at least 8 characters")
                }else{
                    setPasswordError("");
                }
                break;
            case "confirmPassword":
                setConfirmPassword(e.target.value);
                if(e.target.value.length < 1){
                    setConfirmPasswordError("Password is required!");
                }else if(e.target.value !== password){
                    setConfirmPasswordError("Passwords do not match")
                }else{
                    setConfirmPasswordError("");
                }
                break;
            default:
                break;
    }
}
    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault()}}>
                {/* <h3 className="mb-3"> <u>{formMessage()}</u> </h3> */}
                {
                    // hasBeenSubmitted ?
                    // <h3> <u> Successfully submitted form! </u> </h3> :
                    // <h3> <u> Please submit the form! </u> </h3>
                }
                <div>
                    <label className="form-label">First Name: </label>
                    {/* <input type="text" className="form-control" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/> */}
                    <input className="form-control" type="text" value={firstName} onChange= {(e) => handleFormValidation(e, 'firstName')} />
                    { firstNameError ? <p>{firstNameError}</p> : "" }
                </div>
                <div>
                    <label className="form-label">Last Name: </label>
                    <input className="form-control" type="text" value={lastName} onChange= {(e) => handleFormValidation(e, 'lastName')} />
                    { lastNameError ? <p>{lastNameError}</p> : "" }
                </div>
                <div>
                    <label className="form-label">Email: </label>
                    <input type="text" className="form-control" value={email} onChange={ (e) => handleFormValidation(e, 'email')} />
                    { emailError ? <p>{emailError}</p> : "" }
                </div>
                <div>
                    <label className="form-label">Password: </label>
                    <input type="password" className="form-control" value={password} onChange={ (e) => handleFormValidation(e, 'password')} />
                    { passwordError ? <p>{passwordError}</p> : "" }
                </div>
                <div>
                    <label className="form-label">Confirm Password: </label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={ (e) => handleFormValidation(e, 'confirmPassword')} />
                    { confirmPasswordError ? <p>{confirmPasswordError}</p> : "" }
                </div>
                {
                firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
                (<input type="submit" className="btn btn-success" value="Submit" disabled /> ) : 
                (<input type="submit" className="btn btn-success" value="Submit" />)
                }
            </form>
        </div>


    );
};

export default UserForm;
