import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Notfound = () =>{


    return(
        <>
        <div className="container">
            <div className="display-1 text-center">Oops !</div>
            <p className="display-2 text-center my-5">Page Under Maintainence</p>
            <div className="row justify-content-center">
                <button className="btn btn-primary col-3">Go to HomePage</button>
            </div>
        </div>    
        </>
    );
};

export default Notfound;