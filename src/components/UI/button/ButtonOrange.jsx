import React from "react";
import classes from './ButtonOrange.module.css'

const ButtonOrange = function(props) {
    return (
        <button className={classes.button}
            style={{width: props.width}}
            /* onClick={props.handleClick} */
            onClick={() => {
                if (props.handleClick) props.handleClick(props.item)}}
        >
            {props.text}
            {props.img && <img src={props.img} alt="" />}
        </button>
    )
}

export default ButtonOrange;