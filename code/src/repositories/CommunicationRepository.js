import pool from '../database/db.js';

const CommunicationRepository = {
  getAll: async () => {
    const [result] = await pool.query('SELECT * FROM Communication');
    return result;
  },

  getById: async (id) => {
    const [result] = await pool.query('SELECT * FROM Communication WHERE id = ?', [id]);
    return result[0];
  },

  create: async (sender, receiver, message) => {
    const result = await pool.query('INSERT INTO Communication (sender, receiver, message) VALUES (?, ?, ?)', [sender, receiver, message]);
    return result;
  },

  update: async (id, sender, receiver, message) => {
    const result = await pool.query('UPDATE Communication SET sender = ?, receiver = ?, message = ? WHERE id = ?', [sender, receiver, message, id]);
    return result;
  },

  deleteById: async (id) => {
    const result = await pool.query('DELETE FROM Communication WHERE id = ?', [id]);
    return result;
  }
};

export default CommunicationRepository;
