//------------------------------------------------- Brings in strong password check
const { checkIsStrongPassword } = require("../../utils/authMethods"); 

function checkIsStrongPasswordFunc(req, res, next) {
  
  //----------------------------------------------- Pulls errors from function
  const { errorObj } = res.locals;

  //---------------------------------------------------------------- Checks password for strength
  if (!checkIsStrongPassword(req.body.password)) {
    errorObj.weakPassword =
      "Password must include 1 lowercase, 1 uppercase, 1 special character, 1 number, and a length of 8";
  }
  
  //------------------------------ Calls next function
  next();
}

//----------------------------------------------- Exports the function
module.exports = checkIsStrongPasswordFunc; 
