require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8081;
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));

const { getPoopFound } = require("./db/queries/db_get");
// const pageRoutes = require("./routes/redirects");

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// queries server for all poops found, then posts it to the web server.
app.get("/poop_found", cors(), (req, res) => {
  getPoopFound()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});
