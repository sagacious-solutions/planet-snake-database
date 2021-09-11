DROP TABLE IF EXISTS hardware_state CASCADE
CREATE TABLE hardware_state (
  id SERIAL PRIMARY KEY NOT NULL,
  time_created TIMESTAMP DEFAULT now(), 
);

DROP TABLE IF EXISTS enviro_readings;
CREATE TABLE enviro_readings (
    id SERIAL PRIMARY NOT NULL,
    hardware_state_id INTEGER REFERENCES hardware_state(id), -- ON DELETE CASCADE,
    sensor_id INTEGER REFERENCES sensor(id),
    temperature REAL,
    humidity REAL
);

DROP TABLE IF EXISTS sensor;
CREATE TABLE sensor (

);
