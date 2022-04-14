import React from 'react'

function Feedback(props) {
  return (

    <>
      <div className="feed_container">
        <div className="modal_div">
          <div className="modal-box" style={{ width: "40rem", height: "50rem" }}>
            <h1>Give Your FeedBack</h1>
            <input type="text" style={{ margin: "auto", padding: "1rem", fontSize: "2rem" }} placeholder="Enter Your Name" />
            <textarea type="email" name="" id="" style={{ margin: "auto", padding: "1rem", fontSize: "2rem", height: "17rem", width: "25rem" }} placeholder="Enter Your FeedBack"></textarea>
            <input type="file" placeholder='Upload your image' style={{ margin: "2rem 2rem 2rem 12rem", fontSize: "2rem" }} />
            <button className="btn2" style={{ padding: "1rem", fontSize: "1.5rem", backgroundColor: "blue", color: "white", border: ".1rem solid black", borderRadius: "1rem" }}>Add Me</button>

            <button className="btn2" style={{ padding: "1rem", margin: "1rem", fontSize: "1.5rem", backgroundColor: "red", color: "white", border: ".1rem solid black", borderRadius: "1rem" }}
              onClick={() => {
                props.close(false)
              }}>closeModal</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback
