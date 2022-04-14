import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
function SignUp() {
   const history = useHistory();
    const [Val, setVal] = useState({
        name: " ",
        email: " ",
        address: " ",
        password: " ",
        cpassword: " "
    })

    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setVal({ ...Val, [name]: value });
    }
    const btnClick = async (e) => {
        e.preventDefault();
        // const newRecords = { ...Val, id: new Date().getTime().toString() }
        // setdata(newRecords);
        // setVal({ ...Val });
        // console.log(newRecords);
        // alert("SUCCESFULL");

        const { name, email, address, password, cpassword } = Val;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:  JSON.stringify({
                name,email,address,password,cpassword
            })
        })

            const data = await res.json();

            if(data.status === 400 || !data) {
                window.alert("Invalid credentials");
                console.log("Invalid Registration");
            }
            // } else {
            //     window.alert("Registration successfull");
            //     console.log("successfull registration");

         history.push("/SignIn");

        
    }
    return (
        <>
            <div className="signUp_container">
                        <form action="" method='post' className='signUp_form'>
                        <div className="signUp_input">
                            <input onChange={handle} name="name" type="text" required="require" className='Uname' placeholder='Enter Your Name' />
                            <input onChange={handle} name="email" type="Email" required="require" className='email' placeholder='Enter Your Email' />
                            <textarea onChange={handle} name="address" id="" cols="30" rows="10" className='Msg' placeholder='Enter you  address'></textarea>   
                            <input onChange={handle} name="password" type="Password" className='password' placeholder='Enter your password' />
                            <input onChange={handle} name="cpassword" type="Password" className='cPassword' placeholder='Confirm your password' />
                            
                            <input type="button" value="register" onClick={btnClick} className='signUp_btn'/>
                       </div>
                        </form> 
                </div>
        </>

    );
}

export default SignUp
