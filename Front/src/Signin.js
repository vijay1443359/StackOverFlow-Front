import React from 'react';
//import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Signin = () => {

    const Navigate = useNavigate();

    function signup(){
        Navigate("/signup")
    }

    
  return (
    <div id='signin'>
        <h2 style={{"padding-left":"400px","padding-top":"100px"}}>Sign in</h2>
        <input type="text" placeholder="Enter your email" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 
        <input type="text" placeholder="Enter your Password" style={{"width":"1000px","height":"30px"}}></input><br></br> <br></br> 

        <div style={{"padding-left":"350px","padding-top":"40px","padding-bottom":"100px"}}>
        <button style={{"width":"100px","height":"30px","background-color":"#239DEE","border-radius":"20px"}}>Sign in</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{"width":"100px","height":"30px","background-color":"#239DEE","border-radius":"20px"}} onClick ={signup}>Sign up</button>
        </div>



    </div>
  )
}

export default Signin