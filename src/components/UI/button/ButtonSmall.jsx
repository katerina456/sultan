import React from "react";
import classes from './ButtonOrange.module.css'

const ButtonSmall = function(props) {
    return (
        <button className={classes.small} onClick={() => props.handleClick(props.item)}>
            {props.text}
            <img src={props.img} alt="" />
        </button>
    )
}

export default ButtonSmall;