require("dotenv").config();
const express = require('express');
const app = express();
const Users = require("./routes/Users")
const Tasks = require("./routes/Tasks");
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
    bodyParser.urlencoded({ 
        extended: false
    })
)

app.use("/users",Users);
app.use("/tasks", Tasks);

const server = app.listen(process.env.APP_PORT, () => {
    console.log("server up and running on PORT: " + process.env.APP_PORT);
})

module.exports = server
