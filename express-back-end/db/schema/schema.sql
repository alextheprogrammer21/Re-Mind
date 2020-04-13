DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS habits CASCADE;
DROP TABLE IF EXISTS habits_journal CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
CREATE TABLE activities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PASSWORD VARCHAR(255) NOT NULL,
  renew_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);
CREATE TABLE habits (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  activity_id INTEGER REFERENCES activities(id) ON DELETE CASCADE,
  start_date DATE,
  end_date DATE,
  frequency INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);
CREATE TABLE habits_journal (
  id SERIAL PRIMARY KEY NOT NULL,
  habit_id INTEGER REFERENCES habits(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);
create table notifications (
  id SERIAL PRIMARY KEY NOT NULL,
  habit_id INTEGER REFERENCES habits(id) ON DELETE CASCADE,
  notification_type VARCHAR(255),
  scheduled_time TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed BOOLEAN DEFAULT false
);