import { pool, createClient } from './db.js';

// const client = createClient();
// await client.connect();

// const result = await client.query('Select * from clientes');
// console.log(result);

// await client.end();

const result = await pool.query('Select * from clientes');
console.log(result);
