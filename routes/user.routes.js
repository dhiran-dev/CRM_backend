const userController = require("../controllers/user.controller");
const authValidators = require("../middlewares/auth.validator");

//to get all users
module.exports = function(app){
    app.get("/crmapp/api/v1/users/", authValidators.isUserAuthenticated, userController.getAllUsers);
}