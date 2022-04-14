import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
          <div className="nav">
            <div className="logo">
               <img src="./image/HUngary_(1).png" alt="" style={{width:"10rem" , height : "9.5rem" , }} />
            </div>
            <Link to="/" className='li'>Home</Link>
            <Link to="/about" className='li'>About</Link>
            <Link to="/order" className='li'>Order</Link>
            <Link to="/contact" className='li'>ContactUs</Link>
            <Link to="/menu" className='li'>Menu</Link>
            <button className='btn'><Link className="btn_link" to="/signIn">SignIn</Link></button>
            <button className='btn1'><Link className="btn_link" to="/signUp">SignUp</Link></button>
           </div>
        </div>
    )
}

export default Navbar
