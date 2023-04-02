import React from "react";
import ContactsItem from "../ContactsItem";

import '../styles/App.css';
import '../styles/main.css';

import location from './icons/location.svg';
import document from './icons/document.svg';

const Map = function() {

    return (
        <section className="container map-container" style={{backgroundImage: 'url("images/map.jpg")'}}>
            
            <div className="map-info">
                <h2 className="h2-map">Контакты</h2>

                <p className="categories-text">
                    Оптовый поставщик «Султан»
                </p>

                <div className="map-address">
                    <div className="map-item">
                        <p className="map-item-title">Адрес:</p>
                        <ContactsItem 
                            img={location} 
                            textFirst={'г. Кокчетав, ул. Ж. Ташенова 129Б'} 
                            textSecond={'(Рынок Восточный)'}
                            thin={true}
                        />
                        <hr />
                    </div>
                    
                    <div className="map-item">
                        <p className="map-item-title ">Отдел продаж:</p>
                        <div style={{display: 'flex'}}>
                            <div style={{marginLeft: '38px'}}></div>
                            <ContactsItem 
                                textFirst='+7 (777) 490-00-91' 
                                textSecond='opt.sultan@mail.ru'
                                thin={true}
                            />
                        </div>
                        
                        <hr />
                    </div>
                </div>

                <div className="map-address">
                    <div>
                        <p className="map-item-title">Данные налогоплательщика:</p>
                        <ContactsItem 
                            img={document} 
                            textFirst={'ИП Катран Д.С.'} 
                            textSecond={'ИИН: 860113450858'}
                            thin={true}
                        />
                    </div>
                </div>
            </div>
            

        </section> 
    )
}

export default Map;