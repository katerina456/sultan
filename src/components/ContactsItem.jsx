import React from "react";

const ContactsItem = function(props) {
    
    return (
        <div className='contacts-item'>

            {props.img && <div className="contacts-item-img">
                <img src={props.img} alt="" />
            </div>}
            <div>
                <p className="contacts-item-text" style={{color: props.textColor}}>
                    <span className={!props.thin && 'contacts-item-bold-text'}
                        style={{color: props.titleColor}}>
                        {props.textFirst}
                    </span>
                    <br/>
                    {props.textSecond}
                </p>
            </div>
            
        </div>
    )
}

export default ContactsItem;