import React, { useState } from "react";

const Account = () =>{
    let UName = "";

    const [UserName,SetUserName] = useState(UName);

    const inputEvent = (e) =>{
        let NewName = e.target.value;
        SetUserName(NewName);
    }

    const [NewName,SetNewName] = useState(UserName);

    const Submission = (event) =>{
        event.preventDefault();
        SetNewName(UserName);
        console.log(UserName);
    }


    return(
        <>
            <form onSubmit={Submission}>
            <h1>Hi! {NewName}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={UserName}/>
            <button type="submit">Submit</button>
            </form>

            <h1>Review Data</h1>
            <p>Name : {UserName}</p>
            
        </>
    );
};



export default Account;