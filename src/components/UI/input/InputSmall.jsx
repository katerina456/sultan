import React from "react";
import classes from './InputMy.module.css'

const InputSmall = function(props) {
    const [number, setNumber] = React.useState(props.value);

    return (
        
        <input type="number" placeholder={props.placeholder} 
            className={classes.small} 
            min='0'
            value={number}
            onChange={(event) => {
                setNumber(+event.target.value)
                props.handleChange(+event.target.value, props.index)
            }}
        />
    )
}

export default InputSmall;