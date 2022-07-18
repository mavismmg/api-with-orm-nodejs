import db from "../models/index.cjs";

export class Services {
  constructor(modelName) {
    this.modelName = modelName;
  };

  async getAllRegisters() {
    return db[this.modelName].findAll();
  };

  async getOneRegister(id) {

  };

  async createRegister(data) {

  };

  async updateRegister(updateData, id, transaction_ = {}) {
    return db[this.modelName].update(updateData, { where: { id: id }}, transaction_);
  };

  async updateRegisters(updateData, where, transaction_ = {}) {
    return db[this.modelName].update(updateData, { where: { ... where }}, transaction_);
  };

  async deleteRegister(id) {

  };
};