require("dotenv").config();
const express = require("express");
const cors = require("cors");

//esta es solo para probar que conecta
//const db = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 2018;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

const movements = require("./routes/movements");
app.use("/api", movements);

app.get("/", (req, resp) => {
  resp.status(200).send("<h1>Fullstack moneyBox</h1>");
});

/* this is just to check that it was well connected with database"

db.execute("SELECT * FROM movements")
  .then((res) => console.log("get all", res[0]))
  .catch((err) => console.log(err, "not working"));*/
