import React from "react";

import crumb from './icons/crumbs-img.svg';

const Crumbs = function(props) {
    let array = ['Главная', 
                'Каталог', 
                'BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г'
    ]

    const setCrumbs = () => {
        let content = [];
        for (let i=0; i < array.length; i++) {
            content.push(<p key={array[i]}>{array[i]}</p>);
            if (i !== array.length - 1) {
                content.push(<img src={crumb} key={i} alt="" />);
            }
        }
        return content;
    };

    return (
        <div className="crumbs">

            {setCrumbs()}

        </div>
    )
}

export default Crumbs;