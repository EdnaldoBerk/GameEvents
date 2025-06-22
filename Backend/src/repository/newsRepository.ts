import database from '../database';
 
export async function getAllNews() {
  const result = await database.query('SELECT * FROM news ORDER BY published_at DESC');
  return result.rows;
}

export async function getNewsById(id: number) {
  const result = await database.query('SELECT * FROM news WHERE id = $1', [id]);
  return result.rows[0];
} 