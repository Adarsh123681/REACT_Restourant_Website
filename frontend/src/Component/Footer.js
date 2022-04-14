import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="footer_head">
                    AVR
                </div>

                <div className="main-foot-container">
                    <div className="footer_nav">
                        <Link to="/" className='footer-li'>Home</Link>
                        <Link to="/about" className='footer-li'>About</Link>
                        <Link to="/order" className='footer-li'>Order</Link>
                    </div>
                    <div className="contact">
                        <h2 style={{ marginLeft: "1rem" }}>Contact Us</h2>
                        <li className='footer_list'> Mobile Number : 02221345  </li>
                        <li className='footer_list' style={{ width: "100%" }} >Mail Us On : abc123@gmail.com </li>
                        <li className='footer_list' style={{ fontSize: "2.5rem" }}>Social: <i className="fab fa-instagram"> </i>  <i className="fab fa-facebook"></i></li>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
