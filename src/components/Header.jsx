import React from "react";

import Contacts from "./Contacts";
import Navigation from "./Navigation";
import HeaderCatalog from "./HeaderCatalog";

import '../styles/App.css';
import '../styles/header.css';


const Header = function(props) {
    
    return (
        <header >
            <div className="container header">
                <Contacts />
            
                <Navigation />
            </div>
            
            <hr className="line"/>

            <HeaderCatalog /* handleClick={props.handleClick} */ number={props.number} 
                summ={props.summ} 
            />

            <hr className="line"/>
        </header>
    )
}

export default Header;