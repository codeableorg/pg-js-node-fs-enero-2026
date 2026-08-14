import { createClient, pool } from './db.js';

const LENTA = 'SELECT pg_sleep(0.4)';

const cliente = createClient();

await cliente.connect();

const inicioQuery = Date.now();
const q1 = cliente.query(LENTA);
const q2 = cliente.query(LENTA);
const q3 = cliente.query(LENTA);

await Promise.all([q1, q2, q3]);
const msCliente = Date.now() - inicioQuery;
console.log(`${msCliente}ms`);
await cliente.end();

// const inicioQuery = Date.now();
// const q1 = pool.query(LENTA);
// const q2 = pool.query(LENTA);
// const q3 = pool.query(LENTA);

// await Promise.all([q1, q2, q3]);

// const msCliente = Date.now() - inicioQuery;
// console.log(`${msCliente}ms`);
// await pool.end();
