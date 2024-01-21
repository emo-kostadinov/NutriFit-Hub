import pool from '../database/db.js';

const WorkoutPlanRepository = {
  getAll: async () => {
    const [result] = await pool.query('SELECT * FROM WorkoutPlan');
    return result;
  },

  getById: async (id) => {
    const [result] = await pool.query('SELECT * FROM WorkoutPlan WHERE id = ?', [id]);
    return result[0];
  },

  create: async (title, description, duration) => {
    const result = await pool.query('INSERT INTO WorkoutPlan (title, description, duration) VALUES (?, ?, ?)', [title, description, duration]);
    return result;
  },

  update: async (id, title, description, duration) => {
    const result = await pool.query('UPDATE WorkoutPlan SET title = ?, description = ?, duration = ? WHERE id = ?', [title, description, duration, id]);
    return result;
  },

  deleteById: async (id) => {
    const result = await pool.query('DELETE FROM WorkoutPlan WHERE id = ?', [id]);
    return result;
  }
};

export default WorkoutPlanRepository;
