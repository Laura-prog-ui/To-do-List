const express = require("express");
const { default: mongoose } = require("mongoose");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

mongoose.connect("mongodb://localhost:27017")
.then(() => console.log("Connected successfully"))
.catch((err) => console.error(err));


app.use("./todos", todoRoutes);
app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});