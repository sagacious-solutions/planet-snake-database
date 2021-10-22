const { db_client } = require("../db.js");

/**
 * @param {} snakeStateObject An object containing new snake state
 * @return {Promise<[{}]>}  A promise with the database query
 */
const updateBooleanSnakeState = function (snakeStateObject) {
  const queryParams = ["true"];
  const stateKey = [Object.keys(snakeStateObject.newState)];

  const queryString = `INSERT INTO snake_state (${stateKey}) VALUES ($1);`;

  return db_client.query(queryString, queryParams);
};

module.exports = { updateBooleanSnakeState };
