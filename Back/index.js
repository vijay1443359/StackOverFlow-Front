import express from "express";
import cors from 'cors';
//import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';


//const express = require('express')
const app = express();

const port = 3030;
const secret = 'secret123';
const isLoginOk="";


// app.use(express.json(true));
// app.use(express.urlencoded());
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cookieParser);
app.use(cors(
    'http://localhost:3000',true
));

app.get('/',((req,res) => {

    res.send('test');


}));

app.get('/',((req,res) => {
    const token = req.cookiestoken;
    jwt.verify(token, secret, (err,data) => {
        if(err) {
            res.status(403).send();
        }else{
            res.json(data).send();
        }
    })
}));

app.post('/signin',((req,res) => {
    const {email,password} = req.body;
    
     isLoginOk = email == 'test@example.com' && password == 'test';

    isLoginOk && jwt.sign(email,secret,(err, token) => {
        if (err){
            
            res.status(403).send();
        }else{
            res.cookie('token',token).send();
        }
    })
    if (!isLoginOk){
        res.send(403).send();
    }
}));




app.listen(port, () => {
    console.log('hello');
});