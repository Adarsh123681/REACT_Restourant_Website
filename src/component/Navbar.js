import React from 'react';

import { Link } from 'react-router-dom';
function Navbar() {
    // const clickMe = () =>{
         
    //     setText("Adarsh");
    // }
    // const [Text, setText] = useState ("AVR");
     
    return (
        <>
             <div className="nav"> 
                  <div className="logo">AVR</div>
                    <Link className="a" to="/">Home</Link>
                    <button className='btn'>SignIn</button>
                    <button className='btn1'>SignUp</button>

                </div>
        </>
    )
}

export default Navbar

// prop