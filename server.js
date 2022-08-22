const express = require("express");
//const mongoose = require("mongoose");

const app = express();


app.get("/", async(req, res) =>{
 res.send("<h2>Hello, welcome to JWT user!</h2>");
})


app.listen(5003)
console.log("server is runing 5003");