const { checkIsEmpty } = require("../../utils/authMethods");

//---------------------------------------------------------------- Checks if any incoming data is Empty and sends error message back 
function checkIsEmptyFunc(req, res, next) {
  let inComingData = req.body;

  const { errorObj } = res.locals;

  for (let key in inComingData) {
    if (checkIsEmpty(inComingData[key])) {
      errorObj[key] = `${key} cannot be empty`;
    }
  }
  //---------------------------------------------------------------- Sends error message if anything wrong with Object.keys
  if (Object.keys(errorObj).length > 0) {
    return res.status(500).json({ message: "failure", payload: errorObj });
  } else {
    next();
  }
}

//---------------------------------------------------------------- Exports Function
module.exports = checkIsEmptyFunc; 