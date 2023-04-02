import React from "react";
import Crumbs from "./Crumbs";

const Wrapper = function({children}) {

    return (
        <main className="container wrapper">
            <Crumbs />
            {children}
        </main> 
    )
}

export default Wrapper;