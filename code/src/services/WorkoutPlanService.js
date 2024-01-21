import WorkoutPlanRepository from '../repositories/WorkoutPlanRepository.js';

const WorkoutPlanService = {
  getAll: async () => {
    return await WorkoutPlanRepository.getAll();
  },

  getById: async (id) => {
    return await WorkoutPlanRepository.getById(id);
  },

  create: async (title, description, duration) => {
    return await WorkoutPlanRepository.create(title, description, duration);
  },

  update: async (id, title, description, duration) => {
    return await WorkoutPlanRepository.update(id, title, description, duration);
  },

  deleteById: async (id) => {
    return await WorkoutPlanRepository.deleteById(id);
  }
};

export default WorkoutPlanService;
