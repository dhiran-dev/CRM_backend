//business logic lives inside the service folder

//export function that receives req and res,calls the service for business logic handling
// const { response } = require("express");
// const userService = require("../services/user.service");

// exports.signup = async (req, res) => {
//     console.log("signup controller called")
//   try {
//     console.log(req.body);
//     const result = await userService.createUser(req.body);
//     let statusCode;
//     let response;
//     if (result.error) {
//       statusCode = 403;
//       response = result.error;
//     } else {
//       statusCode = 201;
//       response = result.user;
//     }
//     res.status(statusCode).send({
//       result: response,
//     });
//   } catch (err) {
//     res.status(500).send({
//       result: err,
//     });
//   }
// };

const { response } = require("express");
const userService = require("../services/user.service");

exports.signup = async (req, res) => {
  try {
    const result = await userService.CreateUser(req.body);
    let statusCode;
    let response;
    if (result.error) {
      statusCode = 403;
      response = result.error;
    } else {
      statusCode = 201;
      response = result.user;
    }
    res.status(statusCode).send({
      result: response,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      result: err,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const result = await userService.verifyUser(req.body);
    let statusCode;
    let response;
    if (result.error) {
      statusCode = 401;
      response = result.error;
    } else {
      statusCode = 201;
      response = "User validated successfully";
    }
    res.status(statusCode).send({
      result: response,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      result: err,
    });
  }
};
