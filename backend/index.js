const express = require("express");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

const uri = `mongodb+srv://yochi22:Marcador22@cluster0.jzbl6wm.mongodb.net/todolist`

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })

    
    .then(()=> console.log('Connected succefully'))
    .catch(e => console.log(e))

app.use("/todo",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});