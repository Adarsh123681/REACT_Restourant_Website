import React from 'react'
function Cards(props) {
       
    return (
        <div>
             <div className="card-container">
                 <div className="title">
                   {props.title}
                 </div>
                  
                <img  className='card-image' src="bg.jpg" alt=" " />
                <h2 style={{textAlign:"center", color : 'black' , margin : ".1rem",fontSize : "2.5rem"}}>Price - {props.price}</h2>
                <div className="card-btn">
                <button className='Menu-btn' onClick={()=>props.onSelect()}>Add-Items</button>
                </div>
             </div>
        </div>
    )
}
 
export default Cards
