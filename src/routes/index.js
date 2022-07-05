// import bodyParser from "body-parser";
// import people from "./peopleRoutes.js";

const bodyParser = require("body-parser");
const people = require("./peopleRoutes");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(people);
};