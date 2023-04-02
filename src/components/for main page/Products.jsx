import React from "react";
import ProductsItem from "../ProductsItem";

import '../styles/App.css';
import '../styles/main.css';

import bottle from './icons/bottle.svg';
import smallBasket from './icons/small_basket.svg';

const Products = function() {

  const setProducts = () => {
    let content = [];
    for (let i=0; i < 10; i++) {
      content.push(<ProductsItem key={i} bottle={bottle} smallBasket={smallBasket} />);
    }
    return content;
  };

    return (
        <section className="container section-container">
            
            <h2 className="h2"><span className="orange-text">Акционные</span> товары</h2>

            <div className="products">

                {setProducts()}
                
            </div>

        </section> 
    )
}

export default Products;