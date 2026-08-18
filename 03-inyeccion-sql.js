import { createClient } from './db.js';

const client = createClient();
await client.connect();

// POR BUENA PRACTICA DEBERIA HACERSE UN DROP PRIMERO
// await client.query(`DROP TABLE IF EXISTS demo_usuarios`);

// await client.query(
//   `
//   CREATE TABLE demo_usuarios(
//     id SERIAL PRIMARY KEY,
//     usuario VARCHAR(50) NOT NULL UNIQUE,
//     password VARCHAR(50) NOT NULL,
//     rol VARCHAR(20) NOT NULL
//   )
//   `
// );
// Columns;

// await client.query(
//   `
//     INSERT INTO demo_usuarios(usuario, password, rol)
//     VALUES
//         ('usuario1', 'admin123', 'admin'),
//         ('usuario2', 'admin123', 'vendedor'),
//         ('usuario3', 'admin123', 'vendedor')
//   `
// );
const username = 'usuario1';
const password = "' OR '1'='1";

//SQL inyection
const { rows } = await client.query(`
    SELECT * FROM demo_usuarios WHERE usuario = '${username}' AND password = '${password}'
  `);

// SQL inyection sanitizado
const { rows } = await client.query(
  `
    SELECT * FROM demo_usuarios WHERE usuario = $1 AND password = $2
  `,
  [username, password]
);

console.log(rows);

await client.end();
