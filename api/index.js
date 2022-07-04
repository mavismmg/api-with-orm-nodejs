import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3333;

app.get("/test", (req, res) => {
  res.status(200).send({message: "API is running"});
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;