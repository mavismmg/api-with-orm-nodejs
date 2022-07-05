// import { Router } from "express";
// import { PeopleController } from "../controllers/peopleController.js";

const Router = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/people", PeopleController.getAllPeople);

module.exports = router;