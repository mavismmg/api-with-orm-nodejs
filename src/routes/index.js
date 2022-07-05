import bodyParser from "body-parser";
import people from "./peopleRoutes.js";
import level from "./levelRoutes.js";
import grade from "./gradeRoutes.js";

export default app => {
  app.use(
    bodyParser.json(),
    people,
    level,
    grade
  );
};