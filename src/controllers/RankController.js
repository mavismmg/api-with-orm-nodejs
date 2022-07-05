import db from "../models/index.cjs";

export class RankController {
  static async listRank(req, res) {
    try {
      const allRank = await db.Rank.findAll();
      return res.status(200).json(allRank);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async listRankById(req, res) {
    const { id } = req.params;
    try {
      const singleRank = await db.Rank.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(singleRank);   
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async createRank(req, res) {
    const newRank = req.body;
    try {
      const createdNewRank = await db.Rank.create(newRank);
      return res.status(200).json(createdNewRank);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async updateRank(req, res) {
    const { id } = req.params;
    const updateInfo = req.body;
    try {
      await db.Rank.update(updateInfo, {
        where: {
          id: Number(id)
        }
      });
      const updateRank = await db.Rank.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(updateRank);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
  static async deleteRank(req, res) {
    const { id } = req.params;
    try {
      await db.Rank.destroy({
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