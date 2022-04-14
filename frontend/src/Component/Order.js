import React, { useState } from 'react'
 
function Order() {
    const handle = () => {

    }
    return (
        <div>
            <div style={{ textAlign: "center", marginBottom: "2rem", fontSize: "3rem", marginTop: "2rem" }}>
                !!! ORDER NOW !!!
            </div>

            <form action="" method='post' style={{ maxWidth: "100%", height: "60rem", margin: "1rem 0 0 0", display: "flex", flexDirection: "row", backgroundColor: "whitesmoke" }}>

                <img src="./image/orderFood.png" alt="" srcset="" style={{ width: "40rem", height: "40rem", margin: "10rem" }} />

                <div className="signUp_input" style={{ width: "50rem", margin: "10rem 1rem 1rem 2rem" }}>
                    <input onChange={handle} name="name" type="text" required="require" className='Uname' placeholder='Enter Your Name' />

                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter your address...' style={{ border: ".2rem solid black ", backgroundColor: "whitesmoke", marginTop: "1rem", fontSize: "2rem" }}></textarea>
               
                    <input onChange={handle} name="number" type="number" className='number' placeholder='Enter the quantity' />

                    <button style={{ width: "15rem", height: "5rem", background: "navy", margin: "auto", border: ".1rem solid black", borderRadius: "2rem", margin: '2rem 2rem 2rem 10rem', color: "white" }}>Order</button>
                    {/* second */}
                </div>
                <div className="signUp_input" style={{ margin: "10rem 1rem 1rem 2rem" }}>

                    <input onChange={handle} name="email" type="email" className='email' placeholder='Enter your email' />
                    <input onChange={handle} name="password" type="Password" className='password' placeholder='Enter your password' />
                    <input onChange={handle} name="cpassword" type="Password" className='cPassword' placeholder='Confirm your password' />
                    <button style={{ width: "15rem", height: "5rem", background: "grey", margin: "auto", border: ".1rem solid black", borderRadius: "2rem", margin: '18rem 2rem 2rem 3rem', backgroundColor: "red" }}>Cancel</button>

                </div>
            </form>

        </div>
    )
}

export default Order
