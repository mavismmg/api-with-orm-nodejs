import { Router } from "express";
import { LevelController } from "../controllers/LevelController.js";

const router = Router();

router
  .get("/level", LevelController.listLevel)
  .get("/level/:id", LevelController.listLevelById)
  .post("/level", LevelController.createLevel)
  .put("/level/:id", LevelController.updateLevel)
  .delete("/people/:id", LevelController.deleteLevel);

export default router;