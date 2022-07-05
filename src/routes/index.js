import bodyParser from "body-parser";
import people from "./peopleRoutes.js";

export default app => {
  app.use(bodyParser.json());
  app.use(people);
};