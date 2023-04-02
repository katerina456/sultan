import React from "react";
import classes from './InputMy.module.css'

const InputMy = function(props) {

    return (
        <div className={classes.input_box}
            style={{width: props.width}}>
            <input type="text" placeholder={props.placeholder} 
                className={classes.input} 
                style={{backgroundColor: props.color, width: props.width}}
            />

            <div className={classes.search_box}>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default InputMy;