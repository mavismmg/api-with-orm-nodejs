import { Router } from "express";
import { ClassController } from "../controllers/ClassController.js";

const router = Router();

router
  .get("/class", ClassController.listRank)
  .get("/class/:id", ClassController.listRankById)
  .post("/class", ClassController.createRank)
  .put("/class/:id", ClassController.updateRank)
  .delete("/class/:id", ClassController.deleteRank);

export default router;