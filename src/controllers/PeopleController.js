//import db from "../models/index.cjs";

const db = require("../models");

module.exports = class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await db.People.findAll();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
};