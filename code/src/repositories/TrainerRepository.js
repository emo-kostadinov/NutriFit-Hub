import pool from '../database/db.js';

const TrainerRepository = {
  getAll: async () => {
    const [result] = await pool.query('SELECT * FROM Trainer');
    return result;
  },

  getById: async (id) => {
    const [result] = await pool.query('SELECT * FROM Trainer WHERE id = ?', [id]);
    return result[0];
  },

  create: async (name, specialization) => {
    const result = await pool.query('INSERT INTO Trainer (name, specialization) VALUES (?, ?)', [name, specialization]);
    return result;
  },

  update: async (id, name, specialization) => {
    const result = await pool.query('UPDATE Trainer SET name = ?, specialization = ? WHERE id = ?', [name, specialization, id]);
    return result;
  },

  deleteById: async (id) => {
    const result = await pool.query('DELETE FROM Trainer WHERE id = ?', [id]);
    return result;
  }
};

export default TrainerRepository;
