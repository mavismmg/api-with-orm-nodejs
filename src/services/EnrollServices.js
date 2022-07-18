import db from "../models/index.cjs";
import { Services } from "./Services.js";
import Sequelize from "sequelize"

export class EnrollServices extends Services {
    constructor() {
        super("Enrolls")
    };

    async getCrowedGradeRegisters(id) {
        return db[this.modelName].findAndCountAll({
            where: {
                status: "Active"
            },
            attributes: ["grade_id"],
            group: ["grade_id"],
            having: Sequelize.literal(`COUNT(grade_id) >= ${id}`)
        });
    };

    async getEnrollByGrade(id) {
        return db[this.modelName].findAndCountAll({
            where: {
                grade_id: id,
                status: "Active"
            },
            limit: 35,
            order: [["padawan_id", "ASC"]]
        });
    };
};