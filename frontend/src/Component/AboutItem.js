import React from 'react'

function AboutItem(props) {
  return (
    <>
    <div className="team_img" style={{width:"100vw" , display:"flex"}}> 
                         <img src="./image/web.jpg" alt="" srcset="" style={{width: "40rem" , height : "30rem" , margin : "5rem 0rem 3rem 20rem" , borderRadius:"2rem" }} />
                         <div className="team_content" style={{width:"55rem" , height : "30rem", margin:"10rem 0 3rem 10rem" , fontSize : "2.3rem" }}>
                         <h1>{props.title}</h1>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus, dignissimos veritatis assumenda, magnam quas dolore distinctio officia
                        labore deleniti itaque velit facilis, odit mollitia debitis unde magni.
                        Unde, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                         </div>
                     </div> 
    </>
  )
}

export default AboutItem