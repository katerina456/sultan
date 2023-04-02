import React from "react";
import ButtonOrange from "./UI/button/ButtonOrange";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import Container from "./Container";

import '../styles/App.css';
import '../styles/main.css';

import smallBasket from './icons/small_basket.svg';
import share from './icons/share.svg';
import download from './icons/download-black.svg';
import polygon from './icons/polygon.svg';

const Card = function(props) {
    let product = props.product;

    return (
        <Wrapper>

            <div className="card-about">
                <div className="card-about-foto" 
                    style={{backgroundImage: `url(${product.url})`}}>
                    {/* <img src="./images/products/image.jpg" alt="" /> */}
                </div>

                <div className="card-info">
                    
                    <p className="card-info-green">В наличии</p>
                    <p className="card-info-title">
                        <span>{product.brand}</span> {product.name}
                    </p>

                    <Container type={product.sizeType}
                            size={product.size} 
                    />

                    <div className="card-info-item">
                        <p className="card-info-price">
                            {String(props.product.price).split('.').join(',')} ₸
                        </p>

                        <Counter />

                        <ButtonOrange img={smallBasket} text='В корзину' 
                            handleClick={props.addBasketProduct} 
                            item={props.product}
                        />
                    </div>

                    <div className="card-info-item">
                        <div className="button-share">
                            <img src={share} alt="" />
                        </div>

                        <div className="share-info">
                            <p>При покупке от 10 000 ₸ бесплатная 
                                <br />
                                доставка по Кокчетаву и области
                            </p>
                        </div>
                        
                        <div className="price-info">
                            <p>Прайс-лист</p>
                            <img src={download} alt="" style={{marginLeft: '10px'}} />
                        </div>
                    </div>
                    <div>
                        <p className="product-info-point">Производитель: <span>{product.manufacturer}</span></p>
                        <p className="product-info-point">Бренд: <span>{product.brand}</span></p>
                        <p className="product-info-point">Артикул: <span>{product.cod.slice(0,6)}</span></p>
                        <p className="product-info-point">Штрихкод: <span>{product.cod}</span></p>
                    </div>

                    <div className="description">
                        <div className="title-box">
                            <p className="product-info-title">Описание</p>
                            <img src={polygon} alt="" style={{marginLeft: '5px'}} />
                        </div>
                        
                        <p className="product-description">
                            {product.description}
                        </p>
                    </div>

                    <hr className="hr" />

                    <div className="characters">
                        <div className="title-box">
                            <p className="product-info-title">Характеристики</p>
                            <img src={polygon} alt="" style={{marginLeft: '5px'}} />
                        </div>

                        <p className="product-info-point">
                            Назначение: 
                            {product.careType.map((item, index) => 
                                <span key={index}> {item}{index !== product.careType.length-1 ? ', ' : ''}</span>)
                            }
                        </p>
                        <p className="product-info-point">
                            Тип: 
                            {product.careType.map((item, index) => 
                                <span key={index}> {item}{index !== product.careType.length-1 ? ', ' : ''}</span>)
                            }
                        </p>
                        <p className="product-info-point">Производитель: <span>{product.manufacturer}</span></p>
                        <p className="product-info-point">Бренд: <span>{product.brand}</span></p>
                        <p className="product-info-point">Артикул: <span>{product.cod.slice(0,6)}</span></p>
                        <p className="product-info-point">Штрихкод: <span>{product.cod}</span></p>
                        <p className="product-info-point">
                            {product.sizeType === 'масса' ? 'Вес: ' : 'Объем: '} 
                            <span>
                                {product.size}
                                {product.sizeType === 'масса' ? ' г' : ' мл'}
                            </span>
                        </p>
                        {/* <p className="product-info-point">Объем: <span>{product.size}</span></p>
                        <p className="product-info-point">Кол-во в коробке: <span>{product.size}</span></p> */}
                    </div>
                </div>
            </div>
        </Wrapper> 
    )
}

export default Card;