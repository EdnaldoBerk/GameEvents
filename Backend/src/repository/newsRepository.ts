import database from '../database';
 
export async function getAllNews() {
  const result = await database.query('SELECT * FROM news ORDER BY published_at DESC');
  return result.rows;
} 