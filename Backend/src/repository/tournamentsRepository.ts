import database from '../database';
 
export async function getAllTournaments() {
  const result = await database.query('SELECT * FROM tournaments ORDER BY start_date DESC');
  return result.rows;
}

export async function getTournamentById(id: number) {
  const result = await database.query('SELECT * FROM tournaments WHERE id = $1', [id]);
  return result.rows[0];
} 