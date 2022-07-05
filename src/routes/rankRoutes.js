import { Router } from "express";
import { RankController } from "../controllers/RankController.js";

const router = Router();

router
  .get("/rank", RankController.listRank)
  .get("/rank/:id", RankController.listRankById)
  .post("/rank", RankController.createRank)
  .put("/rank/:id", RankController.updateRank)
  .delete("/rank/:id", RankController.deleteRank);

export default router;