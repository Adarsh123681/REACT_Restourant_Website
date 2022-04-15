import React from 'react'
import "../App.css";
function Contact() {

    return (
        <>

            <div className='contactUs_container'>
                <form action="" className="contact_form">
                    <div className="head">
                        <h2> Contact Us<br /><span style={{fontSize:"2.rem"}}>Lorem ipsum dolor sit amet consectetur.</span></h2>
                    </div>
                    <div className="contact_input">
                         <input type="text" className='Uname' placeholder='Enter Your Name'/>
                         <input type="email" className='email'  placeholder='Enter Your Email ,  eg : abc@gmail.com' />
                         <textarea name="msg" id="" cols="25" rows="8" className='Msg' placeholder='Enter Your Message Here..'></textarea>
                    </div>
                    <br />
                    <button className="contact-btn">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
};
export default Contact