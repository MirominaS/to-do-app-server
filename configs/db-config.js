import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  password: 'miro98',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'to_do_app_db'
});

