const express = require("express")
const router = express.Router();

const todo = require("../models/todo");

router.get("/", async (req, res) =>{
    try {
        const arrayBD = await todo.find()
        console.log(arrayBD)
        res.json(arrayBD)
    } catch (error) {
        console.log(result);   
    }
});

module.exports = router;