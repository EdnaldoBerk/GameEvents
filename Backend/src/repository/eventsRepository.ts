import database from '../database';
 
export async function getAllEvents() {
  const result = await database.query('SELECT * FROM events ORDER BY date DESC');
  return result.rows;
} 