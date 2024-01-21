import CommunicationService from '../services/CommunicationService.js';

export async function getAllMessages(req, res) {
  try {
    const messages = await CommunicationService.getAll();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getMessageById(req, res) {
  const { id } = req.params;
  try {
    const message = await CommunicationService.getById(id);
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createMessage(req, res) {
  const { sender, receiver, message } = req.body;
  try {
    const result = await CommunicationService.create(sender, receiver, message);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateMessage(req, res) {
  const { id } = req.params;
  const { sender, receiver, message } = req.body;
  try {
    const result = await CommunicationService.update(id, sender, receiver, message);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteMessageById(req, res) {
  const { id } = req.params;
  try {
    const result = await CommunicationService.deleteById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
