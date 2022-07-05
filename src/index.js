import express from "express";
import routes from "./routes/index.js";

const app = express();
const port = 3333;

routes(app);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;