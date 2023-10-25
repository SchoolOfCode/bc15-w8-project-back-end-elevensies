// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getProjects() {
	// Query the database and return all projects
	const queryText = "SELECT * FROM projects";
	const result = await pool.query(queryText);
	return result.rows;
}
