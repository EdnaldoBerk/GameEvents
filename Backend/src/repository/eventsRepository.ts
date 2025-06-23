import database from '../database';
 
export async function getAllEvents() {
  const result = await database.query('SELECT * FROM events ORDER BY date DESC');
  return result.rows;
}

export async function getEventById(id: number) {
  const result = await database.query('SELECT * FROM events WHERE id = $1', [id]);
  return result.rows[0];
} 