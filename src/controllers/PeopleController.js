import { PeopleServices } from "../services/index.js";

const peopleServices = new PeopleServices();

export class PeopleController {
  static async listActivePeople(req, res) {
    try {
      const activePeople = await peopleServices.getActiveRegisters();
      return res.status(200).json(activePeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listPeople(req, res) {
    try {
      const allPeople = await peopleServices.getAllRegisters();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listPeopleById(req, res) {
    const { id } = req.params;
    try {
      const singlePerson = await peopleServices.getOneRegister({ id });
      return res.status(200).json(singlePerson);   
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async createPeople(req, res) {
    const newPerson = req.body;
    try {
      const createdNewPerson = await peopleServices.createRegister(newPerson);
      return res.status(200).json(createdNewPerson);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async updatePeople(req, res) {
    const { id } = req.params;
    const updateInfo = req.body;
    try {
      await peopleServices.updateRegister(updateInfo, Number(id));
      return res.status(200).json({ message: `id ${id} updated.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async deletePeople(req, res) {
    const { id } = req.params;
    try {
      await peopleServices.deleteRegister(Number(id));
      return res.status(200).json({message: `Id ${id} deleted.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async restorePeople(req, res) {
    const { id } = req.params;
    try {
      await peopleServices.restoreRegister(Number(id));
      return res.status(200).json({ message: `id ${id} restored.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getPeopleEnroll(req, res) {
    const { padawanId, enrollId } = req.params;
    try {
      // Needs implementation.
      const padawanEnroll = await peopleServices.getEnrollByPadawan({ id: padawanId });
      return res.status(200).json(padawanEnroll);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async createPeopleEnroll(req, res) {
    const { padawanId } = req.params;
    const newPadawanEnroll = { ...req.body, padawan_id: Number(padawanId) }
    try {
      const newPadawanEnrollCreated = await peopleServices.createRegister(newPadawanEnroll);
      return res.status(200).json(newPadawanEnrollCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async updatePeopleEnroll(req, res) {
    const { padawanId, enrollId } = req.params;
    const updateInfo = req.body;
    try {
      await peopleServices.updatePeopleAndEnroll(updateInfo, Number(padawanId), Number(enrollId));
      return res.status(200).json({ message: `${padawanId} and ${enrollId} updated.`});
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

  static async selectPeopleEnroll(req, res) {
    const { padawanId } = req.params;
    try {
      const people = await db.People.findOne({ where: { id: Number(padawanId) } });
      const enrolls = await people.getIsEnrolled();
      return res.status(200).json(enrolls);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async pullPeopleEnrollByGrade(req, res) {
    const { gradeId } = req.params;
    try {
      const allEnrolls = await db.Enrolls
        .findAndCountAll({
          where: {
            grade_id: Number(gradeId),
            status: "Active"
          },
          limit: 35,
          order: [["padawan_id", "ASC"]]
        });
      return res.status(200).json(allEnrolls);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async pullCrowdedGrade(req, res) {
    const enrollLimit = 1;
    try {
      const crowedGrade = await db.Enrolls.findAndCountAll({
        where: {
          status: "Active"
        },
        attributes: ["grade_id"],
        group: ["grade_id"],
        having: Sequelize.literal(`COUNT(grade_id) >= ${enrollLimit}`)
      })
      return res.status(200).json(crowedGrade.count);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async cancelPeople(req, res) {
    const { padawanId } = req.params;
    try {
      await peopleServices.cancelPeopleAndEnroll(Number(padawanId))
      return res.status(200).json({ message: `enroll from ${padawanId} cancelled.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
};