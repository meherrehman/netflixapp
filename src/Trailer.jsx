import React from "react";
import { useState } from "react/cjs/react.development";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import poster from "./images/poster.jpg";

const Trailer = () =>{

    //const link = "https://www.youtube.com/embed/uwsmkWh0S5Y";

    let [clink,ulink] = useState(poster);

    const ShowTrailer = () =>{
        let pin=prompt("Enter Netflix MPin");
        if(pin==2378){
        ulink(clink="https://www.youtube.com/embed/uwsmkWh0S5Y");
        }
        else{
            alert("Invalid MPIN");
        }
    }

    return(
        <>
             {/* <iframe src={clink} title="Money Heist Season 5 Vol2 Trailer" width="600px" height="600px" allowFullScreen></iframe> */}
             <div className="row justify-content-center">
             <img src={poster} className="my-3" style={{width : "300px",backgroundSize : "cover"}}/>
             <button className="btn btn-success"><a href={clink} target="_blank" rel="noreferrer" onClick={ShowTrailer}  className="text-white my-3">Click Here to Watch Money Heist Season 5 Vol2 Trailer</a></button>
             </div>
             
            {/* <button className="btn btn-success" onClick={ShowTrailer}>Click to Watch Trailer</button> */}
        </>
    );
};

export default Trailer;