import { Router } from "express";
import { GradeController } from "../controllers/GradeController.js";

const router = Router();

router
  .get("/grade", GradeController.listGrade)
  .get("/grade/:id", GradeController.listGradeById)
  .post("/grade", GradeController.createGrade)
  .put("/grade/:id", GradeController.updateGrade)
  .delete("/grade/:id", GradeController.deleteGrade);

export default router;