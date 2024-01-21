import NutritionRepository from '../repositories/NutritionRepository.js';

const NutritionService = {
  getAll: async () => {
    return await NutritionRepository.getAll();
  },

  getById: async (id) => {
    return await NutritionRepository.getById(id);
  },

  create: async (name, calories, protein, carbs, fats) => {
    return await NutritionRepository.create(name, calories, protein, carbs, fats);
  },

  update: async (id, name, calories, protein, carbs, fats) => {
    return await NutritionRepository.update(id, name, calories, protein, carbs, fats);
  },

  deleteById: async (id) => {
    return await NutritionRepository.deleteById(id);
  }
};

export default NutritionService;
