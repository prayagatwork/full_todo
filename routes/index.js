const express = require('express');
const router =express.Router();
const Todo=require("../models/todo");

//routes
router.get("/", async(req, res)=>{
    const allTodo=await Todo.find();
    res.render("home", {todo:allTodo});
});

module.exports = router;