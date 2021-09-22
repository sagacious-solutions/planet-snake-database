require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8081;
const cors = require("cors");

const app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
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

  // Pass to next layer of middleware
  next();
});

const {
  queryForSnakeState,
  queryForSnakeValue,
} = require("./db/queries/db_get");

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/poop_found", cors(), (req, res) => {
  queryForSnakeState(`poop_found`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});

app.get("/urate_found", cors(), (req, res) => {
  queryForSnakeState(`urate_found`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});

app.get("/rats_offered", cors(), (req, res) => {
  queryForSnakeState(`rat_offered`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});

app.get("/rats_ate", cors(), (req, res) => {
  queryForSnakeState(`rat_ate`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});

app.get("/rats_ignored", cors(), (req, res) => {
  queryForSnakeState(`rat_ignored`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});

app.get("/sheds_imminent", cors(), (req, res) => {
  queryForSnakeState(`shed_imminent`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});
app.get("/sheds_complete", cors(), (req, res) => {
  queryForSnakeState(`shed_complete`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});
app.get("/weight_measures", cors(), (req, res) => {
  queryForSnakeValue(`snake_weight`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Unable to retrieve data : ", err);
    });
});
