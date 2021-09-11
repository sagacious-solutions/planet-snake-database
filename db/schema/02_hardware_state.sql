DROP TABLE IF EXISTS hardware_state CASCADE
CREATE TABLE hardware_state (
  id SERIAL PRIMARY KEY NOT NULL,
  time_created TIMESTAMP DEFAULT now(), 
);

DROP TABLE IF EXISTS enviro_readings;
CREATE TABLE enviro_readings (
    id BIGSERIAL PRIMARY NOT NULL,
    hardware_state_id INTEGER REFERENCES hardware_state(id), -- ON DELETE CASCADE,
    sensor_id INTEGER REFERENCES sensor(id),
    temperature REAL,
    humidity REAL
);

DROP TABLE IF EXISTS sensor;
CREATE TABLE sensor (
    id SERIAL PRIMARY NOT NULL,
    sensor_id VARCHAR(15)
    sensor_model VARCHAR(15),
    description TEXT,
    time_created TIMESTAMP DEFAULT now(), 

);

DROP TABLE IF EXISTS heater_state;
CREATE TABLE heater_state (
    id SERIAL PRIMARY NOT NULL,
    hardware_state_id INTEGER REFERENCES hardware_state(id),
    heater_id INTEGER REFERENCES heater(id),
    is_turned_on BOOLEAN NOT NULL,
);

DROP TABLE IF EXISTS heater;
CREATE TABLE heater (
    id SERIAL PRIMARY NOT NULL,
    socket_num SMALLINT,
    description TEXT,
    time_created TIMESTAMP DEFAULT now(), 
);