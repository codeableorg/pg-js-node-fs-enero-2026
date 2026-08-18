import { createClient } from './db.js';

const client = createClient();
await client.connect();

// const { rows } = client.query(
//   `
//     INSERT INTO clientes(nombre, correo, ciudad, fecha_registro),
//     VALUES($1, $2, $3, $4)
//     RETURNING id, nombre, correo, ciudad
//   `,
//   ['Elena Paredes', 'elena.paredes@correo.pe', 'Cuzco', '2025-09-15']
// );

// const { rows } = await client.query(
//   `
//     INSERT INTO pedidos(cliente_id, fecha, estado)
//     VALUES($1, $2, $3)

//     RETURNING id, cliente_id, fecha
//   `,
//   [19, '2025-10-18', 'pagado']
// );

// const { rows } = await client.query(
//   `
//   UPDATE clientes
//   SET fecha_registro = $1
//   WHERE id = 16
//   RETURNING *
//   `,
//   ['2025-01-16']
// );

// const { rows } = await client.query(
//   `
//   DELETE FROM pedidos
//   where id = 15
//   RETURNING *
//   `
// );

console.log(rows);

await client.end();
