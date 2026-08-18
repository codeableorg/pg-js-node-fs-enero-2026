import { Client, Pool } from 'pg';

const config = {
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE
};

export const pool = new Pool(config);
export const createClient = () => new Client(config);

export const query = async (sql, ...values) => {
  const client = createClient();
  await client.connect();
  const result = await client.query(sql, values);
  await client.end();
  return result;
};
