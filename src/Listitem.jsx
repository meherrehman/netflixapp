import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const Listitem = (props) =>{

    const [linebreak,setLine] = useState(false);

    const line = () =>{
        setLine(true);
    }

    return(
        <>
            <div className="row">
            {/* <div className="col-1 text-end"><button onClick={()=>{
                props.minus(props.id);
            }}></button></div> */}
            <div className="col-1 text-end"><Button variant="outlined" color="error" onClick={ line/*()=>{props.minus(props.id);}*/}>
            <DeleteIcon />
            </Button></div>
            <div className="col-2 text-start"><li style={{textTransform:"uppercase",textDecoration: linebreak ?"line-through":"none"}}>{props.item}</li></div>
            
            </div>
        </>
    )
}

export default Listitem;