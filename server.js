//---------------------------------------------------------------- Loads environment variables from a .env file
require("dotenv").config(); 


//---------------------------------------------------------------- Brings In Mongoose
const mongoose = require("mongoose"); 


//---------------------------------------------------------------- Brings in App
const app = require("./app"); 


//---------------------------------------------------------------- Port 3000
const port = 3000; 


//---------------------------------------------------------------- Starts the mongoose database
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected on ${port}`); // -------------------------------- Logs (Server Connection) console errors
      console.log("MongoDB Connected"); // -------------------------------- Logs (MondoDB) console errors
    }); 

  .catch((e) => { // -------------------------------- Logs console errors
    console.log(e); 
  }); 
