//---------------------------------------------------------------- Validator functions
const {
  isEmpty,
  isStrongPassword,
  isEmail,
  isAlpha,
  isAlphanumeric,
} = require("validator"); 


//---------------------------------------------------------------- Writes a empty validator check
const checkIsEmpty = (target) => (isEmpty(target) ? true : false); 

//---------------------------------------------------------------- Writes a strong password validator check 
  isStrongPassword(password) ? true : false; 

  //---------------------------------------------------------------- Writes an email validator check 
const checkIsEmail = (email) => (isEmail(email) ? true : false); 

//---------------------------------------------------------------- Writes an alpha validator check
const checkIsAlpha = (target) => (isAlpha(target) ? true : false); 

//---------------------------------------------------------------- Writes a alphanumeric validator check
const checkIsAlphanumeric = (target) => (isAlphanumeric(target) ? true : false); 

//---------------------------------------------------------------- Exports the validator check functions
module.exports = {
  checkIsEmpty,
  checkIsStrongPassword,
  checkIsEmail,
  checkIsAlpha,
  checkIsAlphanumeric,
}; 
