const { db_client } = require("../db.js");
const fs = require("fs");

let sql_file = "./db/seeds/01_snake_state.sql";

fs.readFile(sql_file, "utf-8", function (err, data) {
  if (data) {
    db_client
      .query(data)
      .then(() => {
        console.log("Succesfully created seed data.");
        endDatabaseConnection();
      })
      .catch((err) => {
        console.log(`unable to create seed`, err);
        db_client.end();
        console.log("connection to database terminated");
      });
  }
});

const endDatabaseConnection = () => {
  const ONE_SECOND_MS = 1000;

  setTimeout(() => {
    db_client.end();
    console.log("connection to database terminated");
  }, ONE_SECOND_MS);
};
