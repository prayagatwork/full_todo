const express = require('express');
const router =express.Router();
const Todo=require("../models/todo");

// routes
router.post("/add/todo", (req,res)=>{
    const todo=req.body.todo;
    const newtodo=new Todo({todo:todo});
    // save it
    newtodo.save()
    .then(()=>{
        console.log("added");
        res.redirect("/");
    });
});


router.get("/delete/todo/:_id", (req,res)=>{
    const{_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("deleted");
        res.redirect("/");
    });
});

module.exports=router;