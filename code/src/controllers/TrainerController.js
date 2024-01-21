import TrainerService from '../services/TrainerService.js';

export async function getTrainers(req, res) {
  try {
    const trainers = await TrainerService.getAll();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getTrainerById(req, res) {
  const { id } = req.params;
  try {
    const trainer = await TrainerService.getById(id);
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createTrainer(req, res) {
  const { name, specialization } = req.body;
  try {
    const result = await TrainerService.create(name, specialization);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateTrainer(req, res) {
  const { id } = req.params;
  const { name, specialization } = req.body;
  try {
    const result = await TrainerService.update(id, name, specialization);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteTrainerById(req, res) {
  const { id } = req.params;
  try {
    const result = await TrainerService.deleteById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
