import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const DigitalClock = () =>{


    let time = new Date().toLocaleTimeString();

    const [ctime,utime] = useState(time);

    const UpdatedTime = () =>{
        time = new Date().toLocaleTimeString();
        utime(time);
    }

    setInterval(UpdatedTime,1000);

    const num = 0;
    let [cnum,unum] = useState(num);

    const IncNum = () =>{
        // console.log("clicked");
        unum(cnum + 1);
    }
    const DecNum = () =>{
        // console.log("clicked");
        if(cnum>0){
            unum(cnum - 1);
        }else{
            unum(0);
            alert("Cant be less than zero")
        }
        
    }

    // useEffect(()=>{
    //     document.title =`Quantity : ${cnum}`;
    // })


    return(
        <>
            <h1 className="text-center">Digital Clock</h1>
            <h2 className="text-center my-5">{ctime}</h2>
            <h3 className="m-5">{cnum}</h3>
            <button className="btn btn-danger text-center m-4" onClick={IncNum}>INCREMENT</button>
            <button className="btn btn-warning text-center m-4" onClick={DecNum}>DECREMENT</button>
        </>
    );
};

export default DigitalClock;