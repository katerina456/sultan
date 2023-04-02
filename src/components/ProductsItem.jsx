import React from "react";
import ButtonSmall from "./UI/button/ButtonSmall";
import Container from "./Container";

import smallBasket from './icons/small_basket.svg';

/* 'url("images/image4.jpg")' */

const ProductsItem = function(props) {

    return (
        <div className="products-item" >
            <div className="products-item-foto" style={{backgroundImage: `url(${props.info.url})`}}>
                <p className="popular">ПОПУЛЯРНОЕ</p>

                <Container type={props.info.sizeType}
                            size={props.info.size} 
                />
            </div>
                    
            <p className="title" onClick={() =>props.handleClick(props.info)}>
                <span>{props.info.brand}</span> {props.info.name}
            </p>
            <p className="about">Штрихкод: <span>{props.info.cod}</span></p>
            <p className="about">Производитель: <span>{props.info.manufacturer}</span></p>
            <p className="about">Бренд: <span>{props.info.brand}</span></p>
            <div className="price-box">
                <p className="price">{String(props.info.price).split('.').join(',')} ₸</p>
                <ButtonSmall text='В КОРЗИНУ' img={smallBasket} 
                    handleClick={props.addClick} item={props.info} 
                />
            </div>
        </div>
        
    )
}

export default ProductsItem;