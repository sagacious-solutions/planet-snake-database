-- Drop and recreate Users table (Example)


CREATE TABLE creator (
  id SERIAL PRIMARY KEY NOT NULL,
  time_created TIMESTAMP DEFAULT now(), 
  time_light_switch SMALLINT CHECK (time_light_switch > 0 AND time_light_switch < 13),
  shed_iminent BOOLEAN DEFAULT "FALSE",
  shed_complete BOOLEAN DEFAULT "FALSE",
  poop_found BOOLEAN DEFAULT "FALSE",
  urate_found BOOLEAN DEFAULT "FALSE",
  rat_offered BOOLEAN DEFAULT "FALSE",
  rat_ate BOOLEAN DEFAULT "FALSE",
  rat_ignored BOOLEAN DEFAULT "FALSE",
  snake_length SMALLINT CHECK (snake_length > 0)
  snake_weight SMALLINT CHECK (snake_weight > 0)
);
