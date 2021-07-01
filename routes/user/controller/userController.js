//---------------------------------------------------------------- Brings in bcrypt
const bcrypt = require("bcryptjs");
//---------------------------------------------------------------- Brings in User model
const User = require("../model/User");

//---------------------------------------------------------------- Brings in jsonwebtoken
const jwt = require("jsonwebtoken"); 

//---------------------------------------------------------------- Signup function
async function signup(req, res) {
  const { username, email, password, firstName, lastName } = req.body;
  
  //----------------------------------------------------------------
  const { errorObj } = res.locals; 
  
  
  if (Object.keys(errorObj).length > 0) {
      return res.status(500).json({ message: "failure", payload: errorObj });
  }
  
  try {
    let salt = await bcrypt.genSalt(12); //---------------------------------------------------------------- Generates a salt
    let hashedPassword = await bcrypt.hash(password, salt); //---------------------------------------------------------------- Salt and hashes a user's password

    
    const createdUser = new User({ //---------------------------------------------------------------- Creates a new User Model
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    }); 

    //---------------------------------------------------------------- Saves user to database
    let savedUser = await createdUser.save(); 
    res.json({ message: "success", data: savedUser }); 
  } catch (e) {
    console.log(e);
    console.log(e.message);
    res.json({ message: "error", error: e });
  }
}
//---------------------------------------------------------------- Sync login function
async function login(req, res) {

  //---------------------------------------------------------------- 
  const { email, password } = req.body;

  //---------------------------------------------------------------- 
  const { errorObj } = res.locals;
  
  if (Object.keys(errorObj).length > 0) {
    
    return res.status(500).json({ message: "failure", payload: errorObj });
  }

    //---------------------------------------------------------------- search for a user by email, if found then true
  try {
    let foundUser = await User.findOne({ email: email });
    
    if (!foundUser) {
      //---------------------------------------------------------------- If foundUser is false, gives error message
      res.status(400).json({
        message: "failure",
        payload: "Please check your email and password",
      });
    } else {
      
      //---------------------------------------------------------------- Checks the compared password 
      let comparedPassword = await bcrypt.compare(password, foundUser.password);
      
      if (!comparedPassword) {
        res.status(400).json({
          message: "failure",
          payload: "Please check your email and password",
        });
      } else {
        let jwtToken = jwt.sign(
          {
            email: foundUser.email,
            username: foundUser.username,
          },
          process.env.PRIVATE_JWT_KEY,
          {
            expiresIn: "1d",
          }
        );
        //---------------------------------------------------------------- Returns a "success" message and user access with jwtToken
        res.json({ message: "success", payload: jwtToken });
      }
    }
    //---------------------------------------------------------------- Catches errors
  } catch (e) {
    res.json({ message: "error", error: e });
  }
}

//---------------------------------------------------------------- Exports signup and login
module.exports = { signup, login }; 
