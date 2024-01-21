import ClientRepository from '../repositories/ClientRepository.js';

const ClientService = {
  getAll: async () => {
    return await ClientRepository.getAll();
  },

  getById: async (id) => {
    return await ClientRepository.getById(id);
  },

  create: async (name, age, gender) => {
    return await ClientRepository.create(name, age, gender);
  },

  update: async (id, name, age, gender) => {
    return await ClientRepository.update(id, name, age, gender);
  },

  deleteById: async (id) => {
    return await ClientRepository.deleteById(id);
  }
};

export default ClientService;
