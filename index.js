require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const { getLastPoop } = require("./db/queries/db_get");
// const pageRoutes = require("./routes/redirects");

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

getLastPoop().then((res) => {
  console.log(res);
});
