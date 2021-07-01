//---------------------------------------------------------------- Imports Express and Morgan
const express = require("express");
const logger = require("morgan"); 

//---------------------------------------------------------------- Starts express app
const app = express();


//---------------------------------------------------------------- Path To User Folder
const userRouter = require("./routes/user/userRouter"); 

//---------------------------------------------------------------- Logs development console tools 
app.use(logger("dev")); 

//---------------------------------------------------------------- json responses
app.use(express.json());

//----------------------------------------------------------------Function that parses incoming requests and form data
app.use(express.urlencoded({ extended: false })); 

//---------------------------------------------------------------- Routes the url with the user router folder
app.use("/api/user", userRouter); 

//---------------------------------------------------------------- Exports express for use in other files
module.exports = app;
