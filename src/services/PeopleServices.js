import db from "../models/index.cjs";
import { Services } from "./Services.js";

export class PeopleServices extends Services {
  constructor() {
    super("People");
    this.enrolls = new Services("Enrolls");
  };

  async getActiveRegisters(where = {}) {
    return db[this.modelName].findAll({ where: { ... where }});
  };

  async getAllRegisters(where = {}) {
    return db[this.modelName].scope("all").findAll({ where: { ... where }});
  };

  async updatePeopleAndEnroll(updateInfo, peopleId, enrollId) {
    return db.sequelize.transaction(async transaction_ => {
      await super.updateRegister(updateInfo, { where: {id: enrollId}, padawan_id: peopleId }, { transaction: transaction_ });
    })
  }

  async cancelPeopleAndEnroll(padawanId) {
    return db.sequelize.transaction(async transaction_ => {
      await super.updateRegister({ active: false }, padawanId, { transaction: transaction_ });
      await this.enrolls.updateRegisters({ status: "Non-Active" }, { padawan_id: padawanId }, { transaction: transaction_ });
    })
  };

  async getEnrollByPadawan(where = {}) {
    const enrolls = await db[this.modelName].findOne({ where: { ... where }});
    return enrolls.getEnrolledGrades();
  };
}