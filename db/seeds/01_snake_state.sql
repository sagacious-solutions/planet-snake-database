-- Users table seeds here (Example)
-- INSERT INTO users (name) VALUES ('Alice');
-- INSERT INTO users (name) VALUES ('Kira');

INSERT INTO snake_state (time_created, time_light_switch, shed_iminent) VALUES ((NOW() - INTERVAL '30 days'),7, 't');
INSERT INTO snake_state (time_created, time_light_switch, poop_found) VALUES (NOW()-INTERVAL'60 days',7, 't');
INSERT INTO snake_state (time_created, time_light_switch, rat_offered) VALUES (NOW()- INTERVAL'1 days',7, 't');
INSERT INTO snake_state (time_created, time_light_switch, snake_length) VALUES (NOW()- INTERVAL'100 days',7, 50);
INSERT INTO snake_state (time_created, time_light_switch, snake_weight) VALUES (NOW()- INTERVAL'90 days',7, 10);
INSERT INTO snake_state (time_created, time_light_switch, urate_found) VALUES (NOW()- INTERVAL'20 days',7, 't');