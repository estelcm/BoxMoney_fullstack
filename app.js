require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 2018;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

app.get("/", (req, resp) => {
  resp.status(200).send("<h1>Fullstack moneyBox</h1>");
});
