import database from '../database';
 
export async function getAllTournaments() {
  const result = await database.query('SELECT * FROM tournaments ORDER BY start_date DESC');
  return result.rows;
} 