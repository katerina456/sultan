import React from "react";
import ButtonOrange from "./UI/button/ButtonOrange";
import InputMy from "./UI/input/InputMy";
import Phone from "./Phone";
import ContactsItem from "./ContactsItem";

import '../styles/App.css';
import '../styles/footer.css';

import logo from './icons/logo-footer.svg';
import whatsapp from './icons/whatsapp.svg';
import telegram from './icons/telegram.svg';
import visa from './icons/visa.png';
import mastercard from './icons/mastercard.png';
import email from './icons/enter-email.svg';
import download from './icons/download.svg';

const Footer = function() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-item">
                    <img src={logo} alt="" />
                    <p className="about-sultan">Компания «Султан» — снабжаем розничные магазины 
                        товарами 
                        <br />
                        "под ключ" в Кокчетаве и 
                        Акмолинской области
                    </p>
                    <p className="subscribe">Подпишись на скидки и акции</p>
                    <InputMy placeholder='Введите ваш E-mail' 
                        img={email} color='#FFFFFF' />
                </div>
                <div className="footer-item">
                    <p className="footer-title">Меню сайта:</p>
                    <ul>
                        <li>
                            <a href="#">О компании</a>
                        </li>
                        <li>
                            <a href="#">Доставка и оплата</a>
                        </li>
                        <li>
                            <a href="#">Возврат</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p className="footer-title">Категории:</p>
                    <ul>
                        <li>
                            <a href="#">Бытовая химия</a>
                        </li>
                        <li>
                            <a href="#">Косметика и гигиена</a>
                        </li>
                        <li>
                            <a href="#">Товары для дома</a>
                        </li>
                        <li>
                            <a href="#">Товары для детей и мам</a>
                        </li>
                        <li>
                            <a href="#">Посуда</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p className="footer-title">Скачать прайс-лист:</p>
                    <ButtonOrange text='Прайс-лист' img={download} />
                    <p className="footer-messenger">Связь в мессенджерах:</p>
                    <div className="messenger-box">
                        <div>
                            <img src={whatsapp} alt="" />
                        </div>
                        <div>
                            <img src={telegram} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer-item">
                    <p className="footer-title">Контакты:</p>

                    <Phone titleColor='#FFFFFF' textColor='#FFFFFF' />

                    <div style={{height: '25px'}}></div>

                    <ContactsItem 
                        textFirst={'opt.sultan@mail.ru'} 
                        textSecond={'На связи в любое время'}
                        titleColor='#FFFFFF' textColor='#FFFFFF'
                    />

                    <div style={{marginTop: '25px'}}>
                        <img src={visa} alt="" style={{marginRight: '5px'}} />
                        <img src={mastercard} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;