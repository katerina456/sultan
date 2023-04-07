import React from "react";
import classes from './InputMy.module.css'

const InputMy = function(props) {

    return (
        <div className={classes.input_box}
            style={{width: props.width}}>
            <input type="text" placeholder={props.placeholder} 
                className={classes.input} 
                style={{backgroundColor: props.color, width: props.width}}
                value={props.text}
                onInput={(event) => {
                    if (props.handleOnInput) props.handleOnInput(event.target.value)}}
            />

            <div className={classes.search_box}>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default InputMy;