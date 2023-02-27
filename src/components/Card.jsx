import React from "react";

const Card = (props) => {
    return (
        <div className = {'Card'}>
            <img src = {props.src} alt = {props.alt}></img>
            <h5>{props.name}</h5>
            <a href = {props.about} target = "_blank"><button>About</button></a>
        </div>
    )
}

export default Card;