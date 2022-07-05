import db from "../models/index.cjs";

export class LevelController {
  static async listLevel(req, res) {
    try {
      const allLevel = await db.Levels.findAll();
      return res.status(200).json(allLevel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async listLevelById(req, res) {
    const { id } = req.params;
    try {
      const singleLevel = await db.Levels.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(singleLevel);   
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const createdNewLevel = await db.Levels.create(newLevel);
      return res.status(200).json(createdNewLevel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async updateLevel(req, res) {
    const { id } = req.params;
    const updateInfo = req.body;
    try {
      await db.Levels.update(updateInfo, {
        where: {
          id: Number(id)
        }
      });
      const updateLevel = await db.Levels.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(updateLevel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await db.Levels.destroy({
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