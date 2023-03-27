/*********************************************************************************
* WEB322 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: ___Akshat Gupta_______ Student ID: ___154247217___________ Date: _17/02/23________
*
* Online (Cyclic) URL: ________https://colorful-hem-newt.cyclic.app ______________
*
* GitHub Repository URL:  https://github.com/Akshat4in/web322-app
********************************************************************************/
const express = require('express');
const path = require("path");
const app = express();


const PORT = process.env.PORT || 8080;




app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect("/index");
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});



app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
 });

// How to add css and script in page through express 