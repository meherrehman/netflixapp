import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import TextField from '@mui/material/TextField';

const Result = () =>{

    let time = new Date();
    time = time.getMinutes();


    let title = "Declaration Announcement";
    let State="Declayred";

    let [cState,uState] = useState(State)
    let [cTitle,uTitle] = useState(title);


    const Announce = () =>{

        if(time>42){
            uState(cState= 
            (<><input type="text" placeholder="Enter Your Roll NO" />
                            <p id="statepara">Hello</p></>))
            uTitle(cTitle="Get Result");
        }
        else{
        alert("Result will be declayred at 10:42 PM ! Good Luck");
        }
    }

    return(
        <>
            <h1>Result</h1>
            <h1>{cState}</h1>
            <button className="btn btn-success" onClick={Announce}>{cTitle}</button>
  <CountdownCircleTimer
    isPlaying
    duration={20}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  <TextField id="outlined-basic" label="UserName" variant="outlined"/>
        </>
    );
};

export default Result;