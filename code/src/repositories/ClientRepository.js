import pool from '../database/db.js';

const ClientRepository = {
  getAll: async () => {
    const [result] = await pool.query('SELECT * FROM Client');
    return result;
  },

  getById: async (id) => {
    const [result] = await pool.query('SELECT * FROM Client WHERE id = ?', [id]);
    return result[0];
  },

  create: async (name, age, gender) => {
    const result = await pool.query('INSERT INTO Client (name, age, gender) VALUES (?, ?, ?)', [name, age, gender]);
    return result;
  },

  update: async (id, name, age, gender) => {
    const result = await pool.query('UPDATE Client SET name = ?, age = ?, gender = ? WHERE id = ?', [name, age, gender, id]);
    return result;
  },

  deleteById: async (id) => {
    const result = await pool.query('DELETE FROM Client WHERE id = ?', [id]);
    return result;
  }
};

export default ClientRepository;
