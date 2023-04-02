import React from "react";

import doubleCheck from './icons/double-check.svg'
import close from './icons/close-outline.svg'

const Modal = function(props) {
    return (
        <div className="thanks">
            <div className="thanks-info">
                <div className="thanks-close" onClick={props.handleClick}>
                    <img src={close} alt="" />
                </div>
                <div className="thanks-ok">
                    <img src={doubleCheck} alt="" />
                </div>
                <h2>Спасибо за заказ</h2>
                <p>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
            <div className="thanks-color"></div>
        </div>
    )
}

export default Modal;