import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="gray-line"></div>
            <div className="footer-main">
                <div className="shop-info">
                    <p className='shop-name'>MyFurniture .</p>
                    <p className='add'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
                </div>
                <div className="footer-other">
                    <div className="footer-links">
                        <div className='fotter-other-title-links'>Links</div>
                        <div className='footer-links-content'>Home</div>
                        <div className='footer-links-content'>Shop</div>
                        <div className='footer-links-content'>About</div>
                        <div className='footer-links-content'>Contact</div>
                    </div>
                    <div className="footer-help">
                        <div className='fotter-other-title-help'>Help</div>
                        <div className='footer-help-content'>Payment Option</div>
                        <div className='footer-help-content'>Return</div>
                        <div className='footer-help-content'>Privacy Policies</div>
                    </div>
                    <div className="footer-Newsletter">
                        <div className='fotter-other-title-newsletter'>Newsletter</div>
                        <div className="footer-Newsletter-content">
                            <input className='footer-newsletter-email' type="email" placeholder='Enter Your Email' />
                            <div className='footer-newsletter-subscribe'>SUBSCRIBE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="gray-line2"></div>
                <div className="footer-copyright-content">
                    2023 <p>MyFurniture</p> . All rights reverved
                </div>
            </div>
        </div>
    )
}

export default Footer