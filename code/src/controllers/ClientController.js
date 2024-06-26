import ClientService from '../services/ClientService.js';

export async function getClients(req, res) {
  try {
    const clients = await ClientService.getAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getClientById(req, res) {
  const { id } = req.params;
  try {
    const client = await ClientService.getById(id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createClient(req, res) {
  const { name, age, gender } = req.body;
  try {
    const result = await ClientService.create(name, age, gender);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClient(req, res) {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  try {
    const result = await ClientService.update(id, name, age, gender);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteClientById(req, res) {
  const { id } = req.params;
  try {
    const result = await ClientService.deleteById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
