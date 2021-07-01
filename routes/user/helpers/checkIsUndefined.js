//---------------------------------------------------------------- Checks post data for defined or not
function checkIsUndefined(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return res.status(500).json({ message: "Please fill out the form" });
  } else {
    let errorObj = {}; 
    res.locals.errorObj = errorObj; 
    //------------------------------ If error, goes to next function
    next(); 
  }
}

//---------------------------------------------------------------- Exports function
module.exports = checkIsUndefined; 
