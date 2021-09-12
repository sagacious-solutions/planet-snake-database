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

module.exports = {
  getPoopFound,
};
