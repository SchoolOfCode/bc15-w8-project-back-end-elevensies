// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getProjects() {
  // Query the database and return all projects
  const queryText = "SELECT * FROM projects";
  const result = await pool.query(queryText);
  return result.rows;
}
//Need to build remaining models:
//get by difficulty
export async function getProjectsByDifficulty(difficulty) {
  // build SQL query
  const queryText = "SELECT * FROM projects WHERE difficulty LIKE $1";
  // send query and store result
  const result = await pool.query(queryText, [difficulty]);
  return result.rows;
}
//get by language
export async function getProjectsByLanguage(language) {
  // build SQL query
  const queryText = "SELECT * FROM projects WHERE language LIKE $1";
  // send query and store result
  const result = await pool.query(queryText, [`%${language}%`]);
  return result.rows;
}
//add new project

//delete by id
