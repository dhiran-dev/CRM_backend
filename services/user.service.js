//Business login lives here

//Create user if the controller asks to create a new user
//const userObj = {
//     name: data.name,
//     email: data.email,
//     userType: data.userType,
//     password: data.password,
//     userStatus: data.userStatus,
// }

//export Create user

const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const CreateUser = async (data) => {
  const response = {};
  try {
    const userObj = {
      name: data.name,
      email: data.email,
      userType: data.userType,
      password: data.password,
      userStatus: data.userStatus,
    };

    response.user = await User.create(userObj);
    return response;
  } catch (err) {
    console.log("Error: ", err);
    response.error = err.message;
    return response;
  }
};

const verifyUser = async (data) => {
  const response = {};
  try {
    const userData = await User.findOne({ email: data.email });
    if (userData === null) {
      //if email is not found in db
      response.error = "Invalid email";
    } else {
      //if email is found
      //   console.log("data pass", data.password);
      //   console.log("db pass", userData);
      const result = bcrypt.compareSync(data.password, userData.password);
      if (result) {
        //if password is matched
        response.success = true;
      } else {
        response.error = "Invalid password";
      }
      return response;
    }
  } catch (err) {
    console.log("Error: ", err);
    response.error = err.message;
    return response;
  }
};

const getUserByEmail = async (data) => {
  try {
    let userInfo = await User.findOne({ email: data.email });
    return userInfo;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const getAllUsers = async () => {
  try {
    let usersInfo = await User.find();
    return usersInfo;
  } catch (err) {
    console.log(err);
    return error.message;
  }
};

module.exports = { CreateUser, verifyUser, getUserByEmail, getAllUsers };
