import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function connection() {
  let client;

  try {
    client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('Conectado ao banco de dados!');
    console.log('Resultado da consulta:', result.rows);
  } catch (error) {
    console.error('Erro na conexão:', error.message);
  } finally {
    if (client) {
      client.release(); // Libera o cliente de volta para o pool.
    }
  }
}

  export {connection, pool};