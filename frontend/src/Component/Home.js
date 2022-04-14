import React, { useState } from 'react'
import Table from './Table';
import data from './Data';
import Feedback from './Feedback'
const myStyle = {
    background: `rgba(0,0,0,0.5)url("/image/bg-image.jpg")`,

};
function Home() {
    const [show, setShow] = useState(false);

    const [review, setReview] = useState(false);

    // let [dataVal, setDataVal] = useState(0);
    // const {title } = data[dataVal];
    //  const checkNumber = (number) =>{
    //      if(number > data.length - 1){
    //           return 0 
    //      }
    //    else if(number < 0){
    //          return data.length - 1;
    //     }
    //  }

    // const next = () => {
    //     setDataVal((dataVal) =>{
    //         let newVal = dataVal+1;
    //         return checkNumber(newVal);
    //     })
    // }

    // const prev = () => {
    //     setDataVal((dataVal) =>{
    //         let newVal = dataVal-1;
    //         return checkNumber(newVal);
    //     })
    // }

    return (
        <>
            <div className="container" style={myStyle}>
                <div className="content">
                    <h2 style={{ marginLeft: "1rem" , fontFamily:"monospace"}}>Welcome To </h2> <br />
                    <div> <span> HUNGARY</span></div>


                    <button className="book" onClick={() => {
                        setShow(true);
                    }} style={{ width: "15rem", height: "5rem", border: ".1rem solid black", background: "white", margin: "auto", marginTop: "1rem", padding: ".4rem" }}>BOOK YOUR TABLE</button>
                </div>

            </div>

            <div className="about_name">
                About Us
            </div>
            <div className="about_container">
                <div className="about_image">
                    <img src='./image/bg.jpg' alt="" style={{ width: "15rem", height: "15rem", borderRadius: "1rem" }} />
                </div>
                <div className="about_content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ducimus, dignissimos veritatis assumenda, magnam quas dolore distinctio officia
                    labore deleniti itaque velit facilis, odit mollitia debitis unde magni.
                    Unde, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ea modi aliquam ipsam, asperiores dicta sunt pariatur.
                    Eaque beatae odit omnis vitae aperiam, rerum possimus iure quos maxime molestias eius!
                    Unde vitae sit assumenda quos quam mollitia voluptates delectus adipisci beatae maxime ab, totam,
                    et labore dolores eveniet eius laudantium voluptatibus.

                </div>
            </div>


            {/* table booking */}

            {show && <Table close={setShow} />}

            {/* review */}

            <div className="name" style={{ textAlign: "center", margin: "5rem", fontSize: "3rem" }}>
                !!!  YOUR VIEWS !!!
            </div>
            <div style={{ width: "50rem", height: "40rem", border: ".1rem black solid", margin: "auto", border: ".01rem solid black", borderRadius: "2rem" }}>
                <h2 style={{ textAlign: "center", color: 'black', fontSize: "2.7rem", marginTop: "1rem" }}>Your feedback helps us to Improve Us</h2>

                <div className='review_img'>
                    <img src="" alt="" style={{
                        width: "20rem", height: "20rem", padding: ".2rem",
                        margin: "3rem .2rem .5rem 15rem"
                    }} />
                </div>

                <h2 style={{ textAlign: "center", color: 'black', fontSize: "2.5rem" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, temporibus. </h2>
                <div className="card-btn">
                    <button className="review_btn" style={{ margin: "1rem 2rem 0 7rem", backgroundColor: "blue", color: "white" }} onClick={() => {
                        setReview(true)
                    }}>Feedback</button>
                    <button className="btn2" style={{ padding: ".8rem", fontSize: "1.7rem", marginTop: "1rem" }}>Cancel</button>

                </div>

            </div>
            {review && <Feedback close={setReview} />}

        </>
    )
};
export default Home