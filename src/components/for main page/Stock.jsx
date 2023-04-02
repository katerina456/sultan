import React from "react";
import ButtonBig from "../UI/button/ButtonBig";

import '../styles/App.css';
import '../styles/main.css';

import left from './icons/left.svg';
import right from './icons/right.svg';
import on from './icons/Rectangle-on.svg';
import off from './icons/Rectangle-off.svg';

const Stock = function() {

    return (
        <section className="container section-stock">
            <div className="stock-info">
                <p className="stock-info-text">*Акция действует до 04/09/22</p>
                <h2 className="stock-info-h2">Название Акции</h2>
                <p className="stock-info-text-t">Условия акции в пару строк, 
                    Условия акции в пару строк, 
                    Условия акции в пару строк
                </p>
                <ButtonBig text='ПРИНЯТЬ УЧАСТИЕ' />
            </div>

            <div className="round-arrow left">
                <img src={left} alt="" />
            </div>

            <div className="round-arrow right">
                <img src={right} alt="" />
            </div>

            <div className="stock-slider">
                <img src={on} alt="" />
                <img src={off} alt="" />
                <img src={off} alt="" />
                <img src={off} alt="" />
            </div>
            
            <div className="stock-layout" style={{backgroundImage: 'url("images/young-housewife.png")'}}></div>
        </section>
        
    )
}

export default Stock;