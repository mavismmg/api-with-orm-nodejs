import db from "../models/index.cjs";

export class PeopleController {
  static async listPeople(req, res) {
    try {
      const allPeople = await db.People.findAll();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async listPeopleById(req, res) {
    const { id } = req.params;
    try {
      const singlePerson = await db.People.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(singlePerson);   
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async createPeople(req, res) {
    const newPerson = req.body;
    try {
      const createdNewPerson = await db.People.create(newPerson);
      return res.status(200).json(createdNewPerson);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async updatePeople(req, res) {
    const { id } = req.params;
    const updateInfo = req.body;
    try {
      await db.People.update(updateInfo, {
        where: {
          id: Number(id)
        }
      });
      const updatePeople = await db.People.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(updatePeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async deletePeople(req, res) {
    const { id } = req.params;
    try {
      await db.People.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json({message: `Id ${id} deleted.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
};