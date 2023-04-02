import React from "react";
import Counter from "./Counter";
import Container from "./Container";
import ButtonRound from "./UI/button/ButtonRound";

import delet from './icons/delete.svg';

const BasketItem = function(props) {
    /* function removeItem(event) {
        props.removeProduct()
    } */

    



    return (
        <div className="basket-item">
            <div className="basket-item-about">
                <div style={{display: "flex"}}>
                    <div className="basket-item-foto">
                        <img src={props.info.url} alt="" />
                    </div>

                    <div className="basket-item-description">
                        <Container type={props.info.sizeType}
                            size={props.info.size} 
                        />

                        <p className="basket-info-title words-cut">
                            {props.info.brand} {props.info.name}
                        </p>
                        <p className="basket-description">
                            {props.info.description}
                        </p>
                    </div>
                </div>
                    
                <div className="count-products">
                    <Counter /* quantity={quantity} 
                        handleClick={(num) => {setQuantity(num)}}  */
                        apdateBasketElement={props.apdateBasketElement}
                        cod={props.info.cod}
                    />

                    <p className="card-info-price">
                        {String(props.info.price).split('.').join(',')} ₸
                    </p>

                    <ButtonRound img={delet} handleClick={props.addBasketProduct} 
                        /* removeProduct={props.removeProduct} */
                    item={props.info} />
                    
                </div>
            </div>

            <hr className="separator basket-separator" />
        </div>
    )
}

export default BasketItem;