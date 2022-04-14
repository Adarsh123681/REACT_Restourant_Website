import React from 'react'
import AboutItem from './AboutItem'
function About() {
    return (
      <>
                <div className="about_name">
                   About Us
                 
                </div>
                <div className="about_container">
                    <div className="about_image">
                        <img src="./image/bg.jpg" alt="" srcset="" style={{width : "15rem" , height : "15rem", borderRadius : "1rem"}}/>
                    </div>
                    <div className="about_content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus, dignissimos veritatis assumenda, magnam quas dolore distinctio officia
                        labore deleniti itaque velit facilis, odit mollitia debitis unde magni.
                        Unde, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        
                    </div>
                      <AboutItem  title="OUR MANAGING TEAM"/>
                     <div className="team_img" style={{width:"100vw" , display:"flex" , flexDirection:"row-reverse",border:"none"}}>
                         
                         <img src="./image/web.jpg" alt="" srcset="" style={{width: "40rem" , height : "30rem" , margin : "5rem 20rem 3rem 0rem" , borderRadius:"2rem"}} />
                         <div className="team_content" style={{width:"55rem" , height : "30rem", fontSize : "2.3rem" , margin : "9rem 10rem 3rem 0"}}>
                         <h1>OUR COOKS</h1>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ducimus, dignissimos veritatis assumenda, magnam quas dolore distinctio officia
                        labore deleniti itaque velit facilis, odit mollitia debitis unde magni.
                        Unde, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        
                         </div>
                     </div>
                     <AboutItem  title="OUR STAFF MEMBERS"/>
                </div>
        </>
    )
}

export default About
 