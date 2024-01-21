import pool from '../database/db.js';

const NutritionRepository = {
  getAll: async () => {
    const [result] = await pool.query('SELECT * FROM Nutrition');
    return result;
  },

  getById: async (id) => {
    const [result] = await pool.query('SELECT * FROM Nutrition WHERE id = ?', [id]);
    return result[0];
  },

  create: async (name, calories, protein, carbs, fats) => {
    const result = await pool.query('INSERT INTO Nutrition (name, calories, protein, carbs, fats) VALUES (?, ?, ?, ?, ?)', [name, calories, protein, carbs, fats]);
    return result;
  },

  update: async (id, name, calories, protein, carbs, fats) => {
    const result = await pool.query('UPDATE Nutrition SET name = ?, calories = ?, protein = ?, carbs = ?, fats = ? WHERE id = ?', [name, calories, protein, carbs, fats, id]);
    return result;
  },

  deleteById: async (id) => {
    const result = await pool.query('DELETE FROM Nutrition WHERE id = ?', [id]);
    return result;
  }
};

export default NutritionRepository;
