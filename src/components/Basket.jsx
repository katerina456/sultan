import React from "react";
import Wrapper from "./Wrapper";
import ButtonOrange from "./UI/button/ButtonOrange";
import BasketItem from "./BasketItem";
import Modal from "./Modal";

import '../styles/App.css';
import '../styles/main.css';


const Basket = function(props) {
    const [layer, setLayer] = React.useState(false);
    
    function getOrder() {  
        props.clearBasket();
        setLayer(true);
    }

    function closeModal() {
        setLayer(false);
    }


    return (
        <Wrapper>
            <h2 className="catalog-title">Корзина</h2>

            <hr className="separator basket-separator" />

            {
                props.products.map(product => {
                    return <BasketItem key={product.cod + '1'} info={product} 
                    addBasketProduct={props.addBasketProduct} 
                    apdateBasketElement={props.apdateBasketElement} />
                })
            }

            <div className="basket-summ">
                <ButtonOrange text='Оформить заказ' handleClick={getOrder} />
                <p className="card-info-price">{String(props.summ).split('.').join(',')} ₸</p>
            </div>

            {layer && <Modal handleClick={closeModal} />}
        </Wrapper> 
    )
}

export default Basket;