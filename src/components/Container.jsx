import React from "react";

import bottle from './icons/bottle.svg';
import box from './icons/box-open.svg';

const Container = function(props) {
    let src = props.type === 'объем' ? bottle : box;

    return (
        <div className="type-amount">
            <img src={src} alt="" />
            <p className="basket-amoumt">
                {props.size} {props.type === 'объем' ? 'мл' : 'г'}
            </p>
        </div>             
    )
}

export default Container;