//const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const express = require('express');
const app = express();
const port = 3000;
require("./mongo/db")
const user = require("./mongo/schema");
app.use(require("./route/router"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// dotenv.config({path : "./config.env"});

app.get('/', (req, res) => {
  res.send('Hello World!')
})



// register

app.post("/register", (req, res) => {

  // object destructring 
  const { name, email, address, password, cpassword } = req.body;

  // condition to check everyfilled id filled or not
  if (!name || !email || !password || !address || !cpassword) {
    return res.status(400).json({ message: "please fill details properly" })
  }

  // user exist or not by using mongo method
  user.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(400).json({ message: "Email is already present " })
    }
    //passsword is same or not
    else if (password != cpassword) {
      return res.status(400).json({ message: 'password is not matching' })
    }

    // create new user 
    const data = new user({ name, email, password, address, cpassword })
    //yaa pe password hashing this is in the schema.js

    //save the data of the user
    data.save().then(() => {
      res.status(200).json({ message: "User  registered succesfully. . ." })
    }).catch((error) => {
      res.status(400).json({ message: error })
    })
  }).catch((error) => {
    console.log(error)
  })
})


// sign in

app.post("/signIn", async (req, res) => {
  let token ;
  const { email, password, cpassword } = req.body;

  if (!email || !password || !cpassword) {
    return res.status(422).json({ message: "please fill details properly" })
  }

  //checking email exist or not
  const userLogin = await user.findOne({ email: email })

  if (userLogin) {

       // JWT TOKENS
     token = await userLogin.generateAuthToken();
     console.log(token);


    // cookies
     
     res.cookie("jwtoken" , token ,{
       expires : new Date(Date.now() + 2589000000),
       httpOnly : true
     })
    // comparing the password using bcryptjs
    const match = await bcrypt.compare(password, userLogin.password)
    if (!match) {
      res.status(400).json({ error: "invalid credentials password" })
    }
    res.json({ message: "user signIn successfully" })
  } else {
    res.json({ message: "invalid credentials ... " })
  }
})

app.get("/about", (req, res) => {
  res.send("THIS IS  ABOUT PAGE")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})