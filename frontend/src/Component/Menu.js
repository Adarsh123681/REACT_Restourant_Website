import React, { useState } from 'react';
import Data from "./Data"
import Cards from "./Cards"
import Cart from './Cart';
const myStyle={
  width  :"100vw",
  height : "45rem",
  background : `rgba(0,0,0,0.3) url("./image/break.jpg")`,
  backgroundBlendMode : "darken",
  backgroundRepeat : "no-repeat",
  backgroundSize : "100vw 45rem"
}
function Menu() {

  const [items, setItems] = useState(Data);
 
  const[showItems , setShowItems] = useState(false)
  const ShowOnClick = (catItems) => {
    const updatedData = Data.filter((curEle) => {
      return curEle.category === catItems;
    });
    setItems(updatedData);
  }

  const add = () =>{
         setShowItems(true)
  }


  return (
    <>
      <div style={myStyle}>  
       <h2 style={{width : "30rem", marginBottom : "24rem" ,margin : "auto", background : "white", padding : "2rem" , fontSize : "5rem" ,textAlign : "center"  }}>Main Menu</h2>
       <div className="button" style={{ width: "100vw", height: "8rem",display: "flex", margin: "auto", justifyContent: "center", color: "white" , margin:"22rem 0 0 5rem" }}>
        <div style={{ width: "20rem", height: "5rem", padding: "1rem" }}>
          <button onClick={() => ShowOnClick('breakfast')} style={{background:"red", marginTop: "2rem", fontSize: "2.4rem", width: "12rem", border: ".1rem solid black", padding: ".9rem", borderRadius: "1rem", color: "white" }}>breakfast</button>
        </div>
        <div style={{ width: "20rem", height: "5rem", padding: "1rem" }}>
          <button onClick={() => ShowOnClick('lunch')} style={{background:"red", marginTop: "2rem", fontSize: "2.4rem", width: "10rem", border: ".1rem solid black", padding: ".9rem", borderRadius: "1rem", color: "white" }}>lunch</button>
        </div>

        <div style={{ width: "20rem", height: "5rem", padding: "1rem" }}>
          <button onClick={() => setItems(Data)} style={{background:"red", marginTop: "2rem", fontSize: "2.4rem", width: "10rem", border: ".1rem solid black", padding: ".9rem", borderRadius: "1rem", color: "white" }}>All</button>
        </div>
        </div>
      </div>
      <div className="menu-container" style={{height:"100vh"}}>
      {items.map((val , index) => {
        return (
          <>
            <Cards image={val.image} key={index.id} title={val.title} price={val.price} onSelect={add}  />
          </>
        )
      })}
      </div>
      {showItems && <Cart/>}
    </>

  )
}

export default Menu