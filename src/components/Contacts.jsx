import React from "react";
import ContactsItem from "./ContactsItem";

import location from './icons/location.svg';
import mail from './icons/mail.svg';


const Contacts = function() {
    
    return (
        <div className='contacts'>
            
            <ContactsItem 
                img={location} 
                textFirst={'г. Кокчетав, ул. Ж. Ташенова 129Б'} 
                textSecond={'(Рынок Восточный)'}
            />

            <ContactsItem 
                img={mail} 
                textFirst={'opt.sultan@mail.ru'} 
                textSecond={'На связи в любое время'}
            />
            
        </div>
    )
}

export default Contacts;