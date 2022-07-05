import { Router } from "express";
import { PeopleController } from "../controllers/peopleController.js";

const router = Router();

router.get("/people", PeopleController.getAllPeople);

export default router;