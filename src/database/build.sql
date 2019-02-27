BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
INSERT INTO users(first_name,last_name,email,password) VALUES
('AYMAN','ALQOUQA','AY@QO','12'),
('AHMED','ABED','AH@ABED','32');

INSERT INTO posts(post,user_id) VALUES
('ana ana', 1),
('hhhhh',2);
COMMIT;