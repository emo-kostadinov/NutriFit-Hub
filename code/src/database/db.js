import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'Emotae06',
  database: 'nutrifit_hub_db', 
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

export default pool;