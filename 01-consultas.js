import { createClient } from './db.js';

const client = createClient();
await client.connect();
// const { rows: clientes } = await client.query(
//   'SELECT id, nombre, ciudad FROM clientes GROUP BY id LIMIT 5'
// );

// const ciudad = 'Trujillo';

// const { rows: clientesPorCiudad } = await client.query(
//   'SELECT nombre, correo, fecha_registro FROM clientes WHERE ciudad = $1',
//   [ciudad]
// );

// console.log(clientesPorCiudad);

// const { rows } = await client.query(
//   `SELECT c.nombre, c.ciudad, c.correo, count(c.id) AS pedidos
//    FROM clientes c
//    INNER JOIN pedidos p on p.cliente_id = c.id
//    INNER JOIN detalle_pedido dp on dp.pedido_id = p.id
//    WHERE p.estado = $1 AND c.ciudad = $2
//    GROUP BY c.id, c.nombre
//   `,
//   ['pagado', 'Lima']
// );

// console.log(rows);

// await client.end();
