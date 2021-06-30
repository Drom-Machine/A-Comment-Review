const express = require("express"); //brings in express
const logger = require("morgan"); //brings in morgan

const app = express(); //calls express to use for require 

const userRouter = require("./routes/user/userRouter"); //brings in the userRouter

app.use(logger("dev")); //this morgan to logger require with a development format. Four options: default, short, tiny, dev.

app.use(express.json());
//parsing form data/incoming data
app.use(express.urlencoded({ extended: false })); //this uses a built in method that basically parses the incoming require object into strings or arrays. Extended false uses the library querystring. True uses qs.

app.use("/api/user", userRouter); //this is saying that a url req with the api/user will use the userRouter file

module.exports = app; //export the invocation of express for use in other files.
