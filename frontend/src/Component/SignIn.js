
import React,{useState}  from 'react'
import {useHistory} from "react-router-dom"
function SignIn() {
     const History = useHistory();
    const[Val,setVal] = useState({
        email : "",
        password : "",
        cpassword: "",
    })
    
    const handle   = (e)=>{
        let name = e.target.name;
        let  value = e.target.value;
        setVal( {...Val, [name]:value} );
    }
    const btnClick = async (e) =>{
        e.preventDefault() 
              const {email , password , cpassword} = Val;
             const res = await fetch("/signIn", {
                  method : "POST",
                  headers : {
                      "Content-type" : "application/json"
                  },
                  body:  JSON.stringify({
                   email,password,cpassword
                })
             })
          
             const data = await res.json();

             if(data.status === 400 || !data){  
               window.alert("Invalid credentials"); 
               console.log("Invalid credentials")
         } else {
             window.alert("sign in successfull");
              History.push("/");
         }
              
          
    }
    return (
      
      <>
       <div className="signIn_container" >
          
           <div className="signin_head">
               Welcome Again To AVR
           </div>
               <form action="" method="post" className="signIn_form"> 
               <div className="signIn_input">
               <input onChange={handle}  value={Val.email} name ="email" type="Email" required="require" className='email' placeholder='Enter Your Email'/>
               <input onChange={handle} value={Val.password} name ="password" type="password" className='password' placeholder='Enter Your Password' />  
               <input onChange={handle} value={Val.cpassword} name ="cpassword" type="password" className='cPassword' placeholder='Confirm Your Password' />  
              
     
             </div>
                <button  onClick={btnClick} className='signin_btn'>Submit</button>
               </form>
       </div>
      </>
    )
}

export default SignIn
