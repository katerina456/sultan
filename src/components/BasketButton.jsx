import React from "react";

import basket from './icons/basket.svg';

const BasketButton = function(props) {
    return (
        <div className="basket" onClick={props.handleClick}>
            <div className="basket-box">
                <img src={basket} alt="" />
                {props.number !==0 && <div className="basket-count">{props.number}</div>}
            </div>
            <div>
                <p className="basket-text">Корзина</p>
                {props.number !==0 && <p className="basket-price">
                    {String(props.summ).split('.').join(',')} ₸
                </p>}
            </div>
        </div>
    )
}

export default BasketButton;