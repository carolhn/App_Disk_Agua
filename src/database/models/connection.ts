import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const connection = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

connection.on('error', (err) => {
  console.error('Erro na conexão com o PostgreSQL:', err);
});

export default connection;
