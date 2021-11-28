import React, { useState } from "react";
import Listitem from "./Listitem";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';


const TodoApp = () =>{

    let [citem,uitem] = useState();
    let [sitem,ditem] = useState([]);

    let itemInput = (event) =>{
        let itemvalue = event.target.value;
        uitem(itemvalue);
    }

    //let [NewItem,uNewItem] = useState(citem);

    let addItem = () =>{
        ditem((olditem)=>{
            return[...olditem,citem]
        });
        uitem('');
    }

    const cutItem = (id) =>{
        console.log("delete");

        ditem((olditem)=>{
            return olditem.filter((arrElem,index)=>{
                return index !==id;
            })
        })
    }


    return(
        <>
            {/* <input  type="text" placeholder="Enter Item" name="item" value={citem} onChange={itemInput}/> */}
            <TextField id="outlined-basic" label="Add an Item" variant="outlined" autoComplete="off" name="item" value={citem} onChange={itemInput}/>
            {/* <button onClick={addItem}>+</button> */}
            <Button variant="contained" onClick={addItem} className="mx-2"><AddCircleIcon /></Button>
            <ul className="list-unstyled">
                {sitem.map((itemval,index)=>{
                    return  <Listitem item={itemval} key={index} id={index} minus = {cutItem}/>
                })}
            </ul>
        </>
    );
};

export default TodoApp;