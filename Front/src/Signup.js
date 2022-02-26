import React from 'react';
import {useNavigate} from "react-router-dom";

const Signup = () => {


    const Navigate = useNavigate();

    function signin(){
        Navigate("/signin")
    }

    // function signup(){
    //     Navigate("/signup")
    // }
  return (
    <div id='signup'>

    <h2 style={{"padding-left":"400px","padding-top":"100px"}}>Sign up</h2>
        <input type="text" placeholder="Enter your First Name" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 
        <input type="text" placeholder="Enter your Second Name" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 
        <input type="email" placeholder="Enter your Email" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 
        <input type="date" placeholder="Enter your Date of Birth" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 
        <input type="password" placeholder="Enter your Password" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 
        <input type="password" placeholder="Re Enter your Password" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 


        <button style={{"width":"100px","height":"30px","background-color":"#239DEE","border-radius":"20px", "margin-left":"400px"}}>Sign up</button> &nbsp;&nbsp;&nbsp;&nbsp;

        <p>Already have a account?</p>

        <button style={{"width":"100px","height":"30px","background-color":"#239DEE","border-radius":"20px"}} onClick={signin}>Sign in</button> &nbsp;&nbsp;&nbsp;&nbsp;

    </div>
  )
}

export default Signup