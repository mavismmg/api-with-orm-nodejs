import { Router } from "express";
import { LevelController } from "../controllers/LevelController.js";

const router = Router();

router
  .get("/level", LevelController.listLevel)
  .get("/level/:id", LevelController.listLevelById)
  .post("/level", LevelController.createLevel)
  .put("/level/:id", LevelController.updateLevel)
  .delete("/level/:id", LevelController.deleteLevel)
  .post("/level/:id/restore", LevelController.restoreLevel);

export default router;