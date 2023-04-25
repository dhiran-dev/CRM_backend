// import controller as it is the one that calls the business login inside the Services

// define route for signup  and signin
const authController = require("../controllers/auth.controller");

module.exports = function (app) {
  app.post("/crmapp/api/v1/auth/signup", authController.signup);
  app.post("/crmapp/api/v1/auth/signin", authController.signin);
};
