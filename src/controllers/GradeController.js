import db from "../models/index.cjs";

export class GradeController {
  static async listGrade(req, res) {
    try {
      const allGrade = await db.Grades.findAll();
      return res.status(200).json(allGrade);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listGradeById(req, res) {
    const { id } = req.params;
    try {
      const singleGrade = await db.Grades.findOne({ where: { id: Number(id)} });
      return res.status(200).json(singleGrade);   
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async createGrade(req, res) {
    const newGrade = req.body;
    try {
      const createdNewGrade = await db.Grades.create(newGrade);
      return res.status(200).json(createdNewGrade);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async updateGrade(req, res) {
    const { id } = req.params;
    const updateInfo = req.body;
    try {
      await db.Grades.update(updateInfo, { where: { id: Number(id)} });
      const updateGrade = await db.Grades.findOne({ where: { id: Number(id)} });
      return res.status(200).json(updateGrade);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async deleteGrade(req, res) {
    const { id } = req.params;
    try {
      await db.Grades.destroy({ where: { id: Number(id)} });
      return res.status(200).json({message: `Id ${id} deleted.`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async restoreGrade(req, res) {
    const { id } = req.params;
    try {
      await db.Grades.restore({ where: { id: Number(id)} })
      return res.status(200).json({ message: `id ${id} restored.`});
    } catch (error) {
      return res.status(500).json(err.message);
    }
  }
};