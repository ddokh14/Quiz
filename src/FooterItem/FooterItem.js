import React from 'react'
import './FooterItem.css'


const FooterItem = ({children}) => {
    return(
        <div className="footer-item">
            {children}
        </div>
    );
}

export default FooterItem;