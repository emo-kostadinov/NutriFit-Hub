import TrainerRepository from '../repositories/TrainerRepository.js';

const TrainerService = {
  getAll: async () => {
    return await TrainerRepository.getAll();
  },

  getById: async (id) => {
    return await TrainerRepository.getById(id);
  },

  create: async (name, specialization) => {
    return await TrainerRepository.create(name, specialization);
  },

  update: async (id, name, specialization) => {
    return await TrainerRepository.update(id, name, specialization);
  },

  deleteById: async (id) => {
    return await TrainerRepository.deleteById(id);
  }
};

export default TrainerService;
