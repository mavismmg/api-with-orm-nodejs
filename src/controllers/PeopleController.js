import db from "../models/index.cjs";

export class PeopleController {
  static async listActivePeople(req, res) {
    try {
      const activePeople = await db.People.findAll();
      return res.status(200).json(activePeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listPeople(req, res) {
    try {
      const allPeople = await db.People.scope('all').findAll();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listPeopleById(req, res) {
    const { id } = req.params;
    try {
      const singlePerson = await db.People.findOne({ where: { id: Number(id)} });
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
      await db.People.update(updateInfo, { where: { id: Number(id)} });
      const updatePeople = await db.People.findOne({ where: { id: Number(id)} });
      return res.status(200).json(updatePeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async deletePeople(req, res) {
    const { id } = req.params;
    try {
      await db.People.destroy({ where: { id: Number(id)} });
      return res.status(200).json({message: `Id ${id} deleted.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async resetPeople(req, res) {
    const { id } = req.params;
    try {
      await db.People.restore({ where: { id: Number(id)} });
      return res.status(200).json({ message: `id ${id} restored.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async pullPeopleEnroll(req, res) {
    const { padawanId, enrollId } = req.params;
    try {
      const padawanEnroll = await db.Enrolls.findOne({ where: { id: Number(enrollId), padawan_id: Number(padawanId)} });
      return res.status(200).json(padawanEnroll);
    } catch (err) {
      return res.status(200).json(err.message);
    }
  };

  static async createPeopleEnroll(req, res) {
    const { padawanId } = req.params;
    const newPadawanEnroll = { ...req.body, padawan_id: Number(padawanId) }
    try {
      const newPadawanEnrollCreated = await db.Enrolls.create(newPadawanEnroll);
      return res.status(200).json(newPadawanEnrollCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async updatePeopleEnroll(req, res) {
    const { padawanId, enrollId } = req.params;
    const updateInfo = req.body;
    try {
      await db.Enrolls.update(updateInfo, { where: { id: Number(enrollId), padawan_id: Number(padawanId) }});
      const updatePeopleEnroll = await db.Enrolls.findOne({ where: { id: Number(enrollId) }});
      return res.status(200).json(updatePeopleEnroll);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async deletePeopleEnroll(req, res) {
    const { enrollId } = req.params;
    try {
      await db.Enrolls.destroy({ where: { id: Number(enrollId)} });
      return res.status(200).json({message: `Id ${enrollId} deleted.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
};