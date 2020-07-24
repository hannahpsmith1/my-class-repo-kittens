DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE songs(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  artist VARCHAR(100),
  genre VARCHAR(100)
  PRIMARY KEY (id)
);



SELECT * FROM songs;