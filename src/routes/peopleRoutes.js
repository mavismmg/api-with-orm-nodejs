import { Router } from "express";
import { PeopleController } from "../controllers/peopleController.js";

const router = Router();

router
  .get("/people", PeopleController.listActivePeople)
  .get("/people/all", PeopleController.listPeople)
  .get("/people/:id", PeopleController.listPeopleById)
  .post("/people", PeopleController.createPeople)
  .put("/people/:id", PeopleController.updatePeople)
  .delete("/people/:id", PeopleController.deletePeople)
  .post("/people/:id/restore", PeopleController.resetPeople)
  .get("/people/:padawanId/enroll/:enrollId", PeopleController.pullPeopleEnroll)
  .post("/people/:padawanId/enroll", PeopleController.createPeopleEnroll)
  .put("/people/:padawanId/enroll/:enrollId", PeopleController.updatePeopleEnroll)
  .delete("/people/:padawanId/enroll/:enrollId", PeopleController.deletePeopleEnroll)
  .get("/people/:padawanId/enroll", PeopleController.selectPeopleEnroll)
  .get("/people/enroll/:gradeId/active", PeopleController.pullPeopleEnrollByGrade)
  .get("/people/enroll/crowed", PeopleController.pullCrowdedGrade);

export default router;