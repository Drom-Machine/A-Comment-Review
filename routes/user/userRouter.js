//-----------------------------------------------Brings in express and expressRouter
const express = require("express"); 
const router = express.Router(); 

//----------------------------------------------- Brings in signup and login
const { signup, login } = require("./controller/userController"); 


const checkIsUndefined = require("./helpers/checkIsUndefined");
const checkIsEmptyFunc = require("./helpers/checkIsEmptyFunc");
const checkIsStrongPasswordFunc = require("./helpers/checkIsStrongPasswordFunc");


const {
  checkIsEmailFunc,
  checkIsAlphaFunc,
  checkIsAlphanumericFunc,
} = require("./helpers/authMiddleware");

//----------------------------------------------- Calls functions in order for sign up
router.post(
  "/sign-up",
  checkIsUndefined,
  checkIsEmptyFunc,
  checkIsStrongPasswordFunc,
  checkIsEmailFunc,
  checkIsAlphaFunc,
  checkIsAlphanumericFunc,
  signup
);

//--------------------------------------------- Calls functions in order for login
router.post(
  "/login",
  checkIsUndefined,
  checkIsEmptyFunc,
  checkIsEmailFunc,
  login
);

//--------------------------------------------- Exports router
module.exports = router; 
