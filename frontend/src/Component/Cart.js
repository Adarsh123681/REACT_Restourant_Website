import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <div className="cart_container" style={{ width: "98vw", height: "10rem", display:"flex", border: ".1rem solid black", borderRadius: ".3rem" , margin:"25rem 0 3rem 0rem"}}>
      <div className="cart_img" style={{width:"30%", height:"10rem"}}>
      <img src="image/bg.jpg" alt="" style={{ width: "7rem", height: "7rem", padding:"2rem" , marginLeft:"2rem" }} />
      </div>
      </div>
      <div className="cart_btn">
      <button style={{ width: "10rem", height: "3rem", background: "red", color: "white", padding: ".1rem", border: ".2rem solid black"}}><Link to="/order" style={{ color: "white", textDecoration: "none" }}>ORDER NOW</Link></button>
      </div>
    </>
  )
}

export default Cart