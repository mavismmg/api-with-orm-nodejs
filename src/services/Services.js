import db from "../models/index.cjs";

export class Services {
  constructor(modelName) {
    this.modelName = modelName;
  };

  async getAllRegisters(where = {}) {
    return db[this.modelName].findAll({ where : { ... where }});
  };

  async getOneRegister(where = {}) {
    return db[this.modelName].findOne({ where: { ... where }});
  };

  async createRegister(data) {
    return db[this.modelName].create(data);
  };

  async updateRegister(updateData, id, transaction_ = {}) {
    return db[this.modelName].update(updateData, { where: { id: id }}, transaction_);
  };

  async updateRegisters(updateData, where, transaction_ = {}) {
    return db[this.modelName].update(updateData, { where: { ... where }}, transaction_);
  };

  async deleteRegister(id, transaction_ = {}) {
    return db[this.modelName].destroy({ where: { id: id}}, transaction_);
  };

  async restoreRegister(id, transaction_ = {}) {
    return db[this.modelName].restore({ where: { id: id }}, transaction_);
  };
};