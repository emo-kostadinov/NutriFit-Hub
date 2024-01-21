import NutritionService from '../services/NutritionService.js';

export async function getAllNutritionInfo(req, res) {
  try {
    const nutritionInfo = await NutritionService.getAll();
    res.json(nutritionInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getNutritionById(req, res) {
  const { id } = req.params;
  try {
    const nutrition = await NutritionService.getById(id);
    res.json(nutrition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNutrition(req, res) {
  const { name, calories, protein, carbs, fats } = req.body;
  try {
    const result = await NutritionService.create(name, calories, protein, carbs, fats);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateNutrition(req, res) {
  const { id } = req.params;
  const { name, calories, protein, carbs, fats } = req.body;
  try {
    const result = await NutritionService.update(id, name, calories, protein, carbs, fats);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteNutritionById(req, res) {
  const { id } = req.params;
  try {
    const result = await NutritionService.deleteById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
