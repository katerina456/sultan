import React from "react";
import classes from './ButtonOrange.module.css'

const ButtonBig = function(props) {
    return (
        <button className={classes.big} >
            {props.text}
        </button>
    )
}

export default ButtonBig;