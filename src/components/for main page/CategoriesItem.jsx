import React from "react";

//'url("images/image4.jpg")'
const CategoriesItem = function(props) {
    let url = `url('${props.foto}')`

    let styl = {
        backgroundImage: url, 
    }
    
    return (      
        <div className="categories-item">
            <div className="item-box" style={styl}>
            </div>
                    
            <p className="categories-text-t">{props.text}</p>
        </div>
    )
}

export default CategoriesItem;