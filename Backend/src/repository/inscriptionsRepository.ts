import database from '../database';

export interface Inscription {
  id?: number;
  cpf: string;
  email: string;
  nome_completo: string;
  telefone: string;
  evento_id?: number;
  created_at?: Date;
}

export async function createInscription(inscription: Inscription) {
  const { cpf, email, nome_completo, telefone, evento_id } = inscription;
  
  const result = await database.query(
    'INSERT INTO inscriptions (cpf, email, nome_completo, telefone, evento_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [cpf, email, nome_completo, telefone, evento_id]
  );
  
  return result.rows[0];
}

export async function getInscriptionByCpf(cpf: string) {
  const result = await database.query('SELECT * FROM inscriptions WHERE cpf = $1', [cpf]);
  return result.rows[0];
}

export async function getInscriptionByEmail(email: string) {
  const result = await database.query('SELECT * FROM inscriptions WHERE email = $1', [email]);
  return result.rows[0];
}

export async function getAllInscriptions() {
  const result = await database.query('SELECT * FROM inscriptions ORDER BY created_at DESC');
  return result.rows;
} 