import React from "react";

const Phone = function(props) {

    return (
        <div>
            <p className="phone-number" style={{color: props.titleColor}}>+7 (777) 490-00-91</p>
            <p className="phone-time" style={{color: props.textColor}}>время работы: 9:00-20:00</p>
            <p className="phone-order" style={{color: props.textColor}}>Заказать звонок</p>
        </div> 
    )
}

export default Phone;