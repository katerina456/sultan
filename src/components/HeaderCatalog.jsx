import React from "react";
import { Link } from "react-router-dom";

import ButtonOrange from "./UI/button/ButtonOrange";
import Phone from "./Phone";
import BasketButton from "./BasketButton";
import InputMy from "./UI/input/InputMy";

import logo from './icons/logo.svg';
import frame from './icons/frame.svg';
import download from './icons/download.svg';
import search from './icons/search.svg';

const HeaderCatalog = function(props) {
    
    return (
        
        <div className="container header">
            <div>
                <img src={logo} alt="" />
            </div>

            <div className="header-input">
                <ButtonOrange img={frame} text={'Каталог'} />
                <div style={{width: '15px'}}></div>
                <InputMy img={search} placeholder={"Поиск..."} />
            </div>

            <div className="phone">
                <Phone />

                <div className="operator">
                    <img src="./images/foto.jpg" alt="" />
                    <div className="online"></div>
                </div>
            </div>
            
            <ButtonOrange img={download} text={'Прайс-лист'} />
            
            {/* <BasketButton handleClick={props.handleClick} number={props.number} 
                summ={props.summ}
            /> */}
            
            <Link to="/basket">
                <BasketButton  number={props.number} summ={props.summ} />
            </Link>
        </div>
        
    )
}

export default HeaderCatalog;