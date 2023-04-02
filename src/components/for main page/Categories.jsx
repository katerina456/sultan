import React from "react";
import CategoriesItem from "./CategoriesItem";

import '../styles/App.css';
import '../styles/main.css';

const Categories = function() {

    const categoriesList = [
        {
            text: 'Бытовая химия',
            foto: './images/category1.jpg'
        },
        {
            text: 'Косметика и гигиена',
            foto: './images/category2.jpg'
        },
        {
            text: 'Товары для дома',
            foto: './images/category3.jpg'
        },
        {
            text: 'Товары для детей и мам',
            foto: './images/category4.jpg'
        },
        {
            text: 'Посуда',
            foto: './images/category5.jpg'
        }
    ]

    return (
        <section className="container section-container">
            
            <h2 className="h2"><span className="orange-text">категории</span> товаров</h2>

            <p className="categories-text">
                10 000+ ходовых позиций по спецмальным ценам
            </p>

            <div className="categories">
                {categoriesList.map(item => 
                    <CategoriesItem text={item.text} foto={item.foto} key={item.text} />
                )}
            </div>

        </section> 
    )
}

export default Categories;