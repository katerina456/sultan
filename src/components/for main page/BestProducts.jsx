import React from "react";

import '../styles/App.css';
import '../styles/main.css';

import on from './icons/Rectangle-on-orange.svg';
import off from './icons/Rectangle-off.svg';

const BestProducts = function() {


    return (
        <section className="container section-container bestProducts">
            
            <h2 className="h2"><span className="orange-text">Лучшие</span> товары</h2>

            <p className="categories-text">
                От ведущих мировых брендов
            </p>

            <div className="categories best-categories">
                <img src="./images/brand/image1.jpg" alt="" />
                <img src="./images/brand/image2.jpg" alt="" />
                <img src="./images/brand/image3.jpg" alt="" />
                <img src="./images/brand/image4.jpg" alt="" />
                <img src="./images/brand/image5.jpg" alt="" />
                <img src="./images/brand/image6.jpg" alt="" />
                <img src="./images/brand/image7.jpg" alt="" />
                <img src="./images/brand/image8.jpg" alt="" />
                <img src="./images/brand/image9.jpg" alt="" />
                <img src="./images/brand/image10.jpg" alt="" />
            </div>

            <div className="stock-slider">
                <img src={on} alt="" />
                <img src={off} alt="" />
                <img src={off} alt="" />
                <img src={off} alt="" />
            </div>

        </section> 
    )
}

export default BestProducts;