import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const Form = () =>{

    const [UserName,SetUserName] = useState({
        fname : "",
        lname : "",
        email : ""
    });

    const inputEvent = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        SetUserName((Prevalue)=>{
            if(name==="fname"){
                return{
                    fname : value,
                    lname : Prevalue.lname,
                    email : Prevalue.email
                }
            }

            else if(name==="lname"){
                return{
                    fname : Prevalue.fname,
                    email : Prevalue.email,
                    lname : value
                }
            }

            else if(name==="email"){
                return{
                    fname : Prevalue.fname,
                    lname : Prevalue.lname,
                    email : value
                }
            }
        })
    }
    


    return(
        <>
            <h1>HI! {UserName.fname} {UserName.lname}</h1>
            <p>{UserName.email}</p>
            {/* <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={UserName.fname} name = "fname"/> */}
            <TextField id="outlined-basic" label="UserName" variant="outlined" onChange={inputEvent} value={UserName.fname} name = "fname" autoComplete="off"/>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={UserName.lname} name = "lname"/>
            <input type="email" placeholder="Enter Your E_mail" onChange={inputEvent} value={UserName.email}
            name = "email"
            />
        </>
    );
};

export default Form;