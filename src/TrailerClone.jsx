import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TrailerClone = (props) =>{

    return(
        <>
             <div className="row justify-content-center">
             <img src={props.poster} className="my-3" alt="imageposter" style={{width : "300px",backgroundSize : "cover"}}/>
             <button className="btn btn-success"><a href={props.link} target="_blank" rel="noreferrer"  className="text-white my-3">{props.title}</a></button>
             </div>
        </>
    );
};

export default TrailerClone;