import React from 'react'

function Table(props) {

  return (
    <>
      <div className="tableDiv">
        <div className="tableBox pop">
          <label htmlFor="Date">Enter Date :</label>
          <input type="date" name="" id="" placeholder='Enter date ' style={{ margin: ".9rem", border: ".1em solid black ", borderRadius: ".5rem", padding: ".9rem" }} />
          <br />
          <label htmlFor="Date">Enter Time :</label>
          <input type="time" name="" id="" placeholder='Enter Time' style={{ margin: ".9rem", border: ".1em solid black ", borderRadius: ".5rem", padding: ".9rem" }} />
          <br />
          <button className="btn2" style={{ padding: "1rem", fontSize: "1.5rem", backgroundColor: "blue", color: "white", border: ".1rem solid black", borderRadius: "1rem", marginLeft: "3rem" }}>Book My Table</button>

          <button className="btn2" style={{ padding: "1rem", margin: "1rem", fontSize: "1.5rem", backgroundColor: "red", color: "white", border: ".1rem solid black", borderRadius: "1rem", marginLeft: "5rem" }}
            onClick={() => {
              props.close(false)
            }}
          >closeModal</button>

        </div>
      </div>

    </>
  )
}

export default Table