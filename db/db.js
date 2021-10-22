require("dotenv").config();
const pg = require("pg");
const Client = pg.Client;

const db_client = new Client(process.env.DATABASE_URL);
const DB_TIMEZONE = process.env.TIME_ZONE;

db_client
  .connect()
  .then(() => console.log("Connected to database"))
  .then(() => {
    setDbTimeZone(DB_TIMEZONE);
  });

const setDbTimeZone = (timeZone) => {
  console.log(timeZone);
  const QUERY_STRING = `SET TIMEZONE="${timeZone}"`;

  db_client
    .query(QUERY_STRING)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @param {string} selection column requested
 * @param {string} table table to request data from
 * @param {string} where OPTIONAL - where selection
 * @return {string} a query string for the database
 */
const makeGetQuery = function (selection, table, where) {
  let queryString = `SELECT ${selection}
  FROM ${table}
  `;

  if (where) {
    queryString += `WHERE ${where}
    `;
  }

  queryString += "ORDER BY time_created DESC";

  return queryString;
};

/** creates a put query
   @params: table, properties (array of what to change)
   @return: queryString
*/
const makePutQuery = function (table, properties, queryParams, return_id) {
  let queryString = `INSERT INTO ${table} (`;

  // adds $n as index for properties
  for (const property of properties) {
    if (properties.indexOf(property) > 0) {
      queryString += ",";
    }
    queryString += `${property}`;
  }
  queryString += `) VALUES`;

  // This tracks the iteration across loops
  let true_index = 1;

  if (!(queryParams[0].constructor === Array)) {
    queryParams = [queryParams];
  }

  // takes in nested properties and builds out the $n alias' section of query
  for (let n in queryParams) {
    queryString += `(`;

    for (const index in properties) {
      if (index > 0) {
        queryString += ",";
      }
      queryString += `$${true_index}`;
      true_index++;
    }
    queryString += ")";
    if (n < queryParams.length - 1) {
      queryString += ",";
    }
  }

  // if the requester wants the ids back for the new insertions
  if (return_id) {
    queryString += "RETURNING id";
  }

  return queryString;
};

const getQueryParams = function (table_obj) {
  let queryParams = [];

  for (const key in table_obj) {
    queryParams.push(key);
  }

  return queryParams;
};

module.exports = {
  db_client,
  makeGetQuery,
  makePutQuery,
  getQueryParams,
};
