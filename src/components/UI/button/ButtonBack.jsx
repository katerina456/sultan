import React from "react";
import classes from './ButtonOrange.module.css';

const ButtonBack = function(props) {

    return (
        <button className={classes.small}>
            {props.text}
            <img src={props.img} alt="" />
        </button>
    )
}

export default ButtonBack;