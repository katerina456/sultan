import React from "react";
import { Link } from "react-router-dom";

import Crumbs from "./Crumbs";
import ButtonBack from "./UI/button/ButtonBack";

const Wrapper = function({children, flag}) {

    return (
        <main className="container wrapper">
            {/* <Crumbs /> */}

            {!flag && <div style={{textAlign: '-webkit-right', marginBottom: '50px'}}>
                            <Link to="/sultan">
                                <ButtonBack text='В каталог' />
                            </Link>
                        </div>
            }
            
            {children}
        </main> 
    )
}

export default Wrapper;