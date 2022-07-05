// import express from "express";
// import routes from "./routes/index.js";

const express = require("express");
const routes = require("./routes/");

const app = express();
const port = 3333;

routes(app);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;