-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS show_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE show_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE show_db;

-- Created the table "schools"
CREATE TABLE thirtyrock (
  id int AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  coolness_points INTEGER(3),
  attitude VARCHAR(30)
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO thirtyrock (name, coolness_points, attitude) VALUES ("Liz Lemon", 100, "snark");
INSERT INTO thirtyrock (name, coolness_points, attitude) VALUES ("Jack Donaughy", 100, "snark");
INSERT INTO thirtyrock (name, coolness_points, attitude) VALUES ("Tracy Jordan", 100, "snark");
INSERT INTO thirtyrock (name, coolness_points, attitude) VALUES ("Jenna Maroney", 100, "snark");
