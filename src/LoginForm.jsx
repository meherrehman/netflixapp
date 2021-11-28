import React, { useState } from "react";

const LoginForm = () =>{

    const [form,uform] = useState({
        flname : "",
        email : ""
    });

    const inputEvent = (events) =>{
        const {value,name} = events.target;

        uform((Prevalue)=>{
            return{
                ...Prevalue,
                [name] : value,
            }
        })
        
    }

    const [newValue,setNewvalue] = useState(form);

    const submission = () =>{
        setNewvalue(form);
    }

    return(
        <>
            <h1>Hi !{newValue.flname}</h1>
            <p>{newValue.email}</p>
            <input type="text" placeholder="Enter Name" name="flname" value={form.flname} onChange={inputEvent}/>
            <input type="email" placeholder="Enter Email" name="email" value={form.email} onChange={inputEvent}
                autoComplete="off"
            />
            <button onClick={submission}>Submit</button>
        </>
    );
};

export default LoginForm;