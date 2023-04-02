import React from "react";
import ButtonBig from "../UI/button/ButtonBig";
import BenefitsItem from "./BenefitsItem";

import '../styles/App.css';
import '../styles/main.css';

import background from './images/chemistry.jpg';

const Chemistry = function() {

    return (
        <section className="chemistry" style={{backgroundImage: `url(${background})`}}>
            <div className="container chemistry-container">
                <h1 className="h1">Бытовая химия, косметика и хозтовары</h1>
                <h3 className="h3">оптом по кокчетаву и области</h3>

                <ButtonBig text='В КАТАЛОГ' />

                <div className="benefits">
                    <BenefitsItem 
                        firstText='Только самые' 
                        secondText='выгодные предложения' 
                    />

                    <BenefitsItem 
                        firstText='Бесплатная доставка' 
                        secondText='по Кокчетаву от 10 тыс ₸' 
                    />
                </div>

            </div>
            <div className="overlay"></div>
        </section> 
    )
}

export default Chemistry;