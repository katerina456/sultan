import React from "react";
import classes from './ButtonOrange.module.css';

const ButtonSmall = function(props) {
    function toggleBgColor(event) {
        let btn = event.currentTarget;
        if (btn.dataset.clicked === 'no') {
            btn.style.backgroundColor = '#cfb279';
            btn.dataset.clicked = 'yes';
        } else {
            btn.style.backgroundColor = '';
            btn.dataset.clicked = 'no';
        }
    }

    return (
        <button className={classes.small} data-clicked={'no'} onClick={(event) => {
            props.handleClick(props.item)
            toggleBgColor(event)
        }}>
            {props.text}
            <img src={props.img} alt="" />
        </button>
    )
}

export default ButtonSmall;