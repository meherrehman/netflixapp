import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img from './images/netflix.jpeg'


const Card = (props) =>{
    return(
        <>
        <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href={props.link} class="btn btn-primary">Go somewhere</a>
        <p className="featured">{props.featured}</p>
        </div>
        </div>
        </>
    )
}

    

export default Card;