require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8081;
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// app.use(morgan("dev"));

// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888");
  res.setHeader("Access-Control-Allow-Origin", process.env.LOCAL_TEST_COMPUTER);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const { getPoopFound, getAllUrateFound } = require("./db/queries/db_get");
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

// queries server for all poops found, then posts it to the web server.
app.get("/urate_found", cors(), (req, res) => {
  getAllUrateFound()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});
