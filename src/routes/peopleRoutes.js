import { Router } from "express";
import { PeopleController } from "../controllers/peopleController.js";

const router = Router();

router
  .get("/people", PeopleController.listPeople)
  .get("/people/:id", PeopleController.listPeopleById)
  .post("/people", PeopleController.createPeople)
  .put("/people/:id", PeopleController.updatePeople)
  .delete("/people/:id", PeopleController.deletePeople);

export default router;