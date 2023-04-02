import React from "react";

import Chemistry from "./Chemistry";
import Products from "./Products";
import Categories from "./Categories";
import Stock from "./Stock";
import BestProducts from "./BestProducts";
import Map from "./Map";

const Main = function() {
    return (
        <main>
            <Chemistry />

            <Products />

            <Categories />

            <Stock />

            <BestProducts />

            <Map />
        </main>
    )
}

export default Main;