DROP TABLE IF EXISTS hardware_state CASCADE
CREATE TABLE hardware_state (
  id SERIAL PRIMARY KEY NOT NULL,
  time_created TIMESTAMP DEFAULT now(), 
);
