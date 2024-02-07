const express = require('express');
const mongoose = require('mongoose');
const app=new express();
mongoose.connect("mongodb://localhost:27017/mytempdb");

app.listen(3000, ()=>{
    console.log("server is up and alive");
});

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));