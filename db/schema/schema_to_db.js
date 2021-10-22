const { db_client } = require("../db.js");
const fs = require("fs");

let sql_file = "./db/schema/01_snake_state.sql";

// This will write the seeds file to our database
//fs.readFile("./db/seeds/02_polls_seed.sql",'utf-8', function (err, data) {
fs.readFile(sql_file, "utf-8", function (err, data) {
  const ONE_SECOND_MS = 1000;

  if (data) {
    db_client
      .query(data)
      .then(() => {
        console.log("Sucessfully created tables from", sql_file);
        setTimeout(() => db_client.end(), ONE_SECOND_MS);
      })
      .catch((err) => {
        console.log("Unable to create tables", err);
      });
  }
});
