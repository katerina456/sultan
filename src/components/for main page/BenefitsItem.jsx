import React from "react";

const BenefitsItem = function(props) {

    return (
        <div className="benefits-item">
            <div className="round">
                <p>+</p>
            </div>
            <div>
                <p className="text">{props.firstText}</p>
                <p className="text">{props.secondText}</p>
            </div>
        </div>
    )
}

export default BenefitsItem;