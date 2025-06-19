import { Pool } from 'pg';

const URL_PG = 'postgresql://postgres:1234@localhost:5432/GameEvents';

const database = new Pool({
  connectionString: URL_PG,
});

export default database; 