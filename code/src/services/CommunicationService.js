import CommunicationRepository from '../repositories/CommunicationRepository.js';

const CommunicationService = {
  getAll: async () => {
    return await CommunicationRepository.getAll();
  },

  getById: async (id) => {
    return await CommunicationRepository.getById(id);
  },

  create: async (sender, receiver, message) => {
    return await CommunicationRepository.create(sender, receiver, message);
  },

  update: async (id, sender, receiver, message) => {
    return await CommunicationRepository.update(id, sender, receiver, message);
  },

  deleteById: async (id) => {
    return await CommunicationRepository.deleteById(id);
  }
};

export default CommunicationService;
