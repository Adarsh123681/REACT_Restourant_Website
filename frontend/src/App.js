import React,{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import  "./App.css";
import Home from "./Component/Home"
import Navbar from './Component/Navbar';
import About from "./Component/About"
import Order from "./Component/Order"
import Contact from "./Component/Contact"
import Social from "./Component/Social"
import Footer from "./Component/Footer"
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Menu from "./Component/Menu"
function App() {
  return ( 
    <>
      <Router>
        <Navbar/>
        <Social/>
        <Switch>
          <Route exact path="/">
            <Home/>
            </Route>
          <Route exact path="/about">
            <About/>
            </Route>
          <Route exact path="/order" >
            <Order/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
            </Route>
           <Route exact path="/signIn">
             <SignIn/>
           </Route>
           <Route exact path="/signUp">
             <SignUp/>
           </Route>
           <Route exact path="/menu">
             <Menu/>
           </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
