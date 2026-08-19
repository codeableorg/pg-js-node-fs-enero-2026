import { createClient } from './db.js';

const client = createClient();
await client.connect();

try {
  await client.query('BEGIN');

  await client.query(
    `
      INSERT INTO clientes(nombre, correo, ciudad, fecha_registro)
      VALUES ($1,$2,$3,$4)
    `,
    [
      'Cliente transaction 1',
      'cliente.transaction.1@correo.pe',
      'Ica',
      '2025-01-19'
    ]
  );

  console.log('INSERT ejecutado dentro de una transacción');

  // await client.query(
  //   `
  //     INSERT INTO clientes(nombre, correo, ciudad, fecha_registro)
  //     VALUES ($1,$2,$3,$4)
  //   `,
  //   [
  //     'Cliente transaction',
  //     'cliente.transaction@correo.pe',
  //     'Ica',
  //     '2025-01-19'
  //   ]
  // );
  await client.query('COMMIT');
} catch (error) {
  console.error(error);
  await client.query('ROLLBACK');
  console.log('Fallo la consulta sql', error.message);
  console.log('ROLLBACK ejecutado');
} finally {
  await client.end();
}
