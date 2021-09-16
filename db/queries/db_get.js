const { db_client, makeGetQuery } = require("../db.js");

const getPoopFound = function () {
  const queryString = makeGetQuery(
    `time_created`,
    "snake_state",
    `poop_found IS TRUE`
  );

  //   console.log(queryString);

  return db_client.query(queryString).then((res) => res.rows);
};

const getAllUrateFound = function () {
  const queryString = makeGetQuery(
    `time_created`,
    "snake_state",
    `urate_found IS TRUE`
  );

  return db_client.query(queryString).then((res) => res.rows);
};

const queryForSnakeState = (state_wanted) => {
  const queryString = makeGetQuery(
    `time_created`,
    "snake_state",
    `${state_wanted} IS TRUE`
  );

  return db_client.query(queryString).then((res) => res.rows);
};
const queryForSnakeValue = (state_wanted) => {
  const queryString = makeGetQuery(`time_created`, "snake_state");

  console.log("query for snake weight");
  console.log(queryString);

  return db_client.query(queryString).then((res) => res.rows);
};

module.exports = {
  getPoopFound,
  getAllUrateFound,
  queryForSnakeState,
  queryForSnakeValue,
};
