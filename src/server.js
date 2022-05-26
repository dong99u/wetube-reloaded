import express from "express";

const PORT = 4000;

const app = express();
// SANDWICH

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

app.get("/", logger, handleHome);
// SANDWICH
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);
