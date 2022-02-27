import React from 'react';
import './App.css';
import Home from './firstcardHome';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './About';
import Header from './Header';
import Footer from './Footer';
//import Routes from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

const App = () => {
  return (
    <div>


      <BrowserRouter>
          <Header/>
        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element = {<Signin/>}/>
        <Route path="/signup" element ={<Signup/>}/>

        </Routes>
            <Footer/>
      </BrowserRouter>
      
      </div>
  )
}

export default App;