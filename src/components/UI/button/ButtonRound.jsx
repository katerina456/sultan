import React from "react";
import classes from './ButtonOrange.module.css'

const ButtonRound = function(props) {
    return (
        <button className={classes.round} onClick={() => {
            /* props.removeProduct(props.item) */
            props.handleClick(props.item)
            }}>
            <img src={props.img} alt="" />
        </button>
    )
}

export default ButtonRound;