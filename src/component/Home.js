import React,{useState} from 'react'
function Home() {
    // const styleCss = {

    // }
    // let d = new Date();
    // let t = d.getHours();
    // let greeting = '';
    // if(t<=12 && t>=1){
    //     greeting = 'Good Morning';
    //     styleCss.color = 'red';
    // }
    // else if(t>12 && t<16){
    //     greeting = 'Good Afternoon';
    //     styleCss.color = 'Green';
    // }
    // else if(t>=16 && t<=20){
    //     greeting = 'Good Evening';
    //     styleCss.color = 'Orange';
    // }
    // else {
    //     greeting = 'Good Night';
    //     styleCss.color = 'black';
    // }
        // setInterval(display, 1000);
        // function display() {
        //     console.log(t);
        // }
     //let user = '';
     let a,b;
     function display(a,b){
        //  if (){
        //     //  console.log(a+b);
        //  console.log(a+b);
        //  }
        // console.log(sum);
        console.log("Button is clicked");
     }
     const [userInput, setuserInput] = useState({
     });
    return (
        <>
            <div className="container">
                <div className="content">
                    <span>Simple Calculator</span>

                    <input name="username" name="num1" type="number" />

                        <input name="username"  type="" />
                
                        <input name='email' name='num2' type="number" />
                      
                        <h2>Result : {a+b}</h2>

                        <button onClick={display} className='btn2'>Perform</button>
                     
                    {/* <h1>Form</h1>
                    <h2>{text.userName}</h2>
                    <form action="" className='myForm'>
                        <label htmlFor="username">Name:</label>
                        <input name="username" onChange={inputEvent} value={text.username} type="text" />

                        <label htmlFor="email">Email:</label>
                        <input name='email' onChange={inputEvent} value={text.email} type="email" />

                        <label htmlFor="Password">Password:</label>
                        <input name='pass' type="password" />


                        <label htmlFor="Code">Code:</label>
                        <input name="code" type="text" />

                        <button onClick={showOutput} className='btn2'>Change text</button> */}

                    {/* </form> */}


                </div>

            </div>

        </>

    )
}

export default Home;
