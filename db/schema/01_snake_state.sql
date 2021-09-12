-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS snake_state;
CREATE TABLE snake_state (
  id SERIAL PRIMARY KEY NOT NULL,
  time_created TIMESTAMP DEFAULT now(), 
  time_light_switch SMALLINT CHECK (time_light_switch > 0 AND time_light_switch < 13),
  shed_iminent BOOLEAN DEFAULT 'f',
  shed_complete BOOLEAN DEFAULT 'f',
  poop_found BOOLEAN DEFAULT 'f',
  urate_found BOOLEAN DEFAULT 'f',
  rat_offered BOOLEAN DEFAULT 'f',
  rat_ate BOOLEAN DEFAULT 'f',
  rat_ignored BOOLEAN DEFAULT 'f',
  snake_length SMALLINT CHECK (snake_length > 0) ,
  snake_weight SMALLINT CHECK (snake_weight > 0) 
);
