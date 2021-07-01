//----------------------------------------------- Brings in functions from authMethods
const {
  checkIsEmail,
  checkIsAlpha,
  checkIsAlphanumeric,
} = require("../../utils/authMethods"); 

//----------------------------------------------- Checks email function  
function checkIsEmailFunc(req, res, next) {
  const { errorObj } = res.locals;

  if (!checkIsEmail(req.body.email)) {
    errorObj.wrongEmailFormat = "Must be in email format!";
  } 
  next();
}

//----------------------------------------------- Checks Alpha String function
function checkIsAlphaFunc(req, res, next) {
  const { errorObj } = res.locals;
  const inComingData = req.body;
  for (key in inComingData) {
    if (key === "firstName" || key === "lastName") {
      if (!checkIsAlpha(inComingData[key])) {
        errorObj[`${key}`] = `${key} can only have characters`;
      }
    }
  }
  //----------------------------------------------- Calls the next function
  next();
}

//----------------------------------------------- Checks if string is Alphanumeric (numbers and letters)
function checkIsAlphanumericFunc(req, res, next) {
  const { errorObj } = res.locals;
  if (!checkIsAlphanumeric(req.body.username)) {
    errorObj.usernameError = "username can only have characters and numbers";
  }
  //------------------------------ Calls next function
  next();
}

//------------------------------ Exports the Functions to User Router
module.exports = {
  checkIsEmailFunc,
  checkIsAlphaFunc,
  checkIsAlphanumericFunc,
}; 