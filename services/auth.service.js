const jwt = require("jsonwebtoken");
require("dotenv").config();

const verfiyJwtToken = (token) => {
  try {
    var decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decodedToken);
    return decodedToken;
  } catch (err) {
    return err.message;
  }
};

module.exports = { verfiyJwtToken };
